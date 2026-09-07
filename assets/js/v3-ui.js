/**
 * USS Behavioral Visibility — Prototype UI extensions v3
 * Adds editions, coverage matrix, risk ledger, legal hold, golden scenarios,
 * AI governance, observation levels, and RBAC evidence guards.
 */
(function () {
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
  }[c]));

  function db() { return window.__ussDb || null; }
  function toast(msg, title) {
    if (window.toast) window.toast(msg, title || 'USS v3');
    else alert(msg);
  }

  function badge(txt, cls = 'status-online') {
    return `<span class="badge-soft ${cls}">${esc(txt)}</span>`;
  }

  function head(title, sub, actions = '') {
    return `<div class="page-head d-flex justify-content-between align-items-start gap-3 mb-4"><div class="min-w-0"><h2 class="page-title mb-1">${esc(title)}</h2><div class="page-subtitle">${esc(sub)}</div></div><div class="page-actions d-flex flex-wrap gap-2">${actions}</div></div>`;
  }

  function metric(label, val, trend, icon) {
    return `<div class="card-soft metric"><div class="d-flex justify-content-between"><div class="metric-label">${esc(label)}</div><i class="bi ${icon} text-secondary"></i></div><div class="metric-value mt-2">${esc(val)}</div><div class="metric-trend text-secondary mt-1">${esc(trend)}</div></div>`;
  }

  function table(headers, rows) {
    return `<div class="table-wrap"><table class="table"><thead><tr>${headers.map(h => `<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${rows.map(r => `<tr>${r.map((c, i) => `<td>${i === 0 ? `<b>${c}</b>` : c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  }

  function shellWrap(html) {
    // Prefer host shell if available
    if (typeof window.__ussShell === 'function') return window.__ussShell(html);
    const app = document.getElementById('app');
    if (app) app.innerHTML = html;
  }

  function personaId() { return db()?.persona?.() || 'soc'; }
  function canRaw() { return !!db()?.canRawEvidence?.(); }

  /* ---------- Pages ---------- */
  function editionsPage() {
    const B = db();
    const eds = B.get('editions') || [];
    const active = B.state?.activeEdition || B.get('tenants')?.[0]?.edition || 'visibility';
    // access state via get only — need activeEdition on state
    const st = B.exportState();
    const cur = st.activeEdition || active;
    const tenants = B.get('tenants') || [];
    const body = head('Product Editions & Packaging', 'Sell outcomes by edition — Visibility → Sovereign. Module packages map to MRS v1.2.', '') +
      `<div class="demo-banner mb-3"><i class="bi bi-box-seam me-1"></i> Active demo edition: <b>${esc(cur)}</b> · Switch below to experience gated workspaces (story 38).</div>` +
      `<div class="kpi-grid mb-4">${metric('Editions', eds.length, 'Commercial SKUs', 'bi-boxes')}${metric('Active', cur, 'Tenant[0] assignment', 'bi-check2-circle')}${metric('Tenants', tenants.length, 'Edition-aware', 'bi-buildings')}${metric('Principles', (B.get('principles') || []).length, 'Release blockers', 'bi-shield-check')}</div>` +
      `<div class="row g-3">${eds.map(e => `
        <div class="col-md-6 col-xl-4"><div class="card-soft p-3 h-100 ${cur === e.id ? 'border border-success' : ''}">
          <div class="d-flex justify-content-between"><b>${esc(e.name)}</b>${badge('Phase ' + e.phase, cur === e.id ? 'status-online' : 'status-offline')}</div>
          <div class="small-muted mt-2">${esc(e.includes)}</div>
          <div class="mt-2">${(e.modules || []).map(m => `<span class="badge text-bg-light me-1">${esc(m)}</span>`).join('')}</div>
          <button class="btn btn-sm ${cur === e.id ? 'btn-success' : 'btn-soft'} mt-3" onclick="window.ussSetEdition('${e.id}')">${cur === e.id ? 'Active' : 'Activate edition'}</button>
        </div></div>`).join('')}</div>` +
      `<div class="card-soft p-3 mt-3"><b>Tenant edition assignments</b>${table(['Tenant', 'Edition', 'Region pack', 'Default Level'], tenants.map(t => [esc(t.name), esc(t.edition || '—'), esc(t.regionPack || '—'), String(t.observationDefault ?? 1)]))}</div>`;
    renderInShell(body);
  }

  function coveragePage() {
    const B = db();
    const matrix = B.get('capabilityMatrix') || [];
    const devices = B.get('devices') || [];
    const outage = B.exportState().coverageOutage;
    const body = head('Coverage Confidence & OS Capability Matrix', 'Honest capability badges — never false parity across OS (story 33–34, 39).',
      `<button class="btn btn-warning" onclick="window.ussToggleOutage()"><i class="bi bi-wifi-off me-1"></i>${outage ? 'Clear outage (G09)' : 'Simulate outage (G09)'}</button>`) +
      (outage ? `<div class="alert alert-warning">Collector outage active — risk/productivity must show incomplete coverage (P4 / G09).</div>` : '') +
      `<div class="card-soft p-3 mb-3"><b>Endpoint coverage</b>${table(['Device', 'OS', 'Badge', 'Confidence', 'Level', 'Collectors', 'Gaps'], devices.map(d => [
        esc(d.id), esc(d.os), badge(d.badge || '—'), (d.confidence ?? '—') + '%', 'L' + (d.level ?? 1),
        esc((d.collectors || []).join(', ') || '—'), esc((d.gaps || []).join('; ') || '—')
      ]))}</div>` +
      `<div class="card-soft p-3"><b>Capability matrix</b><div class="table-wrap feature-matrix">${table(
        ['Capability', 'Windows', 'macOS', 'Linux', 'ChromeOS', 'Android'],
        matrix.map(r => [esc(r.capability), esc(r.windows), esc(r.macos), esc(r.linux), esc(r.chromeos), esc(r.android)])
      )}</div><div class="small-muted mt-2">* macOS: TCC permission health required; fail privacy-safe on revoke.</div></div>`;
    renderInShell(body);
  }

  function ledgerPage() {
    const B = db();
    const ledger = B.get('riskLedger') || [];
    const seq = B.get('sequences') || [];
    const users = B.get('users') || [];
    const body = head('Explainable Risk Ledger', 'Every score change cites factors, evidence IDs, model version and confidence — no black-box guilt.', '') +
      `<div class="kpi-grid mb-4">${metric('Ledger entries', ledger.length, 'Versioned factors', 'bi-journal-richtext')}${metric('Sequences', seq.length, 'Ordered stories', 'bi-diagram-3')}${metric('High risk (≥70)', users.filter(u => u.risk >= 70).length, 'Human review', 'bi-person-exclamation')}${metric('Avg confidence', ledger.length ? Math.round(ledger.reduce((s, x) => s + (x.confidence || 0), 0) / ledger.length * 100) + '%' : '—', 'Calibration signal', 'bi-graph-up')}</div>` +
      `<div class="row g-3"><div class="col-xl-7"><div class="card-soft p-3"><b>Score change ledger</b>${table(['ID', 'User', 'Time', 'Δ', 'Factor', 'Evidence', 'Model'], ledger.map(e => [
        esc(e.id), esc(e.user), esc(e.time),
        `<span class="${e.delta >= 0 ? 'text-danger' : 'text-success'} fw-bold">${e.delta >= 0 ? '+' : ''}${e.delta}</span>`,
        esc(e.factor), esc((e.evidence || []).join(', ')), esc(e.model)
      ]))}</div></div><div class="col-xl-5"><div class="card-soft p-3"><b>Matched behavioral sequences</b>${seq.map(s => `
        <div class="condition mt-2"><div class="d-flex justify-content-between"><b>${esc(s.name)}</b>${badge(s.status)}</div>
        <div class="small-muted">${esc(s.user)} · score ${s.score}</div>
        <div class="sequence-flow mt-2">${(s.steps || []).map(st => `<span>${esc(st)}</span>`).join('<i class="bi bi-arrow-right"></i>')}</div></div>`).join('')}</div></div></div>`;
    renderInShell(body);
  }

  function legalHoldPage() {
    const B = db();
    if (!canRaw() && !['legal', 'compliance', 'investigator', 'soc', 'company_admin'].includes(personaId())) {
      return renderInShell(head('Legal Hold', 'Restricted') + `<div class="alert alert-warning">Your persona cannot manage legal holds.</div>`);
    }
    const holds = B.get('legalHolds') || [];
    const cases = B.get('investigations') || [];
    const body = head('Legal Hold & Defensible Preservation', 'Hold freezes purge; exports include chain-of-custody manifest (story 35).',
      `<button class="btn btn-success" onclick="window.ussNewHold()"><i class="bi bi-plus-lg me-1"></i>New Legal Hold</button>`) +
      `<div class="card-soft p-3 mb-3">${table(['Hold', 'Case', 'Scope', 'Owner', 'Reason', 'Status', ''], holds.map(h => [
        esc(h.id), esc(h.caseId), esc(h.scope), esc(h.owner), esc(h.reason),
        badge(h.status, h.status === 'Active' ? 'status-warning' : 'status-online'),
        h.status === 'Active' ? `<button class="btn btn-sm btn-soft" onclick="window.ussReleaseHold('${h.id}')">Release</button>` : '—'
      ]))}</div>` +
      `<div class="card-soft p-3"><b>Cases with preservation flag</b>${table(['Case', 'Title', 'Legal hold', 'Subject'], cases.map(c => [esc(c.id), esc(c.title), c.legalHold ? badge('Held', 'status-warning') : '—', esc(c.subject)]))}</div>`;
    renderInShell(body);
  }

  function observationPage() {
    const B = db();
    const levels = B.get('observationLevels') || [];
    const obs = B.get('observationRequests') || [];
    const users = B.get('users') || [];
    const body = head('Adaptive Observation Orchestrator', 'Levels 0–4 with purpose, approval, expiry and automatic reversion.', '') +
      `<div class="row g-3 mb-3">${levels.map(l => `
        <div class="col"><div class="card-soft p-3 h-100 text-center">
          <div class="metric-value">L${l.level}</div><b>${esc(l.name)}</b>
          <div class="small-muted mt-1">${esc(l.desc)}</div>
          <div class="small text-secondary mt-2">${esc(l.guard)}</div>
        </div></div>`).join('')}</div>` +
      `<div class="card-soft p-3 mb-3"><b>Current user observation levels</b>${table(['User', 'Name', 'Level', 'Coverage', 'Status'], users.map(u => [
        esc(u.id), esc(u.name), 'L' + (u.observationLevel ?? 1), (u.coverageConfidence ?? '—') + '%', esc(u.status)
      ]))}</div>` +
      `<div class="card-soft p-3"><div class="d-flex justify-content-between"><b>Focused observation requests</b>
        <button class="btn btn-sm btn-soft" onclick="window.ussExpireObs()">Simulate expiry (G08)</button></div>
        ${obs.map(o => `<div class="condition mt-2">
          <div class="d-flex justify-content-between gap-2 flex-wrap">
            <div><b>${esc(o.id)}</b> · ${esc(o.user)} · Level ${o.level}<div class="small-muted">${esc(o.reason)}</div></div>
            <div>${badge(o.status)} <span class="small-muted">${esc(o.expires)}</span></div>
          </div>
          ${o.status === 'Pending dual approval' ? `<div class="mt-2"><button class="btn btn-sm btn-success me-1" onclick="window.decideObs && window.decideObs('${o.id}','Approved')">Approve</button><button class="btn btn-sm btn-outline-danger" onclick="window.decideObs && window.decideObs('${o.id}','Denied')">Deny</button></div>` : ''}
        </div>`).join('')}</div>`;
    renderInShell(body);
  }

  function goldenPage() {
    const B = db();
    const gs = B.get('goldenScenarios') || [];
    const principles = B.get('principles') || [];
    const body = head('Golden Scenario Lab (G01–G12)', 'Release gates from MRS v1.2 — run interactive demos that mutate fake-backend state.',
      `<button class="btn btn-soft" onclick="window.showScenarios && window.showScenarios()">Classic scenarios</button>`) +
      `<div class="row g-3 mb-3"><div class="col-xl-8"><div class="card-soft p-3"><b>Golden gates</b>
        ${gs.map(g => `<div class="d-flex justify-content-between align-items-start gap-2 condition mt-2">
          <div><b>${esc(g.id)} — ${esc(g.name)}</b><div class="small-muted">${esc(g.desc)}</div><span class="badge text-bg-light">${esc(g.gate)}</span></div>
          <button class="btn btn-sm btn-success" onclick="window.ussRunGolden('${g.id}')">Run</button>
        </div>`).join('')}</div></div>
        <div class="col-xl-4"><div class="card-soft p-3"><b>Product principles (P1–P8)</b>
          ${principles.map(p => `<div class="condition mt-2"><b>${esc(p.id)}</b><div class="small-muted">${esc(p.text)}</div></div>`).join('')}
        </div></div></div>`;
    renderInShell(body);
  }

  function aigovPage() {
    const B = db();
    const cat = B.get('aiCatalog') || [];
    const gov = B.get('aiGovernance') || {};
    const body = head('AI Governance & Shadow AI Catalog', 'Sanctioned vs shadow AI, BYO-LLM controls, grounding and no cross-tenant training (story 37).', '') +
      `<div class="kpi-grid mb-4">${metric('Catalog apps', cat.length, 'Living AI inventory', 'bi-stars')}${metric('Shadow apps', cat.filter(a => !a.sanctioned).length, 'Need DLP/IRM', 'bi-exclamation-triangle')}${metric('Cross-tenant train', gov.crossTenantTraining ? 'ON' : 'OFF', 'Default OFF', 'bi-shield-lock')}${metric('Grounding', gov.groundingRequired ? 'Required' : 'Optional', 'Cite evidence IDs', 'bi-quote')}</div>` +
      `<div class="card-soft p-3 mb-3">${table(['ID', 'Application', 'Type', 'Sanctioned', 'Risk', 'Users', 'Last seen'], cat.map(a => [
        esc(a.id), esc(a.name), esc(a.type), a.sanctioned ? badge('Yes') : badge('No', 'status-warning'),
        badge(a.risk, a.risk === 'High' ? 'risk-high' : 'status-online'), a.users, esc(a.lastSeen)
      ]))}</div>` +
      `<div class="card-soft p-3"><b>BYO / Copilot controls</b>
        <ul class="mb-0 mt-2">
          <li>Egress allowlist: ${(gov.egressAllowlist || []).map(esc).join(', ') || '—'}</li>
          <li>Cite evidence: ${gov.citeEvidence ? 'Yes' : 'No'} · Label inferences: ${gov.labelInferences ? 'Yes' : 'No'}</li>
          <li>LLMs explain — they never author guilt (P3)</li>
        </ul>
        <a class="btn btn-success mt-3" href="#/ai">Open Investigation Copilot</a>
      </div>`;
    renderInShell(body);
  }

  function jurisdictionPage() {
    const B = db();
    const packs = B.get('jurisdictionPacks') || [];
    const grants = B.get('purposeGrants') || [];
    const body = head('Jurisdiction Packs & Purpose Grants', 'Residency, retention and invasive-policy publish rules by region (story 36).',
      `<button class="btn btn-soft" onclick="window.ussNewGrant()">New purpose grant</button>`) +
      `<div class="card-soft p-3 mb-3">${table(['Pack', 'Residency', 'Default retention', 'Invasive requires', 'Works council'], packs.map(p => [
        esc(p.name), esc(p.residency), p.retentionDefault + ' days', esc(p.invasiveRequires), p.worksCouncil ? 'Yes' : 'No'
      ]))}</div>` +
      `<div class="card-soft p-3"><b>Active purpose grants</b>${table(['ID', 'Actor', 'Purpose', 'Scope', 'Expires', 'Status'], grants.map(g => [
        esc(g.id), esc(g.actor), esc(g.purpose), esc(g.scope), esc(g.expires), badge(g.status)
      ]))}</div>`;
    renderInShell(body);
  }

  function renderInShell(inner) {
    if (typeof window.__ussRenderShell === 'function') {
      window.__ussRenderShell(inner);
      return;
    }
    // Fallback: reuse existing shell by temporarily setting content via dashboard path
    const appEl = document.getElementById('app');
    if (!appEl) return;
    // If logged in shell exists, inject into .content
    const content = appEl.querySelector('.content');
    if (content) {
      content.innerHTML = inner;
      return;
    }
    // Build minimal shell
    if (typeof window.shell === 'function') {
      // can't call shell if not global
    }
    appEl.innerHTML = `<div class="p-4">${inner}</div>`;
  }

  /* ---------- Wire into host app ---------- */
  function enhanceAskAI() {
    const orig = window.askAI;
    window.askAI = function () {
      const B = db();
      if (!B) return orig && orig();
      const q = (document.getElementById('aiQ')?.value || '').trim();
      const box = document.getElementById('aiAnswer');
      if (!q) return toast('Enter a question');
      // Grounded answer with citations
      const evidence = (B.get('evidence') || []).slice(0, 4);
      const ledger = (B.get('riskLedger') || []).slice(0, 3);
      const html = `<div class="card-soft p-3 mt-3"><div class="d-flex justify-content-between"><b>Copilot answer</b>${badge('Assisted — not authoritative')}</div>
        <p class="mt-2">Based on authorized demo evidence, the strongest after-hours sensitive movement path involves <b>USR-0042 (Rahim Ahmed)</b>: PII workbook open → CSV export → USB copy, followed by adaptive DLP block.</p>
        <div class="alert alert-info small mb-2"><b>Facts (cited):</b><ul class="mb-0">${evidence.map(e => `<li><code>${esc(e.id)}</code> — ${esc(e.title)}</li>`).join('')}</ul></div>
        <div class="alert alert-warning small mb-2"><b>Inferences (labeled):</b> Intent is not proven; treat as triage signal pending human review (P3).</div>
        <div class="small-muted">Risk ledger: ${ledger.map(l => `${l.id} (${l.factor}, Δ${l.delta})`).join(' · ') || '—'}</div>
        <div class="small-muted mt-1">Missing data: none declared for this demo path. Cross-tenant context excluded.</div></div>`;
      if (box) box.innerHTML = html;
      else document.querySelector('.card-soft.p-4')?.insertAdjacentHTML('beforeend', html);
      B.audit(B.actor(), 'AI Copilot query', 'cited-answer', q.slice(0, 80));
      B.save();
      toast('Grounded answer generated with evidence citations');
    };
  }

  function guardEvidenceAccess() {
    const B = db();
    if (!B || B.canRawEvidence()) return true;
    toast('Blocked: your role cannot access raw evidence (P2 / G11). Aggregates only.', 'Access denied');
    B.audit(B.actor(), 'Denied raw evidence access', location.hash, 'RBAC');
    B.save();
    return false;
  }

  // Patch investigation / screenshot entry points when host defines them
  function installGuards() {
    const wrap = (name) => {
      const orig = window[name];
      if (typeof orig !== 'function') return;
      window[name] = function (...args) {
        if (!canRaw() && ['openInvestigation', 'viewScreenshot', 'sessionReplay', 'exportEvidence', 'generateEvidence'].includes(name)) {
          if (!guardEvidenceAccess()) return;
        }
        return orig.apply(this, args);
      };
    };
    ['openInvestigation', 'viewScreenshot', 'sessionReplay', 'exportEvidence', 'generateEvidence', 'toggleEvidence'].forEach(wrap);
  }

  window.ussSetEdition = (id) => {
    db().setActiveEdition(id);
    toast('Edition activated: ' + id);
    location.hash = '#/editions';
    window.dispatchEvent(new HashChangeEvent('hashchange'));
  };

  window.ussToggleOutage = () => {
    const st = db().exportState();
    db().setCoverageOutage(!st.coverageOutage);
    toast(st.coverageOutage ? 'Outage cleared' : 'Collector outage simulated (G09)');
    location.hash = '#/coverage';
    window.dispatchEvent(new HashChangeEvent('hashchange'));
  };

  window.ussRunGolden = (id) => {
    db().runGolden(id);
    toast('Golden scenario ' + id + ' executed');
    if (id === 'G11' || id === 'g11_manager') {
      location.hash = '#/dashboard';
    } else if (id === 'G09' || id === 'g09_outage') {
      location.hash = '#/coverage';
    } else if (id === 'G08' || id === 'g08_expire') {
      location.hash = '#/observation';
    } else if (id === 'G12' || id === 'g12_sim') {
      location.hash = '#/policies';
    } else {
      location.hash = '#/alerts';
    }
    window.dispatchEvent(new HashChangeEvent('hashchange'));
  };

  window.ussExpireObs = () => {
    const obs = (db().get('observationRequests') || []).find(o => o.status === 'Approved' || o.status === 'Pending dual approval');
    if (!obs) return toast('No active observation to expire');
    db().expireObservation(obs.id);
    toast(obs.id + ' expired → Level 1');
    window.dispatchEvent(new HashChangeEvent('hashchange'));
  };

  window.ussNewHold = () => {
    const cases = db().get('investigations') || [];
    const opts = cases.map(c => `<option value="${esc(c.id)}">${esc(c.id)} — ${esc(c.title)}</option>`).join('');
    const body = `<label class="form-label">Case</label><select id="lhCase" class="form-select mb-2">${opts}</select>
      <label class="form-label">Scope</label><input id="lhScope" class="form-control mb-2" value="Evidence class: File + USB + Screenshot"/>
      <label class="form-label">Reason</label><textarea id="lhReason" class="form-control" rows="2">Regulatory preservation request</textarea>`;
    if (window.showModal) {
      window.showModal('New Legal Hold', body, `<button class="btn btn-success" onclick="window.ussSaveHold()">Enable hold</button>`);
    }
  };

  window.ussSaveHold = () => {
    const caseId = document.getElementById('lhCase')?.value;
    const scope = document.getElementById('lhScope')?.value;
    const reason = document.getElementById('lhReason')?.value;
    db().createLegalHold({ caseId, scope, reason });
    if (window.closeModal) window.closeModal();
    toast('Legal hold enabled');
    location.hash = '#/legalhold';
    window.dispatchEvent(new HashChangeEvent('hashchange'));
  };

  window.ussReleaseHold = (id) => {
    db().releaseLegalHold(id);
    toast('Legal hold released');
    window.dispatchEvent(new HashChangeEvent('hashchange'));
  };

  window.ussNewGrant = () => {
    db().createPurposeGrant({
      purpose: 'Investigation',
      scope: 'Case-scoped evidence reveal',
      caseId: (db().get('investigations') || [])[0]?.id || null,
      expires: '7 days'
    });
    toast('Purpose grant created');
    window.dispatchEvent(new HashChangeEvent('hashchange'));
  };

  const V3_ROUTES = {
    editions: editionsPage,
    coverage: coveragePage,
    ledger: ledgerPage,
    legalhold: legalHoldPage,
    observation: observationPage,
    golden: goldenPage,
    aigov: aigovPage,
    jurisdiction: jurisdictionPage
  };

  window.USSV3 = {
    routes: V3_ROUTES,
    pages: { editionsPage, coveragePage, ledgerPage, legalHoldPage, observationPage, goldenPage, aigovPage, jurisdictionPage },
    canRaw,
    installGuards,
    enhanceAskAI,
    renderInShell
  };

  // Host bootstrap after app.js
  window.__ussV3Boot = function (backendInstance) {
    window.__ussDb = backendInstance;
    installGuards();
    enhanceAskAI();
    // promotePolicy wrap
    if (typeof window.promotePolicy === 'function') {
      const origPromote = window.promotePolicy;
      window.promotePolicy = function (id) {
        const B = db();
        if (B && B.promotePolicy) {
          const r = B.promotePolicy(id);
          if (r && r.ok === false) { toast(r.reason || 'Blocked'); return; }
          if (r && r.simulated) { toast('Simulated only — not enforced (P5/G12)'); if (window.render) window.render(); return; }
        }
        return origPromote.apply(this, arguments);
      };
    }
  };
})();
