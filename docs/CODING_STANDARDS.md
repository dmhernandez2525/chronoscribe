# ChronoScribe Coding Standards

## Python Style Guide

ChronoScribe follows PEP 8 with specific conventions for this project.

### General Rules

1. **Python Version**: 3.11+ (use modern features)
2. **Line Length**: 100 characters maximum
3. **Indentation**: 4 spaces (no tabs)
4. **Quotes**: Double quotes for strings, single quotes for dict keys

### Type Hints

Type hints are **required** for all function signatures:

```python
# Good
def process_document(file_path: Path, options: ProcessingOptions) -> Document:
    ...

# Bad
def process_document(file_path, options):
    ...
```

Use modern type hint syntax (Python 3.10+):

```python
# Good
def get_dates(doc: Document) -> list[ExtractedDate]:
    ...

def find_document(doc_id: str) -> Document | None:
    ...

# Avoid (legacy syntax)
from typing import List, Optional
def get_dates(doc: Document) -> List[ExtractedDate]:
    ...
```

### Imports

Order imports as follows:
1. Standard library
2. Third-party packages
3. Local imports

```python
# Standard library
import logging
from dataclasses import dataclass
from pathlib import Path

# Third-party
import click
from rich.console import Console
from pydantic import BaseModel

# Local
from chronoscribe.core.pipeline import Pipeline
from chronoscribe.services.transcription import TranscriptionResult
```

Use `ruff` for automatic import sorting.

### Logging

**Never use `print()` for output.** Use the logging module:

```python
import logging

logger = logging.getLogger(__name__)

# Good
logger.info("Processing document", extra={"doc_id": doc.id, "file": str(path)})
logger.warning("Low confidence transcription", extra={"confidence": 0.65})
logger.error("Transcription failed", exc_info=True)

# Bad
print(f"Processing {doc.id}")
print("Error:", e)
```

### Data Classes

Use `dataclasses` or `Pydantic` for structured data:

```python
from dataclasses import dataclass, field
from datetime import datetime
from pathlib import Path

@dataclass
class Document:
    id: str
    original_filename: str
    archive_path: Path
    processed_at: datetime
    document_type: str
    summary: str | None = None
    tags: list[str] = field(default_factory=list)
```

For configuration and validated data, use Pydantic:

```python
from pydantic import BaseModel, Field

class TranscriptionConfig(BaseModel):
    provider: str
    confidence_threshold: float = Field(ge=0.0, le=1.0, default=0.7)
    max_retries: int = Field(ge=0, default=3)
```

### Async/Await

Use async for I/O-bound operations:

```python
import httpx

async def transcribe_with_azure(image_path: Path) -> TranscriptionResult:
    async with httpx.AsyncClient() as client:
        response = await client.post(
            f"{endpoint}/vision/v3.2/read/analyze",
            headers={"Ocp-Apim-Subscription-Key": api_key},
            content=image_path.read_bytes(),
        )
        response.raise_for_status()
        # ... process response
```

### Exception Handling

Always specify exception types:

```python
# Good
try:
    result = await transcribe(image_path)
except httpx.HTTPStatusError as e:
    logger.error("API request failed", extra={"status": e.response.status_code})
    raise TranscriptionError(f"API returned {e.response.status_code}") from e
except httpx.RequestError as e:
    logger.error("Network error", exc_info=True)
    raise TranscriptionError("Network error during transcription") from e

# Bad
try:
    result = await transcribe(image_path)
except:  # Never use bare except
    pass
```

Define custom exceptions for the domain:

```python
class ChronoScribeError(Exception):
    """Base exception for ChronoScribe."""
    pass

class TranscriptionError(ChronoScribeError):
    """Error during transcription."""
    pass

class ConfigurationError(ChronoScribeError):
    """Invalid configuration."""
    pass
```

### Context Managers

Use context managers for resource management:

```python
# Good
async with httpx.AsyncClient() as client:
    response = await client.get(url)

with open(path, "r") as f:
    content = f.read()

# For database connections
async with db.transaction():
    await db.insert(document)
    await db.update_index(document)
```

### Docstrings

Document public functions with clear docstrings:

