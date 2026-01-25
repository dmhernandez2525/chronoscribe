# ChronoScribe Feature Backlog

## Status Legend
| Status | Meaning |
|--------|---------|
| `planned` | Designed, not started |
| `in-progress` | Currently being implemented |
| `complete` | Implemented and tested |
| `deferred` | Postponed to later phase |

---

## Phase 1: Foundation (MVP)

### F1.1 - Watch Folder Monitoring
**Status:** `planned` | **Priority:** P0 | **SDD:** [F1.1-watch-folder.md](sdd/phase-1/F1.1-watch-folder.md)

Monitor `~/ChronoScribe/inbox/` for new files and queue them for processing.

**Requirements:**
- [x] Design complete
- [ ] Implementation
- [ ] Unit tests
- [ ] Integration tests
- [ ] Documentation

**Acceptance Criteria:**
- Files dropped in inbox are detected within 5 seconds
- Debouncing prevents processing incomplete uploads
- Supported formats: PNG, JPG, JPEG, TIFF, BMP, WEBP, HEIC, PDF
- Ignore patterns work (.*,  _*, *.tmp)

---

### F1.2 - Image Preprocessing
**Status:** `planned` | **Priority:** P0 | **SDD:** [F1.2-image-preprocessing.md](sdd/phase-1/F1.2-image-preprocessing.md)

Prepare images for optimal OCR accuracy.

**Requirements:**
- [x] Design complete
- [ ] Implementation
- [ ] Unit tests
- [ ] Integration tests
- [ ] Documentation

**Acceptance Criteria:**
- Auto-rotate based on EXIF data
- Deskew tilted scans (up to 15 degrees)
- Enhance contrast for faded documents
- Detect and crop borders
- Normalize to 300 DPI
- Output format: PNG

---

### F1.3 - Multi-Provider Transcription
**Status:** `planned` | **Priority:** P0 | **SDD:** [F1.3-transcription.md](sdd/phase-1/F1.3-transcription.md)

AI-powered transcription with cascading provider fallback.

**Requirements:**
- [x] Design complete
- [ ] Azure provider
- [ ] Google provider
- [ ] OpenAI provider
- [ ] Ollama provider
- [ ] Fallback logic
- [ ] Usage tracking
- [ ] Unit tests
- [ ] Integration tests

**Acceptance Criteria:**
- Azure Computer Vision as primary (5K free/month)
- Google Cloud Vision as secondary (1K free/month)
- OpenAI GPT-4o for difficult content
- Ollama/LLaVA for fully local processing
- Automatic fallback on failure or quota exhaustion
- Confidence scores per text block
- API usage logged for cost tracking

---

### F1.4 - AI Analysis & Metadata Extraction
**Status:** `planned` | **Priority:** P0 | **SDD:** [F1.4-analysis.md](sdd/phase-1/F1.4-analysis.md)

Document understanding using LLMs.

**Requirements:**
- [x] Design complete
- [ ] Implementation
- [ ] Unit tests
- [ ] Integration tests
- [ ] Documentation

**Acceptance Criteria:**
- Document type classification (sketch, notes, typed, mixed, etc.)
- Date extraction with confidence scores
- 2-3 sentence summary generation
- Entity extraction (people, places, concepts)
- Tag suggestions
- Quality assessment

---

### F1.5 - Clarification System
**Status:** `planned` | **Priority:** P0 | **SDD:** [F1.5-clarification.md](sdd/phase-1/F1.5-clarification.md)

Human-in-the-loop review for uncertain transcriptions.

**Requirements:**
- [x] Design complete
- [ ] Question generation
- [ ] Queue management
- [ ] CLI review interface
- [ ] Update workflow
- [ ] Auto-accept timeout
- [ ] Unit tests
- [ ] Integration tests

**Acceptance Criteria:**
- Detect low-confidence sections (threshold: 0.7)
- Generate specific, contextual questions
- Maximum 5 questions per document
- CLI interface for reviewing and answering
- Update transcription with corrections
- Auto-accept after 7 days (configurable)

