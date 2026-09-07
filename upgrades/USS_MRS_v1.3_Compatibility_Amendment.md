# Master Requirement Amendment v1.3 — Veriato Parity Completion

**Prepared by:** Mostak Ahmad  
**Date:** 7 September 2026  
**Parent:** MRS v1.2 (587 requirements)  
**Result:** Catalog **603** requirements — all Veriato-type core features included

## Authority

- Requirement IDs in `USS_MRS_v1.3_Requirement_Catalog.csv` are authoritative.  
- v1.2 IDs unchanged; **16 new IDs** added (never reuse retired IDs).  
- Crosswalk detail: `Veriato_Feature_Crosswalk_and_Plan_Upgrade_v1.3.md`

## Why this amendment

A full cross-check against a Veriato-class monitoring checklist showed **37/38** features already covered. The only hard gap was **webcam snapshot**. Several adjacent features existed but needed sharper named requirements (break time, daily attendance summaries, off-network login alerts, HR attendance export, manager live-view controls, who-viewed-whose audit, named productivity score).

## New requirement IDs (16)

### Webcam module (Investigate / optional Webcam Pack)

| ID | Title |
|----|-------|
| UAM-CAM-001 | Webcam/camera capture disabled by default |
| UAM-CAM-002 | Optional authorized webcam snapshot capture |
| UAM-CAM-003 | Associate webcam snapshots with identity and context |
| UAM-CAM-004 | Webcam capture requires dual approval and step-up auth |
| UAM-CAM-005 | Webcam evidence separate retention and reveal permissions |
| UAM-CAM-006 | Fail privacy-safe when camera permission revoked |
| UAM-CAM-007 | Publish webcam capability by OS in compatibility matrix |
| UAM-CAM-008 | Employee transparency notice for webcam policies |

### Sharpened parity requirements

| ID | Title | Edition |
|----|-------|---------|
| UAM-TIME-017 | Break time from configurable idle thresholds | Visibility |
| UAM-TIME-018 | Attendance/work-hours per employee, team, day | Visibility |
| UAM-NET-015 | After-hours or off-network/unfamiliar-network login alerts | IRM Protect |
| DASH-021 | HR/payroll-oriented attendance export packs | Workforce |
| DASH-022 | Manager team overview with authorized drill-down | Visibility |
| UAM-SCR-021 | Manager-authorized live screen view with controls | Investigate |
| PRIV-031 | Audit who viewed whose monitoring data or evidence | Visibility |
| PROD-026 | Productivity score per employee/team with versioned rules | Workforce |

## Product rule (unchanged thesis)

Intrusive collectors (continuous screenshots, keystroke, live view, **webcam**) ship as **capability**, not as Visibility defaults. Fresh tenants remain Level-1 metadata-first (`PRIV-001` still applies: camera disabled until authorized policy).

## Release impact

- Visibility GA: + `UAM-TIME-017/018`, `DASH-022`, `PRIV-031`  
- Workforce GA: + `DASH-021`, `PROD-026`  
- IRM Protect GA: + `UAM-NET-015`  
- Investigate GA: + `UAM-CAM-*`, `UAM-SCR-021` (+ optional Webcam Pack SKU)

## Golden gates added

- **G13** Webcam off by default; dual-approval required to enable  
- **G14** Unauthorized viewer denied; `PRIV-031` audit  
- **G15** HR attendance export excludes raw intrusive evidence  

*End of Amendment v1.3*
