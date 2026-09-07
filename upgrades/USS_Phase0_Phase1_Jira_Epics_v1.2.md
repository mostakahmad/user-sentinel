# USS Visibility — Phase 0 / Phase 1 Jira Epic Pack v1.2

**Edition:** USS Visibility GA  
**MUST requirements in scope:** 284  
**Epics:** 13  
**Stories:** 284  
**Import file:** `USS_Phase0_Phase1_Jira_Import_v1.2.csv`

## How to import
1. Create a Jira project (or use existing) for USS Behavioral Visibility.
2. Ensure Epic issue type exists; create labels used below if desired.
3. Import CSV (Jira CSV import). First create Epics, then Stories with Epic Link = epic summary key prefix, **or** import all and link manually using `EPIC-P0-xx` in Epic Link field after mapping.
4. Map fields: Summary, Description, Labels, Priority; custom field recommended for `Requirement ID`.
5. Do not start Phase 1 stories until Phase 0 exit checklist passes.

## Phase exit checklists

### Phase 0 exit
- [ ] P7/P8 architecture review signed (no Laravel telemetry hot path)
- [ ] Ingest load test at rated synthetic throughput
- [ ] Cross-tenant negative tests green
- [ ] Signed agent build + check-in + offline queue demo
- [ ] Fresh tenant Level-1 privacy defaults verified (NFR-018)
- [ ] Synthetic data only in non-prod (NFR-044)

### Phase 1 / Visibility GA exit
- [ ] Windows metadata UAM live for APP/WEB/TIME/FILE/NET
- [ ] NFR-001/002/003 agent resource & stability gates
- [ ] Golden scenarios G01, G07, G09, G11
- [ ] Do Not Record + coverage visibility (NFR-036)
- [ ] Manager role cannot resolve raw evidence objects
- [ ] Dashboards/search within NFR-006

---

## EPIC-P0-01 — Tenant, Org & Control-Plane Foundations

- **Phase:** 0
- **Prefixes:** ORG
- **MUST stories:** 15
- **Goal:** Multi-tenant org model, hierarchy, feature flags, bulk ops, audit history
- **Labels:** phase-0, visibility, control-plane

| Story | Title | Priority hint |
|-------|-------|---------------|
| `ORG-001` | Multi-tenant organization model | Highest |
| `ORG-002` | Create and manage business units with inherited and overridden policy scope | High |
| `ORG-003` | Create departments, teams, locations and cost centers and support nested organizational hierarchy | High |
| `ORG-004` | Assign users to multiple organizational dimensions without duplicating identity | High |
| `ORG-005` | Create static user groups for policy, reporting and investigation scope | High |
| `ORG-006` | Create dynamic groups from identity, HR, risk, device, role, location and employment-state attributes | High |
| `ORG-007` | Create priority/high-impact user groups with stricter governance and differentiated risk treatment | High |
| `ORG-008` | Import and reconcile organizational hierarchy from directory and HR sources | High |
| `ORG-009` | Support custom user metadata fields with schema, validation and sensitivity classification | High |
| `ORG-010` | Support configurable work schedules, shifts, time zones, holidays and overnight schedules | High |
| `ORG-011` | Maintain employment lifecycle states including pre-hire, active, leave, notice period, terminated and contractor expiration | High |
| `ORG-012` | Maintain manager relationships and authorized managerial scope for workforce analytics | High |
| `ORG-013` | Allow organization-level feature flags and controlled rollout by tenant, group and user | High |
| `ORG-014` | Provide bulk import, bulk edit and bulk assignment workflows with preview and rollback | High |
| `ORG-015` | Maintain immutable organization-change audit history with before and after values | High |

## EPIC-P0-02 — Identity, RBAC/ABAC & Admin Security

- **Phase:** 0
- **Prefixes:** IAM
- **MUST stories:** 20
- **Goal:** SSO/MFA/SCIM, least privilege, service accounts, session/IP controls, purpose-aware ABAC
- **Labels:** phase-0, visibility, security

