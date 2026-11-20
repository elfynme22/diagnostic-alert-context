# Tesla application wording — drafts

These drafts should be updated to match what you have **personally reviewed, modified and verified** before you submit the application. They do not claim official integration.

## Project title
Diagnostic Alert Context — Automotive Service UI Concept

## CV (concise)
**Diagnostic Alert Context — Automotive Service UI Concept** | React, TypeScript, Node.js, Express, CSS
- Conceived a severity-first automotive diagnostic UI concept that keeps critical alerts prominent and preserves resolved critical events using a red severity indicator with a separate green resolution check.
- Prototyped a chronological event timeline and an alert investigation view for reviewing synthetic signal history and potentially related events; designed to complement existing service workflows.

*Once you've personally verified and refined the code, consider adding:* "Reviewed and tested reusable React components, an Express mock API, and interaction tests with AI-assisted development."

## README introduction
Diagnostic Alert Context is a compact, independent service-diagnostics UI concept inspired by Tesla Service Mode. It explores how technicians can prioritize active alerts without losing the historical context of already-resolved critical events. The overview emphasizes urgency; the investigation screen emphasizes chronology, signal history, and potentially related events. All data is synthetic, and the prototype is not an official Tesla product or vehicle integration.

## Interview pitch (about 35–45 seconds)
"I was interested in how a technician makes sense of several vehicle alerts during one drive. My design starts with a simple principle: show the most urgent active alert first, but don't erase the diagnostic history after it's resolved. For example, a resolved critical alert retains its red severity marker and gets a green check, so its historical importance and current state are both visible. From the alert list, a technician can open a chronological investigation view, compare synthetic sensor trends, and review potentially related events. The concept is intentionally compact and is not claiming to identify root causes. I used AI assistance to generate an initial React and TypeScript prototype and I'm working through the code and tests to understand and improve it."

## Short statement of personal contribution
"The concept, prioritization rules, resolved-critical visual treatment, and investigation workflow were my own design decisions. The first implementation was AI-assisted, and I am developing my hands-on frontend skills by inspecting and modifying the code."
