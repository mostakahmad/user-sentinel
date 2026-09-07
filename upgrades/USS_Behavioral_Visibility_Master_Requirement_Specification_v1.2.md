# UNITED SOFTWARE SOLUTIONS (USS)
# MASTER REQUIREMENT SPECIFICATION v1.2
## Behavioral Visibility, User Activity Monitoring, Workforce Intelligence & Insider Risk Management Platform

| Field | Value |
|-------|-------|
| Document | Master Requirement Specification (MRS) |
| Version | **1.2** (roll-up of v1.0 + Upgrade Pack v1.1) |
| Date | 7 September 2026 |
| Requirement catalog | 587 immutable IDs from v1.0 |
| Priority model | v1.1 / v1.2 reclassification (authoritative) |
| Companions | Upgrade Pack v1.1 · Story Supplement v1.1 · Phase 0/1 Jira pack |

### Authority
On conflict with v1.0 tags for **priority, edition, acceptance measurement, or release gates**, **v1.2 wins**. Requirement IDs and normative intent remain stable from v1.0.

---

## 1. Executive summary

Build a privacy-aware Behavioral Visibility platform that combines deep endpoint/cloud telemetry, workforce intelligence, explainable UEBA/insider-risk detection, adaptive DLP, investigation-grade evidence and AI-assisted analysis — while avoiding always-on intrusive surveillance and black-box employee scoring.

Central conclusion: a superior product is not “Veriato with a better dashboard.” Combine Veriato breadth, Teramind forensics, ActivTrak privacy-conscious workforce analytics, DTEX metadata-first intent, Purview adaptive governance, and Proofpoint/ObserveIT focused monitoring — then add explainable risk, privacy orchestration, open event architecture and governed AI.

### Operational baseline in v1.2
- Priorities: **284 MUST** / **214 SHOULD** / **89 COULD**
- First commercial ship: **USS Visibility GA** (Phase 0–1)
- Later value: Workforce → IRM Protect → Investigate → Connect → AI Copilot → Sovereign

## 2. Product principles (release blockers)

- **P1.** Metadata-first default (Level 1); Level 3 exceptional, purpose-bound, auto-expiring
- **P2.** Managers get aggregates only — no raw screenshots/keystrokes/message bodies by default
- **P3.** LLMs explain and cite; never author guilt or silent risk facts
- **P4.** Missing coverage is visible — never fake completeness
- **P5.** Policy simulation never enforces
- **P6.** No covert consumer/spouse/unmanaged personal-device positioning
- **P7.** Control plane ≠ high-volume telemetry plane
- **P8.** Tenant/purpose/case authorization at service/query boundaries

## 3. Editions, architecture, observation levels, OS matrix, roadmap

Retained from Upgrade Pack v1.1 (normative). Summary:

| Edition | Phase |
|---------|------:|
| Visibility | 0–1 |
| Workforce | 2 |
| IRM Protect | 3–4 |
| Investigate | 5 |
| Connect | 6 |
| AI Copilot | 7 |
| Sovereign | 8 |

**Stack:** Next.js UX · Laravel/PostgreSQL control · Go/Rust ingest · Kafka/Redpanda · ClickHouse · OpenSearch · S3/MinIO evidence · Python ML · CEL/OPA-like policy service.

**Observation levels 0–4** and **OS capability matrix** as in Upgrade Pack v1.1 §§4–5.

**Visibility GA golden gates:** G01, G07, G09, G11.

## 4. Requirement catalog

Each requirement below includes v1.0 normative text plus v1.2 priority, edition, gate, and measurable acceptance.

### ORG — 15 requirements (15 MUST)

#### ORG-001 — Multi-tenant organization model

- **Normative:** The platform shall isolate configuration, telemetry, evidence, models, encryption context, retention and billing by tenant.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** SURPASS
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Create tenants A/B; write telemetry to A; B UI/API/search/AI return deny/empty; audit authz.cross_tenant.denied.

#### ORG-002 — Create and manage business units with inherited and overridden policy scope

- **Normative:** The platform shall create and manage business units with inherited and overridden policy scope.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `ORG-002`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### ORG-003 — Create departments, teams, locations and cost centers and support nested organizational hierarchy

- **Normative:** The platform shall create departments, teams, locations and cost centers and support nested organizational hierarchy.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `ORG-003`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### ORG-004 — Assign users to multiple organizational dimensions without duplicating identity

- **Normative:** The platform shall assign users to multiple organizational dimensions without duplicating identity.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `ORG-004`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### ORG-005 — Create static user groups for policy, reporting and investigation scope

- **Normative:** The platform shall create static user groups for policy, reporting and investigation scope.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `ORG-005`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### ORG-006 — Create dynamic groups from identity, HR, risk, device, role, location and employment-state attributes

- **Normative:** The platform shall create dynamic groups from identity, HR, risk, device, role, location and employment-state attributes.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `ORG-006`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### ORG-007 — Create priority/high-impact user groups with stricter governance and differentiated risk treatment

- **Normative:** The platform shall create priority/high-impact user groups with stricter governance and differentiated risk treatment.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `ORG-007`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### ORG-008 — Import and reconcile organizational hierarchy from directory and HR sources

- **Normative:** The platform shall import and reconcile organizational hierarchy from directory and HR sources.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `ORG-008`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### ORG-009 — Support custom user metadata fields with schema, validation and sensitivity classification

- **Normative:** The platform shall support custom user metadata fields with schema, validation and sensitivity classification.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `ORG-009`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### ORG-010 — Support configurable work schedules, shifts, time zones, holidays and overnight schedules

- **Normative:** The platform shall support configurable work schedules, shifts, time zones, holidays and overnight schedules.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `ORG-010`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### ORG-011 — Maintain employment lifecycle states including pre-hire, active, leave, notice period, terminated and contractor expiration

- **Normative:** The platform shall maintain employment lifecycle states including pre-hire, active, leave, notice period, terminated and contractor expiration.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `ORG-011`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### ORG-012 — Maintain manager relationships and authorized managerial scope for workforce analytics

- **Normative:** The platform shall maintain manager relationships and authorized managerial scope for workforce analytics.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `ORG-012`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### ORG-013 — Allow organization-level feature flags and controlled rollout by tenant, group and user

- **Normative:** The platform shall allow organization-level feature flags and controlled rollout by tenant, group and user.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `ORG-013`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### ORG-014 — Provide bulk import, bulk edit and bulk assignment workflows with preview and rollback

- **Normative:** The platform shall provide bulk import, bulk edit and bulk assignment workflows with preview and rollback.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `ORG-014`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### ORG-015 — Maintain immutable organization-change audit history with before and after values

- **Normative:** The platform shall maintain immutable organization-change audit history with before and after values.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `ORG-015`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

### IAM — 20 requirements (20 MUST)

#### IAM-001 — Role-based access control

- **Normative:** The platform shall provide granular RBAC for administration, monitoring, risk, investigation, reporting, privacy, evidence reveal, export and integration actions.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** RBAC matrix: each role can only access granted modules; negative tests for investigator vs manager.

#### IAM-002 — Attribute-based access control

- **Normative:** The platform shall supplement RBAC with ABAC conditions for department, jurisdiction, purpose, case membership, sensitivity and risk context.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** SURPASS
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** ABAC deny when purpose/case/jurisdiction mismatch even if role allows module.

#### IAM-003 — Support least-privilege custom roles and permission bundles

- **Normative:** The platform shall support least-privilege custom roles and permission bundles.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IAM-003`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### IAM-004 — Support SSO using SAML 2.0 and OpenID Connect

- **Normative:** The platform shall support SSO using SAML 2.0 and OpenID Connect.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IAM-004`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### IAM-005 — Support MFA enforcement and step-up authentication for sensitive evidence actions

- **Normative:** The platform shall support MFA enforcement and step-up authentication for sensitive evidence actions.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IAM-005`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### IAM-006 — Support SCIM 2.0 user and group provisioning

- **Normative:** The platform shall support SCIM 2.0 user and group provisioning.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IAM-006`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### IAM-007 — Support directory synchronization with Microsoft Entra ID and Active Directory

- **Normative:** The platform shall support directory synchronization with Microsoft Entra ID and Active Directory.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IAM-007`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### IAM-008 — Support identity-provider group-to-role mapping

- **Normative:** The platform shall support identity-provider group-to-role mapping.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IAM-008`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### IAM-009 — Support service accounts and scoped machine identities distinct from human administrators

- **Normative:** The platform shall support service accounts and scoped machine identities distinct from human administrators.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IAM-009`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### IAM-010 — Support API clients with revocable scopes, secrets rotation and optional mTLS

- **Normative:** The platform shall support API clients with revocable scopes, secrets rotation and optional mTLS.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IAM-010`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### IAM-011 — Support session timeout, re-authentication and concurrent-session policy

- **Normative:** The platform shall support session timeout, re-authentication and concurrent-session policy.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IAM-011`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### IAM-012 — Support IP/network restrictions for administrative access

- **Normative:** The platform shall support IP/network restrictions for administrative access.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IAM-012`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### IAM-013 — Support emergency break-glass accounts with enhanced auditing

- **Normative:** The platform shall support emergency break-glass accounts with enhanced auditing.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IAM-013`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### IAM-014 — Support dual authorization for focused evidence collection and highly sensitive evidence reveal

- **Normative:** The platform shall support dual authorization for focused evidence collection and highly sensitive evidence reveal.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IAM-014`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### IAM-015 — Support delegated administration by tenant, business unit, department and geography

- **Normative:** The platform shall support delegated administration by tenant, business unit, department and geography.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IAM-015`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### IAM-016 — Support investigator access limited to assigned cases and subjects

- **Normative:** The platform shall support investigator access limited to assigned cases and subjects.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IAM-016`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### IAM-017 — Support auditor/read-only roles that cannot change policies or monitoring scope

- **Normative:** The platform shall support auditor/read-only roles that cannot change policies or monitoring scope.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IAM-017`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### IAM-018 — Support purpose-of-access declaration before viewing restricted employee content

- **Normative:** The platform shall support purpose-of-access declaration before viewing restricted employee content.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IAM-018`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### IAM-019 — Log authentication, authorization decisions, evidence views, downloads and exports

- **Normative:** The platform shall log authentication, authorization decisions, evidence views, downloads and exports.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IAM-019`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### IAM-020 — Provide periodic access-review reports and stale-privilege detection

- **Normative:** The platform shall provide periodic access-review reports and stale-privilege detection.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IAM-020`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

### AGENT — 33 requirements (33 MUST)

#### AGENT-001 — Signed endpoint agent

- **Normative:** The platform shall provide cryptographically signed, versioned endpoint agents with secure update verification and tamper-evident identity.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-001`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### AGENT-002 — Metadata-first default collection

- **Normative:** The endpoint agent shall default to metadata-first collection and shall not collect keystrokes, message bodies, continuous video or precise GPS unless an authorized policy explicitly elevates observation.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** SURPASS
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Fresh Windows enrollment: Level-1 metadata only; screenshot/keystroke collectors enabled=false in applied policy snapshot.

#### AGENT-003 — Authenticate each agent/device using unique device-bound credentials and rotate them automatically

- **Normative:** The platform shall authenticate each agent/device using unique device-bound credentials and rotate them automatically.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-003`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### AGENT-004 — Encrypt telemetry and evidence in transit using current TLS with certificate validation and pinning where operationally appropriate

- **Normative:** The platform shall encrypt telemetry and evidence in transit using current TLS with certificate validation and pinning where operationally appropriate.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-004`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### AGENT-005 — Buffer events locally during connectivity loss and upload them in order with deduplication after reconnection

- **Normative:** The platform shall buffer events locally during connectivity loss and upload them in order with deduplication after reconnection.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-005`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### AGENT-006 — Protect local queues and configuration using OS-backed encryption and integrity checks

- **Normative:** The platform shall protect local queues and configuration using OS-backed encryption and integrity checks.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-006`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### AGENT-007 — Expose agent health including online state, last check-in, version, policy version, queue depth, upload lag, errors and warnings

- **Normative:** The platform shall expose agent health including online state, last check-in, version, policy version, queue depth, upload lag, errors and warnings.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-007`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### AGENT-008 — Provide centrally managed policy delivery with versioning, signature validation, staged rollout and rollback

- **Normative:** The platform shall provide centrally managed policy delivery with versioning, signature validation, staged rollout and rollback.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-008`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### AGENT-009 — Support bandwidth limits, batching, compression and upload-window controls

- **Normative:** The platform shall support bandwidth limits, batching, compression and upload-window controls.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-009`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### AGENT-010 — Support CPU, memory, disk and battery safeguards that automatically degrade noncritical collection under resource pressure

- **Normative:** The platform shall support CPU, memory, disk and battery safeguards that automatically degrade noncritical collection under resource pressure.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-010`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### AGENT-011 — Support local event timestamps plus UTC normalization and clock-skew detection

- **Normative:** The platform shall support local event timestamps plus UTC normalization and clock-skew detection.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-011`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### AGENT-012 — Support multi-user/shared workstations and preserve user-to-session attribution

- **Normative:** The platform shall support multi-user/shared workstations and preserve user-to-session attribution.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-012`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### AGENT-013 — Support remote enterprise deployment using approved management channels such as Intune, Jamf, GPO/SCCM or equivalent

- **Normative:** The platform shall support remote enterprise deployment using approved management channels such as Intune, Jamf, GPO/SCCM or equivalent.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-013`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### AGENT-014 — Support interactive/manual installer packages for transparent deployments

- **Normative:** The platform shall support interactive/manual installer packages for transparent deployments.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-014`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### AGENT-015 — Support scheduled deployment and maintenance windows

- **Normative:** The platform shall support scheduled deployment and maintenance windows.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-015`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### AGENT-016 — Support centrally managed updates using staged rings, canary groups and emergency rollback

- **Normative:** The platform shall support centrally managed updates using staged rings, canary groups and emergency rollback.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-016`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### AGENT-017 — Support remote repair/reinstall workflows with administrator-visible status

- **Normative:** The platform shall support remote repair/reinstall workflows with administrator-visible status.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-017`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### AGENT-018 — Support authorized remote uninstall and cryptographic de-registration

- **Normative:** The platform shall support authorized remote uninstall and cryptographic de-registration.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-018`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### AGENT-019 — Detect agent tampering, stopped services, corrupted components and unauthorized policy modification attempts

- **Normative:** The platform shall detect agent tampering, stopped services, corrupted components and unauthorized policy modification attempts.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-019`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### AGENT-020 — Report monitoring coverage gaps and missing OS permissions without silently pretending data is complete

- **Normative:** The platform shall report monitoring coverage gaps and missing OS permissions without silently pretending data is complete.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-020`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### AGENT-021 — Support Do Not Record exclusions by application, website, window, path, user group, schedule and privacy zone

- **Normative:** The platform shall support Do Not Record exclusions by application, website, window, path, user group, schedule and privacy zone.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-021`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### AGENT-022 — Support user-visible monitoring disclosure and policy summary where configured or legally required

- **Normative:** The platform shall support user-visible monitoring disclosure and policy summary where configured or legally required.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-022`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### AGENT-023 — Support optional user pause/clock-out for transparent workforce-monitoring deployments with policy-controlled limits

- **Normative:** The platform shall support optional user pause/clock-out for transparent workforce-monitoring deployments with policy-controlled limits.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-023`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### AGENT-024 — Support focused-observation elevation with explicit reason, approver, scope, start time, expiry and automatic reversion

- **Normative:** The platform shall support focused-observation elevation with explicit reason, approver, scope, start time, expiry and automatic reversion.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-024`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### AGENT-025 — Support collection level 0 Excluded, level 1 Metadata, level 2 Enriched Context, level 3 Focused Evidence and level 4 Preventive Control

- **Normative:** The platform shall support collection level 0 Excluded, level 1 Metadata, level 2 Enriched Context, level 3 Focused Evidence and level 4 Preventive Control.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-025`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### AGENT-026 — Ensure high-risk collection modes have visibly distinct administrative state and cannot be enabled through ambiguous toggles

- **Normative:** The platform shall ensure high-risk collection modes have visibly distinct administrative state and cannot be enabled through ambiguous toggles.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-026`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### AGENT-027 — Cache the minimum policy needed to continue safely while offline

- **Normative:** The platform shall cache the minimum policy needed to continue safely while offline.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-027`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### AGENT-028 — Support tenant-configurable local-retention limits and secure local deletion after upload/expiry

- **Normative:** The platform shall support tenant-configurable local-retention limits and secure local deletion after upload/expiry.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-028`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### AGENT-029 — Support agent self-diagnostics bundle generation without exposing employee content by default

- **Normative:** The platform shall support agent self-diagnostics bundle generation without exposing employee content by default.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-029`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### AGENT-030 — Expose capability discovery so the console only offers controls supported by the endpoint OS and agent version

- **Normative:** The platform shall expose capability discovery so the console only offers controls supported by the endpoint OS and agent version.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-030`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### AGENT-031 — Support command acknowledgement and idempotency for deploy, update, policy, uninstall and diagnostic actions

- **Normative:** The platform shall support command acknowledgement and idempotency for deploy, update, policy, uninstall and diagnostic actions.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-031`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### AGENT-032 — Provide fleet-level success/failure metrics for deployment, upgrades, policy propagation and event delivery