| Story | Title | Priority hint |
|-------|-------|---------------|
| `IAM-001` | Role-based access control | High |
| `IAM-002` | Attribute-based access control | Highest |
| `IAM-003` | Support least-privilege custom roles and permission bundles | High |
| `IAM-004` | Support SSO using SAML 2.0 and OpenID Connect | High |
| `IAM-005` | Support MFA enforcement and step-up authentication for sensitive evidence actions | High |
| `IAM-006` | Support SCIM 2.0 user and group provisioning | High |
| `IAM-007` | Support directory synchronization with Microsoft Entra ID and Active Directory | High |
| `IAM-008` | Support identity-provider group-to-role mapping | High |
| `IAM-009` | Support service accounts and scoped machine identities distinct from human administrators | High |
| `IAM-010` | Support API clients with revocable scopes, secrets rotation and optional mTLS | High |
| `IAM-011` | Support session timeout, re-authentication and concurrent-session policy | High |
| `IAM-012` | Support IP/network restrictions for administrative access | High |
| `IAM-013` | Support emergency break-glass accounts with enhanced auditing | High |
| `IAM-014` | Support dual authorization for focused evidence collection and highly sensitive evidence reveal | High |
| `IAM-015` | Support delegated administration by tenant, business unit, department and geography | High |
| `IAM-016` | Support investigator access limited to assigned cases and subjects | High |
| `IAM-017` | Support auditor/read-only roles that cannot change policies or monitoring scope | High |
| `IAM-018` | Support purpose-of-access declaration before viewing restricted employee content | High |
| `IAM-019` | Log authentication, authorization decisions, evidence views, downloads and exports | High |
| `IAM-020` | Provide periodic access-review reports and stale-privilege detection | High |

## EPIC-P0-03 — Event Fabric & Data Platform

- **Phase:** 0
- **Prefixes:** DATA
- **MUST stories:** 25
- **Goal:** Normalized envelope, schema registry, stream ingest, stores separation, retention hooks
- **Labels:** phase-0, visibility, data-plane

| Story | Title | Priority hint |
|-------|-------|---------------|
| `DATA-001` | Normalized event envelope | Highest |
| `DATA-002` | Use globally unique immutable event identifiers and deterministic deduplication keys | High |
| `DATA-003` | Preserve source event identifiers where available for reconciliation | High |
| `DATA-004` | Normalize timestamps to UTC while preserving source timezone/offset | High |
| `DATA-005` | Version every event schema and maintain backward-compatible readers/migrations | High |
| `DATA-006` | Provide event taxonomy registry with ownership, sensitivity, retention and supported collectors | High |
| `DATA-007` | Use asynchronous high-throughput ingestion separate from transactional application requests | High |
| `DATA-008` | Validate authentication, schema, tenant ownership and size limits at ingestion | High |
| `DATA-009` | Route invalid/unprocessable events to dead-letter workflows with metrics and safe replay | High |
| `DATA-010` | Enrich events with organization, identity, application/domain taxonomy and policy context asynchronously | High |
| `DATA-011` | Support ordered partitioning/correlation keys where sequence reconstruction requires it | High |
| `DATA-012` | Store transactional control-plane data in a relational database appropriate for consistency | High |
| `DATA-013` | Store high-volume telemetry in a columnar/analytical event store designed for time-range aggregation | High |
| `DATA-014` | Store full-text/OCR investigation indexes in a dedicated search engine | High |
| `DATA-015` | Store screenshots/evidence in encrypted object storage with hashes and metadata references | High |
| `DATA-016` | Provide hot/warm/cold/archive storage tiers and lifecycle policies | High |
| `DATA-017` | Provide stream-processing layer for alerts, baselines, risk and sequence analytics | High |
| `DATA-018` | Provide idempotent consumers and exactly-once-equivalent business outcomes through deduplication where true exactly-once is unavailable | High |
| `DATA-019` | Provide tenant-level data-quality metrics including late, missing, duplicate and malformed events | High |
| `DATA-020` | Provide lineage from derived alert/risk/report metrics back to raw/normalized source events | High |
| `DATA-021` | Provide query authorization at data-service layer, not only UI layer | High |
| `DATA-022` | Provide customer export/lakehouse feed in documented normalized schema | High |
| `DATA-023` | Provide migration/version compatibility strategy for agents, APIs, events and models | High |
| `DATA-024` | Provide synthetic telemetry generator for development, test, demos and regression | High |
| `DATA-025` | Provide canonical golden investigation datasets for deterministic end-to-end validation | High |

## EPIC-P0-04 — Privacy Defaults & Governance Runtime

