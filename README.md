# News-XP Orchestrator

Next-generation news aggregation and presentation engine with real-time data orchestration.

## Tech Stack
- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- React Router v7
- Lucide React (icons)

## Quick Start

```bash
npm install
npm run dev
```

The app opens at http://localhost:5173 by default.

## Architecture

**News-XP** is a real-time news platform built around three core concepts:

1. **Feed Page** (`/`): Real-time aggregated content from multiple sources, orchestrated and displayed with dynamic layouts.
2. **Pipeline Orchestrator** (`/pipeline`): Manage data sources, filter rules, content enhancement, and distribution workflows.
3. **Content Analytics** (`/analytics`): Track engagement metrics, trending topics, and audience insights.

### Directory Structure

```
src/
  components/    # Reusable UI components (feed cards, source managers, etc.)
  pages/         # Route-level components
  lib/           # Utilities (API clients, data transformers, hooks)
  styles/        # Global styles (Tailwind config)
public/          # Static assets
```

## Emergent.sh Origin

- **News Aggregation Platform** (EMT-001): Build a distributed news orchestration engine with real-time feed processing, source management, and creative UI components for content presentation.

## Next Steps

- [ ] Implement real-time feed integration (WebSocket or polling)
- [ ] Build source management UI with add/edit/delete workflows
- [ ] Create content curation rules engine
- [ ] Add full-text search and advanced filtering
- [ ] Develop analytics dashboard with charts and metrics
- [ ] Implement multi-layout rendering for different content types
- [ ] Add user preferences and personalization
