# Functional Interaction Audit — Prototype v3.0

## Objective

Deliver a GitHub Pages prototype that feels like real software: persistent fake backend, role permissions, CRUD, scenario-driven risk/DLP/investigation changes, and MRS v1.2 upgrades (editions, coverage honesty, risk ledger, legal hold, golden gates).

## Integrity checks

- `node --check` passed for `data.js`, `data-v3.js`, `backend.js`, `v3-ui.js`, `app.js`
- FakeBackend smoke: editions, Linux/ChromeOS devices, G09 outage, legal hold, manager `canRawEvidence()===false`
- v3 routes registered: editions, coverage, ledger, observation, legalhold, aigov, jurisdiction, golden
- Role route maps extended per stakeholder

## v3 workspace coverage

| Workspace | Status |
|-----------|--------|
| Editions & packaging | Interactive activate + tenant assignment |
| Coverage / OS matrix | Devices + matrix + G09 outage toggle |
| Risk Ledger | Factor deltas + sequence stories |
| Observation Levels 0–4 | Requests, approve/deny, G08 expiry |
| Legal Hold | Create/release + case flags |
| Jurisdiction / purpose grants | Packs + grant create |
| AI Governance catalog | Shadow vs sanctioned + BYO controls |
| Golden Scenarios G01–G12 | Mutate backend state |
| AI Copilot | Grounded citations + labeled inference |
| RBAC raw evidence guard | Blocks manager/HR/exec paths |

## Inherited v2 interactive areas (still live)

Users, activities, alerts, investigations (timeline/evidence/screenshots/files/comms/audit/replay), policies + twin/simulation, DLP incidents, workforce, endpoints, tenants, privacy DNR, integrations, reports, transparency, settings export/import/reset, scenario engine.

## Production-only (intentionally simulated)

Native agents, real keystrokes/screenshots/USB enforce, M365 collectors, SIEM actions, immutable storage, real LLM inference, server auth.

## Reset note

Storage key changed to `uss_bv_prototype_state_v3`. Reset demo data once after first v3 load.