- **Phase:** 0
- **Prefixes:** PRIV
- **MUST stories:** 30
- **Goal:** Level-1 defaults, purpose limitation, Do Not Record hooks, focused expiry plumbing
- **Labels:** phase-0, visibility, privacy

| Story | Title | Priority hint |
|-------|-------|---------------|
| `PRIV-001` | Privacy-first defaults | Highest |
| `PRIV-002` | Purpose limitation | Highest |
| `PRIV-003` | Provide Privacy Impact Preview before publishing policies that increase observation level | High |
| `PRIV-004` | Provide Do Not Record rules and verify them with policy test mode | High |
| `PRIV-005` | Provide field-level redaction and masking for sensitive metadata/content | High |
| `PRIV-006` | Provide role-based reveal of redacted content with step-up authentication and audit | High |
| `PRIV-007` | Provide pseudonymized/anonymized analyst mode for initial risk triage where practical | High |
| `PRIV-008` | Provide minimum cohort size for team/productivity comparisons | High |
| `PRIV-009` | Provide data-retention policy by event type, evidence type, case/legal-hold status and jurisdiction | High |
| `PRIV-010` | Provide automatic purge with tamper-evident purge log when retention expires | High |
| `PRIV-011` | Provide legal hold workflow that freezes selected governed data | High |
| `PRIV-012` | Provide region/data-residency assignment per tenant and prevent unintended cross-region storage | High |
| `PRIV-013` | Provide customer-managed or tenant-specific encryption-key options for enterprise editions | High |
| `PRIV-014` | Provide Data Processing Inventory listing telemetry source, fields, purpose, storage, retention and recipients | High |
| `PRIV-015` | Provide Employee Transparency Center describing what categories are monitored for the user where organizational policy allows disclosure | High |
| `PRIV-016` | Provide policy-specific user notice/acknowledgement capability | High |
| `PRIV-017` | Provide subject-access/export tooling for privacy teams subject to legal/security exceptions | High |
| `PRIV-018` | Provide deletion/anonymization workflow when legally permissible and no hold overrides it | High |
| `PRIV-019` | Provide privacy-safe analytics that favor aggregates over raw evidence for management use | High |
| `PRIV-020` | Prevent managers from accessing message bodies, keystrokes or screenshots through productivity screens by default | High |
| `PRIV-021` | Provide jurisdiction configuration and policy restrictions for prohibited/limited collection types | High |
| `PRIV-022` | Provide dual authorization for Level 3 Focused Evidence and other high-intrusion collection | High |
| `PRIV-023` | Provide automatic expiry/reversion for focused monitoring | High |
| `PRIV-024` | Provide a dedicated privacy officer dashboard for high-intrusion policies, evidence reveals, exceptions and retention | High |
| `PRIV-025` | Provide immutable audit of administrator access to monitored employee information | High |
| `PRIV-026` | Provide data export governance including purpose, recipient, expiry and watermark/manifest where appropriate | High |
| `PRIV-027` | Provide detection of policy overreach such as monitoring population expansion beyond approved scope | High |
| `PRIV-028` | Provide privacy-safe incident demos using synthetic data rather than real employee content | High |
| `PRIV-029` | Provide documented ethical-use policy and product guardrails prohibiting covert consumer/partner surveillance use | High |
| `PRIV-030` | Provide privacy and security controls for AI prompts, RAG context and generated investigation summaries | High |

## EPIC-P0-05 — Signed Agent Framework & Fleet Core

- **Phase:** 0
- **Prefixes:** AGENT
- **MUST stories:** 33
- **Goal:** Common agent runtime, signing, check-in, offline queue, tamper, policy apply, capability awareness
- **Labels:** phase-0, visibility, endpoint

