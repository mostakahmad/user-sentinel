# USS Behavioral Visibility — High-Fidelity Functional Prototype v3.0

GitHub Pages–ready interactive product simulation aligned to **MRS v1.2**: User Activity Monitoring (UAM), Workforce Intelligence, Insider Risk (IRM/UEBA), Adaptive DLP, Investigation/Evidence, Privacy/Governance, AI Copilot & commercial editions.

## What v3 adds (over v2)

- **Edition packaging** — Visibility → Workforce → IRM Protect → Investigate → Connect → AI Copilot → Sovereign
- **Coverage confidence & OS capability matrix** — Windows GA, macOS Partial, Linux Limited, ChromeOS, Android (no false parity)
- **Explainable Risk Ledger** + ordered sequence stories
- **Adaptive Observation Levels 0–4** with dual approval and auto-expiry (G08)
- **Legal Hold** workspace with chain-of-custody-oriented case flags
- **Jurisdiction packs & purpose grants**
- **AI Governance / Shadow AI catalog** + grounded copilot citations
- **Golden Scenario Lab G01–G12** that mutates persistent fake-backend state
- **RBAC evidence guard** — managers/HR/executives cannot open raw evidence (P2/G11)
- **Simulation mode** — policy promote/enforce blocked (P5/G12)
- **Collector outage simulation** — incomplete coverage visible (P4/G09)

## Stackholders & stories

All 15 personas remain fully interactive. New supplement stories 33–39 are covered via Coverage, Legal Hold, Jurisdiction, AI Governance, Editions, and Golden Scenarios workspaces.

## Fake backend

Persistent browser `localStorage` key:

`uss_bv_prototype_state_v3`

Use the red **Reset Demo** button in the top teal banner (every page), or **Platform Settings → Reset Demo Data**. This clears localStorage and reloads the v3 seed.

## Files

| File | Role |
|------|------|
| `index.html` | Shell |
| `assets/js/data.js` | Base seed |
| `assets/js/data-v3.js` | MRS v1.2 seed extensions |
| `assets/js/backend.js` | FakeBackend v3 |
| `assets/js/v3-ui.js` | New workspaces |
| `assets/js/app.js` | Core SPA + role routes |
| `assets/css/app.css` | Theme |
| `assets/vendor/*` | Bootstrap 5 + Icons (offline-friendly) |

## Deploy on GitHub Pages

1. Push this folder to a GitHub repo root (or `/docs`).
2. Settings → Pages → Deploy from branch → `main` / root.
3. No build step required.

## Recommended demo path

1. Login as **SOC Analyst**
2. Open **Golden Scenarios** → run **G02** (departing exfil) → **Alerts** → Create Investigation
3. Open **Risk Ledger** + **Observation Levels**
4. Switch to **Legal Officer** → **Legal Hold**
5. Run **G11** (manager boundary) → confirm raw evidence blocked
6. Run **G09** → **Coverage Matrix** shows outage
7. **Super Admin** → **Editions** → switch SKU narrative

## Scope boundary

This is a **high-fidelity simulation**, not a production agent. Native OS collection, real DLP enforcement, M365 ingestion, and server RBAC are represented as workflows and state transitions for stakeholder experience and implementation blueprint.
