# Diagnostic Alert Context — Service Mode UI Concept

## Live Demo

[Explore the Interactive Prototype](https://diagnostic-alert-context-6xl6.vercel.app)

An independent automotive diagnostic UI prototype inspired by Tesla Service Mode. Built with React and TypeScript, it explores priority-first alerts, historical event context, and interactive diagnostic investigation workflows using synthetic vehicle data.

**Disclaimer:** This project is not affiliated with Tesla and does not use Tesla APIs or real vehicle data.

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
### Inspiration

The idea behind this project was inspired by how symptoms are investigated in the human body. The most noticeable symptom is not always the underlying cause of a problem. Understanding it often requires looking at earlier signs, their timing, and how different events might be connected.

I wanted to explore whether a similar approach could improve vehicle diagnostic investigations. Rather than simply displaying critical alerts, my goal was to design an interface that helps technicians understand what happened before and after an alert, while preserving important diagnostic context even after an issue has been resolved.

The key design choice separates **historical severity** (red Critical) from **current resolution state** (green check). The priority list and timeline have different sorting semantics: urgency versus chronology. The technician starts with what currently needs attention, then explores what happened before and after. Temporal proximity is a cue for review, not proof of causation.

## Implementation and limitations

This is a portfolio proof of concept, not a diagnostic or repair tool. The synthetic dataset, example thresholds and signal visualization are illustrative. The navigation sidebar only illustrates placement within an automotive service workflow. Nothing is deployed to a vehicle. Current implementation does not validate actual Tesla UI compatibility, test vehicle hardware, or analyze genuine fault causality.