```python
async def process_document(
    file_path: Path,
    options: ProcessingOptions | None = None,
) -> Document:
    """
    Process a document through the full pipeline.

    Args:
        file_path: Path to the document file (image or PDF).
        options: Processing options. Uses defaults if not provided.

    Returns:
        The processed Document with transcription and metadata.

    Raises:
        FileNotFoundError: If the file does not exist.
        UnsupportedFormatError: If the file format is not supported.
        TranscriptionError: If transcription fails after all retries.
    """
    ...
```

### Testing

#### Test File Structure

```
tests/
├── unit/
│   ├── test_preprocessor.py
│   ├── test_transcription.py
│   └── services/
│       └── test_azure_provider.py
├── integration/
│   ├── test_pipeline.py
│   └── test_database.py
└── fixtures/
    ├── sample_images/
    └── mock_responses/
```

#### Test Naming

```python
# Good - descriptive test names
def test_preprocessor_rotates_image_based_on_exif():
    ...

def test_transcription_falls_back_to_google_when_azure_fails():
    ...

def test_clarification_generates_questions_for_low_confidence_text():
    ...

# Bad - vague names
def test_preprocessor():
    ...

def test_transcription_1():
    ...
```

#### Use Fixtures

```python
import pytest
from pathlib import Path

@pytest.fixture
def sample_image_path(tmp_path: Path) -> Path:
    """Create a sample image for testing."""
    image_path = tmp_path / "test.png"
    # Create test image...
    return image_path

@pytest.fixture
def mock_azure_response() -> dict:
    """Mock Azure OCR response."""
    return {
        "status": "succeeded",
        "analyzeResult": {
            "readResults": [...]
        }
    }

def test_azure_transcription(sample_image_path, mock_azure_response, mocker):
    mocker.patch("httpx.AsyncClient.post", return_value=mock_azure_response)
    # Test...
```

#### Async Tests

```python
import pytest

@pytest.mark.asyncio
async def test_transcription_returns_result():
    result = await transcribe(sample_path)
    assert result.text is not None
    assert result.confidence >= 0.0
```

### Patterns to Avoid

```python
# ❌ Never do these:

print("Debug info")                    # Use logger.debug()
except:                                # Specify exception type
from typing import Any                 # Use specific types
# type: ignore                         # Fix the type error
import *                               # Explicit imports only
global my_var                          # Pass as parameter
eval(user_input)                       # Security risk
os.system(cmd)                         # Use subprocess
```

### Code Organization

Each module should have:
- Clear single responsibility
- Type hints for all functions
- Docstrings for public functions
- Associated test file

```
src/chronoscribe/services/transcription/azure.py
tests/unit/services/test_azure_provider.py
```

### CLI Output

Use Rich for formatted CLI output:

```python
from rich.console import Console
from rich.table import Table
from rich.progress import Progress

console = Console()

# Status messages
console.print("[green]✓[/green] Document processed successfully")
console.print("[yellow]![/yellow] Low confidence transcription")
console.print("[red]✗[/red] Processing failed")

# Tables
table = Table(title="Recent Documents")
table.add_column("Date", style="cyan")
table.add_column("Type", style="green")
table.add_column("Summary")
console.print(table)

# Progress bars
with Progress() as progress:
    task = progress.add_task("Processing...", total=100)
    for i in range(100):
        progress.update(task, advance=1)
```

### Git Commit Messages

Follow conventional commits:

```
feat: add Azure transcription provider
fix: handle missing EXIF data in preprocessing
docs: update API configuration guide
test: add integration tests for pipeline
refactor: extract date parsing to separate module
```

### Pre-commit Hooks

The project uses pre-commit for automated checks:

```yaml
# .pre-commit-config.yaml
repos:
  - repo: https://github.com/astral-sh/ruff-pre-commit
    rev: v0.1.0
    hooks:
      - id: ruff
        args: [--fix]
      - id: ruff-format
  - repo: https://github.com/pre-commit/mirrors-mypy
    rev: v1.7.0
    hooks:
      - id: mypy
        additional_dependencies: [pydantic]
```

Run manually:
```bash
pre-commit run --all-files
```
