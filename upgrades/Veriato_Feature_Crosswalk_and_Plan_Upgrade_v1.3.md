# Veriato-Type Feature Spec → System Crosswalk & Plan Upgrade v1.3

**Date:** 7 September 2026  
**Prepared by:** Mostak Ahmad  
**Baseline:** MRS / Catalog v1.2 (587) → **v1.3 (603)** after gap fill  
**External reference:** Typical Veriato-class employee monitoring feature list (Activity, Screen/Input, Productivity, Comms/Files, Alerts, Reporting, Admin, Deployment)

---

## 1. Executive verdict

| Result | Count |
|--------|------:|
| Already covered in v1.2 | 37 / 38 atomic bullets |
| Hard gap before v1.3 | **1 — Webcam snapshot** |
| Sharpened / newly named in v1.3 | 8 supporting requirements |
| **New requirements added** | **16** (`UAM-CAM-*` + attendance/break/off-network/HR export/live-view/view-audit/productivity score) |
| **Catalog total after upgrade** | **603** |

**Conclusion:** The system proposal now **includes all features** from the Veriato-type checklist. Intrusive items (keystroke, continuous screenshots, live view, webcam) remain **optional / elevated / audited**, not always-on defaults — required for a compliant best-product posture.

---

## 2. Full atomic crosswalk

### Module 1 — Activity & Time Tracking

| # | External feature | Status | System mapping | Priority / edition |
|---|------------------|--------|----------------|--------------------|
| 1.1 | Login/logout timestamps | **Included** | `AGENT-WIN-006`, `UAM-TIME-001`, session identity | MUST · Visibility |
| 1.2 | Idle vs active time | **Included** | `UAM-TIME-002`, `UAM-TIME-003` | MUST · Visibility |
| 1.3 | App usage (time per app) | **Included** | `UAM-APP-002`, `UAM-APP-011` | MUST · Visibility |
| 1.4 | Website usage (time per site) | **Included** | `UAM-WEB-001`, `UAM-WEB-002` | MUST · Visibility |
| 1.5 | Attendance/work-hours per emp/team/day | **Included + strengthened** | `UAM-TIME-010`–`012`, **`UAM-TIME-018` (new)** | MUST · Visibility |
| 1.6 | Break time detection | **Included + strengthened** | idle thresholds + **`UAM-TIME-017` (new)** | MUST · Visibility |
| 1.7 | Idle threshold (mouse/keyboard) | **Included** | `UAM-TIME-002` configurable thresholds | MUST · Visibility |

### Module 2 — Screen & Input Monitoring

| # | External feature | Status | System mapping | Priority / edition |
|---|------------------|--------|----------------|--------------------|
| 2.1 | Periodic screenshots (5–10 min) | **Included** | `UAM-SCR-001`, `UAM-SCR-007` (interval/FPS) | SHOULD · Investigate |
| 2.2 | Live screen view for managers | **Included + clarified** | `UAM-SCR-005`, **`UAM-SCR-021` (new)** | SHOULD · Investigate |
| 2.3 | Keystroke logging | **Included (off by default)** | `UAM-KEY-001`–`008` | SHOULD · Investigate |
| 2.4 | Webcam snapshot (optional) | **Added in v1.3** | **`UAM-CAM-001`–`008` (new module)** | SHOULD · Investigate |

### Module 3 — Productivity Analytics

| # | External feature | Status | System mapping | Priority / edition |
|---|------------------|--------|----------------|--------------------|
| 3.1 | Productive / unproductive / neutral | **Included** | `UAM-APP-005`, `UAM-WEB-003/004`, `PROD-001/002` | SHOULD · Workforce |
| 3.2 | Productivity score emp/team | **Included + named** | `PROD-*`, **`PROD-026` (new)** | SHOULD · Workforce |
| 3.3 | Trend dashboards d/w/m | **Included** | `DASH-007`, `PROD-007/008`, trend reports | MUST/SHOULD |
| 3.4 | Idle vs active ratio | **Included** | `UAM-TIME-*`, `PROD-006`, workforce dashboards | MUST/SHOULD |

### Module 4 — Communication & File Monitoring

| # | External feature | Status | System mapping | Priority / edition |
|---|------------------|--------|----------------|--------------------|
| 4.1 | Email activity metadata | **Included** | `UAM-COMM-001` | SHOULD · Investigate |
| 4.2 | Email content logging (sensitive) | **Included (elevated)** | `UAM-COMM-003` | SHOULD · Investigate |
| 4.3 | Chat (Slack/Teams) activity | **Included** | `UAM-COMM-002`, M365/INT connectors | SHOULD · Investigate/Connect |
| 4.4 | Chat content (sensitive) | **Included (elevated)** | `UAM-COMM-003` | SHOULD · Investigate |
| 4.5 | File access / upload / download | **Included** | `UAM-FILE-*` | MUST · Visibility |
| 4.6 | USB transfer logs | **Included** | `UAM-FILE-009`+ , DLP USB controls | MUST · Visibility |
| 4.7 | Print activity logs | **Included** | `UAM-FILE-010` | MUST · Visibility |

### Module 5 — Alerts & Risk Flags

| # | External feature | Status | System mapping | Priority / edition |
|---|------------------|--------|----------------|--------------------|
| 5.1 | Keyword-based alerts | **Included** | `UAM-WEB-012`, `UAM-COMM-007`, `UAM-KEY-004`, `POL-*` | SHOULD/MUST |
| 5.2 | Large/unusual data movement | **Included (stronger)** | `UAM-FILE-017/018`, `IRM-SEQ-*`, DLP | SHOULD · IRM |
| 5.3 | After-hours / off-network login | **Included + strengthened** | schedule rules + **`UAM-NET-015` (new)** | SHOULD · IRM |
| 5.4 | Rules per department/role | **Included** | `ORG-*` groups, `POL-*` scopes | MUST/SHOULD |