---

### F1.6 - Date Detection & Timeline
**Status:** `planned` | **Priority:** P0 | **SDD:** [F1.6-timeline.md](sdd/phase-1/F1.6-timeline.md)

Extract dates and organize chronologically.

**Requirements:**
- [x] Design complete
- [ ] Explicit date parsing
- [ ] EXIF date extraction
- [ ] Filename pattern matching
- [ ] AI date inference
- [ ] Timeline organization
- [ ] Unit tests
- [ ] Integration tests

**Acceptance Criteria:**
- Parse explicit dates in multiple formats
- Extract dates from EXIF metadata
- Match filename patterns (YYYY-MM-DD, etc.)
- AI inference for context-based dates
- Confidence scores for all extracted dates
- Chronological folder organization

---

### F1.7 - Category Classification
**Status:** `planned` | **Priority:** P0 | **SDD:** [F1.7-categorization.md](sdd/phase-1/F1.7-categorization.md)

Automatic document type classification.

**Requirements:**
- [x] Design complete
- [ ] Implementation
- [ ] Default categories
- [ ] Custom category support
- [ ] Unit tests
- [ ] Integration tests

**Acceptance Criteria:**
- Classify into predefined categories
- Support custom categories via config
- Multiple categories per document
- Confidence scores for assignments

---

### F1.8 - Per-Document Folder Generation
**Status:** `planned` | **Priority:** P0 | **SDD:** [F1.8-folder-generation.md](sdd/phase-1/F1.8-folder-generation.md)

Create organized folder structure for each document.

**Requirements:**
- [x] Design complete
- [ ] Implementation
- [ ] Unit tests
- [ ] Integration tests

**Acceptance Criteria:**
- Folder format: `YYYY-MM-DD_type_sequence/`
- Contains: original, normalized, transcription, analysis, metadata
- Undated documents in `archive/undated/`
- Sequence numbers prevent collisions
- Clean naming (no special characters)

---

### F1.9 - SQLite Database & FTS Search
**Status:** `planned` | **Priority:** P0 | **SDD:** [F1.9-database.md](sdd/phase-1/F1.9-database.md)

Persistent storage with full-text search.

**Requirements:**
- [x] Design complete
- [ ] Schema implementation
- [ ] FTS5 indexing
- [ ] Query interface
- [ ] Unit tests
- [ ] Integration tests

**Acceptance Criteria:**
- SQLite database with WAL mode
- FTS5 for full-text search
- Document metadata storage
- Category relationships
- Entity storage
- Clarification queue
- API usage tracking
- Search response < 500ms

---

### F1.10 - CLI Interface
**Status:** `planned` | **Priority:** P0 | **SDD:** [F1.10-cli.md](sdd/phase-1/F1.10-cli.md)

Command-line interface using Click and Rich.

**Requirements:**
- [x] Design complete
- [ ] `chronoscribe init`
- [ ] `chronoscribe watch`
- [ ] `chronoscribe process`
- [ ] `chronoscribe search`
- [ ] `chronoscribe clarify`
- [ ] `chronoscribe timeline`
- [ ] `chronoscribe stats`
- [ ] Unit tests
- [ ] Integration tests

**Acceptance Criteria:**
- All commands documented with --help
- Rich formatting for output
- Progress bars for long operations
- Error messages are clear and actionable
- Exit codes follow conventions

---

## Phase 2: Enhancement

### F2.1 - Batch Import with Progress
**Status:** `planned` | **Priority:** P1

Import multiple files/directories with progress tracking.

**Acceptance Criteria:**
- `chronoscribe import <dir>` processes all files
- Progress bar shows current file and overall progress
- Resume capability after interruption
- Summary report at completion

---

### F2.2 - Export Functions
**Status:** `planned` | **Priority:** P1

Export archive data in multiple formats.