| Story | Title | Priority hint |
|-------|-------|---------------|
| `AGENT-001` | Signed endpoint agent | High |
| `AGENT-002` | Metadata-first default collection | Highest |
| `AGENT-003` | Authenticate each agent/device using unique device-bound credentials and rotate them automatically | High |
| `AGENT-004` | Encrypt telemetry and evidence in transit using current TLS with certificate validation and pinning where operationally appropriate | High |
| `AGENT-005` | Buffer events locally during connectivity loss and upload them in order with deduplication after reconnection | High |
| `AGENT-006` | Protect local queues and configuration using OS-backed encryption and integrity checks | High |
| `AGENT-007` | Expose agent health including online state, last check-in, version, policy version, queue depth, upload lag, errors and warnings | High |
| `AGENT-008` | Provide centrally managed policy delivery with versioning, signature validation, staged rollout and rollback | High |
| `AGENT-009` | Support bandwidth limits, batching, compression and upload-window controls | High |
| `AGENT-010` | Support CPU, memory, disk and battery safeguards that automatically degrade noncritical collection under resource pressure | High |
| `AGENT-011` | Support local event timestamps plus UTC normalization and clock-skew detection | High |
| `AGENT-012` | Support multi-user/shared workstations and preserve user-to-session attribution | High |
| `AGENT-013` | Support remote enterprise deployment using approved management channels such as Intune, Jamf, GPO/SCCM or equivalent | High |
| `AGENT-014` | Support interactive/manual installer packages for transparent deployments | High |
| `AGENT-015` | Support scheduled deployment and maintenance windows | High |
| `AGENT-016` | Support centrally managed updates using staged rings, canary groups and emergency rollback | High |
| `AGENT-017` | Support remote repair/reinstall workflows with administrator-visible status | High |
| `AGENT-018` | Support authorized remote uninstall and cryptographic de-registration | High |
| `AGENT-019` | Detect agent tampering, stopped services, corrupted components and unauthorized policy modification attempts | High |
| `AGENT-020` | Report monitoring coverage gaps and missing OS permissions without silently pretending data is complete | High |
| `AGENT-021` | Support Do Not Record exclusions by application, website, window, path, user group, schedule and privacy zone | High |
| `AGENT-022` | Support user-visible monitoring disclosure and policy summary where configured or legally required | High |
| `AGENT-023` | Support optional user pause/clock-out for transparent workforce-monitoring deployments with policy-controlled limits | High |
| `AGENT-024` | Support focused-observation elevation with explicit reason, approver, scope, start time, expiry and automatic reversion | High |
| `AGENT-025` | Support collection level 0 Excluded, level 1 Metadata, level 2 Enriched Context, level 3 Focused Evidence and level 4 Preventive Control | High |
| `AGENT-026` | Ensure high-risk collection modes have visibly distinct administrative state and cannot be enabled through ambiguous toggles | High |
| `AGENT-027` | Cache the minimum policy needed to continue safely while offline | High |
| `AGENT-028` | Support tenant-configurable local-retention limits and secure local deletion after upload/expiry | High |
| `AGENT-029` | Support agent self-diagnostics bundle generation without exposing employee content by default | High |
| `AGENT-030` | Expose capability discovery so the console only offers controls supported by the endpoint OS and agent version | High |
| `AGENT-031` | Support command acknowledgement and idempotency for deploy, update, policy, uninstall and diagnostic actions | High |
| `AGENT-032` | Provide fleet-level success/failure metrics for deployment, upgrades, policy propagation and event delivery | High |
| `AGENT-033` | Support controlled beta channels for new OS versions and feature collectors | High |

## EPIC-P0-06 — Platform SLO, Security & Observability Baseline

- **Phase:** 0
- **Prefixes:** NFR
- **MUST stories:** 33
- **Goal:** NFR gates for agent resources, ingest freshness, isolation, SDLC, privacy defaults, simulation safety, coverage visibility
- **Labels:** phase-0, visibility, nfr

| Story | Title | Priority hint |
|-------|-------|---------------|
| `NFR-001` | Endpoint CPU normal mode | Highest |
| `NFR-002` | Endpoint memory normal mode | Highest |
| `NFR-003` | Endpoint stability | Highest |
| `NFR-004` | Ingestion freshness | Highest |
| `NFR-005` | Critical alert latency | Highest |
| `NFR-006` | Dashboard latency | Highest |
| `NFR-008` | Scale | Highest |
| `NFR-009` | Availability | Highest |
| `NFR-012` | Transport security | Highest |
| `NFR-013` | Encryption at rest | Highest |
| `NFR-014` | Tenant isolation | Highest |
| `NFR-015` | Secure SDLC | Highest |
| `NFR-016` | Agent signing | Highest |
| `NFR-017` | Audit immutability | Highest |
| `NFR-018` | Privacy default | Highest |
| `NFR-019` | Focused monitoring expiry | Highest |
| `NFR-023` | API compatibility | Highest |
| `NFR-024` | Schema compatibility | Highest |
| `NFR-025` | Data integrity | Highest |
| `NFR-026` | Chain of custody | Highest |
| `NFR-031` | Data minimization | Highest |
| `NFR-032` | Retention enforcement | Highest |
| `NFR-033` | Legal hold precedence | Highest |
| `NFR-034` | Observability | Highest |
| `NFR-035` | Safe rollout | Highest |
| `NFR-036` | Data-quality visibility | Highest |
| `NFR-039` | Secrets | Highest |
| `NFR-040` | Rate limiting | Highest |
| `NFR-042` | Alert deduplication | Highest |
| `NFR-043` | Policy simulation safety | Highest |
| `NFR-044` | Synthetic test data | Highest |
| `NFR-045` | Supportability | Highest |
| `NFR-046` | Documentation | Highest |

