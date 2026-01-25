"""Transcription service with multi-provider support."""

from enum import Enum


class TranscriptionProvider(Enum):
    """Available transcription providers."""
    AZURE = "azure"
    GOOGLE = "google"
    OPENAI = "openai"
    OLLAMA = "ollama"