**Acceptance Criteria:**
- Export formats: Markdown, JSON, CSV, HTML
- Filter by date range, category, search query
- Include or exclude images
- Obsidian-compatible Markdown with frontmatter
- Notion-compatible JSON

---

### F2.3 - Provider Failover & Cost Tracking
**Status:** `planned` | **Priority:** P1

Intelligent provider management and cost visibility.

**Acceptance Criteria:**
- Track API usage per provider
- Alert at 80% of free tier
- Automatic failover when limits reached
- Monthly cost reports
- `chronoscribe usage` command

---

### F2.4 - Backup & Restore
**Status:** `planned` | **Priority:** P1

Data protection and recovery.

**Acceptance Criteria:**
- `chronoscribe backup` creates versioned backup
- `chronoscribe restore` recovers from backup
- Incremental backups supported
- Verify backup integrity

---

### F2.5 - Statistics Dashboard (CLI)
**Status:** `planned` | **Priority:** P2

Visual statistics in terminal.

**Acceptance Criteria:**
- Documents by type (bar chart)
- Documents by month (timeline chart)
- Processing success rate
- Storage usage
- API cost breakdown

---

## Phase 3: Advanced

### F3.1 - Web Dashboard (Streamlit)
**Status:** `planned` | **Priority:** P2

Visual web interface.

**Acceptance Criteria:**
- `chronoscribe dashboard` launches Streamlit app
- Browse documents with thumbnails
- Search with filters
- View document details
- Responsive design

---

### F3.2 - Timeline Visualization
**Status:** `planned` | **Priority:** P2

Interactive timeline view.

**Acceptance Criteria:**
- Zoomable timeline (year/month/day)
- Click to view document
- Filter by category
- Visual density indicators

---

### F3.3 - Advanced Search Filters
**Status:** `planned` | **Priority:** P2

Powerful search syntax.

**Acceptance Criteria:**
- Filter operators: type:, date:, category:, tag:
- Boolean operators: AND, OR, NOT
- Date ranges: date:2019-01..2019-06
- Saved searches
- Search suggestions

---

### F3.4 - Project Linking
**Status:** `planned` | **Priority:** P2

Group related documents.

**Acceptance Criteria:**
- Create named projects
- Link documents to projects
- View by project
- Project timeline view

---

## Phase 4: Polish

### F4.1 - Custom Category Taxonomies
**Status:** `planned` | **Priority:** P2

User-defined organization.

**Acceptance Criteria:**
- Create custom categories
- Hierarchical categories
- Bulk recategorization
- Category merge/split

---

### F4.2 - Handwriting Style Learning
**Status:** `planned` | **Priority:** P2

Improve accuracy over time.

**Acceptance Criteria:**
- Track user corrections
- Build personal dictionary
- Adjust confidence thresholds
- Suggest common corrections

---

### F4.3 - Mobile Companion App
**Status:** `planned` | **Priority:** P3

Capture documents on mobile.

**Acceptance Criteria:**
- iOS/Android app
- Camera capture with edge detection
- Sync to ChronoScribe inbox
- Basic review on mobile

---

## Backlog (Unscheduled)

These features are under consideration but not yet scheduled:

| Feature | Description | Notes |
|---------|-------------|-------|
| Multi-language support | OCR and UI in multiple languages | Depends on provider capabilities |
| Collaboration | Share archives between users | Requires sync infrastructure |
| Cloud sync | Optional encrypted cloud backup | Privacy-first design needed |
| API server | REST API for third-party integration | Phase 3+ |
| Plugin system | Extensible architecture | Significant effort |
| Voice notes | Transcribe audio recordings | Different processing pipeline |
| Email integration | Auto-import email attachments | Scope creep risk |

---

## Feature Request Process

To request a new feature:
1. Check if it exists in this backlog
2. If not, describe the use case and expected behavior
3. Features are prioritized based on:
   - Alignment with core value proposition
   - User impact
   - Implementation complexity
   - Maintenance burden
