# Diagnostic Alert Context — Service Mode UI Concept

## Live Demo

[Explore the Interactive Prototype](https://diagnostic-alert-context-6xl6.vercel.app)

An independent automotive diagnostic UI concept built with React and TypeScript, featuring priority-first alerts, event timelines, and diagnostic investigation views.

**Note:** This prototype uses synthetic vehicle data and is not affiliated with Tesla.

An **independent, Tesla Service Mode–inspired** UI prototype for prioritizing vehicle diagnostic alerts and preserving the timeline of potential related events. It is **not affiliated with Tesla**, does not use Tesla APIs, and operates on **synthetic data only**.

## What the concept explores

- **Priority-first alert list:** active critical alerts appear before lower-priority alerts.
- **Resolved, but remembered:** original red critical severity is retained; a green check communicates resolution. The event remains in the timeline.
- **Compact chronological timeline:** vehicle start, diagnostic events, and drive end are visualized in time order.
- **Investigation view:** a selected alert opens a more detailed event timeline and signal-history chart.
- **Potentially related events:** nearby events are shown for review, **not labeled as proven causes**.
- **Demo controls:** mark an alert resolved and reset the sample session.

## Stack

- React, TypeScript, Vite, CSS and lucide-react for frontend
- Node.js, Express and JSON fixture data for the example API
- Vitest/React Testing Library for frontend interaction tests; Node test runner for backend tests

## Run locally

Requires Node.js 20+ and npm.

```bash
npm run install:all
npm run dev
```

Open http://localhost:5173. Frontend loads synthetic data from the API when available, and includes an offline fixture fallback. To run tests: `npm test`; to build: `npm run build`.

## Design rationale

The key design choice separates **historical severity** (red Critical) from **current resolution state** (green check). The priority list and timeline have different sorting semantics: urgency versus chronology. The technician starts with what currently needs attention, then explores what happened before and after. Temporal proximity is a cue for review, not proof of causation.

## Implementation and limitations

This is a portfolio proof of concept, not a diagnostic or repair tool. The synthetic dataset, example thresholds and signal visualization are illustrative. The navigation sidebar only illustrates placement within an automotive service workflow. Nothing is deployed to a vehicle. Current implementation does not validate actual Tesla UI compatibility, test vehicle hardware, or analyze genuine fault causality.

## Suggested portfolio summary (use after personally reviewing and validating the implementation)

> Designed an independent automotive diagnostic UI concept featuring severity-first alert prioritization, a chronological event timeline, resolution-state indicators, and a React/TypeScript investigation view. Developed a Node.js/Express mock API and UI tests using AI-assisted coding, then reviewed and refined the implementation.

## Learning

See `LEARNING_GUIDE_TR.md` for a walkthrough of the implementation, code ownership and interview preparation. See `APPLICATION_TEXT_EN.md` for proposed CV and interview language.
