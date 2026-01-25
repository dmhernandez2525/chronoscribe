# ChronoScribe

**Transform your handwritten legacy into a searchable digital archive.**

ChronoScribe is a local-first document digitization tool that uses AI to transcribe handwritten and typed documents, automatically organizes them chronologically, and features a human-in-the-loop clarification system for uncertain text.

## Features

- **Intelligent Transcription** — Multi-provider AI-powered handwriting recognition (Azure, Google, OpenAI, Ollama)
- **Clarification System** — AI identifies ambiguous content and queues questions for human review
- **Chronological Organization** — Automatic timeline placement based on document dates
- **Smart Categorization** — Auto-classification of document types (sketch, notes, typed, mixed)
- **Local-First Processing** — All processing happens locally by default, no cloud dependencies required
- **Cost-Optimized AI** — Leverages free tiers (Azure 5K/month, Google 1K/month) with intelligent fallback

## Installation

```bash
# Clone the repository
git clone https://github.com/dmhernandez2525/chronoscribe.git
cd chronoscribe

# Create virtual environment
python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate

# Install with all AI providers
pip install -e ".[all-providers,dev]"

# Or install with specific providers only
pip install -e ".[azure,dev]"
```

## Quick Start

```bash
# Initialize ChronoScribe (creates ~/ChronoScribe directory)
chronoscribe init

# Start watching for new documents
chronoscribe watch

# Process a single file
chronoscribe process ~/Documents/scan.jpg

# Search your archive
chronoscribe search "invention sketch"

# Review pending clarifications
chronoscribe clarify

# View your timeline
chronoscribe timeline
```

## Configuration

Copy the example config and add your API keys:

```bash
cp config/config.example.yaml ~/ChronoScribe/config/config.yaml
cp config/.env.example ~/ChronoScribe/config/.env
```

Edit `~/ChronoScribe/config/.env` with your API keys:

```bash
AZURE_VISION_ENDPOINT=https://your-resource.cognitiveservices.azure.com
AZURE_VISION_KEY=your-api-key
GOOGLE_APPLICATION_CREDENTIALS=/path/to/credentials.json
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...
```

## Directory Structure

After initialization, ChronoScribe creates:

```
~/ChronoScribe/
├── inbox/           # Drop scans here (watched folder)
├── archive/         # Organized output (by date)
│   └── YYYY/MM/YYYY-MM-DD_type_001/
├── clarifications/  # Pending human review
├── data/            # SQLite database
├── config/          # Configuration files
└── logs/            # Processing logs
```

## Development

```bash
# Install dev dependencies
pip install -e ".[dev]"

# Run tests
pytest

# Run with coverage
pytest --cov=chronoscribe --cov-report=html

# Type checking
mypy src/chronoscribe

# Linting
ruff check src/
```

## Documentation

- [Architecture](docs/ARCHITECTURE.md)
- [Roadmap](docs/ROADMAP.md)
- [Feature Backlog](docs/FEATURE_BACKLOG.md)
- [Coding Standards](docs/CODING_STANDARDS.md)

## License

MIT License - see [LICENSE](LICENSE) for details.
