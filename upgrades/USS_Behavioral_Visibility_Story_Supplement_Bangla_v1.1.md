# USS Behavioral Visibility Platform
# Story-Based System Description — Supplement v1.1 (Bangla)

**Parent:** Story-Based System Description Bangla v1.0  
**Purpose:** v1.0-এ বাদ পড়া / দুর্বল থাকা critical journeys পূরণ — Linux/ChromeOS agents, Legal Hold, AI/BYO-LLM governance, capability-matrix honesty, এবং edition-aware outcomes।  
**Normative companion:** Product Upgrade Pack v1.1  

---

## ৩৩. Linux Server / Endpoint Administrator

ধরা যাক একটি ব্যাংক বা SaaS কোম্পানির critical workloads Linux server-এ চলে। IT Admin Windows-এর মতো “full desktop UAM” আশা করবেন না — বরং supportable, documented collectors চাইবেন।

- Supported distribution/kernel matrix দেখে agent install করা (explicit allowlist)।
- Process, network metadata, file path activity, login/session telemetry সংগ্রহ (capability অনুযায়ী)।
- যেখানে GUI screenshot সম্ভব নয়, system স্পষ্ট করে “Not supported on this OS” দেখাবে — silent gap নয়।
- Tamper/stop detection ও signed update Windows-এর মতোই কাজ করবে।

**বাস্তব ফলাফল:** Linux coverage সত্য ও বিপণনযোগ্য; false parity দাবি করা হবে না। Connect edition-এর অংশ।

---

## ৩৪. ChromeOS / Managed Browser Administrator

শিক্ষা বা frontline workforce যেখানে ChromeOS বা managed browser প্রাথমিক device।

- Browser extension / managed policy দিয়ে website/domain, time, upload metadata collect।
- Endpoint-deep keystroke/screen capture default নয়; policy matrix অনুযায়ী limited।
- School/work profile boundaries ও Do Not Record list সম্মান করা।

**বাস্তব ফলাফল:** Browser-heavy org-ও Visibility/Connect-এ আসতে পারবে, privacy-safe সীমাসহ।

---

## ৩৫. Legal Officer — Legal Hold ও Defensible Export

একটি HR/security investigation আদালত বা regulator-এ যেতে পারে।

- Case-এর নির্দিষ্ট evidence class-এ Legal Hold চালু; retention purge থামে।
- Hold reason, owner, scope audit-এ থাকে।
- Export package-এ manifest, hash, timestamps, actor, redaction lineage থাকে (chain of custody)।
- Hold না তোলা পর্যন্ত Investigate evidence মুছে না।

**বাস্তব ফলাফল:** USS শুধু monitoring tool নয় — defensible investigation platform।

---

## ৩৬. Privacy Officer — Jurisdiction Pack ও Purpose Grant

বহুদেশীয় company: BD HQ, EU branch, US contractor।

- Tenant/region অনুযায়ী data residency ও retention pack।
- Invasive policy publish-এর আগে purpose, legal basis, owner, scope, expiry বাধ্যতামূলক।
- Employee Transparency Center-এ “কী monitor হয় / কেন” দেখা যায়; security detection logic ফাঁস হয় না।

**বাস্তব ফলাফল:** একই platform বিভিন্ন আইনি বাস্তবতায় configure করা যায়।

---

## ৩৭. AI Governance Lead — Shadow AI ও BYO-LLM

কর্মচারী ChatGPT/Claude-এ sensitive data দিচ্ছে; অন্যদিকে SOC নিজের LLM দিয়ে investigation করতে চায়।

- Sanctioned vs shadow AI catalog; sensitive upload attempt-এ DLP/IRM signal।
- Investigation Copilot শুধু authorized records cite করে; অনুমান আলাদা লেবেল।
- BYO/self-hosted model: authz, redaction, egress allowlist, prompt/output audit।
- Cross-tenant data দিয়ে shared model train হয় না (default)।

**বাস্তব ফলাফল:** AI সহায়ক — বিচারক নয়; AI risk visibility পাওয়া যায়।

---

## ৩৮. Product / Sales — Edition দিয়ে বিক্রি

Customer সব module একসাথে না কিনে:

1. **Visibility** — metadata UAM + privacy defaults  
2. **Workforce** — productivity without surveillance  
3. **IRM Protect** — sequences, risk ledger, adaptive DLP  
4. **Investigate** — evidence, replay, legal hold  
5. **Connect / AI / Sovereign** — integrations, copilot, on-prem  

**বাস্তব ফলাফল:** Best product = সঠিক edition দিয়ে সঠিক outcome; feature dump নয়।

---

## ৩৯. Capability Honesty Story (সব Role-এর জন্য)

Dashboard-এ প্রতিটি device/user-এর পাশে coverage confidence:

- Agent online/offline/version  
- OS capability badge (Windows GA / macOS Partial / Linux Limited …)  
- Policy level (0–4)  
- Missing collector warnings  

**বাস্তব ফলাফল:** Risk score “মিথ্যা শান্তি” দেখাবে না।

---

*Story Supplement v1.1 end — v1.0 stories 1–32-এর সাথে একত্রে পড়ুন।*
