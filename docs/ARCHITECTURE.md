# ChronoScribe Architecture

## Overview

ChronoScribe follows a layered architecture with clear separation between input handling, processing, output generation, and storage. The system is designed for local-first operation with optional cloud provider integration.

## System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              CHRONOSCRIBE                                    │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌───────────┐ │
│  │   INPUT     │     │  PROCESSOR  │     │   OUTPUT    │     │  STORAGE  │ │
│  │   LAYER     │────▶│   LAYER     │────▶│   LAYER     │────▶│   LAYER   │ │
│  └─────────────┘     └─────────────┘     └─────────────┘     └───────────┘ │
│        │                   │                   │                   │        │
│        ▼                   ▼                   ▼                   ▼        │
│  ┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌───────────┐ │
│  │ Watch Folder│     │ AI Pipeline │     │ Folder Gen  │     │  SQLite   │ │
│  │ Manual Drop │     │ Clarify Q's │     │ Timeline    │     │  Search   │ │
│  │ Batch Import│     │ Categorize  │     │ Metadata    │     │  Index    │ │
│  └─────────────┘     └─────────────┘     └─────────────┘     └───────────┘ │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Layer Responsibilities

### Input Layer
Handles all document ingestion methods:
- **File Watcher**: Monitors `~/ChronoScribe/inbox/` using watchdog
- **Manual Processing**: Single file processing via CLI
- **Batch Import**: Directory scanning for bulk imports

### Processor Layer
Core document processing pipeline:
- **Image Preprocessor**: Normalize, enhance, and prepare images
- **Transcription Engine**: Multi-provider OCR with fallback
- **Analysis Engine**: Document classification and metadata extraction
- **Clarification Manager**: Human-in-the-loop review system

### Output Layer
Generates organized artifacts:
- **Folder Generator**: Creates per-document folder structure
- **Timeline Service**: Chronological organization
- **Export Service**: Multiple output formats (MD, JSON, CSV, HTML)

### Storage Layer
Persistent data management:
- **SQLite Database**: Document metadata and relationships
- **FTS5 Index**: Full-text search capability
- **File System**: Organized archive structure

## Component Details

### 1. File Watcher (`core/watcher.py`)

```python
class FileWatcher:
    """
    Monitors inbox directory for new files.

    Features:
    - Debouncing (waits for file write completion)
    - Extension filtering
    - Ignore patterns (.*, _*, *.tmp)
    - Queue management
    """
```

**Flow:**
1. Detect file creation/modification in inbox
2. Wait for debounce period (file write completion)
3. Validate file extension
4. Add to processing queue
5. Trigger pipeline

### 2. Image Preprocessor (`core/preprocessor.py`)

```python
class ImagePreprocessor:
    """
    Prepares images for optimal OCR accuracy.

    Operations:
    - EXIF-based auto-rotation
    - Deskew correction (Hough transform)
    - Contrast enhancement (CLAHE)
    - Border detection and cropping
    - Noise reduction (bilateral filter)
    - DPI normalization (target: 300)
    """
```

**Processing Pipeline:**
```
Input Image → Rotate → Deskew → Enhance → Crop → Denoise → Normalize → Output
```

### 3. Transcription Engine (`services/transcription/`)

Multi-provider architecture with intelligent fallback:

```
┌─────────────────────────────────────────────────────────────┐
│                    TRANSCRIPTION ENGINE                      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────┐   ┌─────────┐   ┌─────────┐   ┌─────────┐    │
│  │  Azure  │──▶│ Google  │──▶│ OpenAI  │──▶│ Ollama  │    │
│  │  (5K)   │   │  (1K)   │   │  (Paid) │   │ (Local) │    │
│  └─────────┘   └─────────┘   └─────────┘   └─────────┘    │
│       │             │             │             │          │
│       └─────────────┴─────────────┴─────────────┘          │
│                         │                                   │
│                         ▼                                   │
│               ┌─────────────────┐                          │
│               │ TranscriptionResult │                       │
│               │ - text              │                       │
│               │ - confidence        │                       │
│               │ - blocks[]          │                       │
│               └─────────────────┘                          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Provider Selection Logic:**
1. Check provider is enabled in config
2. Check remaining free tier quota
3. Attempt transcription
4. On failure, try next provider
5. Track usage for cost management

### 4. Analysis Engine (`services/analysis.py`)

Uses Claude/GPT for document understanding:

```python
@dataclass
class AnalysisResult:
    document_type: str
    document_type_confidence: float
    dates: list[ExtractedDate]
    primary_date: date | None
    summary: str
    entities: EntityCollection
    suggested_tags: list[str]
    quality: QualityAssessment
    language: str