- **Normative:** The platform shall provide fleet-level success/failure metrics for deployment, upgrades, policy propagation and event delivery.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-032`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### AGENT-033 — Support controlled beta channels for new OS versions and feature collectors

- **Normative:** The platform shall support controlled beta channels for new OS versions and feature collectors.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-033`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

### AGENT-WIN — 10 requirements (10 MUST)

#### AGENT-WIN-001 — Provide a Windows agent for supported workstation and server editions with separate capability matrix

- **Normative:** The platform shall provide a Windows agent for supported workstation and server editions with separate capability matrix.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-WIN-001`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### AGENT-WIN-002 — Monitor foreground applications/processes and user sessions using supported Windows APIs

- **Normative:** The platform shall monitor foreground applications/processes and user sessions using supported Windows APIs.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-WIN-002`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### AGENT-WIN-003 — Capture file-system and removable-storage events using least-privilege supported mechanisms

- **Normative:** The platform shall capture file-system and removable-storage events using least-privilege supported mechanisms.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-WIN-003`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### AGENT-WIN-004 — Capture printing, network-context and browser/application telemetry supported on Windows

- **Normative:** The platform shall capture printing, network-context and browser/application telemetry supported on Windows.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-WIN-004`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### AGENT-WIN-005 — Support enterprise deployment via Intune, GPO, SCCM/Configuration Manager and signed MSI/EXE packages

- **Normative:** The platform shall support enterprise deployment via Intune, GPO, SCCM/Configuration Manager and signed MSI/EXE packages.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-WIN-005`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### AGENT-WIN-006 — Detect Windows session lock/unlock, logon/logoff and RDP/virtual-session context where supported

- **Normative:** The platform shall detect Windows session lock/unlock, logon/logoff and RDP/virtual-session context where supported.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-WIN-006`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### AGENT-WIN-007 — Support Windows protected-data/redaction rules for password and sensitive input contexts

- **Normative:** The platform shall support Windows protected-data/redaction rules for password and sensitive input contexts.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-WIN-007`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### AGENT-WIN-008 — Support VDI/virtual desktop environments with documented identity/session attribution limits

- **Normative:** The platform shall support VDI/virtual desktop environments with documented identity/session attribution limits.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-WIN-008`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### AGENT-WIN-009 — Support offline telemetry and policy enforcement across device reboots

- **Normative:** The platform shall support offline telemetry and policy enforcement across device reboots.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-WIN-009`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### AGENT-WIN-010 — Validate compatibility with EDR/AV and publish coexistence diagnostics rather than requesting security-product bypasses

- **Normative:** The platform shall validate compatibility with EDR/AV and publish coexistence diagnostics rather than requesting security-product bypasses.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-WIN-010`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

### AGENT-MAC — 7 requirements (0 MUST)

#### AGENT-MAC-001 — Provide a notarized macOS agent compatible with current supported macOS versions

- **Normative:** The platform shall provide a notarized macOS agent compatible with current supported macOS versions.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Connect
- **Strategy:** ADAPT
- **Release gate:** Connect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-MAC-001`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Connect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### AGENT-MAC-002 — Use Apple-approved system extensions/frameworks and request only permissions required by enabled capabilities

- **Normative:** The platform shall use Apple-approved system extensions/frameworks and request only permissions required by enabled capabilities.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Connect
- **Strategy:** ADAPT
- **Release gate:** Connect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-MAC-002`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Connect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### AGENT-MAC-003 — Monitor supported application, browser, file, print, network-context and session activity

- **Normative:** The platform shall monitor supported application, browser, file, print, network-context and session activity.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Connect
- **Strategy:** ADAPT
- **Release gate:** Connect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-MAC-003`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Connect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### AGENT-MAC-004 — Expose Full Disk Access, Accessibility, Screen Recording and related permission health separately

- **Normative:** The platform shall expose Full Disk Access, Accessibility, Screen Recording and related permission health separately.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Connect
- **Strategy:** ADAPT
- **Release gate:** Connect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-MAC-004`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Connect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### AGENT-MAC-005 — Support Jamf and MDM deployment/update workflows

- **Normative:** The platform shall support Jamf and MDM deployment/update workflows.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Connect
- **Strategy:** ADAPT
- **Release gate:** Connect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-MAC-005`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Connect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### AGENT-MAC-006 — Support Apple Silicon and Intel where still commercially supported

- **Normative:** The platform shall support Apple Silicon and Intel where still commercially supported.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Connect
- **Strategy:** ADAPT
- **Release gate:** Connect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-MAC-006`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Connect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### AGENT-MAC-007 — Fail privacy-safely when a required macOS permission is revoked and report the resulting telemetry gap

- **Normative:** The platform shall fail privacy-safely when a required macOS permission is revoked and report the resulting telemetry gap.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Connect
- **Strategy:** ADAPT
- **Release gate:** Connect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-MAC-007`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Connect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

### AGENT-LNX — 5 requirements (0 MUST)

#### AGENT-LNX-001 — Provide a Linux endpoint/server agent for explicitly supported distributions and kernels

- **Normative:** The platform shall provide a Linux endpoint/server agent for explicitly supported distributions and kernels.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Connect
- **Strategy:** ADAPT
- **Release gate:** Connect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-LNX-001`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Connect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### AGENT-LNX-002 — Monitor login/session, process/application, terminal-context, file and network metadata where supported

- **Normative:** The platform shall monitor login/session, process/application, terminal-context, file and network metadata where supported.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Connect
- **Strategy:** ADAPT
- **Release gate:** Connect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-LNX-002`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Connect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### AGENT-LNX-003 — Support managed package deployment and signed repositories or packages

- **Normative:** The platform shall support managed package deployment and signed repositories or packages.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Connect
- **Strategy:** ADAPT
- **Release gate:** Connect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-LNX-003`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Connect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### AGENT-LNX-004 — Support server/headless workloads separately from graphical desktop monitoring

- **Normative:** The platform shall support server/headless workloads separately from graphical desktop monitoring.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Connect
- **Strategy:** ADAPT
- **Release gate:** Connect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-LNX-004`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Connect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### AGENT-LNX-005 — Publish a Linux capability matrix and never imply parity with Windows/macOS where collectors differ

- **Normative:** The platform shall publish a Linux capability matrix and never imply parity with Windows/macOS where collectors differ.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Connect
- **Strategy:** ADAPT
- **Release gate:** Connect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-LNX-005`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Connect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

### AGENT-CHR — 5 requirements (0 MUST)

#### AGENT-CHR-001 — Provide ChromeOS/browser-extension collection for managed enterprise devices

- **Normative:** The platform shall provide ChromeOS/browser-extension collection for managed enterprise devices.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Connect
- **Strategy:** ADAPT
- **Release gate:** Connect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-CHR-001`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Connect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### AGENT-CHR-002 — Capture detailed URL/title/application/web activity subject to browser management permissions

- **Normative:** The platform shall capture detailed URL/title/application/web activity subject to browser management permissions.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Connect
- **Strategy:** ADAPT
- **Release gate:** Connect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-CHR-002`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Connect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### AGENT-CHR-003 — Support managed extension deployment and policy configuration

- **Normative:** The platform shall support managed extension deployment and policy configuration.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Connect
- **Strategy:** ADAPT
- **Release gate:** Connect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-CHR-003`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Connect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### AGENT-CHR-004 — Identify browser profile/device/user context and report coverage gaps

- **Normative:** The platform shall identify browser profile/device/user context and report coverage gaps.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Connect
- **Strategy:** ADAPT
- **Release gate:** Connect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-CHR-004`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Connect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### AGENT-CHR-005 — Apply website categorization, productivity and risk policies to supported browser events

- **Normative:** The platform shall apply website categorization, productivity and risk policies to supported browser events.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Connect
- **Strategy:** ADAPT
- **Release gate:** Connect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-CHR-005`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Connect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

### AGENT-AND — 8 requirements (0 MUST)

#### AGENT-AND-001 — Provide Android Enterprise support for company-owned managed devices only unless jurisdictional policy explicitly permits another model

- **Normative:** The platform shall provide Android Enterprise support for company-owned managed devices only unless jurisdictional policy explicitly permits another model.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Connect
- **Strategy:** ADAPT
- **Release gate:** Connect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-AND-001`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Connect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### AGENT-AND-002 — Collect managed-device app/web/file/location metadata only according to enabled enterprise policy and OS permission

- **Normative:** The platform shall collect managed-device app/web/file/location metadata only according to enabled enterprise policy and OS permission.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Connect
- **Strategy:** ADAPT
- **Release gate:** Connect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-AND-002`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Connect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### AGENT-AND-003 — Support geofence enter/exit events with assigned scope and schedule

- **Normative:** The platform shall support geofence enter/exit events with assigned scope and schedule.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Connect
- **Strategy:** ADAPT
- **Release gate:** Connect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-AND-003`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Connect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### AGENT-AND-004 — Support configurable background upload, network constraints and offline queue retention

- **Normative:** The platform shall support configurable background upload, network constraints and offline queue retention.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Connect
- **Strategy:** ADAPT
- **Release gate:** Connect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-AND-004`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Connect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### AGENT-AND-005 — Provide clear monitoring disclosure and device-management status when required

- **Normative:** The platform shall provide clear monitoring disclosure and device-management status when required.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Connect
- **Strategy:** ADAPT
- **Release gate:** Connect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-AND-005`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Connect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### AGENT-AND-006 — Report Accessibility, storage, location and device-admin permission health individually

- **Normative:** The platform shall report Accessibility, storage, location and device-admin permission health individually.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Connect
- **Strategy:** ADAPT
- **Release gate:** Connect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-AND-006`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Connect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### AGENT-AND-007 — Support remote policy/update actions through supported MDM/enterprise channels

- **Normative:** The platform shall support remote policy/update actions through supported MDM/enterprise channels.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Connect
- **Strategy:** ADAPT
- **Release gate:** Connect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-AND-007`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Connect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### AGENT-AND-008 — Separate legacy high-intrusion capabilities such as audio/photo/video/SMS/call capture behind explicit product review and disable them by default

- **Normative:** The platform shall separate legacy high-intrusion capabilities such as audio/photo/video/SMS/call capture behind explicit product review and disable them by default.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Connect
- **Strategy:** ADAPT
- **Release gate:** Connect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AGENT-AND-008`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Connect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

### UAM-APP — 18 requirements (18 MUST)

#### UAM-APP-001 — Capture application/process identity, executable, publisher/signature where available and normalized application family

- **Normative:** The platform shall capture application/process identity, executable, publisher/signature where available and normalized application family.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-APP-001`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-APP-002 — Capture application/window start, stop, duration and foreground/active duration

- **Normative:** The platform shall capture application/window start, stop, duration and foreground/active duration.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-APP-002`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-APP-003 — Capture window title/caption subject to privacy policy and redaction

- **Normative:** The platform shall capture window title/caption subject to privacy policy and redaction.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-APP-003`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-APP-004 — Associate application activity with user, device, session, department, work schedule and policy context

- **Normative:** The platform shall associate application activity with user, device, session, department, work schedule and policy context.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-APP-004`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-APP-005 — Classify applications as productive, neutral, unproductive, restricted or uncategorized

- **Normative:** The platform shall classify applications as productive, neutral, unproductive, restricted or uncategorized.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-APP-005`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-APP-006 — Allow classification overrides by team, role, project, schedule and business unit

- **Normative:** The platform shall allow classification overrides by team, role, project, schedule and business unit.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-APP-006`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-APP-007 — Maintain application catalog aliases so renamed/versioned executables map to the same product

- **Normative:** The platform shall maintain application catalog aliases so renamed/versioned executables map to the same product.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-APP-007`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-APP-008 — Detect newly observed applications and support review/approval workflows

- **Normative:** The platform shall detect newly observed applications and support review/approval workflows.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-APP-008`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-APP-009 — Detect unsigned, high-risk or prohibited applications using configured intelligence sources

- **Normative:** The platform shall detect unsigned, high-risk or prohibited applications using configured intelligence sources.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-APP-009`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-APP-010 — Support application-based allow, warn, block or terminate policies where technically and legally appropriate

- **Normative:** The platform shall support application-based allow, warn, block or terminate policies where technically and legally appropriate.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-APP-010`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-APP-011 — Calculate application usage totals, active time, frequency and trend by user/team/device

- **Normative:** The platform shall calculate application usage totals, active time, frequency and trend by user/team/device.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-APP-011`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-APP-012 — Detect abnormal application usage compared with user and peer baselines

- **Normative:** The platform shall detect abnormal application usage compared with user and peer baselines.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-APP-012`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-APP-013 — Support application tag taxonomy such as development, finance, communication, AI, storage, job-search and entertainment

- **Normative:** The platform shall support application tag taxonomy such as development, finance, communication, AI, storage, job-search and entertainment.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-APP-013`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-APP-014 — Identify public GenAI/LLM applications and browser experiences as a distinct catalog class

- **Normative:** The platform shall identify public GenAI/LLM applications and browser experiences as a distinct catalog class.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-APP-014`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-APP-015 — Expose application activity in dashboards, search, reports, risk timeline and investigation evidence

- **Normative:** The platform shall expose application activity in dashboards, search, reports, risk timeline and investigation evidence.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-APP-015`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-APP-016 — Allow applications to be excluded from recording while still optionally contributing aggregate time metrics

- **Normative:** The platform shall allow applications to be excluded from recording while still optionally contributing aggregate time metrics.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-APP-016`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-APP-017 — Deduplicate overlapping process/window telemetry into human-meaningful usage sessions

- **Normative:** The platform shall deduplicate overlapping process/window telemetry into human-meaningful usage sessions.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-APP-017`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-APP-018 — Expose application collector quality/coverage and unsupported edge cases in data-quality views

- **Normative:** The platform shall expose application collector quality/coverage and unsupported edge cases in data-quality views.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-APP-018`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

### UAM-WEB — 20 requirements (20 MUST)

#### UAM-WEB-001 — Capture visited URL, normalized domain/host, page title, browser and timestamps subject to recording policy

- **Normative:** The platform shall capture visited URL, normalized domain/host, page title, browser and timestamps subject to recording policy.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-WEB-001`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-WEB-002 — Calculate website/session duration and foreground active duration

- **Normative:** The platform shall calculate website/session duration and foreground active duration.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-WEB-002`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-WEB-003 — Categorize websites by business/productivity/risk taxonomy

- **Normative:** The platform shall categorize websites by business/productivity/risk taxonomy.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-WEB-003`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-WEB-004 — Allow website-category and individual-domain productivity overrides by team or role

- **Normative:** The platform shall allow website-category and individual-domain productivity overrides by team or role.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-WEB-004`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-WEB-005 — Allow website allow, warn and block policies with user-facing reason text

- **Normative:** The platform shall allow website allow, warn and block policies with user-facing reason text.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-WEB-005`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-WEB-006 — Support Do Not Record rules for banking, healthcare, personal webmail and other privacy-sensitive domains

- **Normative:** The platform shall support Do Not Record rules for banking, healthcare, personal webmail and other privacy-sensitive domains.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-WEB-006`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-WEB-007 — Redact URL query parameters and page titles using configurable sensitive patterns

- **Normative:** The platform shall redact URL query parameters and page titles using configurable sensitive patterns.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-WEB-007`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-WEB-008 — Capture supported search-engine query terms only when enabled and permitted

- **Normative:** The platform shall capture supported search-engine query terms only when enabled and permitted.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-WEB-008`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-WEB-009 — Classify file-storage, webmail, social, collaboration, job-search and GenAI websites separately

- **Normative:** The platform shall classify file-storage, webmail, social, collaboration, job-search and GenAI websites separately.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-WEB-009`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-WEB-010 — Detect first-seen domains, high-risk domains and anomalous domain usage

- **Normative:** The platform shall detect first-seen domains, high-risk domains and anomalous domain usage.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-WEB-010`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-WEB-011 — Detect unusually high duration/frequency and unusual out-of-hours website activity

- **Normative:** The platform shall detect unusually high duration/frequency and unusual out-of-hours website activity.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-WEB-011`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-WEB-012 — Support keyword/domain/URL-based alert conditions

- **Normative:** The platform shall support keyword/domain/URL-based alert conditions.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-WEB-012`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-WEB-013 — Support browser tab/window attribution where technically reliable

- **Normative:** The platform shall support browser tab/window attribution where technically reliable.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-WEB-013`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-WEB-014 — Expose web activity in global search, user timeline and investigation context

- **Normative:** The platform shall expose web activity in global search, user timeline and investigation context.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-WEB-014`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-WEB-015 — Support expanded URL/subdomain detail only for roles/policies authorized to see it

- **Normative:** The platform shall support expanded URL/subdomain detail only for roles/policies authorized to see it.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-WEB-015`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-WEB-016 — Allow aggregated domain analytics without retaining full URLs when privacy mode requires minimization