## EPIC-P1-01 — Windows Endpoint Agent GA

- **Phase:** 1
- **Prefixes:** AGENT-WIN
- **MUST stories:** 10
- **Goal:** Windows collectors for metadata UAM with performance and privacy-safe failure modes
- **Labels:** phase-1, visibility, windows

| Story | Title | Priority hint |
|-------|-------|---------------|
| `AGENT-WIN-001` | Provide a Windows agent for supported workstation and server editions with separate capability matrix | High |
| `AGENT-WIN-002` | Monitor foreground applications/processes and user sessions using supported Windows APIs | High |
| `AGENT-WIN-003` | Capture file-system and removable-storage events using least-privilege supported mechanisms | High |
| `AGENT-WIN-004` | Capture printing, network-context and browser/application telemetry supported on Windows | High |
| `AGENT-WIN-005` | Support enterprise deployment via Intune, GPO, SCCM/Configuration Manager and signed MSI/EXE packages | High |
| `AGENT-WIN-006` | Detect Windows session lock/unlock, logon/logoff and RDP/virtual-session context where supported | High |
| `AGENT-WIN-007` | Support Windows protected-data/redaction rules for password and sensitive input contexts | High |
| `AGENT-WIN-008` | Support VDI/virtual desktop environments with documented identity/session attribution limits | High |
| `AGENT-WIN-009` | Support offline telemetry and policy enforcement across device reboots | High |
| `AGENT-WIN-010` | Validate compatibility with EDR/AV and publish coexistence diagnostics rather than requesting security-product bypasses | High |

## EPIC-P1-02 — Application Monitoring (Metadata)

- **Phase:** 1
- **Prefixes:** UAM-APP
- **MUST stories:** 18
- **Goal:** App usage telemetry, classification hooks, exclusions
- **Labels:** phase-1, visibility, uam

| Story | Title | Priority hint |
|-------|-------|---------------|
| `UAM-APP-001` | Capture application/process identity, executable, publisher/signature where available and normalized application family | High |
| `UAM-APP-002` | Capture application/window start, stop, duration and foreground/active duration | High |
| `UAM-APP-003` | Capture window title/caption subject to privacy policy and redaction | High |
| `UAM-APP-004` | Associate application activity with user, device, session, department, work schedule and policy context | High |
| `UAM-APP-005` | Classify applications as productive, neutral, unproductive, restricted or uncategorized | High |
| `UAM-APP-006` | Allow classification overrides by team, role, project, schedule and business unit | High |
| `UAM-APP-007` | Maintain application catalog aliases so renamed/versioned executables map to the same product | High |
| `UAM-APP-008` | Detect newly observed applications and support review/approval workflows | High |
| `UAM-APP-009` | Detect unsigned, high-risk or prohibited applications using configured intelligence sources | High |
| `UAM-APP-010` | Support application-based allow, warn, block or terminate policies where technically and legally appropriate | High |
| `UAM-APP-011` | Calculate application usage totals, active time, frequency and trend by user/team/device | High |
| `UAM-APP-012` | Detect abnormal application usage compared with user and peer baselines | High |
| `UAM-APP-013` | Support application tag taxonomy such as development, finance, communication, AI, storage, job-search and entertainment | High |
| `UAM-APP-014` | Identify public GenAI/LLM applications and browser experiences as a distinct catalog class | High |
| `UAM-APP-015` | Expose application activity in dashboards, search, reports, risk timeline and investigation evidence | High |
| `UAM-APP-016` | Allow applications to be excluded from recording while still optionally contributing aggregate time metrics | High |
| `UAM-APP-017` | Deduplicate overlapping process/window telemetry into human-meaningful usage sessions | High |
| `UAM-APP-018` | Expose application collector quality/coverage and unsupported edge cases in data-quality views | High |

