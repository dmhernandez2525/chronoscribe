# ChronoScribe Roadmap

## Version Strategy

| Version | Phase | Focus |
|---------|-------|-------|
| 0.1.0 | Phase 1 | Foundation MVP - Core processing pipeline |
| 0.2.0 | Phase 2 | Enhancement - Batch processing, exports, cost tracking |
| 0.3.0 | Phase 3 | Advanced - Web dashboard, visualization |
| 1.0.0 | Phase 4 | Polish - Custom taxonomies, learning, mobile |

---

## Phase 1: Foundation (MVP)
**Target Version: 0.1.0**

### Milestone 1.1: Core Infrastructure
**Goal:** Basic project structure and configuration

| Task | Feature | Status |
|------|---------|--------|
| Project scaffolding | - | Complete |
| Configuration system | - | Planned |
| Logging setup | - | Planned |
| Database schema | F1.9 | Planned |

**Deliverables:**
- [ ] Working `chronoscribe init` command
- [ ] Configuration file loading
- [ ] SQLite database creation
- [ ] Basic logging

### Milestone 1.2: File Processing Pipeline
**Goal:** End-to-end document processing

| Task | Feature | Status |
|------|---------|--------|
| File watcher | F1.1 | Planned |
| Image preprocessing | F1.2 | Planned |
| Multi-provider transcription | F1.3 | Planned |
| Folder generation | F1.8 | Planned |

**Deliverables:**
- [ ] Watch folder monitoring
- [ ] Image enhancement pipeline
- [ ] Azure transcription provider
- [ ] Google transcription provider
- [ ] Per-document folder structure

### Milestone 1.3: Intelligence Layer
**Goal:** AI-powered document understanding

| Task | Feature | Status |
|------|---------|--------|
| Document analysis | F1.4 | Planned |
| Clarification system | F1.5 | Planned |
| Date extraction | F1.6 | Planned |
| Categorization | F1.7 | Planned |

**Deliverables:**
- [ ] Document type classification
- [ ] Date extraction and timeline placement
- [ ] Clarification question generation
- [ ] Category assignment

### Milestone 1.4: User Interface
**Goal:** Complete CLI for all operations

| Task | Feature | Status |
|------|---------|--------|
| CLI commands | F1.10 | Planned |
| Search functionality | F1.9 | Planned |
| Clarification review | F1.5 | Planned |

**Deliverables:**
- [ ] `chronoscribe watch` - Start file watcher
- [ ] `chronoscribe process <file>` - Process single file
- [ ] `chronoscribe search <query>` - Full-text search
- [ ] `chronoscribe clarify` - Review pending clarifications
- [ ] `chronoscribe timeline` - View chronological list
- [ ] `chronoscribe stats` - Show statistics

### Phase 1 Completion Criteria
- [ ] Process a document from inbox to archive automatically
- [ ] Transcription accuracy >85% for clear handwriting
- [ ] Clarification questions generated for uncertain text
- [ ] Documents organized by extracted date
- [ ] Full-text search returns relevant results
- [ ] All commands work without errors

---

## Phase 2: Enhancement
**Target Version: 0.2.0**

### Milestone 2.1: Batch Processing
**Goal:** Efficient bulk imports

| Task | Feature | Status |
|------|---------|--------|
| Batch import command | F2.1 | Planned |
| Progress tracking | F2.1 | Planned |
| Resume capability | F2.1 | Planned |

**Deliverables:**
- [ ] `chronoscribe import <dir>` with progress bar
- [ ] Parallel preprocessing
- [ ] Resumable batch operations

### Milestone 2.2: Export & Backup
**Goal:** Data portability

| Task | Feature | Status |
|------|---------|--------|
| Export formats | F2.2 | Planned |
| Backup system | F2.4 | Planned |
| Restore capability | F2.4 | Planned |

**Deliverables:**
- [ ] Export to Markdown, JSON, CSV, HTML
- [ ] Database backup with versioning
- [ ] Archive restore command

### Milestone 2.3: Cost Management
**Goal:** Intelligent provider usage

| Task | Feature | Status |
|------|---------|--------|
| Usage tracking | F2.3 | Planned |
| Provider failover | F2.3 | Planned |
| Cost alerts | F2.3 | Planned |

**Deliverables:**
- [ ] API usage dashboard in CLI
- [ ] Automatic provider switching at limits
- [ ] Monthly cost reports

### Milestone 2.4: Statistics Dashboard
**Goal:** Insights into archive

| Task | Feature | Status |
|------|---------|--------|
| Statistics CLI | F2.5 | Planned |
| Charts (Rich) | F2.5 | Planned |

**Deliverables:**
- [ ] `chronoscribe stats` with visual charts
- [ ] Documents by type, date, category
- [ ] Processing success rates

---

## Phase 3: Advanced
**Target Version: 0.3.0**