- **Normative:** The platform shall allow aggregated domain analytics without retaining full URLs when privacy mode requires minimization.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-WEB-016`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-WEB-017 — Provide domain reputation enrichment through pluggable threat-intelligence providers

- **Normative:** The platform shall provide domain reputation enrichment through pluggable threat-intelligence providers.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-WEB-017`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-WEB-018 — Detect public file-sharing and personal cloud-storage destinations

- **Normative:** The platform shall detect public file-sharing and personal cloud-storage destinations.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-WEB-018`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-WEB-019 — Detect AI service usage and distinguish approved, tolerated and shadow-AI services

- **Normative:** The platform shall detect AI service usage and distinguish approved, tolerated and shadow-AI services.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-WEB-019`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-WEB-020 — Support web-activity export/API without exposing excluded/redacted content

- **Normative:** The platform shall support web-activity export/API without exposing excluded/redacted content.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-WEB-020`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

### UAM-TIME — 16 requirements (16 MUST)

#### UAM-TIME-001 — Capture login, logout, lock, unlock and session start/end events

- **Normative:** The platform shall capture login, logout, lock, unlock and session start/end events.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-TIME-001`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-TIME-002 — Calculate active, idle and logged-in time using configurable thresholds

- **Normative:** The platform shall calculate active, idle and logged-in time using configurable thresholds.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-TIME-002`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-TIME-003 — Separate machine idle from application inactivity and avoid labeling idle time as non-work by default

- **Normative:** The platform shall separate machine idle from application inactivity and avoid labeling idle time as non-work by default.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-TIME-003`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-TIME-004 — Capture first activity and last activity for configured workdays

- **Normative:** The platform shall capture first activity and last activity for configured workdays.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-TIME-004`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-TIME-005 — Compare activity with assigned schedule, shift, holiday and timezone

- **Normative:** The platform shall compare activity with assigned schedule, shift, holiday and timezone.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-TIME-005`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-TIME-006 — Support overnight and split shifts

- **Normative:** The platform shall support overnight and split shifts.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-TIME-006`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-TIME-007 — Calculate workday span, active ratio, focus blocks and context-switching metrics

- **Normative:** The platform shall calculate workday span, active ratio, focus blocks and context-switching metrics.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-TIME-007`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-TIME-008 — Detect sustained overwork, after-hours work and insufficient recovery patterns as wellbeing signals, not disciplinary conclusions

- **Normative:** The platform shall detect sustained overwork, after-hours work and insufficient recovery patterns as wellbeing signals, not disciplinary conclusions.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-TIME-008`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-TIME-009 — Detect unusual login time or session duration as risk signals

- **Normative:** The platform shall detect unusual login time or session duration as risk signals.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-TIME-009`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-TIME-010 — Support transparent clock-in/clock-out mode for teams that need explicit attendance capture

- **Normative:** The platform shall support transparent clock-in/clock-out mode for teams that need explicit attendance capture.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-TIME-010`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-TIME-011 — Allow managers to correct approved attendance exceptions without altering raw telemetry

- **Normative:** The platform shall allow managers to correct approved attendance exceptions without altering raw telemetry.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-TIME-011`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-TIME-012 — Separate workforce time analytics from payroll-ready time unless explicit payroll rules are configured

- **Normative:** The platform shall separate workforce time analytics from payroll-ready time unless explicit payroll rules are configured.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-TIME-012`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-TIME-013 — Provide time trends by user/team/location without exposing unnecessary content

- **Normative:** The platform shall provide time trends by user/team/location without exposing unnecessary content.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-TIME-013`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-TIME-014 — Allow work-hours-only monitoring windows and stop excluded collection outside policy windows

- **Normative:** The platform shall allow work-hours-only monitoring windows and stop excluded collection outside policy windows.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-TIME-014`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-TIME-015 — Support timezone travel changes and remote-work schedules without corrupting baselines

- **Normative:** The platform shall support timezone travel changes and remote-work schedules without corrupting baselines.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-TIME-015`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-TIME-016 — Record calculation-rule/version provenance for every derived time metric

- **Normative:** The platform shall record calculation-rule/version provenance for every derived time metric.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-TIME-016`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

### UAM-COMM — 20 requirements (0 MUST)

#### UAM-COMM-001 — Capture email metadata including sender, recipients, direction, subject where enabled, timestamp and attachment metadata

- **Normative:** The platform shall capture email metadata including sender, recipients, direction, subject where enabled, timestamp and attachment metadata.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-COMM-001`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### UAM-COMM-002 — Capture supported chat/message metadata including platform, participants, direction, timestamp and conversation/session identifiers

- **Normative:** The platform shall capture supported chat/message metadata including platform, participants, direction, timestamp and conversation/session identifiers.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-COMM-002`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### UAM-COMM-003 — Collect message/email body content only in elevated policies with legal basis, minimization and role restrictions

- **Normative:** The platform shall collect message/email body content only in elevated policies with legal basis, minimization and role restrictions.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-COMM-003`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### UAM-COMM-004 — Capture attachment name, type, size, hash/classification and transfer direction where supported

- **Normative:** The platform shall capture attachment name, type, size, hash/classification and transfer direction where supported.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-COMM-004`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### UAM-COMM-005 — Identify external recipients and first-time external communication relationships

- **Normative:** The platform shall identify external recipients and first-time external communication relationships.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-COMM-005`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### UAM-COMM-006 — Identify communications involving personal webmail or unsanctioned communication services where observable

- **Normative:** The platform shall identify communications involving personal webmail or unsanctioned communication services where observable.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-COMM-006`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### UAM-COMM-007 — Run keyword/category rules against authorized communication fields

- **Normative:** The platform shall run keyword/category rules against authorized communication fields.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-COMM-007`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### UAM-COMM-008 — Run sentiment/tone analysis only on content explicitly authorized for analysis and retain explanation/confidence

- **Normative:** The platform shall run sentiment/tone analysis only on content explicitly authorized for analysis and retain explanation/confidence.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-COMM-008`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### UAM-COMM-009 — Detect abnormal communication volume, timing and external-recipient behavior against baselines

- **Normative:** The platform shall detect abnormal communication volume, timing and external-recipient behavior against baselines.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-COMM-009`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### UAM-COMM-010 — Detect sensitive-data findings in attachments and permitted message content

- **Normative:** The platform shall detect sensitive-data findings in attachments and permitted message content.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-COMM-010`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### UAM-COMM-011 — Correlate communication activity with file, web, application, risk and identity events

- **Normative:** The platform shall correlate communication activity with file, web, application, risk and identity events.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-COMM-011`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### UAM-COMM-012 — Expose communication activity in case timelines with redaction and role-based reveal

- **Normative:** The platform shall expose communication activity in case timelines with redaction and role-based reveal.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-COMM-012`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### UAM-COMM-013 — Support Microsoft Exchange/Teams collection through supported cloud APIs where configured

- **Normative:** The platform shall support Microsoft Exchange/Teams collection through supported cloud APIs where configured.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-COMM-013`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### UAM-COMM-014 — Support Gmail/Google Workspace metadata through approved integration where added in scope

- **Normative:** The platform shall support Gmail/Google Workspace metadata through approved integration where added in scope.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-COMM-014`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### UAM-COMM-015 — Support Slack and other collaboration metadata through supported integrations/endpoint signals where added in scope

- **Normative:** The platform shall support Slack and other collaboration metadata through supported integrations/endpoint signals where added in scope.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-COMM-015`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### UAM-COMM-016 — Preserve source/provider message identifiers for deduplication and evidence provenance

- **Normative:** The platform shall preserve source/provider message identifiers for deduplication and evidence provenance.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-COMM-016`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### UAM-COMM-017 — Classify communication events as internal, external, privileged/unknown and high-risk-destination

- **Normative:** The platform shall classify communication events as internal, external, privileged/unknown and high-risk-destination.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-COMM-017`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### UAM-COMM-018 — Support configurable retention distinct from other activity types

- **Normative:** The platform shall support configurable retention distinct from other activity types.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-COMM-018`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### UAM-COMM-019 — Prevent unrestricted full-text export of communication content without explicit permission and audit

- **Normative:** The platform shall prevent unrestricted full-text export of communication content without explicit permission and audit.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-COMM-019`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### UAM-COMM-020 — Expose data-quality status when provider APIs, permissions or endpoint collectors create partial coverage

- **Normative:** The platform shall expose data-quality status when provider APIs, permissions or endpoint collectors create partial coverage.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-COMM-020`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

### UAM-KEY — 8 requirements (0 MUST)

#### UAM-KEY-001 — Keystroke capture disabled by default

- **Normative:** The platform shall keep raw keystroke capture disabled by default and permit it only in focused, case-scoped or compliance-critical policies with approval and expiry.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** SURPASS
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-KEY-001`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### UAM-KEY-002 — Associate authorized keystrokes with user, device, application/window and timestamp context

- **Normative:** The platform shall associate authorized keystrokes with user, device, application/window and timestamp context.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-KEY-002`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### UAM-KEY-003 — Suppress password fields and configured sensitive input contexts whenever technically detectable

- **Normative:** The platform shall suppress password fields and configured sensitive input contexts whenever technically detectable.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-KEY-003`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### UAM-KEY-004 — Support keyword-trigger matching without retaining full raw keystroke streams when privacy policy selects detector-only mode

- **Normative:** The platform shall support keyword-trigger matching without retaining full raw keystroke streams when privacy policy selects detector-only mode.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-KEY-004`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### UAM-KEY-005 — Redact payment, health and credential patterns before server-side storage where feasible

- **Normative:** The platform shall redact payment, health and credential patterns before server-side storage where feasible.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-KEY-005`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### UAM-KEY-006 — Expose a visible focused-monitoring indicator to authorized administrators and maintain approval provenance

- **Normative:** The platform shall expose a visible focused-monitoring indicator to authorized administrators and maintain approval provenance.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-KEY-006`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### UAM-KEY-007 — Enforce separate retention and export permissions for raw keystroke evidence

- **Normative:** The platform shall enforce separate retention and export permissions for raw keystroke evidence.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-KEY-007`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### UAM-KEY-008 — Report unsupported applications/secure fields where suppression guarantees cannot be made

- **Normative:** The platform shall report unsupported applications/secure fields where suppression guarantees cannot be made.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-KEY-008`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

### UAM-SCR — 20 requirements (0 MUST)

#### UAM-SCR-001 — Continuous screenshot mode

- **Normative:** The platform shall support continuous/interval screenshot capture only for explicitly authorized groups/policies and shall display storage/privacy impact before activation.
- **Priority (v1.2):** SHOULD *(v1.0: SHOULD)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-SCR-001`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### UAM-SCR-002 — Capture keyword-triggered screenshots with trigger provenance

- **Normative:** The platform shall capture keyword-triggered screenshots with trigger provenance.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-SCR-002`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### UAM-SCR-003 — Capture activity-triggered screenshots for configured high-risk events

- **Normative:** The platform shall capture activity-triggered screenshots for configured high-risk events.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-SCR-003`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### UAM-SCR-004 — Support focused-observation screen capture with explicit start/expiry and case/policy linkage

- **Normative:** The platform shall support focused-observation screen capture with explicit start/expiry and case/policy linkage.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-SCR-004`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### UAM-SCR-005 — Support real-time screen view only for authorized roles and enabled endpoint policies

- **Normative:** The platform shall support real-time screen view only for authorized roles and enabled endpoint policies.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-SCR-005`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### UAM-SCR-006 — Create session replay from timestamped screenshots/events without requiring continuous video in normal mode

- **Normative:** The platform shall create session replay from timestamped screenshots/events without requiring continuous video in normal mode.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-SCR-006`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### UAM-SCR-007 — Support configurable screenshot frequency/FPS appropriate to observation level

- **Normative:** The platform shall support configurable screenshot frequency/FPS appropriate to observation level.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-SCR-007`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### UAM-SCR-008 — Capture configurable pre-event and post-event screenshot/evidence windows

- **Normative:** The platform shall capture configurable pre-event and post-event screenshot/evidence windows.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-SCR-008`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### UAM-SCR-009 — Associate each screenshot with user, device, application/window, event IDs, alert IDs and case references

- **Normative:** The platform shall associate each screenshot with user, device, application/window, event IDs, alert IDs and case references.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-SCR-009`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### UAM-SCR-010 — Apply text/image redaction before ordinary analyst access where rules identify sensitive regions

- **Normative:** The platform shall apply text/image redaction before ordinary analyst access where rules identify sensitive regions.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-SCR-010`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### UAM-SCR-011 — Support role-based original-vs-redacted evidence reveal with justification and audit

- **Normative:** The platform shall support role-based original-vs-redacted evidence reveal with justification and audit.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-SCR-011`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### UAM-SCR-012 — Support screenshot OCR indexing for permitted evidence

- **Normative:** The platform shall support screenshot OCR indexing for permitted evidence.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-SCR-012`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### UAM-SCR-013 — Support regex/keyword/semantic search over OCR text while respecting redaction and access scope

- **Normative:** The platform shall support regex/keyword/semantic search over OCR text while respecting redaction and access scope.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-SCR-013`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### UAM-SCR-014 — Support screenshot deletion by authorized privacy administrators when no legal hold applies

- **Normative:** The platform shall support screenshot deletion by authorized privacy administrators when no legal hold applies.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-SCR-014`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### UAM-SCR-015 — Support retention tiers and compression/quality controls

- **Normative:** The platform shall support retention tiers and compression/quality controls.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-SCR-015`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### UAM-SCR-016 — Support secure object storage with encryption, integrity hash and evidence provenance

- **Normative:** The platform shall support secure object storage with encryption, integrity hash and evidence provenance.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-SCR-016`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### UAM-SCR-017 — Detect black/secure screens and mark capture quality rather than presenting them as complete evidence

- **Normative:** The platform shall detect black/secure screens and mark capture quality rather than presenting them as complete evidence.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-SCR-017`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### UAM-SCR-018 — Support user-visible notification/pop-up when policy requires transparency

- **Normative:** The platform shall support user-visible notification/pop-up when policy requires transparency.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-SCR-018`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### UAM-SCR-019 — Prevent screenshots for Do Not Record apps/sites/windows and verify exclusion through test mode

- **Normative:** The platform shall prevent screenshots for Do Not Record apps/sites/windows and verify exclusion through test mode.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-SCR-019`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### UAM-SCR-020 — Expose screenshot volume/storage forecasts by policy before rollout

- **Normative:** The platform shall expose screenshot volume/storage forecasts by policy before rollout.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-SCR-020`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

### UAM-FILE — 30 requirements (30 MUST)

#### UAM-FILE-001 — Capture file create events with name, extension, path, size, user, device and source application when available

- **Normative:** The platform shall capture file create events with name, extension, path, size, user, device and source application when available.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-FILE-001`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-FILE-002 — Capture file open/read/access metadata where supported and appropriate

- **Normative:** The platform shall capture file open/read/access metadata where supported and appropriate.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-FILE-002`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-FILE-003 — Capture file write/modify events

- **Normative:** The platform shall capture file write/modify events.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-FILE-003`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-FILE-004 — Capture rename events with old and new names

- **Normative:** The platform shall capture rename events with old and new names.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-FILE-004`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-FILE-005 — Capture move events with old and new locations

- **Normative:** The platform shall capture move events with old and new locations.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-FILE-005`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-FILE-006 — Capture copy events with source and destination

- **Normative:** The platform shall capture copy events with source and destination.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-FILE-006`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-FILE-007 — Capture delete events and deletion context where observable

- **Normative:** The platform shall capture delete events and deletion context where observable.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-FILE-007`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-FILE-008 — Capture upload and download events from supported browser/cloud/file-transfer contexts

- **Normative:** The platform shall capture upload and download events from supported browser/cloud/file-transfer contexts.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-FILE-008`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-FILE-009 — Capture removable-media copy-in and copy-out events

- **Normative:** The platform shall capture removable-media copy-in and copy-out events.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-FILE-009`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-FILE-010 — Capture print events with document, printer/device type, page count and copies where available

- **Normative:** The platform shall capture print events with document, printer/device type, page count and copies where available.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-FILE-010`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-FILE-011 — Capture cloud-storage file activity through supported endpoint/cloud integrations

- **Normative:** The platform shall capture cloud-storage file activity through supported endpoint/cloud integrations.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-FILE-011`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-FILE-012 — Capture network-share and mapped-drive activity where supported

- **Normative:** The platform shall capture network-share and mapped-drive activity where supported.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-FILE-012`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-FILE-013 — Compute cryptographic hashes for configured files/events with size/performance safeguards

- **Normative:** The platform shall compute cryptographic hashes for configured files/events with size/performance safeguards.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-FILE-013`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-FILE-014 — Maintain file lineage across rename, move, copy, archive and transfer events when identifiers/hashes permit

- **Normative:** The platform shall maintain file lineage across rename, move, copy, archive and transfer events when identifiers/hashes permit.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-FILE-014`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-FILE-015 — Detect extension manipulation and misleading rename/obfuscation patterns

- **Normative:** The platform shall detect extension manipulation and misleading rename/obfuscation patterns.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-FILE-015`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-FILE-016 — Detect archive/compression and bulk staging behaviors

