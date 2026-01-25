# ChronoScribe Documentation

## Overview

ChronoScribe is a local-first document digitization tool that transforms handwritten and typed documents into searchable digital archives with AI-powered transcription and chronological organization.

## Documentation Index

### Architecture & Design
- [Architecture Overview](ARCHITECTURE.md) - System components, data flow, and technical decisions
- [Coding Standards](CODING_STANDARDS.md) - Python style guide and development practices

### Planning & Progress
- [Roadmap](ROADMAP.md) - Phase-by-phase implementation plan with milestones
- [Feature Backlog](FEATURE_BACKLOG.md) - Complete feature list with status tracking

### Software Design Documents (SDDs)

#### Phase 1: Foundation (MVP)
| Feature ID | Name | Status |
|------------|------|--------|
| [F1.1](sdd/phase-1/F1.1-watch-folder.md) | Watch Folder Monitoring | Planned |
| [F1.2](sdd/phase-1/F1.2-image-preprocessing.md) | Image Preprocessing | Planned |
| [F1.3](sdd/phase-1/F1.3-transcription.md) | Multi-Provider Transcription | Planned |
| [F1.4](sdd/phase-1/F1.4-analysis.md) | AI Analysis & Metadata | Planned |
| [F1.5](sdd/phase-1/F1.5-clarification.md) | Clarification System | Planned |
| [F1.6](sdd/phase-1/F1.6-timeline.md) | Date Detection & Timeline | Planned |
| [F1.7](sdd/phase-1/F1.7-categorization.md) | Category Classification | Planned |
| [F1.8](sdd/phase-1/F1.8-folder-generation.md) | Per-Document Folder Generation | Planned |
| [F1.9](sdd/phase-1/F1.9-database.md) | SQLite Database & FTS Search | Planned |
| [F1.10](sdd/phase-1/F1.10-cli.md) | CLI Interface | Planned |

#### Phase 2: Enhancement
| Feature ID | Name | Status |
|------------|------|--------|
| F2.1 | Batch Import with Progress | Planned |
| F2.2 | Export Functions | Planned |
| F2.3 | Provider Failover & Cost Tracking | Planned |
| F2.4 | Backup & Restore | Planned |
| F2.5 | Statistics Dashboard (CLI) | Planned |

#### Phase 3: Advanced
| Feature ID | Name | Status |
|------------|------|--------|
| F3.1 | Web Dashboard (Streamlit) | Planned |
| F3.2 | Timeline Visualization | Planned |
| F3.3 | Advanced Search Filters | Planned |
| F3.4 | Project Linking | Planned |

### Work Tracking
- [Work Status](../roadmap/WORK_STATUS.md) - Current sprint status and active work
- [Agent Logs](../roadmap/AGENT_LOGS/) - Session-by-session development logs

## Quick Links

### For Users
- [README](../README.md) - Getting started guide
- [Configuration](../config/config.example.yaml) - Configuration reference

### For Developers
- [Contributing Guidelines](CONTRIBUTING.md) - How to contribute (coming soon)
- [Testing Guide](TESTING.md) - How to write and run tests (coming soon)

## Project Metrics Targets

| Metric | Target |
|--------|--------|
| Transcription Accuracy (Typed) | 98%+ |
| Transcription Accuracy (Handwritten) | 85%+ |
| Processing Speed | < 30 seconds per page |
| Search Response Time | < 500ms |
| Test Coverage | 80%+ |