### Milestone 3.1: Web Dashboard
**Goal:** Visual interface

| Task | Feature | Status |
|------|---------|--------|
| Streamlit app | F3.1 | Planned |
| Document browser | F3.1 | Planned |
| Search interface | F3.1 | Planned |

**Deliverables:**
- [ ] `chronoscribe dashboard` launches web UI
- [ ] Browse documents with thumbnails
- [ ] Visual search with filters

### Milestone 3.2: Timeline Visualization
**Goal:** Chronological exploration

| Task | Feature | Status |
|------|---------|--------|
| Timeline view | F3.2 | Planned |
| Date range filtering | F3.2 | Planned |
| Zoom levels | F3.2 | Planned |

**Deliverables:**
- [ ] Interactive timeline in web UI
- [ ] Year/month/day zoom levels
- [ ] Click to view document details

### Milestone 3.3: Advanced Search
**Goal:** Powerful query capabilities

| Task | Feature | Status |
|------|---------|--------|
| Filter operators | F3.3 | Planned |
| Saved searches | F3.3 | Planned |
| Search suggestions | F3.3 | Planned |

**Deliverables:**
- [ ] `type:invention date:2019 solar` query syntax
- [ ] Save and name frequent searches
- [ ] Auto-complete suggestions

### Milestone 3.4: Project Linking
**Goal:** Document relationships

| Task | Feature | Status |
|------|---------|--------|
| Project creation | F3.4 | Planned |
| Document linking | F3.4 | Planned |
| Project views | F3.4 | Planned |

**Deliverables:**
- [ ] Create named projects
- [ ] Link related documents
- [ ] View documents by project

---

## Phase 4: Polish
**Target Version: 1.0.0**

### Milestone 4.1: Custom Taxonomies
**Goal:** User-defined organization

| Task | Feature | Status |
|------|---------|--------|
| Custom categories | F4.1 | Planned |
| Category hierarchy | F4.1 | Planned |
| Bulk recategorize | F4.1 | Planned |

### Milestone 4.2: Learning System
**Goal:** Improve over time

| Task | Feature | Status |
|------|---------|--------|
| Correction tracking | F4.2 | Planned |
| Pattern learning | F4.2 | Planned |
| Personal dictionary | F4.2 | Planned |

### Milestone 4.3: Mobile Companion
**Goal:** Capture anywhere

| Task | Feature | Status |
|------|---------|--------|
| Mobile app spec | F4.3 | Planned |
| Sync protocol | F4.3 | Planned |

---

## Research & Competitive Insights Applied

Based on the competitive analysis, these insights inform the roadmap:

### Phase 1 Priority Adjustments
1. **Clarification system is MVP-critical** — No competitor does this well
2. **Multi-provider with free tiers** — Azure 500 + Google 1000 = 1500 free/month
3. **Local-first architecture** — Privacy is a key differentiator

### Phase 2 Additions
1. **Obsidian/Notion export** — PKM integration requested by users
2. **Cost tracking dashboard** — Users want visibility into API usage

### Phase 3 Considerations
1. **Timeline visualization** — Unique feature, high impact
2. **Web dashboard with Streamlit** — Low effort, high polish

### Deferred to Phase 4+
1. **Custom model training** — Complex, Transkribus requires 5K+ words
2. **Mobile app** — Significant effort, can use workarounds initially

---

## Success Metrics

### Phase 1 (MVP)
| Metric | Target |
|--------|--------|
| Typed text accuracy | 98%+ |
| Handwritten accuracy | 85%+ |
| Processing time | < 30s/page |
| Search latency | < 500ms |

### Phase 2 (Enhancement)
| Metric | Target |
|--------|--------|
| Batch import speed | 100 docs/hour |
| Free tier utilization | > 90% |
| Export completeness | 100% data preserved |

### Phase 3 (Advanced)
| Metric | Target |
|--------|--------|
| Dashboard response | < 2s page load |
| Search relevance | Top result correct > 80% |

### Phase 4 (Polish)
| Metric | Target |
|--------|--------|
| Learning improvement | +5% accuracy after 100 corrections |
| User satisfaction | NPS > 50 |

---

## Timeline Estimates

> **Note:** No specific dates. Progress depends on available development time.

| Phase | Relative Effort |
|-------|-----------------|
| Phase 1 | Largest (foundation) |
| Phase 2 | Medium |
| Phase 3 | Medium |
| Phase 4 | Ongoing |

---

## Next Steps

1. Complete Phase 1 Milestone 1.1 (Core Infrastructure)
2. Implement file watcher and preprocessing
3. Integrate first transcription provider (Azure)
4. Build clarification system
5. Complete CLI interface

See [FEATURE_BACKLOG.md](FEATURE_BACKLOG.md) for detailed feature specifications.
See [WORK_STATUS.md](../roadmap/WORK_STATUS.md) for current sprint status.