## EPIC-P1-03 — Website & Search Monitoring (Metadata)

- **Phase:** 1
- **Prefixes:** UAM-WEB
- **MUST stories:** 20
- **Goal:** Domain/URL metadata with Do Not Record and enrichment controls
- **Labels:** phase-1, visibility, uam

| Story | Title | Priority hint |
|-------|-------|---------------|
| `UAM-WEB-001` | Capture visited URL, normalized domain/host, page title, browser and timestamps subject to recording policy | High |
| `UAM-WEB-002` | Calculate website/session duration and foreground active duration | High |
| `UAM-WEB-003` | Categorize websites by business/productivity/risk taxonomy | High |
| `UAM-WEB-004` | Allow website-category and individual-domain productivity overrides by team or role | High |
| `UAM-WEB-005` | Allow website allow, warn and block policies with user-facing reason text | High |
| `UAM-WEB-006` | Support Do Not Record rules for banking, healthcare, personal webmail and other privacy-sensitive domains | High |
| `UAM-WEB-007` | Redact URL query parameters and page titles using configurable sensitive patterns | High |
| `UAM-WEB-008` | Capture supported search-engine query terms only when enabled and permitted | High |
| `UAM-WEB-009` | Classify file-storage, webmail, social, collaboration, job-search and GenAI websites separately | High |
| `UAM-WEB-010` | Detect first-seen domains, high-risk domains and anomalous domain usage | High |
| `UAM-WEB-011` | Detect unusually high duration/frequency and unusual out-of-hours website activity | High |
| `UAM-WEB-012` | Support keyword/domain/URL-based alert conditions | High |
| `UAM-WEB-013` | Support browser tab/window attribution where technically reliable | High |
| `UAM-WEB-014` | Expose web activity in global search, user timeline and investigation context | High |
| `UAM-WEB-015` | Support expanded URL/subdomain detail only for roles/policies authorized to see it | High |
| `UAM-WEB-016` | Allow aggregated domain analytics without retaining full URLs when privacy mode requires minimization | High |
| `UAM-WEB-017` | Provide domain reputation enrichment through pluggable threat-intelligence providers | High |
| `UAM-WEB-018` | Detect public file-sharing and personal cloud-storage destinations | High |
| `UAM-WEB-019` | Detect AI service usage and distinguish approved, tolerated and shadow-AI services | High |
| `UAM-WEB-020` | Support web-activity export/API without exposing excluded/redacted content | High |

## EPIC-P1-04 — Active/Idle & Work-Time Monitoring

- **Phase:** 1
- **Prefixes:** UAM-TIME
- **MUST stories:** 16
- **Goal:** Session time, schedules, idle semantics without equating idle to poor performance
- **Labels:** phase-1, visibility, uam

| Story | Title | Priority hint |
|-------|-------|---------------|
| `UAM-TIME-001` | Capture login, logout, lock, unlock and session start/end events | High |
| `UAM-TIME-002` | Calculate active, idle and logged-in time using configurable thresholds | High |
| `UAM-TIME-003` | Separate machine idle from application inactivity and avoid labeling idle time as non-work by default | High |
| `UAM-TIME-004` | Capture first activity and last activity for configured workdays | High |
| `UAM-TIME-005` | Compare activity with assigned schedule, shift, holiday and timezone | High |
| `UAM-TIME-006` | Support overnight and split shifts | High |
| `UAM-TIME-007` | Calculate workday span, active ratio, focus blocks and context-switching metrics | High |
| `UAM-TIME-008` | Detect sustained overwork, after-hours work and insufficient recovery patterns as wellbeing signals, not disciplinary conclusions | High |
| `UAM-TIME-009` | Detect unusual login time or session duration as risk signals | High |
| `UAM-TIME-010` | Support transparent clock-in/clock-out mode for teams that need explicit attendance capture | High |
| `UAM-TIME-011` | Allow managers to correct approved attendance exceptions without altering raw telemetry | High |
| `UAM-TIME-012` | Separate workforce time analytics from payroll-ready time unless explicit payroll rules are configured | High |
| `UAM-TIME-013` | Provide time trends by user/team/location without exposing unnecessary content | High |
| `UAM-TIME-014` | Allow work-hours-only monitoring windows and stop excluded collection outside policy windows | High |
| `UAM-TIME-015` | Support timezone travel changes and remote-work schedules without corrupting baselines | High |
| `UAM-TIME-016` | Record calculation-rule/version provenance for every derived time metric | High |