### Module 6 — Reporting & Dashboards

| # | External feature | Status | System mapping | Priority / edition |
|---|------------------|--------|----------------|--------------------|
| 6.1 | Manager team overview | **Included + named** | workforce dashboards + **`DASH-022` (new)** | MUST · Visibility |
| 6.2 | Individual drill-down | **Included (RBAC-limited)** | user profiles / timelines; raw evidence blocked for managers by default | MUST |
| 6.3 | Export CSV/PDF for HR/payroll | **Included + named** | `DASH-019` + **`DASH-021` (new)** | SHOULD · Workforce |
| 6.4 | Historical search/filter | **Included** | `DASH` search, activity explorer, investigation search | MUST |

### Module 7 — Admin & Access Control

| # | External feature | Status | System mapping | Priority / edition |
|---|------------------|--------|----------------|--------------------|
| 7.1 | RBAC (admin/manager/HR) | **Included (stronger)** | `IAM-001` + ABAC `IAM-002` | MUST · Visibility |
| 7.2 | Per-employee/group policies | **Included** | `ORG-005/006`, policy scopes, observation levels | MUST |
| 7.3 | Audit who viewed whose data | **Included + named** | audit trail + **`PRIV-031` (new)** | MUST · Visibility |

### Module 8 — Deployment

| # | External feature | Status | System mapping | Priority / edition |
|---|------------------|--------|----------------|--------------------|
| 8.1 | Windows agent | **Included** | `AGENT` + `AGENT-WIN-*` | MUST · Visibility |
| 8.2 | Mac agent | **Included** | `AGENT-MAC-*` | COULD→Connect |
| 8.3 | Cloud dashboard | **Included** | SaaS multi-tenant control/experience plane | MUST |
| 8.4 | Central server / on-prem | **Included** | Sovereign / hybrid deployment (`PLAT-*`) | COULD · Sovereign |
| 8.5 | On-network + remote/VPN | **Included** | offline queue `AGENT-027`, remote deploy, network context | MUST |

---

## 3. Beyond Veriato-class (already in proposal — keep)

These remain differentiators; do not drop while adding parity:

- Adaptive Observation Levels 0–4  
- Explainable Risk Ledger + ordered sequences  
- Adaptive DLP + policy digital twin  
- Legal hold / chain of custody  
- Do Not Record + purpose grants  
- Coverage confidence / OS honesty matrix  
- AI / shadow-AI governance + cited copilot  
- Linux / ChromeOS / Android enterprise paths  

---

## 4. Plan upgrade (binding)

### 4.1 Requirement totals

| Version | Requirements |
|---------|-------------:|
| v1.2 | 587 |
| **v1.3** | **603** (+16) |

Authoritative catalog: `USS_MRS_v1.3_Requirement_Catalog.csv`  
New IDs only: `USS_v1.3_New_Requirements.csv`

### 4.2 Edition / phase placement of new items

| IDs | Edition | Phase gate |
|-----|---------|------------|
| `UAM-TIME-017/018`, `DASH-022`, `PRIV-031` | Visibility | Phase 0–1 |
| `DASH-021`, `PROD-026` | Workforce | Phase 2 |
| `UAM-NET-015` | IRM Protect | Phase 3 |
| `UAM-CAM-001..008`, `UAM-SCR-021` | Investigate (+ optional **Webcam Pack** SKU) | Phase 5 |

### 4.3 Optional commercial SKU

Add **Webcam Evidence Pack** (add-on to Investigate): enables `UAM-CAM-*` after dual approval, jurisdiction review, and Transparency notice. Never bundle into Visibility.

### 4.4 Privacy / legal controls (mandatory for new webcam/live/keystroke)

- Default **OFF** (`UAM-CAM-001`, existing `UAM-KEY-001`, screenshot defaults)  
- Dual approval + step-up auth + purpose + expiry  
- Separate retention/reveal (`UAM-CAM-005`)  
- Viewer audit (`PRIV-031`)  
- Employee transparency when enabled (`UAM-CAM-008`)  
- Capability matrix honesty (`UAM-CAM-007`)  

### 4.5 Prototype / backlog follow-ups

1. Import `USS_v1.3_New_Requirements.csv` into Jira as stories under Investigate / Visibility / Workforce epics.  
2. Extend prototype: Webcam policy toggle (disabled by default) + audit event + Transparency label.  
3. Regenerate Bangla story PDF section “Webcam / Camera (ঐচ্ছিক, সংবেদনশীল)” in next doc pass.  
4. Roll into full **MRS v1.3** narrative when Phase 1 freeze approaches (IDs already stable in catalog).

### 4.6 Acceptance gates added

| Gate | Check |
|------|--------|
| G13 | Webcam disabled on fresh tenant; enabling without dual approval fails |
| G14 | Manager without purpose grant cannot open webcam/live evidence (`PRIV-031` audit records deny) |
| G15 | Attendance day/team summary + HR export contain no raw intrusive evidence |

---

## 5. Compliance note (product stance)

Including webcam/live view/keystroke for **market parity** does **not** mean shipping them as ordinary workforce defaults. The upgraded plan keeps Veriato-class capability coverage while preserving the product thesis: metadata-first, explainable risk, purpose-bound intrusive evidence, and auditable viewing.

---

*End of Crosswalk & Plan Upgrade v1.3*