- **Normative:** The platform shall detect archive/compression and bulk staging behaviors.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-FILE-016`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-FILE-017 — Detect unusual file-access volume and velocity against user/peer baselines

- **Normative:** The platform shall detect unusual file-access volume and velocity against user/peer baselines.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-FILE-017`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-FILE-018 — Detect sensitive-file access followed by exfiltration-channel activity

- **Normative:** The platform shall detect sensitive-file access followed by exfiltration-channel activity.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-FILE-018`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-FILE-019 — Detect first-time removable storage and unusual removable-media usage

- **Normative:** The platform shall detect first-time removable storage and unusual removable-media usage.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-FILE-019`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-FILE-020 — Record removable-device vendor/product/serial identifiers where OS permissions provide them

- **Normative:** The platform shall record removable-device vendor/product/serial identifiers where OS permissions provide them.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-FILE-020`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-FILE-021 — Classify destination as local, removable, network, approved cloud, unsanctioned cloud, webmail or other transfer channel

- **Normative:** The platform shall classify destination as local, removable, network, approved cloud, unsanctioned cloud, webmail or other transfer channel.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-FILE-021`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-FILE-022 — Integrate sensitive-information type, sensitivity label and classification metadata when available

- **Normative:** The platform shall integrate sensitive-information type, sensitivity label and classification metadata when available.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-FILE-022`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-FILE-023 — Allow file/path exclusions and minimization policies

- **Normative:** The platform shall allow file/path exclusions and minimization policies.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-FILE-023`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-FILE-024 — Allow file-transfer warn/block controls for supported channels and elevated-risk states

- **Normative:** The platform shall allow file-transfer warn/block controls for supported channels and elevated-risk states.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-FILE-024`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-FILE-025 — Preserve event-source and collector confidence/coverage metadata

- **Normative:** The platform shall preserve event-source and collector confidence/coverage metadata.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-FILE-025`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-FILE-026 — Expose file lineage graph in investigations

- **Normative:** The platform shall expose file lineage graph in investigations.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-FILE-026`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-FILE-027 — Expose file activity in global search using filename, path, hash, extension, destination, user and device filters

- **Normative:** The platform shall expose file activity in global search using filename, path, hash, extension, destination, user and device filters.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-FILE-027`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-FILE-028 — Support high-volume aggregation views that do not require loading every raw event

- **Normative:** The platform shall support high-volume aggregation views that do not require loading every raw event.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-FILE-028`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-FILE-029 — Support legal-hold preservation for selected file events/evidence

- **Normative:** The platform shall support legal-hold preservation for selected file events/evidence.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-FILE-029`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-FILE-030 — Support secure evidence export with hashes, manifest and chain-of-custody metadata

- **Normative:** The platform shall support secure evidence export with hashes, manifest and chain-of-custody metadata.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-FILE-030`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

### UAM-NET — 14 requirements (14 MUST)

#### UAM-NET-001 — Capture application/process network connection metadata where supported

- **Normative:** The platform shall capture application/process network connection metadata where supported.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-NET-001`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-NET-002 — Capture remote domain/host, remote IP, port, protocol and connection timing

- **Normative:** The platform shall capture remote domain/host, remote IP, port, protocol and connection timing.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-NET-002`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-NET-003 — Capture bytes sent and received where supported without packet-content collection by default

- **Normative:** The platform shall capture bytes sent and received where supported without packet-content collection by default.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-NET-003`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-NET-004 — Associate network events with user, device, process/application and session

- **Normative:** The platform shall associate network events with user, device, process/application and session.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-NET-004`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-NET-005 — Classify destinations by corporate, approved SaaS, personal cloud, risky/malicious, unknown or other configured categories

- **Normative:** The platform shall classify destinations by corporate, approved SaaS, personal cloud, risky/malicious, unknown or other configured categories.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-NET-005`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-NET-006 — Detect unusual outbound volume/velocity relative to user and peer baseline

- **Normative:** The platform shall detect unusual outbound volume/velocity relative to user and peer baseline.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-NET-006`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-NET-007 — Detect new/rare destination relationships and first-seen external endpoints

- **Normative:** The platform shall detect new/rare destination relationships and first-seen external endpoints.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-NET-007`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-NET-008 — Correlate network connections with file-transfer, browser, application and alert events

- **Normative:** The platform shall correlate network connections with file-transfer, browser, application and alert events.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-NET-008`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-NET-009 — Support network-context indicators such as corporate LAN/VPN/off-network without invasive packet capture

- **Normative:** The platform shall support network-context indicators such as corporate LAN/VPN/off-network without invasive packet capture.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-NET-009`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-NET-010 — Detect remote-access and tunneling/tool usage through application and destination intelligence where observable

- **Normative:** The platform shall detect remote-access and tunneling/tool usage through application and destination intelligence where observable.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-NET-010`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-NET-011 — Expose network activity in user timeline, risk analysis and global search

- **Normative:** The platform shall expose network activity in user timeline, risk analysis and global search.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-NET-011`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-NET-012 — Support destination allow/warn/block actions through endpoint/network integrations when configured

- **Normative:** The platform shall support destination allow/warn/block actions through endpoint/network integrations when configured.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-NET-012`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-NET-013 — Retain only metadata by default and require explicit separate scope for content inspection

- **Normative:** The platform shall retain only metadata by default and require explicit separate scope for content inspection.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-NET-013`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### UAM-NET-014 — Report collector limitations for encrypted/proxied/virtualized network contexts

- **Normative:** The platform shall report collector limitations for encrypted/proxied/virtualized network contexts.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `UAM-NET-014`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

### PROD — 25 requirements (0 MUST)

#### PROD-001 — Contextual productivity classification

- **Normative:** The platform shall classify productivity contextually by team, role, project and schedule rather than using one global application/site rating.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Workforce
- **Strategy:** ADAPT
- **Release gate:** Workforce GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PROD-001`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Workforce GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### PROD-002 — Calculate productive, neutral and unproductive active time using versioned classification rules

- **Normative:** The platform shall calculate productive, neutral and unproductive active time using versioned classification rules.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Workforce
- **Strategy:** ADAPT
- **Release gate:** Workforce GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PROD-002`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Workforce GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### PROD-003 — Calculate focus time using uninterrupted productive work windows

- **Normative:** The platform shall calculate focus time using uninterrupted productive work windows.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Workforce
- **Strategy:** ADAPT
- **Release gate:** Workforce GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PROD-003`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Workforce GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### PROD-004 — Calculate collaboration/communication time separately from focus work

- **Normative:** The platform shall calculate collaboration/communication time separately from focus work.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Workforce
- **Strategy:** ADAPT
- **Release gate:** Workforce GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PROD-004`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Workforce GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### PROD-005 — Calculate context-switching frequency and application transition patterns

- **Normative:** The platform shall calculate context-switching frequency and application transition patterns.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Workforce
- **Strategy:** ADAPT
- **Release gate:** Workforce GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PROD-005`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Workforce GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### PROD-006 — Calculate active/idle patterns without interpreting idle time as performance failure

- **Normative:** The platform shall calculate active/idle patterns without interpreting idle time as performance failure.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Workforce
- **Strategy:** ADAPT
- **Release gate:** Workforce GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PROD-006`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Workforce GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### PROD-007 — Provide user productivity trends over configurable comparison periods

- **Normative:** The platform shall provide user productivity trends over configurable comparison periods.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Workforce
- **Strategy:** ADAPT
- **Release gate:** Workforce GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PROD-007`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Workforce GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### PROD-008 — Provide team/department trends with minimum cohort-size privacy controls

- **Normative:** The platform shall provide team/department trends with minimum cohort-size privacy controls.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Workforce
- **Strategy:** ADAPT
- **Release gate:** Workforce GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PROD-008`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Workforce GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### PROD-009 — Provide workload/capacity indicators based on sustained activity patterns and schedules

- **Normative:** The platform shall provide workload/capacity indicators based on sustained activity patterns and schedules.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Workforce
- **Strategy:** ADAPT
- **Release gate:** Workforce GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PROD-009`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Workforce GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### PROD-010 — Provide wellbeing/balance signals such as after-hours work, extended days and sustained overload without diagnostic labels

- **Normative:** The platform shall provide wellbeing/balance signals such as after-hours work, extended days and sustained overload without diagnostic labels.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Workforce
- **Strategy:** ADAPT
- **Release gate:** Workforce GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PROD-010`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Workforce GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### PROD-011 — Provide workflow-friction indicators for repetitive/manual process patterns

- **Normative:** The platform shall provide workflow-friction indicators for repetitive/manual process patterns.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Workforce
- **Strategy:** ADAPT
- **Release gate:** Workforce GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PROD-011`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Workforce GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### PROD-012 — Provide technology utilization analytics by application/category/licensed product

- **Normative:** The platform shall provide technology utilization analytics by application/category/licensed product.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Workforce
- **Strategy:** ADAPT
- **Release gate:** Workforce GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PROD-012`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Workforce GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### PROD-013 — Provide approved-vs-shadow application adoption insights

- **Normative:** The platform shall provide approved-vs-shadow application adoption insights.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Workforce
- **Strategy:** ADAPT
- **Release gate:** Workforce GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PROD-013`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Workforce GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### PROD-014 — Provide AI-tool usage, adoption maturity and approved/shadow AI visibility

- **Normative:** The platform shall provide AI-tool usage, adoption maturity and approved/shadow AI visibility.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Workforce
- **Strategy:** ADAPT
- **Release gate:** Workforce GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PROD-014`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Workforce GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### PROD-015 — Analyze AI-tool adoption against productivity/workflow outcomes without attributing causality solely from correlation

- **Normative:** The platform shall analyze AI-tool adoption against productivity/workflow outcomes without attributing causality solely from correlation.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Workforce
- **Strategy:** ADAPT
- **Release gate:** Workforce GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PROD-015`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Workforce GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### PROD-016 — Identify potentially underused paid software licenses using usage evidence and configurable thresholds

- **Normative:** The platform shall identify potentially underused paid software licenses using usage evidence and configurable thresholds.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Workforce
- **Strategy:** ADAPT
- **Release gate:** Workforce GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PROD-016`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Workforce GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### PROD-017 — Provide manager coaching insights with explainable supporting metrics

- **Normative:** The platform shall provide manager coaching insights with explainable supporting metrics.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Workforce
- **Strategy:** ADAPT
- **Release gate:** Workforce GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PROD-017`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Workforce GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### PROD-018 — Provide employee/personal insights where organization policy enables transparent self-service

- **Normative:** The platform shall provide employee/personal insights where organization policy enables transparent self-service.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Workforce
- **Strategy:** ADAPT
- **Release gate:** Workforce GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PROD-018`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Workforce GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### PROD-019 — Allow users/managers to annotate legitimate offline meetings, travel, training and leave without altering raw telemetry

- **Normative:** The platform shall allow users/managers to annotate legitimate offline meetings, travel, training and leave without altering raw telemetry.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Workforce
- **Strategy:** ADAPT
- **Release gate:** Workforce GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PROD-019`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Workforce GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### PROD-020 — Provide productivity goals/benchmarks using configurable peer/cohort comparison and guard against small-group deanonymization

- **Normative:** The platform shall provide productivity goals/benchmarks using configurable peer/cohort comparison and guard against small-group deanonymization.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Workforce
- **Strategy:** ADAPT
- **Release gate:** Workforce GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PROD-020`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Workforce GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### PROD-021 — Separate workforce analytics permissions from security investigation permissions

- **Normative:** The platform shall separate workforce analytics permissions from security investigation permissions.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Workforce
- **Strategy:** ADAPT
- **Release gate:** Workforce GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PROD-021`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Workforce GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### PROD-022 — Prevent raw keystroke/message/screenshot evidence from appearing in ordinary productivity dashboards by default

- **Normative:** The platform shall prevent raw keystroke/message/screenshot evidence from appearing in ordinary productivity dashboards by default.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Workforce
- **Strategy:** ADAPT
- **Release gate:** Workforce GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PROD-022`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Workforce GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### PROD-023 — Expose formula/rule version behind derived productivity metrics

- **Normative:** The platform shall expose formula/rule version behind derived productivity metrics.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Workforce
- **Strategy:** ADAPT
- **Release gate:** Workforce GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PROD-023`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Workforce GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### PROD-024 — Provide report and API access to aggregate productivity metrics subject to scope

- **Normative:** The platform shall provide report and API access to aggregate productivity metrics subject to scope.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Workforce
- **Strategy:** ADAPT
- **Release gate:** Workforce GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PROD-024`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Workforce GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### PROD-025 — Provide classification review workflows for newly observed apps/sites and disputed categorizations

- **Normative:** The platform shall provide classification review workflows for newly observed apps/sites and disputed categorizations.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Workforce
- **Strategy:** ADAPT
- **Release gate:** Workforce GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PROD-025`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Workforce GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

### IRM-RISK — 33 requirements (0 MUST)

#### IRM-RISK-001 — Behavioral baseline

- **Normative:** The platform shall maintain rolling user and peer-group behavioral baselines for time, application, web, file, transfer, communication, network, location and sensitivity-access patterns.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IRM-RISK-001`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### IRM-RISK-002 — Maintain separate short-term and long-term baseline windows where detection type requires both

- **Normative:** The platform shall maintain separate short-term and long-term baseline windows where detection type requires both.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IRM-RISK-002`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### IRM-RISK-003 — Build peer groups from organizational attributes plus behaviorally meaningful similarity with transparent membership

- **Normative:** The platform shall build peer groups from organizational attributes plus behaviorally meaningful similarity with transparent membership.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IRM-RISK-003`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### IRM-RISK-004 — Calculate anomaly signals for time, volume, velocity, destination, sequence, device, application, file and communication behavior

- **Normative:** The platform shall calculate anomaly signals for time, volume, velocity, destination, sequence, device, application, file and communication behavior.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IRM-RISK-004`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### IRM-RISK-005 — Calculate individual risk score and risk trend

- **Normative:** The platform shall calculate individual risk score and risk trend.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IRM-RISK-005`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### IRM-RISK-006 — Calculate group/team/department risk aggregation with drill-down

- **Normative:** The platform shall calculate group/team/department risk aggregation with drill-down.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IRM-RISK-006`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### IRM-RISK-007 — Calculate organization risk posture using transparent aggregation rules

- **Normative:** The platform shall calculate organization risk posture using transparent aggregation rules.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IRM-RISK-007`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### IRM-RISK-008 — Maintain risk factors with type, evidence references, weight, confidence, first/last seen and decay behavior

- **Normative:** The platform shall maintain risk factors with type, evidence references, weight, confidence, first/last seen and decay behavior.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IRM-RISK-008`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### IRM-RISK-009 — Explain every risk-score change with contributing factors and score delta

- **Normative:** The platform shall explain every risk-score change with contributing factors and score delta.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IRM-RISK-009`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### IRM-RISK-010 — Maintain a risk ledger so investigators can reproduce historical scores from versioned signals/models

- **Normative:** The platform shall maintain a risk ledger so investigators can reproduce historical scores from versioned signals/models.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IRM-RISK-010`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### IRM-RISK-011 — Support configurable deterministic risk rules independent of ML/AI models

- **Normative:** The platform shall support configurable deterministic risk rules independent of ML/AI models.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IRM-RISK-011`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### IRM-RISK-012 — Support statistical anomaly models with model/version provenance

- **Normative:** The platform shall support statistical anomaly models with model/version provenance.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IRM-RISK-012`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### IRM-RISK-013 — Support ML risk models with training/validation metadata and controlled deployment

- **Normative:** The platform shall support ML risk models with training/validation metadata and controlled deployment.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IRM-RISK-013`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### IRM-RISK-014 — Support risk-score boosters for prior confirmed cases, priority groups, high-impact users and abnormal deviation where policy permits

- **Normative:** The platform shall support risk-score boosters for prior confirmed cases, priority groups, high-impact users and abnormal deviation where policy permits.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IRM-RISK-014`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### IRM-RISK-015 — Support risk-score suppressors/exclusions for known approved activities and sanctioned workflows

- **Normative:** The platform shall support risk-score suppressors/exclusions for known approved activities and sanctioned workflows.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IRM-RISK-015`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### IRM-RISK-016 — Support risk decay so stale events do not permanently stigmatize users

- **Normative:** The platform shall support risk decay so stale events do not permanently stigmatize users.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IRM-RISK-016`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### IRM-RISK-017 — Distinguish careless, malicious, compromised-account and policy/process risk hypotheses without automatically declaring intent

- **Normative:** The platform shall distinguish careless, malicious, compromised-account and policy/process risk hypotheses without automatically declaring intent.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IRM-RISK-017`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### IRM-RISK-018 — Correlate HR/employment lifecycle events such as notice period or contractor expiration as context, not automatic guilt indicators

- **Normative:** The platform shall correlate HR/employment lifecycle events such as notice period or contractor expiration as context, not automatic guilt indicators.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IRM-RISK-018`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### IRM-RISK-019 — Detect anomalous after-hours activity and unusual session patterns

- **Normative:** The platform shall detect anomalous after-hours activity and unusual session patterns.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IRM-RISK-019`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### IRM-RISK-020 — Detect sensitive-data access spikes