## EPIC-P1-05 — File, USB, Print & Transfer Metadata

- **Phase:** 1
- **Prefixes:** UAM-FILE
- **MUST stories:** 30
- **Goal:** File/doc/USB/print/transfer metadata collectors and lineage hooks (no Level-3 content by default)
- **Labels:** phase-1, visibility, uam

| Story | Title | Priority hint |
|-------|-------|---------------|
| `UAM-FILE-001` | Capture file create events with name, extension, path, size, user, device and source application when available | High |
| `UAM-FILE-002` | Capture file open/read/access metadata where supported and appropriate | High |
| `UAM-FILE-003` | Capture file write/modify events | High |
| `UAM-FILE-004` | Capture rename events with old and new names | High |
| `UAM-FILE-005` | Capture move events with old and new locations | High |
| `UAM-FILE-006` | Capture copy events with source and destination | High |
| `UAM-FILE-007` | Capture delete events and deletion context where observable | High |
| `UAM-FILE-008` | Capture upload and download events from supported browser/cloud/file-transfer contexts | High |
| `UAM-FILE-009` | Capture removable-media copy-in and copy-out events | High |
| `UAM-FILE-010` | Capture print events with document, printer/device type, page count and copies where available | High |
| `UAM-FILE-011` | Capture cloud-storage file activity through supported endpoint/cloud integrations | High |
| `UAM-FILE-012` | Capture network-share and mapped-drive activity where supported | High |
| `UAM-FILE-013` | Compute cryptographic hashes for configured files/events with size/performance safeguards | High |
| `UAM-FILE-014` | Maintain file lineage across rename, move, copy, archive and transfer events when identifiers/hashes permit | High |
| `UAM-FILE-015` | Detect extension manipulation and misleading rename/obfuscation patterns | High |
| `UAM-FILE-016` | Detect archive/compression and bulk staging behaviors | High |
| `UAM-FILE-017` | Detect unusual file-access volume and velocity against user/peer baselines | High |
| `UAM-FILE-018` | Detect sensitive-file access followed by exfiltration-channel activity | High |
| `UAM-FILE-019` | Detect first-time removable storage and unusual removable-media usage | High |
| `UAM-FILE-020` | Record removable-device vendor/product/serial identifiers where OS permissions provide them | High |
| `UAM-FILE-021` | Classify destination as local, removable, network, approved cloud, unsanctioned cloud, webmail or other transfer channel | High |
| `UAM-FILE-022` | Integrate sensitive-information type, sensitivity label and classification metadata when available | High |
| `UAM-FILE-023` | Allow file/path exclusions and minimization policies | High |
| `UAM-FILE-024` | Allow file-transfer warn/block controls for supported channels and elevated-risk states | High |
| `UAM-FILE-025` | Preserve event-source and collector confidence/coverage metadata | High |
| `UAM-FILE-026` | Expose file lineage graph in investigations | High |
| `UAM-FILE-027` | Expose file activity in global search using filename, path, hash, extension, destination, user and device filters | High |
| `UAM-FILE-028` | Support high-volume aggregation views that do not require loading every raw event | High |
| `UAM-FILE-029` | Support legal-hold preservation for selected file events/evidence | High |
| `UAM-FILE-030` | Support secure evidence export with hashes, manifest and chain-of-custody metadata | High |

## EPIC-P1-06 — Network Metadata Monitoring

- **Phase:** 1
- **Prefixes:** UAM-NET
- **MUST stories:** 14
- **Goal:** Connection/process metadata context without packet capture
- **Labels:** phase-1, visibility, uam

