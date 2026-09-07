# USS Behavioral Visibility — Current Specification Set

Authoritative product/planning docs as of **v1.2** (7 September 2026).

## Root (still current)

| File | Role |
|------|------|
| `../USS_Behavioral_Visibility_Detailed_Module_SRS_Suite_v1.0.docx` | Module-level SRS elaboration (29 modules) |
| `../USS_Behavioral_Visibility_Complete_Feature_List_Bangla_v1.0.docx` | Bangla feature index (587 IDs) |
| `../USS_Behavioral_Visibility_Story_Based_System_Description_Bangla.pdf` | Persona stories 1–32 |

## This folder (`upgrades/` → current planning pack)

| File | Role |
|------|------|
| `USS_Behavioral_Visibility_Master_Requirement_Specification_v1.2.md` / `.docx` | **Planning baseline** — 587 IDs with priorities, editions, ACs |
| `USS_MRS_v1.2_Requirement_Catalog.csv` | Machine-readable requirement catalog |
| `USS_Behavioral_Visibility_Story_Supplement_Bangla_v1.1.md` / `.docx` | Stories 33–39 (Linux/ChromeOS/legal hold/AI/editions) |
| `USS_Phase0_Phase1_Jira_Epics_v1.2.md` / `.docx` | Phase 0/1 epics + exit checklists |
| `USS_Phase0_Phase1_Jira_Import_v1.2.csv` | Jira CSV import (13 epics + 284 MUST stories) |

## Authority

- **MRS v1.2** wins on priority, edition, acceptance measurement, and release gates.
- Requirement **IDs** remain those defined in the original v1.0 catalog (now rolled into v1.2).
- Module implementation detail: use **SRS Suite v1.0** with v1.2 priorities from the catalog CSV.

## Removed as superseded

- MRS v1.0 (replaced by MRS v1.2)
- Product Upgrade Pack v1.1 (folded into MRS v1.2)
- Feature Priority Overlay v1.1 (replaced by MRS catalog)
- Priority reclassification CSV/JSON v1.1 (replaced by `USS_MRS_v1.2_Requirement_Catalog.csv`)
- Visibility MUST backlog v1.1 (replaced by Phase 0/1 Jira pack)
- README_v1.1.md (replaced by this file)


## v1.3 — Veriato parity completion

| File | Role |
|------|------|
| `Veriato_Feature_Crosswalk_and_Plan_Upgrade_v1.3.md` | Full bullet-by-bullet crosswalk + plan |
| `USS_MRS_v1.3_Compatibility_Amendment.md` | Normative amendment |
| `USS_MRS_v1.3_Requirement_Catalog.csv` | **603** requirements (authoritative) |
| `USS_v1.3_New_Requirements.csv` | 16 new IDs only |

**Authority:** v1.3 catalog wins for new webcam/attendance/audit features. Intrusive collectors remain off-by-default.