- **Normative:** The platform shall detect sensitive-data access spikes.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IRM-RISK-020`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### IRM-RISK-021 — Detect unusual large download/upload or removable-media patterns

- **Normative:** The platform shall detect unusual large download/upload or removable-media patterns.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IRM-RISK-021`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### IRM-RISK-022 — Detect new external destinations and external communication shifts

- **Normative:** The platform shall detect new external destinations and external communication shifts.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IRM-RISK-022`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### IRM-RISK-023 — Detect archiving/staging/obfuscation behaviors associated with possible exfiltration

- **Normative:** The platform shall detect archiving/staging/obfuscation behaviors associated with possible exfiltration.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IRM-RISK-023`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### IRM-RISK-024 — Detect security-control/tampering events as elevated risk context

- **Normative:** The platform shall detect security-control/tampering events as elevated risk context.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IRM-RISK-024`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### IRM-RISK-025 — Detect approved/unapproved GenAI use involving sensitive-data context where signals exist

- **Normative:** The platform shall detect approved/unapproved GenAI use involving sensitive-data context where signals exist.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IRM-RISK-025`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### IRM-RISK-026 — Support manual analyst risk adjustments with mandatory reason, expiry and audit

- **Normative:** The platform shall support manual analyst risk adjustments with mandatory reason, expiry and audit.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IRM-RISK-026`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### IRM-RISK-027 — Support risk severity tiers with organization-specific thresholds

- **Normative:** The platform shall support risk severity tiers with organization-specific thresholds.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IRM-RISK-027`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### IRM-RISK-028 — Support risk threshold simulation before production activation

- **Normative:** The platform shall support risk threshold simulation before production activation.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IRM-RISK-028`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### IRM-RISK-029 — Provide user risk detail with timeline, factors, baselines, sequences and related alerts/cases

- **Normative:** The platform shall provide user risk detail with timeline, factors, baselines, sequences and related alerts/cases.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IRM-RISK-029`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### IRM-RISK-030 — Provide risk-model fairness/quality metrics across appropriate non-sensitive operational cohorts without inferring protected traits

- **Normative:** The platform shall provide risk-model fairness/quality metrics across appropriate non-sensitive operational cohorts without inferring protected traits.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IRM-RISK-030`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### IRM-RISK-031 — Provide feedback loop from case outcomes to detection evaluation without automatically retraining production models

- **Normative:** The platform shall provide feedback loop from case outcomes to detection evaluation without automatically retraining production models.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IRM-RISK-031`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### IRM-RISK-032 — Support organization-controlled risk vocabulary and categories

- **Normative:** The platform shall support organization-controlled risk vocabulary and categories.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IRM-RISK-032`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### IRM-RISK-033 — Expose risk via API/webhook without exposing restricted evidence to unauthorized integrations

- **Normative:** The platform shall expose risk via API/webhook without exposing restricted evidence to unauthorized integrations.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IRM-RISK-033`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

### IRM-SEQ — 14 requirements (0 MUST)

#### IRM-SEQ-001 — Ordered sequence detection

- **Normative:** The platform shall detect configurable ordered sequences of events within time windows, including collection, staging, obfuscation, exfiltration and cleanup patterns.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** SURPASS
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IRM-SEQ-001`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### IRM-SEQ-002 — Support sequence steps defined by event type, filter, data sensitivity, destination, volume and risk context

- **Normative:** The platform shall support sequence steps defined by event type, filter, data sensitivity, destination, volume and risk context.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IRM-SEQ-002`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### IRM-SEQ-003 — Support optional/alternative sequence branches and maximum/minimum step intervals

- **Normative:** The platform shall support optional/alternative sequence branches and maximum/minimum step intervals.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IRM-SEQ-003`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### IRM-SEQ-004 — Support cumulative exfiltration models across multiple channels and events rather than requiring one large transfer

- **Normative:** The platform shall support cumulative exfiltration models across multiple channels and events rather than requiring one large transfer.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IRM-SEQ-004`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### IRM-SEQ-005 — Compare cumulative exfiltration against the user own history and appropriate peer cohort

- **Normative:** The platform shall compare cumulative exfiltration against the user own history and appropriate peer cohort.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IRM-SEQ-005`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### IRM-SEQ-006 — Support file-volume/record-count/byte thresholds as sequence conditions

- **Normative:** The platform shall support file-volume/record-count/byte thresholds as sequence conditions.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IRM-SEQ-006`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### IRM-SEQ-007 — Correlate excluded/low-risk contextual events into an investigation sequence without necessarily scoring them

- **Normative:** The platform shall correlate excluded/low-risk contextual events into an investigation sequence without necessarily scoring them.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IRM-SEQ-007`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### IRM-SEQ-008 — Correlate file lineage so sequences can follow the same data through rename/archive/upload actions

- **Normative:** The platform shall correlate file lineage so sequences can follow the same data through rename/archive/upload actions.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IRM-SEQ-008`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### IRM-SEQ-009 — Create sequence evidence objects with step timestamps, contributing events and confidence

- **Normative:** The platform shall create sequence evidence objects with step timestamps, contributing events and confidence.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IRM-SEQ-009`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### IRM-SEQ-010 — Allow analysts to replay why a sequence matched and which condition rejected near-matches

- **Normative:** The platform shall allow analysts to replay why a sequence matched and which condition rejected near-matches.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IRM-SEQ-010`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### IRM-SEQ-011 — Support versioned sequence templates for common insider-risk kill-chain patterns

- **Normative:** The platform shall support versioned sequence templates for common insider-risk kill-chain patterns.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IRM-SEQ-011`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### IRM-SEQ-012 — Support historical replay/backtesting of new sequence logic against authorized retained telemetry

- **Normative:** The platform shall support historical replay/backtesting of new sequence logic against authorized retained telemetry.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IRM-SEQ-012`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### IRM-SEQ-013 — Support sequence-specific alert severity, escalation and adaptive-observation actions

- **Normative:** The platform shall support sequence-specific alert severity, escalation and adaptive-observation actions.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IRM-SEQ-013`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### IRM-SEQ-014 — Expose sequence analytics in user risk pages, dashboards, cases, reports and APIs

- **Normative:** The platform shall expose sequence analytics in user risk pages, dashboards, cases, reports and APIs.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `IRM-SEQ-014`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

### DLP — 25 requirements (0 MUST)

#### DLP-001 — Create and manage sensitive-information types, labels, classifiers and data categories

- **Normative:** The platform shall create and manage sensitive-information types, labels, classifiers and data categories.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DLP-001`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### DLP-002 — Ingest Microsoft sensitivity labels and compatible classification metadata when integrated

- **Normative:** The platform shall ingest Microsoft sensitivity labels and compatible classification metadata when integrated.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DLP-002`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### DLP-003 — Support custom regex, dictionaries, exact-data match/fingerprint references and classifier plugins where licensed

- **Normative:** The platform shall support custom regex, dictionaries, exact-data match/fingerprint references and classifier plugins where licensed.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DLP-003`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### DLP-004 — Detect sensitive-data findings in authorized file, transfer, email, cloud and screen/OCR contexts

- **Normative:** The platform shall detect sensitive-data findings in authorized file, transfer, email, cloud and screen/OCR contexts.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DLP-004`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### DLP-005 — Assign confidence, classifier version and evidence reference to each finding

- **Normative:** The platform shall assign confidence, classifier version and evidence reference to each finding.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DLP-005`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### DLP-006 — Apply warn/block/audit actions by data class, channel, destination, user/group and risk state

- **Normative:** The platform shall apply warn/block/audit actions by data class, channel, destination, user/group and risk state.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DLP-006`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### DLP-007 — Control external sharing through integrated Microsoft 365/DLP controls where configured

- **Normative:** The platform shall control external sharing through integrated Microsoft 365/DLP controls where configured.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DLP-007`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### DLP-008 — Control clipboard, removable media, network share, print and restricted-app channels through supported endpoint/DLP integrations

- **Normative:** The platform shall control clipboard, removable media, network share, print and restricted-app channels through supported endpoint/DLP integrations.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DLP-008`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### DLP-009 — Support adaptive controls that become stricter at moderate/elevated risk and relax after risk decays

- **Normative:** The platform shall support adaptive controls that become stricter at moderate/elevated risk and relax after risk decays.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DLP-009`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### DLP-010 — Support report-only/simulation mode before enforcing a DLP action

- **Normative:** The platform shall support report-only/simulation mode before enforcing a DLP action.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DLP-010`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### DLP-011 — Support user justification/override for configured warn policies and store the justification

- **Normative:** The platform shall support user justification/override for configured warn policies and store the justification.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DLP-011`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### DLP-012 — Support manager/security approval for configured high-impact exceptions

- **Normative:** The platform shall support manager/security approval for configured high-impact exceptions.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DLP-012`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### DLP-013 — Provide centralized exception lists with owner, reason, scope and expiry

- **Normative:** The platform shall provide centralized exception lists with owner, reason, scope and expiry.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DLP-013`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### DLP-014 — Detect personal cloud, webmail and public sharing destinations

- **Normative:** The platform shall detect personal cloud, webmail and public sharing destinations.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DLP-014`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### DLP-015 — Detect bulk data staging before transfer

- **Normative:** The platform shall detect bulk data staging before transfer.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DLP-015`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### DLP-016 — Detect cumulative exfiltration across multiple small transfers

- **Normative:** The platform shall detect cumulative exfiltration across multiple small transfers.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DLP-016`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### DLP-017 — Detect print-based and removable-media exfiltration patterns

- **Normative:** The platform shall detect print-based and removable-media exfiltration patterns.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DLP-017`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### DLP-018 — Support file lineage linking sensitive source content to transformed/renamed copies where possible

- **Normative:** The platform shall support file lineage linking sensitive source content to transformed/renamed copies where possible.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DLP-018`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### DLP-019 — Integrate risk state with identity/conditional-access tools for adaptive restrictions where explicitly configured

- **Normative:** The platform shall integrate risk state with identity/conditional-access tools for adaptive restrictions where explicitly configured.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DLP-019`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### DLP-020 — Provide data-loss incident queue linked to underlying user risk and evidence

- **Normative:** The platform shall provide data-loss incident queue linked to underlying user risk and evidence.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DLP-020`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### DLP-021 — Prevent automatic destructive response based solely on opaque AI output; require deterministic policy or authorized workflow

- **Normative:** The platform shall prevent automatic destructive response based solely on opaque AI output; require deterministic policy or authorized workflow.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DLP-021`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### DLP-022 — Expose policy match explanation, classifier confidence and action taken to investigators

- **Normative:** The platform shall expose policy match explanation, classifier confidence and action taken to investigators.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DLP-022`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### DLP-023 — Support separate policy for AI prompt/upload destinations and approved enterprise AI services

- **Normative:** The platform shall support separate policy for AI prompt/upload destinations and approved enterprise AI services.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DLP-023`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### DLP-024 — Provide metrics for blocked, warned, overridden, false-positive and confirmed incidents

- **Normative:** The platform shall provide metrics for blocked, warned, overridden, false-positive and confirmed incidents.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DLP-024`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### DLP-025 — Provide API/webhook integration for external DLP/SIEM/SOAR systems

- **Normative:** The platform shall provide API/webhook integration for external DLP/SIEM/SOAR systems.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DLP-025`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

### POL — 30 requirements (0 MUST)

#### POL-001 — Provide policy library with system templates and custom policies

- **Normative:** The platform shall provide policy library with system templates and custom policies.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `POL-001`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### POL-002 — Provide no-code condition builder for event, user, group, device, schedule, sensitivity, destination, risk and volume conditions

- **Normative:** The platform shall provide no-code condition builder for event, user, group, device, schedule, sensitivity, destination, risk and volume conditions.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `POL-002`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### POL-003 — Support Boolean AND, OR, NOT and grouped/nested expressions

- **Normative:** The platform shall support Boolean AND, OR, NOT and grouped/nested expressions.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `POL-003`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### POL-004 — Support threshold, count, rate, duration, first-seen, rare-event and percentage conditions

- **Normative:** The platform shall support threshold, count, rate, duration, first-seen, rare-event and percentage conditions.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `POL-004`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### POL-005 — Support rolling, fixed and calendar time windows

- **Normative:** The platform shall support rolling, fixed and calendar time windows.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `POL-005`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### POL-006 — Support work-hours, after-hours, weekday/weekend and custom schedule conditions

- **Normative:** The platform shall support work-hours, after-hours, weekday/weekend and custom schedule conditions.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `POL-006`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### POL-007 — Support user/group/department/location/priority-group scope

- **Normative:** The platform shall support user/group/department/location/priority-group scope.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `POL-007`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### POL-008 — Support ungrouped/new-user scope where explicitly selected

- **Normative:** The platform shall support ungrouped/new-user scope where explicitly selected.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `POL-008`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### POL-009 — Support keyword/dictionary/regex/category conditions across permitted telemetry fields

- **Normative:** The platform shall support keyword/dictionary/regex/category conditions across permitted telemetry fields.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `POL-009`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### POL-010 — Support anomaly score, risk score and sequence-match conditions

- **Normative:** The platform shall support anomaly score, risk score and sequence-match conditions.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `POL-010`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### POL-011 — Support data sensitivity/classifier and destination conditions

- **Normative:** The platform shall support data sensitivity/classifier and destination conditions.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `POL-011`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### POL-012 — Support application, website, file, transfer, print, communication, login and network event conditions

- **Normative:** The platform shall support application, website, file, transfer, print, communication, login and network event conditions.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `POL-012`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### POL-013 — Support actions including audit-only, alert, notify user, warn, require justification, capture focused evidence, increase observation, block, terminate/restrict through supported controls and create case/task

- **Normative:** The platform shall support actions including audit-only, alert, notify user, warn, require justification, capture focused evidence, increase observation, block, terminate/restrict through supported controls and create case/task.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `POL-013`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### POL-014 — Support alert recipients/operators distinct from monitored users

- **Normative:** The platform shall support alert recipients/operators distinct from monitored users.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `POL-014`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### POL-015 — Support email, webhook, in-product and approved collaboration-channel notifications

- **Normative:** The platform shall support email, webhook, in-product and approved collaboration-channel notifications.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `POL-015`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### POL-016 — Support alert frequency/deduplication, suppression and aggregation windows

- **Normative:** The platform shall support alert frequency/deduplication, suppression and aggregation windows.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `POL-016`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### POL-017 — Support alert severity and escalation paths

- **Normative:** The platform shall support alert severity and escalation paths.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `POL-017`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### POL-018 — Support pre/post-event context collection windows subject to privacy approval

- **Normative:** The platform shall support pre/post-event context collection windows subject to privacy approval.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `POL-018`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### POL-019 — Support policy versioning, draft, review, approval, publish and rollback lifecycle

- **Normative:** The platform shall support policy versioning, draft, review, approval, publish and rollback lifecycle.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `POL-019`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### POL-020 — Support four-eyes approval for policies enabling focused content/keystroke/screen collection

- **Normative:** The platform shall support four-eyes approval for policies enabling focused content/keystroke/screen collection.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `POL-020`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### POL-021 — Support policy ownership, business purpose, legal basis, jurisdiction and expiry metadata

- **Normative:** The platform shall support policy ownership, business purpose, legal basis, jurisdiction and expiry metadata.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `POL-021`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### POL-022 — Support policy simulation against historical telemetry before deployment

- **Normative:** The platform shall support policy simulation against historical telemetry before deployment.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `POL-022`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### POL-023 — Show projected match volume, affected population, expected evidence collection and privacy impact during simulation

- **Normative:** The platform shall show projected match volume, affected population, expected evidence collection and privacy impact during simulation.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `POL-023`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### POL-024 — Support policy health dashboard for no-data, overtriggering, stale rules, collector gaps and conflicting policies

- **Normative:** The platform shall support policy health dashboard for no-data, overtriggering, stale rules, collector gaps and conflicting policies.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `POL-024`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### POL-025 — Support policy effectiveness metrics including alerts, escalations, cases, true/false positives and prevention actions

- **Normative:** The platform shall support policy effectiveness metrics including alerts, escalations, cases, true/false positives and prevention actions.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `POL-025`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### POL-026 — Support exclusion precedence and show which rule won when policies conflict

- **Normative:** The platform shall support exclusion precedence and show which rule won when policies conflict.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `POL-026`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### POL-027 — Support centrally managed reusable lists such as approved domains, sanctioned apps, sensitive groups and exceptions

- **Normative:** The platform shall support centrally managed reusable lists such as approved domains, sanctioned apps, sensitive groups and exceptions.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `POL-027`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### POL-028 — Support detection-as-code representation in a documented, versionable format alongside the no-code editor

- **Normative:** The platform shall support detection-as-code representation in a documented, versionable format alongside the no-code editor.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `POL-028`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### POL-029 — Support import/export of policy packages with schema validation and environment promotion

- **Normative:** The platform shall support import/export of policy packages with schema validation and environment promotion.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `POL-029`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### POL-030 — Maintain complete audit history of policy edits, approvals, simulation, publication, match and rollback events

