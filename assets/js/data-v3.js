/**
 * USS Behavioral Visibility — Prototype seed data additions (v3)
 * Loaded after base USSSeed; merges editions, coverage, legal hold, ledger, golden scenarios.
 */
(function () {
  const S = window.USSSeed;
  if (!S) return;

  S.meta = {
    version: '3.0',
    product: 'USS Behavioral Visibility',
    thesis: 'Privacy-aware behavioral visibility — metadata-first, explainable risk, governed evidence',
    storageKey: 'uss_bv_prototype_state_v3'
  };

  /* Commercial editions (MRS v1.2) */
  S.editions = [
    { id: 'visibility', name: 'USS Visibility', phase: '0–1', includes: 'Metadata UAM, privacy defaults, Windows agent, dashboards', modules: ['uam', 'privacy', 'devices', 'activity', 'reports'] },
    { id: 'workforce', name: 'USS Workforce', phase: '2', includes: 'Contextual productivity without raw evidence', modules: ['workforce'] },
    { id: 'irm', name: 'USS IRM Protect', phase: '3–4', includes: 'UEBA, sequences, adaptive DLP, policy twin', modules: ['risk', 'dlp', 'alerts', 'policies'] },
    { id: 'investigate', name: 'USS Investigate', phase: '5', includes: 'Cases, focused evidence, legal hold, chain of custody', modules: ['investigations', 'observation'] },
    { id: 'connect', name: 'USS Connect', phase: '6', includes: 'M365/SIEM/HR + Mac/Linux/ChromeOS/Android per matrix', modules: ['integrations', 'coverage'] },
    { id: 'ai', name: 'USS AI Copilot', phase: '7', includes: 'Cited copilot + BYO-LLM governance', modules: ['ai', 'aigov'] },
    { id: 'sovereign', name: 'USS Sovereign', phase: '8', includes: 'On-prem/hybrid, residency, advanced DR', modules: ['settings'] }
  ];

  /* Tenant edition assignment */
  S.tenants = (S.tenants || []).map((t, i) => Object.assign({}, t, {
    edition: i === 0 ? 'investigate' : i === 1 ? 'workforce' : 'irm',
    regionPack: i === 0 ? 'BD / APAC' : i === 1 ? 'EU (GDPR pack)' : 'US + APAC',
    observationDefault: 1
  }));

  /* Observation levels 0–4 */
  S.observationLevels = [
    { level: 0, name: 'Excluded', desc: 'Agent health only — personal/private zones', guard: 'No content/activity telemetry' },
    { level: 1, name: 'Metadata', desc: 'Default ordinary monitoring', guard: 'No raw keystrokes, bodies, continuous video' },
    { level: 2, name: 'Enriched', desc: 'Classifiers, cloud context, sensitivity', guard: 'Still minimize raw content' },
    { level: 3, name: 'Focused Evidence', desc: 'Targeted screenshots/keystroke/content', guard: 'Purpose, expiry, dual approval, audit' },
    { level: 4, name: 'Preventive', desc: 'Warn/block/restrict adaptive controls', guard: 'Simulate before enforce' }
  ];

  /* OS capability matrix — anti false-parity */
  S.capabilityMatrix = [
    { capability: 'App usage metadata', windows: 'GA', macos: 'Connect', linux: 'Connect', chromeos: 'Connect', android: 'Connect' },
    { capability: 'Web/domain metadata', windows: 'GA', macos: 'Connect', linux: 'Limited', chromeos: 'GA', android: 'Limited' },
    { capability: 'Active/idle/time', windows: 'GA', macos: 'Connect', linux: 'Limited', chromeos: 'Connect', android: 'Connect' },
    { capability: 'File/USB/print metadata', windows: 'GA', macos: 'Partial', linux: 'Partial', chromeos: 'Limited', android: 'Limited' },
    { capability: 'Network metadata', windows: 'GA', macos: 'Partial', linux: 'GA', chromeos: 'Limited', android: 'Limited' },
    { capability: 'Screenshot / session evidence', windows: 'Investigate', macos: 'Investigate*', linux: 'No / rare', chromeos: 'Limited', android: 'No default' },
    { capability: 'Keystroke focused', windows: 'Investigate', macos: 'Investigate*', linux: 'Terminal option', chromeos: 'No', android: 'No' },
    { capability: 'DLP warn/block', windows: 'IRM', macos: 'Partial', linux: 'Partial', chromeos: 'Browser', android: 'MDM-dep' }
  ];

  /* Enrich devices with coverage */
  const cov = {
    'Windows 11': { badge: 'Windows GA', confidence: 96, level: 1, collectors: ['app', 'web', 'time', 'file', 'usb', 'print', 'net'] },
    'Windows 10': { badge: 'Windows GA', confidence: 94, level: 3, collectors: ['app', 'web', 'time', 'file', 'usb', 'print', 'net', 'screen'] },
    'macOS 15': { badge: 'macOS Partial', confidence: 78, level: 1, collectors: ['app', 'web', 'time', 'file'], gaps: ['USB deep', 'TCC screen pending'] },
    'Android 15': { badge: 'Android Limited', confidence: 62, level: 1, collectors: ['app', 'time', 'location'], gaps: ['file deep', 'keystroke'] }
  };
  S.devices = (S.devices || []).map(d => Object.assign({}, d, cov[d.os] || { badge: 'Unknown', confidence: 50, level: 1, collectors: [] }));

  /* Add Linux + ChromeOS devices (stories 33–34) */
  S.devices.push(
    { id: 'SRV-LINUX-01', user: 'USR-0063', os: 'Ubuntu 24.04 LTS', agent: '2.4.1', status: 'Online', last: '20 sec ago', policy: 'Engineering Server', health: 'Healthy', badge: 'Linux Limited', confidence: 71, level: 1, collectors: ['process', 'net', 'file-path', 'login'], gaps: ['GUI screenshot', 'USB desktop parity'] },
    { id: 'CHROMEBOOK-12', user: 'USR-0112', os: 'ChromeOS 128', agent: '1.2.0-ext', status: 'Online', last: '2 min ago', policy: 'Field Browser', health: 'Healthy', badge: 'ChromeOS Connect', confidence: 68, level: 1, collectors: ['web', 'time', 'upload-meta'], gaps: ['endpoint keystroke', 'deep file'] }
  );

  /* Enrich users with observation level + coverage */
  S.users = (S.users || []).map(u => {
    const dev = S.devices.find(d => d.user === u.id);
    return Object.assign({}, u, {
      observationLevel: u.id === 'USR-0088' || u.id === 'USR-0042' ? 3 : 1,
      coverageConfidence: dev ? dev.confidence : 40,
      purposeTags: u.dept === 'Finance' ? ['security', 'compliance'] : ['workforce']
    });
  });

  /* Risk ledger (explainable score changes) */
  S.riskLedger = [
    { id: 'RL-901', user: 'USR-0042', time: 'Today 02:42', delta: +22, factor: 'Large sensitive download', evidence: ['EVD-1003', 'FIL-002'], model: 'rules-v3.2', confidence: 0.94 },
    { id: 'RL-902', user: 'USR-0042', time: 'Today 02:42', delta: +16, factor: 'New USB destination', evidence: ['EVD-1004'], model: 'rules-v3.2', confidence: 0.91 },
    { id: 'RL-903', user: 'USR-0042', time: 'Today 02:43', delta: +18, factor: 'External transfer sequence', evidence: ['EVD-1005', 'SEQ-EXFIL-01'], model: 'seq-v1.4', confidence: 0.89 },
    { id: 'RL-904', user: 'USR-0042', time: 'Today 02:44', delta: -6, factor: 'Adaptive block executed (risk decay start)', evidence: ['EVD-1006'], model: 'rules-v3.2', confidence: 0.88 },
    { id: 'RL-910', user: 'USR-0088', time: 'Today 01:18', delta: +24, factor: 'Cumulative exfiltration window', evidence: ['EVD-2002', 'SEQ-CUMUL-02'], model: 'seq-v1.4', confidence: 0.92 },
    { id: 'RL-920', user: 'USR-0071', time: 'Yesterday 16:05', delta: +14, factor: 'Shadow AI sensitive prompt', evidence: ['COM-GENAI-01'], model: 'ai-gov-v2.1', confidence: 0.81 }
  ];

  S.sequences = [
    { id: 'SEQ-EXFIL-01', name: 'Sensitive export → USB copy', user: 'USR-0042', steps: ['OPEN PII workbook', 'CREATE CSV export', 'ARCHIVE zip', 'USB CONNECT', 'COPY to USB'], status: 'Matched', score: 94 },
    { id: 'SEQ-CUMUL-02', name: 'Departing cumulative cloud exfil', user: 'USR-0088', steps: ['Aggregate files', 'Archive', 'Personal cloud upload × N'], status: 'Matched', score: 91 },
    { id: 'SEQ-AI-03', name: 'Copy identifiers → Public GenAI', user: 'USR-0071', steps: ['Open CRM', 'Copy PII fields', 'Paste to chatgpt.com'], status: 'Matched', score: 69 }
  ];

  /* Legal holds (story 35) */
  S.legalHolds = [
    { id: 'LH-001', caseId: 'INV-2026-0042', scope: 'Evidence class: File + USB + Screenshot', owner: 'Legal Officer', reason: 'Potential regulatory inquiry — customer PII', status: 'Active', since: '06 Sep 2026', preventsPurge: true },
    { id: 'LH-002', caseId: 'INV-2026-0039', scope: 'Evidence class: Cloud + Communications', owner: 'Legal Officer', reason: 'Employment dispute preservation', status: 'Active', since: '05 Sep 2026', preventsPurge: true }
  ];

  /* Jurisdiction / purpose packs (story 36) */
  S.jurisdictionPacks = [
    { id: 'JP-BD', name: 'Bangladesh / APAC baseline', residency: 'BD + APAC region', retentionDefault: 60, invasiveRequires: 'Purpose + owner + expiry', worksCouncil: false },
    { id: 'JP-EU', name: 'EU GDPR pack', residency: 'EU only', retentionDefault: 30, invasiveRequires: 'DPIA + purpose + dual approval', worksCouncil: true },
    { id: 'JP-US', name: 'US employment baseline', residency: 'US region', retentionDefault: 90, invasiveRequires: 'Purpose + counsel review for Level 3+', worksCouncil: false }
  ];

  S.purposeGrants = [
    { id: 'PG-01', actor: 'Farhana — Security', purpose: 'Investigation', caseId: 'INV-2026-0042', scope: 'USR-0042 evidence', expires: '13 Sep 2026', status: 'Active' },
    { id: 'PG-02', actor: 'Department Manager', purpose: 'Workforce analytics', caseId: null, scope: 'Engineering aggregates only', expires: 'Ongoing', status: 'Active' }
  ];

  /* AI governance catalog (story 37) */
  S.aiCatalog = [
    { id: 'AI-APP-01', name: 'ChatGPT (chatgpt.com)', type: 'Shadow / Public', sanctioned: false, risk: 'High', lastSeen: 'Yesterday', users: 18 },
    { id: 'AI-APP-02', name: 'Microsoft Copilot (M365)', type: 'Sanctioned', sanctioned: true, risk: 'Low', lastSeen: 'Today', users: 412 },
    { id: 'AI-APP-03', name: 'Claude.ai', type: 'Shadow / Public', sanctioned: false, risk: 'High', lastSeen: '2 days ago', users: 7 },
    { id: 'AI-APP-04', name: 'USS BYO LLM Gateway', type: 'Self-hosted investigation', sanctioned: true, risk: 'Controlled', lastSeen: 'Today', users: 6 }
  ];

  S.aiGovernance = {
    crossTenantTraining: false,
    groundingRequired: true,
    egressAllowlist: ['byo-llm.internal', 'api.openai-compatible.local'],
    citeEvidence: true,
    labelInferences: true
  };

  /* Golden scenarios G01–G12 */
  S.goldenScenarios = [
    { id: 'G01', name: 'Normal employee pattern', gate: 'Visibility', desc: 'No anomalous score increase; no Level-3 escalation', pass: true },
    { id: 'G02', name: 'Departing: aggregate → archive → personal cloud', gate: 'IRM', desc: 'Sequence + cumulative exfil + explainable ledger', pass: true },
    { id: 'G03', name: 'Sanctioned finance bulk export', gate: 'IRM', desc: 'Exception suppresses false positive; audit preserved', pass: true },
    { id: 'G04', name: 'Compromised account unusual context', gate: 'IRM', desc: 'Identity/context risk rises without malice attribution', pass: true },
    { id: 'G05', name: 'USB copy moderate vs elevated', gate: 'IRM', desc: 'Warn/justify vs block per simulated rule', pass: true },
    { id: 'G06', name: 'Sensitive paste to public GenAI', gate: 'IRM/AI', desc: 'AI governance/DLP path with citations', pass: true },
    { id: 'G07', name: 'Do Not Record banking/health site', gate: 'Visibility', desc: 'No screenshot/content server-side; exclusion ≠ false gap', pass: true },
    { id: 'G08', name: 'Focused investigation expiry', gate: 'Investigate', desc: 'Collectors auto-revert to Level 1', pass: true },
    { id: 'G09', name: 'Collector/API outage', gate: 'Visibility', desc: 'Coverage warning; incomplete metrics visible', pass: true },
    { id: 'G10', name: 'Cross-tenant AI retrieval attempt', gate: 'AI', desc: 'Denied; no foreign tenant in context', pass: true },
    { id: 'G11', name: 'Manager team dashboard', gate: 'Visibility', desc: 'No raw evidence objects via UI/API', pass: true },
    { id: 'G12', name: 'Policy simulation of block rule', gate: 'IRM', desc: 'Zero enforcement side effects on endpoints', pass: true }
  ];

  /* Expand scenarios to include golden + coverage outage */
  S.scenarios = (S.scenarios || []).concat([
    { id: 'g07_dnr', name: 'G07 Do Not Record', desc: 'Banking site visit — capture excluded, coverage honest' },
    { id: 'g09_outage', name: 'G09 Collector Outage', desc: 'Agent offline — risk shows incomplete coverage' },
    { id: 'g08_expire', name: 'G08 Focused Expiry', desc: 'Level-3 auto-reverts to metadata' },
    { id: 'g11_manager', name: 'G11 Manager Privacy Boundary', desc: 'Manager cannot open raw screenshots' },
    { id: 'g12_sim', name: 'G12 Simulation Safety', desc: 'Simulate block without endpoint enforce' }
  ]);

  /* Do Not Record domains */
  S.doNotRecord = [
    { domain: 'online.banking.example', reason: 'Financial account portal', addedBy: 'Privacy Officer' },
    { domain: 'patient-portal.health.example', reason: 'Health data', addedBy: 'Privacy Officer' },
    { domain: 'payroll.internal.example', reason: 'Payroll self-service', addedBy: 'HR + Privacy' }
  ];

  /* Product principles as release blockers (demo checklist) */
  S.principles = [
    { id: 'P1', text: 'Metadata-first default; Level 3 exceptional & auto-expiring' },
    { id: 'P2', text: 'Managers get aggregates only — never raw evidence by default' },
    { id: 'P3', text: 'LLMs explain and cite; never author guilt' },
    { id: 'P4', text: 'Missing coverage is visible — never fake completeness' },
    { id: 'P5', text: 'Policy simulation never enforces' },
    { id: 'P6', text: 'No covert consumer/spouse monitoring positioning' },
    { id: 'P7', text: 'Control plane ≠ high-volume telemetry plane' },
    { id: 'P8', text: 'Tenant/purpose/case authorization at query boundaries' }
  ];

  /* Role permission matrix for raw evidence */
  S.rolePermissions = {
    super_admin: { rawEvidence: false, cases: false, dlpDecide: false, admin: true, platform: true },
    company_admin: { rawEvidence: false, cases: true, dlpDecide: false, admin: true, platform: false },
    it_admin: { rawEvidence: false, cases: false, dlpDecide: false, admin: true, platform: false },
    manager: { rawEvidence: false, cases: false, dlpDecide: false, admin: false, platform: false },
    hr: { rawEvidence: false, cases: false, dlpDecide: false, admin: false, platform: false },
    soc: { rawEvidence: true, cases: true, dlpDecide: true, admin: false, platform: false },
    risk: { rawEvidence: true, cases: true, dlpDecide: false, admin: false, platform: false },
    dlp: { rawEvidence: true, cases: true, dlpDecide: true, admin: false, platform: false },
    investigator: { rawEvidence: true, cases: true, dlpDecide: false, admin: false, platform: false },
    legal: { rawEvidence: true, cases: true, dlpDecide: false, admin: false, platform: false },
    compliance: { rawEvidence: false, cases: true, dlpDecide: false, admin: false, platform: false },
    auditor: { rawEvidence: false, cases: false, dlpDecide: false, admin: false, platform: false },
    privacy: { rawEvidence: false, cases: false, dlpDecide: false, admin: true, platform: false },
    executive: { rawEvidence: false, cases: false, dlpDecide: false, admin: false, platform: false },
    employee: { rawEvidence: false, cases: false, dlpDecide: false, admin: false, platform: false }
  };

  /* Enrich investigations with legal hold flag */
  S.investigations = (S.investigations || []).map(inv => Object.assign({}, inv, {
    legalHold: (S.legalHolds || []).some(h => h.caseId === inv.id && h.status === 'Active'),
    observationLevel: inv.subject === 'USR-0042' || inv.subject === 'USR-0088' ? 3 : 1
  }));

  /* Notifications feed */
  S.notifications = [
    { id: 'N1', text: 'OBS-022 awaiting dual approval (Level 3)', severity: 'High', time: 'Just now' },
    { id: 'N2', text: 'LH-001 legal hold active on INV-2026-0042', severity: 'Medium', time: 'Today' },
    { id: 'N3', text: 'SRV-LINUX-01 reporting — capability Limited (honest coverage)', severity: 'Info', time: 'Today' }
  ];

  /* v1.3 Veriato parity — webcam pack (disabled by default) */
  S.webcam = {
    enabledByDefault: false,
    dualApprovalRequired: true,
    activePolicies: [],
    capability: {
      windows: 'Investigate optional',
      macos: 'Investigate optional (TCC)',
      linux: 'Not typical',
      chromeos: 'No',
      android: 'No default'
    }
  };
  S.capabilityMatrix.push(
    { capability: 'Webcam snapshot (optional)', windows: 'Investigate*', macos: 'Investigate*', linux: 'No / rare', chromeos: 'No', android: 'No default' }
  );
  S.goldenScenarios.push(
    { id: 'G13', name: 'Webcam disabled until dual approval', gate: 'Investigate', desc: 'Fresh tenant webcam off; enable requires dual approval', pass: true },
    { id: 'G14', name: 'Unauthorized webcam/live view denied', gate: 'Investigate', desc: 'Manager without grant denied; PRIV-031 audit', pass: true },
    { id: 'G15', name: 'HR attendance export has no raw evidence', gate: 'Workforce', desc: 'CSV/PDF attendance pack excludes screenshots/keystrokes/webcam', pass: true }
  );

})();