| Story | Title | Priority hint |
|-------|-------|---------------|
| `UAM-NET-001` | Capture application/process network connection metadata where supported | High |
| `UAM-NET-002` | Capture remote domain/host, remote IP, port, protocol and connection timing | High |
| `UAM-NET-003` | Capture bytes sent and received where supported without packet-content collection by default | High |
| `UAM-NET-004` | Associate network events with user, device, process/application and session | High |
| `UAM-NET-005` | Classify destinations by corporate, approved SaaS, personal cloud, risky/malicious, unknown or other configured categories | High |
| `UAM-NET-006` | Detect unusual outbound volume/velocity relative to user and peer baseline | High |
| `UAM-NET-007` | Detect new/rare destination relationships and first-seen external endpoints | High |
| `UAM-NET-008` | Correlate network connections with file-transfer, browser, application and alert events | High |
| `UAM-NET-009` | Support network-context indicators such as corporate LAN/VPN/off-network without invasive packet capture | High |
| `UAM-NET-010` | Detect remote-access and tunneling/tool usage through application and destination intelligence where observable | High |
| `UAM-NET-011` | Expose network activity in user timeline, risk analysis and global search | High |
| `UAM-NET-012` | Support destination allow/warn/block actions through endpoint/network integrations when configured | High |
| `UAM-NET-013` | Retain only metadata by default and require explicit separate scope for content inspection | High |
| `UAM-NET-014` | Report collector limitations for encrypted/proxied/virtualized network contexts | High |

## EPIC-P1-07 — Dashboards, Reporting & Search (Visibility)

- **Phase:** 1
- **Prefixes:** DASH
- **MUST stories:** 20
- **Goal:** Role-aware dashboards, reports, search over authorized metadata with coverage indicators
- **Labels:** phase-1, visibility, ux

| Story | Title | Priority hint |
|-------|-------|---------------|
| `DASH-001` | Provide security/risk overview dashboard with organization posture and top changes | High |
| `DASH-002` | Provide high-risk users dashboard with factors, trends, severity and last activity | High |
| `DASH-003` | Provide group/department risk dashboard | High |
| `DASH-004` | Provide alert operations dashboard with severity, status, SLA age, policy and assignee | High |
| `DASH-005` | Provide investigation/case dashboard with status, owner, priority and age | High |
| `DASH-006` | Provide sensitive-data/DLP dashboard with channels, destinations and actions | High |
| `DASH-007` | Provide workforce productivity dashboard with productive/neutral/unproductive active time and trends | High |
| `DASH-008` | Provide workload/wellbeing dashboard using privacy-preserving aggregate indicators | High |
| `DASH-009` | Provide technology/app utilization dashboard | High |
| `DASH-010` | Provide AI adoption and AI governance dashboard | High |
| `DASH-011` | Provide executive dashboard with organizational risk posture, workforce trends and cross-functional KPIs | High |
| `DASH-012` | Provide agent/device fleet health dashboard | High |
| `DASH-013` | Provide data-quality/telemetry coverage dashboard | High |
| `DASH-014` | Allow dashboard filters by time, organization, location, risk, policy and event type as appropriate | High |
| `DASH-015` | Allow role-specific dashboard layouts with saved views | High |
| `DASH-016` | Allow widget drill-down to source records without leaking unauthorized data | High |
| `DASH-017` | Provide configurable reports and report builder | High |
| `DASH-018` | Provide scheduled report delivery with scoped recipients and secure links | High |
| `DASH-019` | Export permitted report data to CSV, XLSX, PDF and JSON/API | High |
| `DASH-020` | Provide globally available search across authorized activity, alerts, users, devices, policies and cases | High |

---

## Suggested delivery slices (not strict sprints)

| Slice | Focus | Epics |
|------:|-------|-------|
| S0.1 | Tenancy + IAM skeleton + Postgres control DB | P0-01, P0-02 |
| S0.2 | Event envelope + ingest + ClickHouse/OpenSearch/S3 wiring | P0-03 |
| S0.3 | Privacy defaults + purpose fields on policy APIs | P0-04 |
| S0.4 | Agent framework + Windows hello-world check-in | P0-05, start P1-01 |
| S0.5 | NFR harness + tenant isolation automation | P0-06 |
| S1.1 | Windows APP/WEB/TIME collectors | P1-01–P1-04 |
| S1.2 | FILE/NET metadata + lineage hooks | P1-05, P1-06 |
| S1.3 | Dashboards/search + coverage UI + GA gates | P1-07 + golden Gxx |

*Traceability rule: no story closes without Requirement ID in PR + test name.*