- **Normative:** The platform shall maintain complete audit history of policy edits, approvals, simulation, publication, match and rollback events.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** IRM Protect
- **Strategy:** ADAPT
- **Release gate:** IRM Protect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `POL-030`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `IRM Protect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

### INV — 25 requirements (0 MUST)

#### INV-001 — Create investigation cases manually or from alert/risk workflows

- **Normative:** The platform shall create investigation cases manually or from alert/risk workflows.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `INV-001`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### INV-002 — Assign case owner, investigators, reviewers, legal/compliance stakeholders and scoped access

- **Normative:** The platform shall assign case owner, investigators, reviewers, legal/compliance stakeholders and scoped access.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `INV-002`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### INV-003 — Maintain case status, priority, category, business purpose, jurisdiction and retention/legal-hold state

- **Normative:** The platform shall maintain case status, priority, category, business purpose, jurisdiction and retention/legal-hold state.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `INV-003`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### INV-004 — Add one or more subject users, devices, identities, groups and data assets to a case

- **Normative:** The platform shall add one or more subject users, devices, identities, groups and data assets to a case.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `INV-004`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### INV-005 — Build chronological user/activity timeline across application, web, communication, file, transfer, print, network, login, screenshot, risk and alert events

- **Normative:** The platform shall build chronological user/activity timeline across application, web, communication, file, transfer, print, network, login, screenshot, risk and alert events.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `INV-005`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### INV-006 — Provide universal case search with filters for user, device, event type, time, application, domain, path, hash, keyword, risk and sensitivity

- **Normative:** The platform shall provide universal case search with filters for user, device, event type, time, application, domain, path, hash, keyword, risk and sensitivity.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `INV-006`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### INV-007 — Provide full-text/OCR search over authorized evidence with exact phrase, Boolean and regex support

- **Normative:** The platform shall provide full-text/OCR search over authorized evidence with exact phrase, Boolean and regex support.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `INV-007`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### INV-008 — Provide semantic/natural-language investigation search that always links answers to underlying event/evidence IDs

- **Normative:** The platform shall provide semantic/natural-language investigation search that always links answers to underlying event/evidence IDs.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `INV-008`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### INV-009 — Provide session reconstruction/playback synchronized with events and screenshots

- **Normative:** The platform shall provide session reconstruction/playback synchronized with events and screenshots.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `INV-009`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### INV-010 — Provide file-lineage graph showing source, copies, renames, archives and destinations

- **Normative:** The platform shall provide file-lineage graph showing source, copies, renames, archives and destinations.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `INV-010`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### INV-011 — Provide communication context with participant and attachment links subject to redaction

- **Normative:** The platform shall provide communication context with participant and attachment links subject to redaction.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `INV-011`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### INV-012 — Provide risk-factor and baseline comparison views inside a case

- **Normative:** The platform shall provide risk-factor and baseline comparison views inside a case.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `INV-012`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### INV-013 — Provide ordered-sequence visualization and cumulative exfiltration explanation

- **Normative:** The platform shall provide ordered-sequence visualization and cumulative exfiltration explanation.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `INV-013`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### INV-014 — Allow investigators to bookmark/pin evidence without copying it out of governed storage

- **Normative:** The platform shall allow investigators to bookmark/pin evidence without copying it out of governed storage.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `INV-014`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### INV-015 — Allow case notes, hypotheses, tasks and comments with author/timestamp history

- **Normative:** The platform shall allow case notes, hypotheses, tasks and comments with author/timestamp history.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `INV-015`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### INV-016 — Allow evidence annotations without altering original evidence

- **Normative:** The platform shall allow evidence annotations without altering original evidence.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `INV-016`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### INV-017 — Create evidence snapshots/manifests with hashes and chain-of-custody metadata

- **Normative:** The platform shall create evidence snapshots/manifests with hashes and chain-of-custody metadata.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `INV-017`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### INV-018 — Support legal hold that overrides normal retention for case-scoped evidence

- **Normative:** The platform shall support legal hold that overrides normal retention for case-scoped evidence.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `INV-018`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### INV-019 — Support redacted evidence packages for HR/legal/external review

- **Normative:** The platform shall support redacted evidence packages for HR/legal/external review.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `INV-019`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### INV-020 — Support privileged original evidence reveal using step-up authentication, reason and audit

- **Normative:** The platform shall support privileged original evidence reveal using step-up authentication, reason and audit.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `INV-020`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### INV-021 — Export case packages including event timeline, evidence manifest, hashes, notes and generated report

- **Normative:** The platform shall export case packages including event timeline, evidence manifest, hashes, notes and generated report.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `INV-021`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### INV-022 — Log every case access, search, evidence view, reveal, download, export and status change

- **Normative:** The platform shall log every case access, search, evidence view, reveal, download, export and status change.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `INV-022`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### INV-023 — Support case closure outcomes and detection feedback labels without deleting immutable history

- **Normative:** The platform shall support case closure outcomes and detection feedback labels without deleting immutable history.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `INV-023`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### INV-024 — Support related-case linking and duplicate/overlapping-subject detection

- **Normative:** The platform shall support related-case linking and duplicate/overlapping-subject detection.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `INV-024`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### INV-025 — Prevent ordinary managers from opening security cases unless explicitly assigned and authorized

- **Normative:** The platform shall prevent ordinary managers from opening security cases unless explicitly assigned and authorized.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Investigate
- **Strategy:** ADAPT
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `INV-025`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

### DASH — 20 requirements (20 MUST)

#### DASH-001 — Provide security/risk overview dashboard with organization posture and top changes

- **Normative:** The platform shall provide security/risk overview dashboard with organization posture and top changes.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DASH-001`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### DASH-002 — Provide high-risk users dashboard with factors, trends, severity and last activity

- **Normative:** The platform shall provide high-risk users dashboard with factors, trends, severity and last activity.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DASH-002`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### DASH-003 — Provide group/department risk dashboard

- **Normative:** The platform shall provide group/department risk dashboard.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DASH-003`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### DASH-004 — Provide alert operations dashboard with severity, status, SLA age, policy and assignee

- **Normative:** The platform shall provide alert operations dashboard with severity, status, SLA age, policy and assignee.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DASH-004`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### DASH-005 — Provide investigation/case dashboard with status, owner, priority and age

- **Normative:** The platform shall provide investigation/case dashboard with status, owner, priority and age.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DASH-005`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### DASH-006 — Provide sensitive-data/DLP dashboard with channels, destinations and actions

- **Normative:** The platform shall provide sensitive-data/DLP dashboard with channels, destinations and actions.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DASH-006`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### DASH-007 — Provide workforce productivity dashboard with productive/neutral/unproductive active time and trends

- **Normative:** The platform shall provide workforce productivity dashboard with productive/neutral/unproductive active time and trends.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DASH-007`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### DASH-008 — Provide workload/wellbeing dashboard using privacy-preserving aggregate indicators

- **Normative:** The platform shall provide workload/wellbeing dashboard using privacy-preserving aggregate indicators.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DASH-008`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### DASH-009 — Provide technology/app utilization dashboard

- **Normative:** The platform shall provide technology/app utilization dashboard.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DASH-009`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### DASH-010 — Provide AI adoption and AI governance dashboard

- **Normative:** The platform shall provide AI adoption and AI governance dashboard.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DASH-010`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### DASH-011 — Provide executive dashboard with organizational risk posture, workforce trends and cross-functional KPIs

- **Normative:** The platform shall provide executive dashboard with organizational risk posture, workforce trends and cross-functional KPIs.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DASH-011`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### DASH-012 — Provide agent/device fleet health dashboard

- **Normative:** The platform shall provide agent/device fleet health dashboard.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DASH-012`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### DASH-013 — Provide data-quality/telemetry coverage dashboard

- **Normative:** The platform shall provide data-quality/telemetry coverage dashboard.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DASH-013`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### DASH-014 — Allow dashboard filters by time, organization, location, risk, policy and event type as appropriate

- **Normative:** The platform shall allow dashboard filters by time, organization, location, risk, policy and event type as appropriate.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DASH-014`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### DASH-015 — Allow role-specific dashboard layouts with saved views

- **Normative:** The platform shall allow role-specific dashboard layouts with saved views.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DASH-015`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### DASH-016 — Allow widget drill-down to source records without leaking unauthorized data

- **Normative:** The platform shall allow widget drill-down to source records without leaking unauthorized data.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DASH-016`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### DASH-017 — Provide configurable reports and report builder

- **Normative:** The platform shall provide configurable reports and report builder.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DASH-017`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### DASH-018 — Provide scheduled report delivery with scoped recipients and secure links

- **Normative:** The platform shall provide scheduled report delivery with scoped recipients and secure links.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DASH-018`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### DASH-019 — Export permitted report data to CSV, XLSX, PDF and JSON/API

- **Normative:** The platform shall export permitted report data to CSV, XLSX, PDF and JSON/API.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DASH-019`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### DASH-020 — Provide globally available search across authorized activity, alerts, users, devices, policies and cases

- **Normative:** The platform shall provide globally available search across authorized activity, alerts, users, devices, policies and cases.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DASH-020`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

### INT — 25 requirements (0 MUST)

#### INT-001 — Provide versioned REST API for users, groups, devices, policies, events, alerts, risk, cases, reports and integrations

- **Normative:** The platform shall provide versioned REST API for users, groups, devices, policies, events, alerts, risk, cases, reports and integrations.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Connect
- **Strategy:** ADAPT
- **Release gate:** Connect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `INT-001`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Connect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### INT-002 — Provide webhook subscriptions for alert, risk, case, agent-health and policy events

- **Normative:** The platform shall provide webhook subscriptions for alert, risk, case, agent-health and policy events.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Connect
- **Strategy:** ADAPT
- **Release gate:** Connect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `INT-002`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Connect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### INT-003 — Provide API pagination, filtering, sorting, field selection and time-range controls

- **Normative:** The platform shall provide API pagination, filtering, sorting, field selection and time-range controls.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Connect
- **Strategy:** ADAPT
- **Release gate:** Connect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `INT-003`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Connect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### INT-004 — Provide tenant-scoped API rate limits and usage telemetry

- **Normative:** The platform shall provide tenant-scoped API rate limits and usage telemetry.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Connect
- **Strategy:** ADAPT
- **Release gate:** Connect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `INT-004`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Connect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### INT-005 — Provide idempotency keys for write APIs where retry could duplicate actions

- **Normative:** The platform shall provide idempotency keys for write APIs where retry could duplicate actions.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Connect
- **Strategy:** ADAPT
- **Release gate:** Connect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `INT-005`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Connect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### INT-006 — Provide OpenAPI documentation and generated client examples

- **Normative:** The platform shall provide OpenAPI documentation and generated client examples.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Connect
- **Strategy:** ADAPT
- **Release gate:** Connect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `INT-006`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Connect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### INT-007 — Integrate Microsoft 365 identity and activity sources including Entra ID, Exchange, Teams, SharePoint and OneDrive where permissions permit

- **Normative:** The platform shall integrate Microsoft 365 identity and activity sources including Entra ID, Exchange, Teams, SharePoint and OneDrive where permissions permit.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Connect
- **Strategy:** ADAPT
- **Release gate:** Connect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `INT-007`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Connect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### INT-008 — Ingest sensitivity labels/classification metadata from Microsoft Purview-compatible sources when configured

- **Normative:** The platform shall ingest sensitivity labels/classification metadata from Microsoft Purview-compatible sources when configured.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Connect
- **Strategy:** ADAPT
- **Release gate:** Connect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `INT-008`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Connect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### INT-009 — Integrate HR systems for employee lifecycle/context with purpose limitations

- **Normative:** The platform shall integrate HR systems for employee lifecycle/context with purpose limitations.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Connect
- **Strategy:** ADAPT
- **Release gate:** Connect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `INT-009`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Connect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### INT-010 — Integrate SIEM platforms using API/webhook/syslog/connector patterns

- **Normative:** The platform shall integrate SIEM platforms using API/webhook/syslog/connector patterns.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Connect
- **Strategy:** ADAPT
- **Release gate:** Connect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `INT-010`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Connect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### INT-011 — Integrate SOAR platforms for approved response workflows

- **Normative:** The platform shall integrate SOAR platforms for approved response workflows.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Connect
- **Strategy:** ADAPT
- **Release gate:** Connect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `INT-011`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Connect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### INT-012 — Integrate DLP platforms to exchange policy/risk/event context

- **Normative:** The platform shall integrate DLP platforms to exchange policy/risk/event context.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Connect
- **Strategy:** ADAPT
- **Release gate:** Connect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `INT-012`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Connect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### INT-013 — Integrate IAM/Conditional Access systems for adaptive restrictions when explicitly enabled

- **Normative:** The platform shall integrate IAM/Conditional Access systems for adaptive restrictions when explicitly enabled.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Connect
- **Strategy:** ADAPT
- **Release gate:** Connect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `INT-013`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Connect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### INT-014 — Integrate ticketing/case systems such as ServiceNow/Jira through configurable connectors

- **Normative:** The platform shall integrate ticketing/case systems such as ServiceNow/Jira through configurable connectors.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Connect
- **Strategy:** ADAPT
- **Release gate:** Connect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `INT-014`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Connect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### INT-015 — Integrate directory services through AD/LDAP/Entra/SCIM

- **Normative:** The platform shall integrate directory services through AD/LDAP/Entra/SCIM.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Connect
- **Strategy:** ADAPT
- **Release gate:** Connect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `INT-015`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Connect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### INT-016 — Integrate MDM/device management systems for deployment and device state

- **Normative:** The platform shall integrate MDM/device management systems for deployment and device state.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Connect
- **Strategy:** ADAPT
- **Release gate:** Connect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `INT-016`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Connect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### INT-017 — Integrate approved threat-intelligence/domain reputation sources

- **Normative:** The platform shall integrate approved threat-intelligence/domain reputation sources.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Connect
- **Strategy:** ADAPT
- **Release gate:** Connect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `INT-017`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Connect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### INT-018 — Provide customer-controlled data export to object storage/lakehouse in normalized schema

- **Normative:** The platform shall provide customer-controlled data export to object storage/lakehouse in normalized schema.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Connect
- **Strategy:** ADAPT
- **Release gate:** Connect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `INT-018`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Connect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### INT-019 — Provide MCP server/tool interface for approved AI investigation clients with strict authorization and redaction

- **Normative:** The platform shall provide MCP server/tool interface for approved AI investigation clients with strict authorization and redaction.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Connect
- **Strategy:** ADAPT
- **Release gate:** Connect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `INT-019`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Connect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### INT-020 — Allow Bring Your Own LLM endpoints for investigation summarization/analysis through controlled AI gateway

- **Normative:** The platform shall allow Bring Your Own LLM endpoints for investigation summarization/analysis through controlled AI gateway.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Connect
- **Strategy:** ADAPT
- **Release gate:** Connect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `INT-020`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Connect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### INT-021 — Provide integration secret vault, rotation and connection health monitoring

- **Normative:** The platform shall provide integration secret vault, rotation and connection health monitoring.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Connect
- **Strategy:** ADAPT
- **Release gate:** Connect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `INT-021`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Connect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### INT-022 — Provide per-integration data-flow inventory showing fields imported/exported and purpose

- **Normative:** The platform shall provide per-integration data-flow inventory showing fields imported/exported and purpose.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Connect
- **Strategy:** ADAPT
- **Release gate:** Connect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `INT-022`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Connect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### INT-023 — Provide connector retry/dead-letter handling and reconciliation reports

- **Normative:** The platform shall provide connector retry/dead-letter handling and reconciliation reports.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Connect
- **Strategy:** ADAPT
- **Release gate:** Connect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `INT-023`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Connect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### INT-024 — Provide test/sandbox connection validation before enabling production data flow

- **Normative:** The platform shall provide test/sandbox connection validation before enabling production data flow.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Connect
- **Strategy:** ADAPT
- **Release gate:** Connect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `INT-024`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Connect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### INT-025 — Maintain audit records for integration changes, data exports and automated actions

- **Normative:** The platform shall maintain audit records for integration changes, data exports and automated actions.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Connect
- **Strategy:** ADAPT
- **Release gate:** Connect GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `INT-025`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Connect GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

### AI — 20 requirements (0 MUST)

#### AI-001 — AI as assistive layer

- **Normative:** The platform shall use AI/LLMs as an assistive explanation, search and summarization layer and shall not treat generative model output alone as proof of wrongdoing.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** AI Copilot
- **Strategy:** SURPASS
- **Release gate:** AI Copilot GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AI-001`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `AI Copilot GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### AI-002 — Provide model registry with model name, version, owner, purpose, training/validation metadata and deployment status

- **Normative:** The platform shall provide model registry with model name, version, owner, purpose, training/validation metadata and deployment status.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** AI Copilot
- **Strategy:** ADAPT
- **Release gate:** AI Copilot GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AI-002`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `AI Copilot GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### AI-003 — Provide feature/signal registry documenting input provenance, semantics and allowed use

- **Normative:** The platform shall provide feature/signal registry documenting input provenance, semantics and allowed use.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** AI Copilot
- **Strategy:** ADAPT
- **Release gate:** AI Copilot GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AI-003`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `AI Copilot GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### AI-004 — Provide anomaly models for behavioral deviation with calibrated confidence

- **Normative:** The platform shall provide anomaly models for behavioral deviation with calibrated confidence.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** AI Copilot
- **Strategy:** ADAPT
- **Release gate:** AI Copilot GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AI-004`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `AI Copilot GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### AI-005 — Provide language/sentiment models only for authorized content and expose uncertainty

- **Normative:** The platform shall provide language/sentiment models only for authorized content and expose uncertainty.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** AI Copilot
- **Strategy:** ADAPT
- **Release gate:** AI Copilot GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AI-005`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `AI Copilot GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### AI-006 — Provide PII/PHI/sensitive-data classification models with confidence and classifier version

- **Normative:** The platform shall provide PII/PHI/sensitive-data classification models with confidence and classifier version.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** AI Copilot
- **Strategy:** ADAPT
- **Release gate:** AI Copilot GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AI-006`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `AI Copilot GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### AI-007 — Provide GenAI-assisted risk explanation grounded in structured risk factors/events

- **Normative:** The platform shall provide GenAI-assisted risk explanation grounded in structured risk factors/events.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** AI Copilot
- **Strategy:** ADAPT
- **Release gate:** AI Copilot GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AI-007`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `AI Copilot GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### AI-008 — Provide investigation copilot that cites event IDs/evidence and distinguishes fact from inference

- **Normative:** The platform shall provide investigation copilot that cites event IDs/evidence and distinguishes fact from inference.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** AI Copilot
- **Strategy:** ADAPT
- **Release gate:** AI Copilot GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AI-008`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `AI Copilot GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### AI-009 — Provide natural-language-to-query generation with preview of resulting filters before execution for sensitive searches

- **Normative:** The platform shall provide natural-language-to-query generation with preview of resulting filters before execution for sensitive searches.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** AI Copilot
- **Strategy:** ADAPT
- **Release gate:** AI Copilot GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AI-009`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `AI Copilot GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### AI-010 — Provide BYO-LLM support through isolated connectors and configurable zero-retention/no-training terms where provider supports them

- **Normative:** The platform shall provide BYO-LLM support through isolated connectors and configurable zero-retention/no-training terms where provider supports them.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** AI Copilot
- **Strategy:** ADAPT
- **Release gate:** AI Copilot GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AI-010`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `AI Copilot GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### AI-011 — Provide self-hosted model option for deployments requiring on-prem/private AI

- **Normative:** The platform shall provide self-hosted model option for deployments requiring on-prem/private AI.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** AI Copilot
- **Strategy:** ADAPT
- **Release gate:** AI Copilot GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AI-011`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `AI Copilot GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### AI-012 — Provide retrieval-augmented generation over authorized case/tenant data only

- **Normative:** The platform shall provide retrieval-augmented generation over authorized case/tenant data only.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** AI Copilot
- **Strategy:** ADAPT
- **Release gate:** AI Copilot GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AI-012`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `AI Copilot GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### AI-013 — Prevent cross-tenant retrieval, prompt context or model fine-tuning by default

- **Normative:** The platform shall prevent cross-tenant retrieval, prompt context or model fine-tuning by default.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** AI Copilot
- **Strategy:** ADAPT
- **Release gate:** AI Copilot GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AI-013`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `AI Copilot GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### AI-014 — Provide prompt/output logging with configurable redaction and restricted access for audit

- **Normative:** The platform shall provide prompt/output logging with configurable redaction and restricted access for audit.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** AI Copilot
- **Strategy:** ADAPT
- **Release gate:** AI Copilot GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AI-014`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `AI Copilot GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### AI-015 — Provide human feedback labels for useful/incorrect AI output without silently modifying risk scores

- **Normative:** The platform shall provide human feedback labels for useful/incorrect AI output without silently modifying risk scores.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** AI Copilot
- **Strategy:** ADAPT
- **Release gate:** AI Copilot GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AI-015`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `AI Copilot GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### AI-016 — Provide model quality metrics including drift, precision/recall where labels exist, calibration and error analysis

- **Normative:** The platform shall provide model quality metrics including drift, precision/recall where labels exist, calibration and error analysis.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** AI Copilot
- **Strategy:** ADAPT
- **Release gate:** AI Copilot GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AI-016`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `AI Copilot GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### AI-017 — Provide fairness/consistency monitoring for risk model outcomes using legally appropriate non-sensitive operational analysis

- **Normative:** The platform shall provide fairness/consistency monitoring for risk model outcomes using legally appropriate non-sensitive operational analysis.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** AI Copilot
- **Strategy:** ADAPT
- **Release gate:** AI Copilot GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AI-017`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `AI Copilot GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### AI-018 — Provide kill switch/rollback for AI models independently of core deterministic monitoring

- **Normative:** The platform shall provide kill switch/rollback for AI models independently of core deterministic monitoring.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** AI Copilot
- **Strategy:** ADAPT
- **Release gate:** AI Copilot GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AI-018`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `AI Copilot GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### AI-019 — Provide AI usage governance catalog for sanctioned, unsanctioned and restricted enterprise AI tools

- **Normative:** The platform shall provide AI usage governance catalog for sanctioned, unsanctioned and restricted enterprise AI tools.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** AI Copilot
- **Strategy:** ADAPT
- **Release gate:** AI Copilot GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AI-019`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `AI Copilot GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### AI-020 — Detect sensitive-data interaction with public GenAI destinations using metadata/DLP signals where technically supported

- **Normative:** The platform shall detect sensitive-data interaction with public GenAI destinations using metadata/DLP signals where technically supported.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** AI Copilot
- **Strategy:** ADAPT
- **Release gate:** AI Copilot GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `AI-020`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `AI Copilot GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

