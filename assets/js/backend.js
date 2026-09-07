/**
 * USS Behavioral Visibility — Fake Backend v3
 * Persistent localStorage simulation of control + event planes.
 */
(function () {
  const KEY = 'uss_bv_prototype_state_v3';
  const LEGACY = 'uss_bv_prototype_state_v2';

  function clone(x) { return JSON.parse(JSON.stringify(x)); }
  function now() {
    return new Date().toLocaleString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  }

  function initial() {
    const s = clone(window.USSSeed);
    s.currentPersona = 'soc';
    s.scenario = 'exfil';
    s.activeEdition = s.tenants?.[0]?.edition || 'investigate';
    s.simulationMode = false;
    s.coverageOutage = false;
    s.notifications = s.notifications || [];
    s.doNotRecord = s.doNotRecord || [];
    s.legalHolds = s.legalHolds || [];
    s.riskLedger = s.riskLedger || [];
    s.sequences = s.sequences || [];
    s.goldenScenarios = s.goldenScenarios || [];
    s.capabilityMatrix = s.capabilityMatrix || [];
    s.editions = s.editions || [];
    s.aiCatalog = s.aiCatalog || [];
    s.aiGovernance = s.aiGovernance || {};
    s.jurisdictionPacks = s.jurisdictionPacks || [];
    s.purposeGrants = s.purposeGrants || [];
    s.principles = s.principles || [];
    s.rolePermissions = s.rolePermissions || {};
    s.observationLevels = s.observationLevels || [];
    s.counters = {
      investigation: 43, note: 3, policy: 16, tenant: 4, department: 7,
      observation: 23, report: 3, integration: 7, hold: 3, ledger: 930, grant: 3
    };
    return s;
  }

  class FakeBackend {
    constructor() { this.state = this.load(); }

    load() {
      try {
        const v = localStorage.getItem(KEY);
        if (v) return JSON.parse(v);
        // Fresh v3 — do not silently reuse incomplete v2 shape
        localStorage.removeItem(LEGACY);
        return initial();
      } catch (e) {
        return initial();
      }
    }

    save() { localStorage.setItem(KEY, JSON.stringify(this.state)); }
    reset() { this.state = initial(); this.save(); }
    exportState() { return clone(this.state); }
    importState(obj) { this.state = clone(obj); this.save(); }

    get(k) { return clone(this.state[k]); }
    set(k, v) { this.state[k] = clone(v); this.save(); }
    setPersona(id) { this.state.currentPersona = id; this.save(); }
    persona() { return this.state.currentPersona; }

    actor() {
      const p = (this.state.personas || []).find(x => x.id === this.state.currentPersona);
      return p ? p.name : 'Current User';
    }

    perms() {
      return this.state.rolePermissions?.[this.state.currentPersona] || {
        rawEvidence: false, cases: false, dlpDecide: false, admin: false, platform: false
      };
    }

    canRawEvidence() { return !!this.perms().rawEvidence; }

    user(id) { return clone(this.state.users.find(x => x.id === id)); }

    mutateUser(id, patch) {
      const u = this.state.users.find(x => x.id === id);
      if (!u) return false;
      Object.assign(u, patch);
      this.audit(this.actor(), 'Updated user', id, JSON.stringify(patch));
      this.save();
      return true;
    }

    audit(actor, action, target, purpose) {
      this.state.audits.unshift({ time: 'Just now', actor, action, target, purpose, ip: 'Demo session' });
    }

    notify(text, severity = 'Info') {
      this.state.notifications.unshift({ id: 'N' + Date.now(), text, severity, time: 'Just now' });
    }

    updateAlert(id, status) {
      const a = this.state.alerts.find(x => x.id === id);
      if (!a) return false;
      a.status = status;
      this.audit(this.actor(), `Alert set ${status}`, id, 'Alert handling');
      this.save();
      return true;
    }

    createAlert(obj) {
      const next = 'ALT-' + String(2400 + this.state.alerts.length + 1);
      const a = Object.assign({
        id: next, time: 'Just now', status: 'Open', score: 50,
        details: 'Created in interactive prototype.'
      }, obj);
      this.state.alerts.unshift(a);
      this.audit(this.actor(), 'Created alert', a.id, a.type || 'Alert');
      this.save();
      return clone(a);
    }

    createInvestigationFromAlert(alertId) {
      const a = this.state.alerts.find(x => x.id === alertId);
      if (!a) return null;
      const id = `INV-2026-${String(this.state.counters.investigation++).padStart(4, '0')}`;
      const item = {
        id, title: a.title, subject: a.user, severity: a.severity, owner: this.actor(),
        status: 'Open', opened: 'Today', evidence: 0, notes: 0, legalHold: false, observationLevel: 1
      };
      this.state.investigations.unshift(item);
      a.status = 'Investigating';
      this.audit(this.actor(), 'Created investigation', id, alertId);
      this.save();
      return id;
    }

    createInvestigation(obj) {
      const id = `INV-2026-${String(this.state.counters.investigation++).padStart(4, '0')}`;
      const item = Object.assign({
        id, title: 'New investigation', subject: this.state.users[0].id, severity: 'Medium',
        owner: this.actor(), status: 'Open', opened: 'Today', evidence: 0, notes: 0,
        legalHold: false, observationLevel: 1
      }, obj);
      this.state.investigations.unshift(item);
      this.audit(this.actor(), 'Created investigation', id, 'Manual case creation');
      this.save();
      return id;
    }

    updateInvestigation(id, patch) {
      const x = this.state.investigations.find(i => i.id === id);
      if (!x) return false;
      Object.assign(x, patch);
      this.audit(this.actor(), 'Updated investigation', id, JSON.stringify(patch));
      this.save();
      return true;
    }

    addNote(caseId, data) {
      const id = `NOTE-${String(this.state.counters.note++).padStart(3, '0')}`;
      const n = Object.assign({
        id, caseId, author: this.actor(), time: 'Just now', type: 'Investigation Note',
        visibility: 'Investigation Team', text: '', pinned: false
      }, data);
      this.state.notes.unshift(n);
      const x = this.state.investigations.find(i => i.id === caseId);
      if (x) x.notes = (x.notes || 0) + 1;
      this.audit(this.actor(), 'Added investigation note', caseId, n.type);
      this.save();
      return clone(n);
    }

    toggleEvidenceRelevant(id) {
      if (!this.canRawEvidence()) return null;
      const e = this.state.evidence.find(x => x.id === id);
      if (!e) return false;
      e.relevant = !e.relevant;
      this.audit(this.actor(), e.relevant ? 'Marked evidence relevant' : 'Unmarked evidence', id, e.caseId);
      this.save();
      return e.relevant;
    }

    updatePolicy(id, patch) {
      const p = this.state.policies.find(x => x.id === id);
      if (!p) return false;
      Object.assign(p, typeof patch === 'string' ? { status: patch } : patch, { updated: 'Just now' });
      this.audit(this.actor(), 'Updated policy', id, JSON.stringify(patch));
      this.save();
      return true;
    }

    createPolicy(obj) {
      const id = `POL-${String(this.state.counters.policy++).padStart(3, '0')}`;
      const p = Object.assign({
        id, name: 'New Policy', type: 'Monitoring', scope: 'All users', status: 'Simulation',
        actions: 'Alert', updated: 'Just now', conditions: [], purpose: '', legalBasis: '', owner: this.actor(), expires: ''
      }, obj);
      this.state.policies.unshift(p);
      this.audit(this.actor(), 'Created policy', id, p.type);
      this.save();
      return id;
    }

    clonePolicy(id) {
      const p = this.state.policies.find(x => x.id === id);
      if (!p) return null;
      return this.createPolicy(Object.assign({}, clone(p), { id: undefined, name: p.name + ' Copy', status: 'Simulation' }));
    }

    /** Promote only if purpose fields present for invasive types */
    promotePolicy(id) {
      const p = this.state.policies.find(x => x.id === id);
      if (!p) return { ok: false, reason: 'Not found' };
      const invasive = /DLP|Observation|Screenshot|Keystroke|AI Governance/i.test(p.type + p.name);
      if (invasive && this.state.simulationMode) {
        return { ok: false, reason: 'P5: Simulation mode — cannot enforce/promote to Active' };
      }
      if (invasive && (!p.purpose || !p.owner)) {
        return { ok: false, reason: 'Invasive policy requires purpose + owner before publish (PRIV-002)' };
      }
      if (this.state.simulationMode) {
        this.audit(this.actor(), 'Simulated policy promotion (no enforce)', id, 'Digital Twin');
        this.save();
        return { ok: true, simulated: true };
      }
      p.status = 'Active';
      p.updated = 'Just now';
      this.audit(this.actor(), 'Promoted policy to Active', id, p.purpose || 'Policy publish');
      this.save();
      return { ok: true };
    }

    addDevice(obj) {
      const d = Object.assign({
        id: 'DEVICE-' + String(this.state.devices.length + 1).padStart(3, '0'),
        user: this.state.users[0].id, os: 'Windows 11', agent: '2.4.1', status: 'Pending',
        last: 'Never', policy: 'Standard', health: 'Pending Install',
        badge: 'Windows GA', confidence: 90, level: 1, collectors: ['app', 'web', 'time']
      }, obj);
      this.state.devices.unshift(d);
      this.audit(this.actor(), 'Queued agent deployment', d.id, d.os);
      this.save();
      return clone(d);
    }

    updateDevice(id, patch) {
      const d = this.state.devices.find(x => x.id === id);
      if (!d) return false;
      Object.assign(d, patch);
      this.audit(this.actor(), 'Updated endpoint', id, JSON.stringify(patch));
      this.save();
      return true;
    }

    createTenant(obj) {
      const t = Object.assign({
        name: 'New Organization', users: 0, devices: 0, plan: 'UAM', storage: '0 GB',
        health: 'Provisioning', region: 'APAC', edition: 'visibility', regionPack: 'BD / APAC', observationDefault: 1
      }, obj);
      this.state.tenants.push(t);
      this.audit(this.actor(), 'Provisioned tenant', t.name, t.edition || t.plan);
      this.save();
      return clone(t);
    }

    updateTenant(name, patch) {
      const t = this.state.tenants.find(x => x.name === name);
      if (!t) return false;
      Object.assign(t, patch);
      this.audit(this.actor(), 'Updated tenant', name, JSON.stringify(patch));
      this.save();
      return true;
    }

    setActiveEdition(editionId) {
      this.state.activeEdition = editionId;
      if (this.state.tenants[0]) this.state.tenants[0].edition = editionId;
      this.audit(this.actor(), 'Set active product edition', editionId, 'Commercial packaging');
      this.notify('Active edition → ' + editionId, 'Info');
      this.save();
    }

    createDepartment(obj) {
      const id = `DEP-${String(this.state.counters.department++).padStart(3, '0')}`;
      const d = Object.assign({ id, name: 'New Department', head: 'Unassigned', users: 0, risk: 0, productivity: 0, parent: 'Head Office' }, obj);
      this.state.departments.push(d);
      this.audit(this.actor(), 'Created department', id, d.name);
      this.save();
      return id;
    }

    addUsers(users) {
      users.forEach(u => {
        if (!u.id) u.id = `USR-${String(120 + this.state.users.length).padStart(4, '0')}`;
        if (!u.avatar) u.avatar = (u.name || 'U').split(' ').map(x => x[0]).join('').slice(0, 2).toUpperCase();
        u.risk = Number(u.risk || 10);
        u.productivity = Number(u.productivity || 80);
        u.status = u.status || 'Active';
        u.baseline = u.baseline || 'Normal';
        u.location = u.location || 'Dhaka HQ';
        u.email = u.email || u.id.toLowerCase() + '@demo.local';
        u.observationLevel = u.observationLevel || 1;
        u.coverageConfidence = u.coverageConfidence || 85;
        this.state.users.push(u);
      });
      this.audit(this.actor(), 'Imported users', `${users.length} users`, 'Organization provisioning');
      this.save();
    }

    addIntegration(obj) {
      this.state.integrations.push(Object.assign({ name: 'New Integration', kind: 'Custom', status: 'Available', detail: 'Not configured' }, obj));
      this.audit(this.actor(), 'Added integration', obj.name || 'Integration', obj.kind || 'Custom');
      this.save();
    }

    updateIntegration(name, patch) {
      const x = this.state.integrations.find(i => i.name === name);
      if (!x) return false;
      Object.assign(x, patch);
      this.audit(this.actor(), 'Updated integration', name, JSON.stringify(patch));
      this.save();
      return true;
    }

    updatePrivacy(key, value) {
      this.state.privacy[key] = value;
      this.audit(this.actor(), 'Changed privacy control', key, String(value));
      this.save();
    }

    addDoNotRecord(domain, reason) {
      this.state.doNotRecord.unshift({ domain, reason, addedBy: this.actor() });
      this.audit(this.actor(), 'Added Do Not Record domain', domain, reason);
      this.save();
    }

    createObservationRequest(userId, level, reason) {
      const id = `OBS-${String(this.state.counters.observation++).padStart(3, '0')}`;
      const x = {
        id, user: userId, requestedBy: this.actor(), level: Number(level), reason,
        status: Number(level) >= 3 ? 'Pending dual approval' : 'Approved',
        approvers: [], expires: Number(level) >= 3 ? 'Pending' : '48 hours',
        purpose: reason
      };
      this.state.observationRequests.unshift(x);
      this.audit(this.actor(), 'Requested focused observation', userId, `Level ${level}: ${reason}`);
      this.notify(`Observation ${id} requested at Level ${level}`, 'High');
      this.save();
      return id;
    }

    decideObservation(id, decision) {
      const x = this.state.observationRequests.find(o => o.id === id);
      if (!x) return false;
      x.status = decision;
      x.approvers.push(this.actor());
      if (decision === 'Approved') {
        x.expires = '48 hours';
        const u = this.state.users.find(u => u.id === x.user);
        if (u) u.observationLevel = x.level;
        const d = this.state.devices.find(d => d.user === x.user);
        if (d) d.level = x.level;
      }
      this.audit(this.actor(), `Observation ${decision}`, id, x.user);
      this.save();
      return true;
    }

    expireObservation(id) {
      const x = this.state.observationRequests.find(o => o.id === id);
      if (!x) return false;
      x.status = 'Expired';
      x.expires = 'Expired just now';
      const u = this.state.users.find(u => u.id === x.user);
      if (u) u.observationLevel = 1;
      const d = this.state.devices.find(d => d.user === x.user);
      if (d) d.level = 1;
      this.audit('System', 'Focused observation auto-expired → Level 1', id, 'NFR-019 / G08');
      this.notify(`${id} expired — collectors reverted to Level 1`, 'Info');
      this.save();
      return true;
    }

    createLegalHold(obj) {
      const id = `LH-${String(this.state.counters.hold++).padStart(3, '0')}`;
      const h = Object.assign({
        id, caseId: '', scope: 'All evidence classes', owner: this.actor(),
        reason: '', status: 'Active', since: now(), preventsPurge: true
      }, obj);
      this.state.legalHolds.unshift(h);
      const inv = this.state.investigations.find(i => i.id === h.caseId);
      if (inv) inv.legalHold = true;
      this.audit(this.actor(), 'Enabled legal hold', id, h.caseId + ' · ' + h.reason);
      this.notify(`Legal hold ${id} active`, 'Medium');
      this.save();
      return id;
    }

    releaseLegalHold(id) {
      const h = this.state.legalHolds.find(x => x.id === id);
      if (!h) return false;
      h.status = 'Released';
      h.preventsPurge = false;
      const still = this.state.legalHolds.some(x => x.caseId === h.caseId && x.status === 'Active');
      const inv = this.state.investigations.find(i => i.id === h.caseId);
      if (inv) inv.legalHold = still;
      this.audit(this.actor(), 'Released legal hold', id, h.caseId);
      this.save();
      return true;
    }

    addRiskLedgerEntry(userId, delta, factor, evidenceIds) {
      const id = `RL-${this.state.counters.ledger++}`;
      this.state.riskLedger.unshift({
        id, user: userId, time: 'Just now', delta, factor,
        evidence: evidenceIds || [], model: 'rules-v3.2', confidence: 0.9
      });
      const u = this.state.users.find(x => x.id === userId);
      if (u) u.risk = Math.max(0, Math.min(100, (u.risk || 0) + delta));
      this.save();
      return id;
    }

    setSimulationMode(on) {
      this.state.simulationMode = !!on;
      this.audit(this.actor(), on ? 'Entered policy simulation mode' : 'Left simulation mode', 'Platform', 'P5 / G12');
      this.save();
    }

    setCoverageOutage(on) {
      this.state.coverageOutage = !!on;
      this.state.devices.forEach(d => {
        if (on) {
          d._prevStatus = d.status;
          d.status = 'Offline';
          d.confidence = Math.min(d.confidence || 50, 35);
          d.gaps = [...new Set([...(d.gaps || []), 'collector outage / delayed telemetry'])];
        } else if (d._prevStatus) {
          d.status = d._prevStatus;
          delete d._prevStatus;
        }
      });
      this.audit('System', on ? 'Simulated collector outage (G09)' : 'Collector outage cleared', 'Fleet', 'Data quality');
      this.notify(on ? 'Coverage incomplete — risk/productivity show gaps' : 'Coverage restored', on ? 'High' : 'Info');
      this.save();
    }

    acknowledgePolicy(userId) {
      let a = this.state.acknowledgements.find(x => x.user === userId);
      if (!a) {
        a = { user: userId, policy: 'Workplace Monitoring & Privacy Notice v3.2', acknowledged: true, time: now() };
        this.state.acknowledgements.push(a);
      } else {
        a.acknowledged = true;
        a.time = now();
      }
      this.audit(this.actor(), 'Acknowledged employee monitoring policy', userId, a.policy);
      this.save();
    }

    updateSetting(key, value) {
      this.state.settings[key] = value;
      this.audit(this.actor(), 'Changed platform setting', key, String(value));
      this.save();
    }

    addReportSchedule(obj) {
      const id = `RPT-S-${String(this.state.counters.report++).padStart(2, '0')}`;
      this.state.reportSchedules.push(Object.assign({
        id, name: 'Scheduled Report', frequency: 'Weekly', recipients: 'Security',
        format: 'PDF', enabled: true, lastRun: 'Never'
      }, obj));
      this.audit(this.actor(), 'Created report schedule', id, obj.name || 'Report');
      this.save();
      return id;
    }

    createPurposeGrant(obj) {
      const id = `PG-${String(this.state.counters.grant++).padStart(2, '0')}`;
      this.state.purposeGrants.unshift(Object.assign({
        id, actor: this.actor(), purpose: 'Investigation', caseId: null,
        scope: '', expires: '7 days', status: 'Active'
      }, obj));
      this.audit(this.actor(), 'Created purpose grant', id, obj.purpose || 'Purpose');
      this.save();
      return id;
    }

    upsertDemo(severity, title, type, score, user = 'USR-0042') {
      let a = this.state.alerts.find(x => x.id === 'ALT-DEMO');
      const o = {
        id: 'ALT-DEMO', severity, title, user, time: 'Just now', status: 'Open', type, score,
        details: 'Generated by Demo Scenario Engine for interactive product simulation.'
      };
      if (a) Object.assign(a, o); else this.state.alerts.unshift(o);
    }

    simulateScenario(id) {
      this.state.scenario = id;
      const u = this.state.users.find(x => x.id === 'USR-0042');

      if (id === 'normal' || id === 'G01') {
        u.risk = 18; u.baseline = 'Normal'; u.observationLevel = 1;
        this.state.alerts = this.state.alerts.filter(a => a.id !== 'ALT-DEMO');
      }
      if (id === 'exfil' || id === 'G05') {
        u.risk = 87; u.baseline = 'High deviation';
        this.upsertDemo('Critical', 'Sensitive export followed by USB transfer', 'DLP', 94);
        this.addRiskLedgerEntry('USR-0042', 12, 'Scenario: USB exfil path', ['EVD-1005']);
      }
      if (id === 'departing' || id === 'G02') {
        const r = this.state.users.find(x => x.id === 'USR-0088');
        r.risk = 91; r.baseline = 'High deviation'; r.observationLevel = 3;
        this.upsertDemo('High', 'Departing employee cumulative exfiltration', 'IRM', 91, 'USR-0088');
        this.addRiskLedgerEntry('USR-0088', 10, 'Scenario: cumulative exfil', ['EVD-2002']);
      }
      if (id === 'compromised' || id === 'G04') {
        u.risk = 92; u.baseline = 'High deviation';
        this.upsertDemo('Critical', 'Potential compromised account behavior', 'UEBA', 96);
      }
      if (id === 'malicious') {
        u.risk = 96; u.baseline = 'High deviation';
        this.upsertDemo('Critical', 'Archive → rename → transfer → delete sequence', 'Sequence', 98);
      }
      if (id === 'negligent') {
        u.risk = 58;
        this.upsertDemo('High', 'Sensitive attachment sent to personal email', 'DLP', 78);
      }
      if (id === 'burnout') {
        const w = this.state.work.find(x => x.dept === 'Finance');
        if (w) { w.overtime = 41; w.burnout = 'High'; }
      }
      if (id === 'm365') {
        u.risk = 89;
        this.upsertDemo('Critical', 'SharePoint export moved to external cloud', 'M365', 93);
      }
      if (id === 'shadowai' || id === 'G06') {
        const m = this.state.users.find(x => x.id === 'USR-0071');
        m.risk = 72;
        this.upsertDemo('High', 'Sensitive customer data entered into public GenAI', 'AI Governance', 86, 'USR-0071');
      }
      if (id === 'g07_dnr' || id === 'G07') {
        this.audit('System', 'Do Not Record honored — no capture persisted', 'online.banking.example', 'G07');
        this.notify('G07: Banking site excluded; coverage shows exclusion (not false gap)', 'Info');
      }
      if (id === 'g09_outage' || id === 'G09') {
        this.setCoverageOutage(true);
        return;
      }
      if (id === 'g08_expire' || id === 'G08') {
        const obs = this.state.observationRequests.find(o => o.status === 'Approved' || o.status === 'Pending dual approval');
        if (obs) this.expireObservation(obs.id);
        else this.expireObservation(this.state.observationRequests[0]?.id);
        return;
      }
      if (id === 'g11_manager' || id === 'G11') {
        this.setPersona('manager');
        this.notify('G11: Switched to Manager — raw evidence routes blocked', 'Info');
        this.audit('Demo Engine', 'Scenario G11 manager privacy boundary', 'RBAC', 'P2');
        this.save();
        return;
      }
      if (id === 'g12_sim' || id === 'G12') {
        this.setSimulationMode(true);
        this.notify('G12: Simulation mode ON — promote/enforce blocked', 'Medium');
        return;
      }
      if (id === 'G03') {
        this.audit('System', 'Sanctioned finance export exception applied', 'USR-0042', 'G03 false-positive suppression');
        this.notify('G03: Sanctioned workflow — risk suppressed with audit', 'Info');
      }
      if (id === 'G10') {
        this.audit('AI Gateway', 'Denied cross-tenant retrieval', 'tenant:Delta Healthcare', 'G10 / NFR-030');
        this.notify('G10: Cross-tenant AI context denied', 'High');
      }

      this.audit('Demo Engine', `Scenario activated: ${id}`, 'Organization', 'Product simulation');
      this.save();
    }

    runGolden(id) {
      this.simulateScenario(id);
      const g = this.state.goldenScenarios.find(x => x.id === id);
      if (g) g.lastRun = now();
      this.save();
    }
  }

  window.FakeBackend = FakeBackend;
})();