```

### 5. Clarification Manager (`services/clarification.py`)

```
┌─────────────────────────────────────────────────────────────┐
│                  CLARIFICATION WORKFLOW                      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Transcription ──▶ Analyze Confidence ──▶ Generate Questions │
│                           │                      │          │
│                           ▼                      ▼          │
│                    High Confidence         Queue for Review  │
│                    (Accept as-is)               │           │
│                                                 ▼           │
│                                          Human Review       │
│                                          (CLI Interface)    │
│                                                 │           │
│                                                 ▼           │
│                                          Update Document    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Question Types:**
- Word clarification (single uncertain words)
- Section clarification (longer unclear sections)
- Missing context (illegible sections)

### 6. Timeline Service (`services/timeline.py`)

Date extraction priority:
1. Explicit dates in document content
2. EXIF metadata from image files
3. Filename patterns (YYYY-MM-DD, etc.)
4. AI-inferred dates from context

```python
@dataclass
class ExtractedDate:
    value: date
    source: Literal["explicit", "exif", "filename", "inferred"]
    context: str
    confidence: float
```

### 7. Folder Generator (`storage/folder_generator.py`)

Creates organized per-document folders:

```
archive/
└── 2019/
    └── 03/
        └── 2019-03-15_invention_001/
            ├── original.jpg          # Original scan
            ├── normalized.png        # Preprocessed image
            ├── transcription.txt     # Plain text transcription
            ├── transcription.md      # Markdown with formatting
            ├── analysis.json         # Full analysis results
            ├── metadata.json         # Document metadata
            └── summary.txt           # 2-3 sentence summary
```

**Naming Convention:**
- `YYYY-MM-DD_type_sequence/`
- Undated documents go to `archive/undated/`
- Sequence number prevents collisions

### 8. Database Manager (`storage/database.py`)

SQLite with FTS5 for full-text search:

```sql
-- Core tables
documents          -- Document metadata
documents_fts      -- Full-text search index
categories         -- Category hierarchy
document_categories -- Many-to-many relationship
entities           -- Extracted entities
clarifications     -- Review queue
processing_queue   -- Pending items
api_usage          -- Cost tracking
```

## Data Flow

### Document Processing Flow

```
1. File Detected (inbox/)
         │
         ▼
2. Queue for Processing
         │
         ▼
3. Move to processing/
         │
         ▼
4. Preprocess Image
   - Rotate, deskew, enhance
         │
         ▼
5. Transcribe (multi-provider)
   - Try Azure → Google → OpenAI → Ollama
         │
         ▼
6. Analyze Document
   - Type, date, summary, entities
         │
         ▼
7. Generate Clarifications (if needed)
   - Queue low-confidence sections
         │
         ▼
8. Generate Folder Structure
   - Create archive/YYYY/MM/date_type_seq/
         │
         ▼
9. Update Database
   - Insert document, update FTS index
         │
         ▼
10. Move to Archive
    - Remove from processing/
```

### Search Flow

```
User Query
    │
    ▼
Parse Query
    │
    ▼
FTS5 Search (documents_fts)
    │
    ▼
Join with documents table
    │
    ▼
Apply filters (date, type, category)
    │
    ▼
Return ranked results with snippets
```

## Configuration

### Environment Variables
- `AZURE_VISION_ENDPOINT`, `AZURE_VISION_KEY`
- `GOOGLE_APPLICATION_CREDENTIALS`
- `OPENAI_API_KEY`
- `ANTHROPIC_API_KEY`
- `OLLAMA_ENDPOINT`

### Configuration File (`config.yaml`)
- Provider priorities and limits
- Preprocessing options
- Confidence thresholds
- Category definitions
- Logging settings

## Error Handling

### Retry Strategy
- Transient API errors: Exponential backoff (3 retries)
- Provider failures: Automatic fallback to next provider
- Processing failures: Move to error queue with error details

### Error States
- `pending` → `processing` → `completed`
- `pending` → `processing` → `failed`
- Failed items can be requeued manually

## Performance Considerations

### Targets
| Metric | Target |
|--------|--------|
| Processing time per page | < 30 seconds |
| Search response time | < 500ms |
| Memory usage | < 500MB |
| Concurrent processing | 1 (sequential for MVP) |

### Optimization Opportunities (Future)
- Parallel preprocessing
- Batch API calls where supported
- Caching of common queries
- Background processing queue

## Security

### Local-First Design
- All processing can happen locally (Ollama fallback)
- No mandatory cloud dependencies
- User controls what goes to cloud providers

### API Key Management
- Keys stored in `.env` file (gitignored)
- Never logged or transmitted unnecessarily
- Config validation warns about missing keys

### Data Privacy
- Original files remain on local disk
- Cloud APIs receive only image data for transcription
- No telemetry or usage data collection