### PRIV — 30 requirements (30 MUST)

#### PRIV-001 — Privacy-first defaults

- **Normative:** The platform shall default to metadata-first monitoring with raw keystrokes, message bodies, continuous screen video, microphone/camera and precise GPS disabled.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** SURPASS
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** New tenant defaults to Level 1; intrusive collectors disabled until explicit authorized policy.

#### PRIV-002 — Purpose limitation

- **Normative:** Every monitoring policy shall declare business purpose, data categories, population, owner, legal basis/authorization reference, retention and expiry/review date.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** SURPASS
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Invasive policy publish rejected without purpose, legal basis, owner, scope, retention/expiry fields.

#### PRIV-003 — Provide Privacy Impact Preview before publishing policies that increase observation level

- **Normative:** The platform shall provide Privacy Impact Preview before publishing policies that increase observation level.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PRIV-003`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### PRIV-004 — Provide Do Not Record rules and verify them with policy test mode

- **Normative:** The platform shall provide Do Not Record rules and verify them with policy test mode.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PRIV-004`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### PRIV-005 — Provide field-level redaction and masking for sensitive metadata/content

- **Normative:** The platform shall provide field-level redaction and masking for sensitive metadata/content.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PRIV-005`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### PRIV-006 — Provide role-based reveal of redacted content with step-up authentication and audit

- **Normative:** The platform shall provide role-based reveal of redacted content with step-up authentication and audit.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PRIV-006`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### PRIV-007 — Provide pseudonymized/anonymized analyst mode for initial risk triage where practical

- **Normative:** The platform shall provide pseudonymized/anonymized analyst mode for initial risk triage where practical.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PRIV-007`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### PRIV-008 — Provide minimum cohort size for team/productivity comparisons

- **Normative:** The platform shall provide minimum cohort size for team/productivity comparisons.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PRIV-008`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### PRIV-009 — Provide data-retention policy by event type, evidence type, case/legal-hold status and jurisdiction

- **Normative:** The platform shall provide data-retention policy by event type, evidence type, case/legal-hold status and jurisdiction.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PRIV-009`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### PRIV-010 — Provide automatic purge with tamper-evident purge log when retention expires

- **Normative:** The platform shall provide automatic purge with tamper-evident purge log when retention expires.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PRIV-010`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### PRIV-011 — Provide legal hold workflow that freezes selected governed data

- **Normative:** The platform shall provide legal hold workflow that freezes selected governed data.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PRIV-011`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### PRIV-012 — Provide region/data-residency assignment per tenant and prevent unintended cross-region storage

- **Normative:** The platform shall provide region/data-residency assignment per tenant and prevent unintended cross-region storage.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PRIV-012`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### PRIV-013 — Provide customer-managed or tenant-specific encryption-key options for enterprise editions

- **Normative:** The platform shall provide customer-managed or tenant-specific encryption-key options for enterprise editions.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PRIV-013`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### PRIV-014 — Provide Data Processing Inventory listing telemetry source, fields, purpose, storage, retention and recipients

- **Normative:** The platform shall provide Data Processing Inventory listing telemetry source, fields, purpose, storage, retention and recipients.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PRIV-014`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### PRIV-015 — Provide Employee Transparency Center describing what categories are monitored for the user where organizational policy allows disclosure

- **Normative:** The platform shall provide Employee Transparency Center describing what categories are monitored for the user where organizational policy allows disclosure.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PRIV-015`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### PRIV-016 — Provide policy-specific user notice/acknowledgement capability

- **Normative:** The platform shall provide policy-specific user notice/acknowledgement capability.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PRIV-016`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### PRIV-017 — Provide subject-access/export tooling for privacy teams subject to legal/security exceptions

- **Normative:** The platform shall provide subject-access/export tooling for privacy teams subject to legal/security exceptions.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PRIV-017`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### PRIV-018 — Provide deletion/anonymization workflow when legally permissible and no hold overrides it

- **Normative:** The platform shall provide deletion/anonymization workflow when legally permissible and no hold overrides it.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PRIV-018`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### PRIV-019 — Provide privacy-safe analytics that favor aggregates over raw evidence for management use

- **Normative:** The platform shall provide privacy-safe analytics that favor aggregates over raw evidence for management use.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PRIV-019`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### PRIV-020 — Prevent managers from accessing message bodies, keystrokes or screenshots through productivity screens by default

- **Normative:** The platform shall prevent managers from accessing message bodies, keystrokes or screenshots through productivity screens by default.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PRIV-020`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### PRIV-021 — Provide jurisdiction configuration and policy restrictions for prohibited/limited collection types

- **Normative:** The platform shall provide jurisdiction configuration and policy restrictions for prohibited/limited collection types.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PRIV-021`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### PRIV-022 — Provide dual authorization for Level 3 Focused Evidence and other high-intrusion collection

- **Normative:** The platform shall provide dual authorization for Level 3 Focused Evidence and other high-intrusion collection.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PRIV-022`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### PRIV-023 — Provide automatic expiry/reversion for focused monitoring

- **Normative:** The platform shall provide automatic expiry/reversion for focused monitoring.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PRIV-023`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### PRIV-024 — Provide a dedicated privacy officer dashboard for high-intrusion policies, evidence reveals, exceptions and retention

- **Normative:** The platform shall provide a dedicated privacy officer dashboard for high-intrusion policies, evidence reveals, exceptions and retention.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PRIV-024`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### PRIV-025 — Provide immutable audit of administrator access to monitored employee information

- **Normative:** The platform shall provide immutable audit of administrator access to monitored employee information.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PRIV-025`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### PRIV-026 — Provide data export governance including purpose, recipient, expiry and watermark/manifest where appropriate

- **Normative:** The platform shall provide data export governance including purpose, recipient, expiry and watermark/manifest where appropriate.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PRIV-026`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### PRIV-027 — Provide detection of policy overreach such as monitoring population expansion beyond approved scope

- **Normative:** The platform shall provide detection of policy overreach such as monitoring population expansion beyond approved scope.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PRIV-027`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### PRIV-028 — Provide privacy-safe incident demos using synthetic data rather than real employee content

- **Normative:** The platform shall provide privacy-safe incident demos using synthetic data rather than real employee content.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PRIV-028`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### PRIV-029 — Provide documented ethical-use policy and product guardrails prohibiting covert consumer/partner surveillance use

- **Normative:** The platform shall provide documented ethical-use policy and product guardrails prohibiting covert consumer/partner surveillance use.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PRIV-029`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### PRIV-030 — Provide privacy and security controls for AI prompts, RAG context and generated investigation summaries

- **Normative:** The platform shall provide privacy and security controls for AI prompts, RAG context and generated investigation summaries.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PRIV-030`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

### DATA — 25 requirements (25 MUST)

#### DATA-001 — Normalized event envelope

- **Normative:** All telemetry shall use a versioned normalized event envelope containing event ID, tenant, event type/schema version, event and ingest time, user/identity, device/agent, source, policy context, classification, correlation IDs, provenance and typed payload.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** SURPASS
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Every ingested event validates against registered envelope schema version; invalid rejected with stable error code.

#### DATA-002 — Use globally unique immutable event identifiers and deterministic deduplication keys

- **Normative:** The platform shall use globally unique immutable event identifiers and deterministic deduplication keys.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DATA-002`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### DATA-003 — Preserve source event identifiers where available for reconciliation

- **Normative:** The platform shall preserve source event identifiers where available for reconciliation.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DATA-003`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### DATA-004 — Normalize timestamps to UTC while preserving source timezone/offset

- **Normative:** The platform shall normalize timestamps to UTC while preserving source timezone/offset.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DATA-004`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### DATA-005 — Version every event schema and maintain backward-compatible readers/migrations

- **Normative:** The platform shall version every event schema and maintain backward-compatible readers/migrations.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DATA-005`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### DATA-006 — Provide event taxonomy registry with ownership, sensitivity, retention and supported collectors

- **Normative:** The platform shall provide event taxonomy registry with ownership, sensitivity, retention and supported collectors.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DATA-006`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### DATA-007 — Use asynchronous high-throughput ingestion separate from transactional application requests

- **Normative:** The platform shall use asynchronous high-throughput ingestion separate from transactional application requests.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DATA-007`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### DATA-008 — Validate authentication, schema, tenant ownership and size limits at ingestion

- **Normative:** The platform shall validate authentication, schema, tenant ownership and size limits at ingestion.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DATA-008`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### DATA-009 — Route invalid/unprocessable events to dead-letter workflows with metrics and safe replay

- **Normative:** The platform shall route invalid/unprocessable events to dead-letter workflows with metrics and safe replay.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DATA-009`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### DATA-010 — Enrich events with organization, identity, application/domain taxonomy and policy context asynchronously

- **Normative:** The platform shall enrich events with organization, identity, application/domain taxonomy and policy context asynchronously.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DATA-010`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### DATA-011 — Support ordered partitioning/correlation keys where sequence reconstruction requires it

- **Normative:** The platform shall support ordered partitioning/correlation keys where sequence reconstruction requires it.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DATA-011`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### DATA-012 — Store transactional control-plane data in a relational database appropriate for consistency

- **Normative:** The platform shall store transactional control-plane data in a relational database appropriate for consistency.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DATA-012`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### DATA-013 — Store high-volume telemetry in a columnar/analytical event store designed for time-range aggregation

- **Normative:** The platform shall store high-volume telemetry in a columnar/analytical event store designed for time-range aggregation.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DATA-013`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### DATA-014 — Store full-text/OCR investigation indexes in a dedicated search engine

- **Normative:** The platform shall store full-text/OCR investigation indexes in a dedicated search engine.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DATA-014`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### DATA-015 — Store screenshots/evidence in encrypted object storage with hashes and metadata references

- **Normative:** The platform shall store screenshots/evidence in encrypted object storage with hashes and metadata references.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DATA-015`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### DATA-016 — Provide hot/warm/cold/archive storage tiers and lifecycle policies

- **Normative:** The platform shall provide hot/warm/cold/archive storage tiers and lifecycle policies.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DATA-016`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### DATA-017 — Provide stream-processing layer for alerts, baselines, risk and sequence analytics

- **Normative:** The platform shall provide stream-processing layer for alerts, baselines, risk and sequence analytics.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DATA-017`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### DATA-018 — Provide idempotent consumers and exactly-once-equivalent business outcomes through deduplication where true exactly-once is unavailable

- **Normative:** The platform shall provide idempotent consumers and exactly-once-equivalent business outcomes through deduplication where true exactly-once is unavailable.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DATA-018`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### DATA-019 — Provide tenant-level data-quality metrics including late, missing, duplicate and malformed events

- **Normative:** The platform shall provide tenant-level data-quality metrics including late, missing, duplicate and malformed events.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DATA-019`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### DATA-020 — Provide lineage from derived alert/risk/report metrics back to raw/normalized source events

- **Normative:** The platform shall provide lineage from derived alert/risk/report metrics back to raw/normalized source events.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DATA-020`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### DATA-021 — Provide query authorization at data-service layer, not only UI layer

- **Normative:** The platform shall provide query authorization at data-service layer, not only UI layer.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DATA-021`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### DATA-022 — Provide customer export/lakehouse feed in documented normalized schema

- **Normative:** The platform shall provide customer export/lakehouse feed in documented normalized schema.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DATA-022`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### DATA-023 — Provide migration/version compatibility strategy for agents, APIs, events and models

- **Normative:** The platform shall provide migration/version compatibility strategy for agents, APIs, events and models.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DATA-023`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### DATA-024 — Provide synthetic telemetry generator for development, test, demos and regression

- **Normative:** The platform shall provide synthetic telemetry generator for development, test, demos and regression.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DATA-024`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### DATA-025 — Provide canonical golden investigation datasets for deterministic end-to-end validation

- **Normative:** The platform shall provide canonical golden investigation datasets for deterministic end-to-end validation.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** ADAPT
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `DATA-025`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

### PLAT — 20 requirements (0 MUST)

#### PLAT-001 — Provide cloud SaaS deployment option with strong tenant isolation

- **Normative:** The platform shall provide cloud SaaS deployment option with strong tenant isolation.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Platform Enterprise
- **Strategy:** ADAPT
- **Release gate:** Platform Enterprise GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PLAT-001`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Platform Enterprise GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### PLAT-002 — Provide on-premises/private deployment option for regulated customers where product edition supports it

- **Normative:** The platform shall provide on-premises/private deployment option for regulated customers where product edition supports it.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Platform Enterprise
- **Strategy:** ADAPT
- **Release gate:** Platform Enterprise GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PLAT-002`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Platform Enterprise GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### PLAT-003 — Provide hybrid architecture allowing endpoint/control/evidence components to meet residency requirements

- **Normative:** The platform shall provide hybrid architecture allowing endpoint/control/evidence components to meet residency requirements.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Platform Enterprise
- **Strategy:** ADAPT
- **Release gate:** Platform Enterprise GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PLAT-003`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Platform Enterprise GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### PLAT-004 — Provide central system-health dashboard for ingestion, queues, databases, search, object storage, model services and integrations

- **Normative:** The platform shall provide central system-health dashboard for ingestion, queues, databases, search, object storage, model services and integrations.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Platform Enterprise
- **Strategy:** ADAPT
- **Release gate:** Platform Enterprise GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PLAT-004`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Platform Enterprise GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### PLAT-005 — Provide tenant provisioning and deprovisioning lifecycle with secure key/data handling

- **Normative:** The platform shall provide tenant provisioning and deprovisioning lifecycle with secure key/data handling.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Platform Enterprise
- **Strategy:** ADAPT
- **Release gate:** Platform Enterprise GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PLAT-005`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Platform Enterprise GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### PLAT-006 — Provide feature-entitlement/licensing service by user/endpoint/module without blocking collection unpredictably

- **Normative:** The platform shall provide feature-entitlement/licensing service by user/endpoint/module without blocking collection unpredictably.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Platform Enterprise
- **Strategy:** ADAPT
- **Release gate:** Platform Enterprise GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PLAT-006`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Platform Enterprise GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### PLAT-007 — Provide audit-friendly license utilization reporting

- **Normative:** The platform shall provide audit-friendly license utilization reporting.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Platform Enterprise
- **Strategy:** ADAPT
- **Release gate:** Platform Enterprise GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PLAT-007`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Platform Enterprise GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### PLAT-008 — Provide configurable retention/storage quota forecasting

- **Normative:** The platform shall provide configurable retention/storage quota forecasting.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Platform Enterprise
- **Strategy:** ADAPT
- **Release gate:** Platform Enterprise GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PLAT-008`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Platform Enterprise GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### PLAT-009 — Provide notification service with templates, localization and delivery status

- **Normative:** The platform shall provide notification service with templates, localization and delivery status.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Platform Enterprise
- **Strategy:** ADAPT
- **Release gate:** Platform Enterprise GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PLAT-009`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Platform Enterprise GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### PLAT-010 — Provide job/scheduler service for reports, retention, reconciliation, baselines and maintenance

- **Normative:** The platform shall provide job/scheduler service for reports, retention, reconciliation, baselines and maintenance.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Platform Enterprise
- **Strategy:** ADAPT
- **Release gate:** Platform Enterprise GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PLAT-010`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Platform Enterprise GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### PLAT-011 — Provide background-work queues with retry, backoff, dead-letter and idempotency controls

- **Normative:** The platform shall provide background-work queues with retry, backoff, dead-letter and idempotency controls.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Platform Enterprise
- **Strategy:** ADAPT
- **Release gate:** Platform Enterprise GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PLAT-011`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Platform Enterprise GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### PLAT-012 — Provide environment configuration and secrets management through dedicated secret store

- **Normative:** The platform shall provide environment configuration and secrets management through dedicated secret store.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Platform Enterprise
- **Strategy:** ADAPT
- **Release gate:** Platform Enterprise GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PLAT-012`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Platform Enterprise GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### PLAT-013 — Provide centralized configuration with versioning and environment promotion

- **Normative:** The platform shall provide centralized configuration with versioning and environment promotion.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Platform Enterprise
- **Strategy:** ADAPT
- **Release gate:** Platform Enterprise GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PLAT-013`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Platform Enterprise GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### PLAT-014 — Provide observability using metrics, structured logs, traces and correlation IDs

- **Normative:** The platform shall provide observability using metrics, structured logs, traces and correlation IDs.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Platform Enterprise
- **Strategy:** ADAPT
- **Release gate:** Platform Enterprise GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PLAT-014`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Platform Enterprise GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### PLAT-015 — Provide health/readiness endpoints and dependency checks for services

- **Normative:** The platform shall provide health/readiness endpoints and dependency checks for services.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Platform Enterprise
- **Strategy:** ADAPT
- **Release gate:** Platform Enterprise GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PLAT-015`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Platform Enterprise GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### PLAT-016 — Provide safe database/index migrations with backward-compatible rollout strategy

- **Normative:** The platform shall provide safe database/index migrations with backward-compatible rollout strategy.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Platform Enterprise
- **Strategy:** ADAPT
- **Release gate:** Platform Enterprise GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PLAT-016`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Platform Enterprise GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### PLAT-017 — Provide backup, restore and disaster-recovery runbooks with periodic restore tests

- **Normative:** The platform shall provide backup, restore and disaster-recovery runbooks with periodic restore tests.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Platform Enterprise
- **Strategy:** ADAPT
- **Release gate:** Platform Enterprise GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PLAT-017`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Platform Enterprise GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### PLAT-018 — Provide support/admin tooling that respects tenant authorization and auditable access

- **Normative:** The platform shall provide support/admin tooling that respects tenant authorization and auditable access.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Platform Enterprise
- **Strategy:** ADAPT
- **Release gate:** Platform Enterprise GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PLAT-018`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Platform Enterprise GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### PLAT-019 — Provide localization/timezone framework for global deployments

- **Normative:** The platform shall provide localization/timezone framework for global deployments.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Platform Enterprise
- **Strategy:** ADAPT
- **Release gate:** Platform Enterprise GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PLAT-019`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Platform Enterprise GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### PLAT-020 — Provide public status/incident communication capability for SaaS operations

- **Normative:** The platform shall provide public status/incident communication capability for SaaS operations.
- **Priority (v1.2):** COULD *(v1.0: MUST)*
- **Edition:** Platform Enterprise
- **Strategy:** ADAPT
- **Release gate:** Platform Enterprise GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `PLAT-020`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Platform Enterprise GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

### NFR — 46 requirements (33 MUST)

#### NFR-001 — Endpoint CPU normal mode

- **Normative:** The reference desktop agent in Level 1 metadata mode shall average below 2% CPU on defined benchmark workloads and shall publish p95 measurements.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** SURPASS
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** CI benchmark artifact: agent mean CPU < 2% on reference Level-1 workload; publish p95.

#### NFR-002 — Endpoint memory normal mode

- **Normative:** The reference desktop agent shall target less than 150 MB resident memory in normal metadata mode, with documented exceptions for collectors.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** SURPASS
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** CI benchmark: resident memory < 150MB Level-1 mode + 24h leak test pass.

#### NFR-003 — Endpoint stability

- **Normative:** Agent failure shall not prevent normal endpoint login or ordinary business applications from running.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** SURPASS
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Fault injection: agent crash/corrupt queue/network loss does not block login or ordinary apps.

#### NFR-004 — Ingestion freshness

- **Normative:** At least 95% of normal telemetry shall become queryable within 30 seconds of receipt under rated load.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** SURPASS
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Load test: ≥95% telemetry queryable within 30s of receipt under rated load.

#### NFR-005 — Critical alert latency

- **Normative:** Deterministic critical alerts shall be generated within 60 seconds p95 after the required event set is ingested.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** SURPASS
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Deterministic critical alerts p95 ≤ 60s after required event set ingested.

#### NFR-006 — Dashboard latency

- **Normative:** Common 30-day aggregate dashboards shall respond within 3 seconds p95 for rated tenant sizes.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** SURPASS
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Common 30-day aggregate dashboards p95 ≤ 3s at rated tenant size.

#### NFR-007 — Investigation search latency

- **Normative:** Common indexed investigation searches over authorized 30-day scope shall respond within 5 seconds p95.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** SURPASS
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `NFR-007`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### NFR-008 — Scale

- **Normative:** A production deployment tier shall support at least 100,000 concurrently reporting endpoints and horizontal scale to millions of events per minute through additional partitions/nodes.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** SURPASS
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `NFR-008`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### NFR-009 — Availability

- **Normative:** Cloud control plane target availability shall be at least 99.9% monthly excluding announced maintenance.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** SURPASS
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `NFR-009`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### NFR-010 — RPO control plane

- **Normative:** Control-plane transactional data recovery point objective shall be 15 minutes or better.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** SURPASS
- **Release gate:** Platform Enterprise GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `NFR-010`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Platform Enterprise GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### NFR-011 — RTO

- **Normative:** Documented service recovery time objective shall be 4 hours or better for severe regional/control-plane incidents, edition dependent.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** SURPASS
- **Release gate:** Platform Enterprise GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `NFR-011`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Platform Enterprise GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### NFR-012 — Transport security

- **Normative:** All external and inter-service sensitive traffic shall use TLS 1.2+ with TLS 1.3 preferred.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** SURPASS
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `NFR-012`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### NFR-013 — Encryption at rest

- **Normative:** Sensitive databases, object evidence, queues and backups shall be encrypted at rest.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** SURPASS
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `NFR-013`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### NFR-014 — Tenant isolation

- **Normative:** No tenant shall access another tenant data through UI, API, search, analytics, AI context or support tooling.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** SURPASS
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Automated cross-tenant negative tests across UI, API, search, evidence, AI retrieval.

#### NFR-015 — Secure SDLC

- **Normative:** Services and agents shall use code review, SAST, dependency/SBOM scanning, secret scanning and release signing.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** SURPASS
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `NFR-015`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### NFR-016 — Agent signing

- **Normative:** All distributed agents/installers/updates shall be signed and verified before execution.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** SURPASS
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `NFR-016`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### NFR-017 — Audit immutability

- **Normative:** Security/privacy/audit records shall be append-only or tamper-evident with retention controls.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** SURPASS
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `NFR-017`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### NFR-018 — Privacy default

- **Normative:** New tenants shall have Level 1 metadata monitoring as the default and intrusive collectors disabled.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** SURPASS
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Fresh-tenant config test: Level-1 default; Level-3 requires purpose+expiry.

#### NFR-019 — Focused monitoring expiry

- **Normative:** Every Level 3 focused policy shall have an expiry; expired policies shall automatically revert.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** SURPASS
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Time-advance test: expired Level-3 policy auto-reverts within one agent check-in.

#### NFR-020 — Accessibility

- **Normative:** Administrative web application shall target WCAG 2.2 AA.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** SURPASS
- **Release gate:** Platform Enterprise GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `NFR-020`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Platform Enterprise GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### NFR-021 — Responsive UI

- **Normative:** Primary administrative workflows shall be usable at supported desktop resolutions and key approval/alert workflows on tablet.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** SURPASS
- **Release gate:** Platform Enterprise GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `NFR-021`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Platform Enterprise GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### NFR-022 — Browser support

- **Normative:** Admin console shall support current and previous major releases of Chrome, Edge and Firefox; Safari support shall be documented.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** SURPASS
- **Release gate:** Platform Enterprise GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `NFR-022`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Platform Enterprise GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### NFR-023 — API compatibility

- **Normative:** Breaking API changes shall require a new version and published migration period.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** SURPASS
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `NFR-023`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### NFR-024 — Schema compatibility

- **Normative:** Event consumers shall accept current and documented prior schema versions during rolling upgrades.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** SURPASS
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `NFR-024`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### NFR-025 — Data integrity

- **Normative:** Evidence objects shall have cryptographic hashes and integrity verification during export/retrieval.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** SURPASS
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `NFR-025`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### NFR-026 — Chain of custody

- **Normative:** Evidence exports shall include manifest, hashes, timestamps, source IDs and export actor.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** SURPASS
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `NFR-026`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### NFR-027 — Model explainability

- **Normative:** Every production risk factor/model contribution exposed to users shall provide human-readable reason and source evidence references.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** SURPASS
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `NFR-027`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### NFR-028 — Model reproducibility

- **Normative:** Historical risk score shall be reproducible using stored model/rule versions and input references where data retention permits.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** SURPASS
- **Release gate:** Investigate GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `NFR-028`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Investigate GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### NFR-029 — LLM grounding

- **Normative:** AI investigation answers shall cite underlying authorized records and label unsupported inference.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** SURPASS
- **Release gate:** AI Copilot GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `NFR-029`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `AI Copilot GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### NFR-030 — No cross-tenant AI training

- **Normative:** Customer content shall not train shared models by default.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** SURPASS
- **Release gate:** AI Copilot GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `NFR-030`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `AI Copilot GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### NFR-031 — Data minimization

- **Normative:** Collectors shall emit only fields required by enabled policy/capability.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** SURPASS
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `NFR-031`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### NFR-032 — Retention enforcement

- **Normative:** Expired data shall be purged within configured operational SLA unless held.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** SURPASS
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `NFR-032`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### NFR-033 — Legal hold precedence

- **Normative:** Legal hold shall prevent governed evidence deletion while recording hold reason/owner.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** SURPASS
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `NFR-033`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### NFR-034 — Observability

- **Normative:** All services shall emit health, latency, errors, queue lag and saturation metrics with correlation IDs.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** SURPASS
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `NFR-034`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### NFR-035 — Safe rollout

- **Normative:** Server and agent releases shall support canary/staged rollout and rollback.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** SURPASS
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `NFR-035`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### NFR-036 — Data-quality visibility

- **Normative:** Missing/late collector data shall be visible in dashboards and APIs and shall not silently lower risk/productivity metrics as if complete.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** SURPASS
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Collector outage: dashboards/APIs show coverage warning; metrics not treated as complete.

#### NFR-037 — Localization

- **Normative:** UI dates, times, number formats and supported translations shall be locale aware while stored timestamps remain canonical.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** SURPASS
- **Release gate:** Platform Enterprise GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `NFR-037`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Platform Enterprise GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### NFR-038 — Backup security

- **Normative:** Backups shall be encrypted, access controlled, logged and included in retention/erasure processes where applicable.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** SURPASS
- **Release gate:** Platform Enterprise GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `NFR-038`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Platform Enterprise GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### NFR-039 — Secrets

- **Normative:** Secrets shall not be stored in source code or ordinary configuration tables in plaintext.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** SURPASS
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `NFR-039`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### NFR-040 — Rate limiting

- **Normative:** Public APIs and sensitive actions shall have tenant/user-aware rate limiting and abuse controls.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** SURPASS
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `NFR-040`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### NFR-041 — Export safety

- **Normative:** Large exports shall be asynchronous, scoped, encrypted where applicable, expiring and audited.
- **Priority (v1.2):** SHOULD *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** SURPASS
- **Release gate:** Platform Enterprise GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `NFR-041`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Platform Enterprise GA` checks pass. Attach Upgrade Pack golden scenarios as applicable at edition GA.

#### NFR-042 — Alert deduplication

- **Normative:** Repeated identical events shall not create uncontrolled alert storms when aggregation policy is enabled.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** SURPASS
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `NFR-042`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### NFR-043 — Policy simulation safety

- **Normative:** Simulation shall never enforce block/terminate or increase monitoring on production endpoints.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** SURPASS
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Simulation of block rule produces zero endpoint enforcement side effects.

#### NFR-044 — Synthetic test data

- **Normative:** Development/demo environments shall not require real employee monitoring data.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** SURPASS
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `NFR-044`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### NFR-045 — Supportability

- **Normative:** Every agent/service error shown to customers shall have stable error code and actionable diagnostic path.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** SURPASS
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `NFR-045`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

#### NFR-046 — Documentation

- **Normative:** Every released requirement/capability shall have administrator, API/technical and privacy-impact documentation appropriate to its audience.
- **Priority (v1.2):** MUST *(v1.0: MUST)*
- **Edition:** Visibility
- **Strategy:** SURPASS
- **Release gate:** Visibility GA
- **Acceptance (v1.2):** Given synthetic fixtures for tenant A; when exercising `NFR-046`; then normative behavior is observable via UI/API/events/audit within applicable NFR latency; unauthorized tenant/role/purpose denied with audit; gate `Visibility GA` checks pass. Min: 1 positive + 1 negative automated test linked to this ID.

## 5. Traceability

- Epic/story/PR must cite requirement IDs.
- Import file: `USS_MRS_v1.2_Requirement_Catalog.csv`
- Phase 0/1 execution: `USS_Phase0_Phase1_Jira_Epics_v1.2.md` + `USS_Phase0_Phase1_Jira_Import_v1.2.csv`

*End of MRS v1.2*