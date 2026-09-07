window.USSSeed = {
  personas:[
    {id:'super_admin',name:'Super Admin',desc:'SaaS tenants, licensing, platform health',icon:'bi-stars'},
    {id:'company_admin',name:'Company Admin',desc:'Organization, users, policies, settings',icon:'bi-building-gear'},
    {id:'it_admin',name:'IT Administrator',desc:'Devices, agents, rollout and health',icon:'bi-pc-display'},
    {id:'manager',name:'Department Manager',desc:'Team productivity and workflow insight',icon:'bi-people'},
    {id:'hr',name:'HR Manager',desc:'Engagement, workload and burnout trends',icon:'bi-person-hearts'},
    {id:'soc',name:'SOC Analyst',desc:'Alerts, threats and response',icon:'bi-shield-check'},
    {id:'risk',name:'Insider Risk Analyst',desc:'UEBA, risk scoring and behavioral anomalies',icon:'bi-activity'},
    {id:'dlp',name:'DLP Administrator',desc:'Sensitive data policies and adaptive protection',icon:'bi-file-earmark-lock'},
    {id:'investigator',name:'Investigator',desc:'Cases, timeline, evidence and replay',icon:'bi-search'},
    {id:'legal',name:'Legal Officer',desc:'Evidence review and legal export',icon:'bi-briefcase'},
    {id:'compliance',name:'Compliance Officer',desc:'Controls, compliance reports and audit',icon:'bi-clipboard-check'},
    {id:'auditor',name:'Auditor',desc:'Administrative and evidence access audit',icon:'bi-journal-text'},
    {id:'privacy',name:'Privacy Officer',desc:'Privacy boundaries, retention and redaction',icon:'bi-eye-slash'},
    {id:'executive',name:'Executive',desc:'Organization risk and workforce trends',icon:'bi-speedometer2'},
    {id:'employee',name:'Employee',desc:'Transparency, applied policies and personal view',icon:'bi-person-badge'}
  ],
  users:[
    {id:'USR-0042',name:'Rahim Ahmed',dept:'Finance',manager:'Karim Hasan',role:'Senior Accounts Officer',risk:87,productivity:74,status:'Active',location:'Dhaka HQ',avatar:'RA',baseline:'High deviation',email:'rahim@demo.local'},
    {id:'USR-0017',name:'Nusrat Jahan',dept:'HR',manager:'Sadia Akter',role:'HR Specialist',risk:22,productivity:86,status:'Active',location:'Dhaka HQ',avatar:'NJ',baseline:'Normal',email:'nusrat@demo.local'},
    {id:'USR-0063',name:'Tanvir Hossain',dept:'Engineering',manager:'Fahim Rahman',role:'Backend Engineer',risk:31,productivity:91,status:'Active',location:'Remote',avatar:'TH',baseline:'Normal',email:'tanvir@demo.local'},
    {id:'USR-0071',name:'Maliha Chowdhury',dept:'Marketing',manager:'Arif Khan',role:'Growth Manager',risk:41,productivity:83,status:'Active',location:'Chattogram',avatar:'MC',baseline:'Moderate deviation',email:'maliha@demo.local'},
    {id:'USR-0088',name:'Rafiq Islam',dept:'Operations',manager:'Rezaul Karim',role:'Operations Executive',risk:76,productivity:69,status:'Leaving in 14 days',location:'Dhaka HQ',avatar:'RI',baseline:'High deviation',email:'rafiq@demo.local'},
    {id:'USR-0099',name:'Karim Uddin',dept:'Finance',manager:'Karim Hasan',role:'Treasury Officer',risk:64,productivity:78,status:'Active',location:'Sylhet Branch',avatar:'KU',baseline:'Moderate deviation',email:'karim.u@demo.local'},
    {id:'USR-0104',name:'Sadia Rahman',dept:'Engineering',manager:'Fahim Rahman',role:'Frontend Engineer',risk:14,productivity:93,status:'Active',location:'Remote',avatar:'SR',baseline:'Normal',email:'sadia.r@demo.local'},
    {id:'USR-0112',name:'Mehedi Hasan',dept:'Sales',manager:'Imran Ahmed',role:'Sales Executive',risk:18,productivity:81,status:'Active',location:'Dhaka HQ',avatar:'MH',baseline:'Normal',email:'mehedi@demo.local'}
  ],
  devices:[
    {id:'LAPTOP-023',user:'USR-0042',os:'Windows 11',agent:'2.4.1',status:'Online',last:'1 min ago',policy:'Finance Strict',health:'Healthy'},
    {id:'LAPTOP-017',user:'USR-0017',os:'Windows 11',agent:'2.4.1',status:'Online',last:'2 min ago',policy:'HR Standard',health:'Healthy'},
    {id:'MBP-063',user:'USR-0063',os:'macOS 15',agent:'2.4.0',status:'Online',last:'30 sec ago',policy:'Engineering Standard',health:'Healthy'},
    {id:'LAPTOP-071',user:'USR-0071',os:'Windows 11',agent:'2.3.9',status:'Online',last:'4 min ago',policy:'Marketing Standard',health:'Needs Update'},
    {id:'LAPTOP-088',user:'USR-0088',os:'Windows 10',agent:'2.4.1',status:'Online',last:'1 min ago',policy:'Departing Employee Focused',health:'Healthy'},
    {id:'LAPTOP-099',user:'USR-0099',os:'Windows 11',agent:'2.4.1',status:'Offline',last:'5 hr ago',policy:'Finance Strict',health:'Warning'},
    {id:'ANDROID-41',user:'USR-0112',os:'Android 15',agent:'1.8.2',status:'Online',last:'3 min ago',policy:'Field Mobile',health:'Healthy'}
  ],
  alerts:[
    {id:'ALT-2391',severity:'Critical',title:'Sensitive customer data copied to USB',user:'USR-0042',time:'Today 02:42',status:'Open',type:'DLP',score:94,details:'1.9 GB of PII-classified exports copied to new USB device.'},
    {id:'ALT-2387',severity:'High',title:'Departing employee cumulative exfiltration',user:'USR-0088',time:'Today 01:18',status:'Investigating',type:'IRM',score:88,details:'Repeated low-volume transfers exceeded 2.6 GB over 21 days.'},
    {id:'ALT-2371',severity:'High',title:'Anomalous off-hours OneDrive download',user:'USR-0099',time:'Yesterday 23:14',status:'Open',type:'UEBA',score:82,details:'Download volume 17x baseline from unfamiliar device context.'},
    {id:'ALT-2338',severity:'Medium',title:'Public GenAI prompt contains customer identifiers',user:'USR-0071',time:'Yesterday 16:05',status:'Open',type:'AI Governance',score:69,details:'Prompt matched customer email and mobile patterns.'},
    {id:'ALT-2302',severity:'Low',title:'Unapproved application detected',user:'USR-0063',time:'2 days ago',status:'Dismissed',type:'App',score:31,details:'Unsigned utility launched for 6 minutes.'}
  ],
  investigations:[
    {id:'INV-2026-0042',title:'Potential customer data exfiltration',subject:'USR-0042',severity:'Critical',owner:'Farhana — Security',status:'Under Investigation',opened:'06 Sep 2026',evidence:14,notes:5},
    {id:'INV-2026-0039',title:'Departing employee data movement',subject:'USR-0088',severity:'High',owner:'Rashed — IRM',status:'Evidence Review',opened:'05 Sep 2026',evidence:21,notes:8},
    {id:'INV-2026-0031',title:'Abnormal M365 export activity',subject:'USR-0099',severity:'High',owner:'Nadia — SOC',status:'Open',opened:'03 Sep 2026',evidence:9,notes:3}
  ],
  policies:[
    {id:'POL-011',name:'Finance Strict',type:'Monitoring + DLP',scope:'Finance',status:'Active',actions:'Block + Alert',updated:'Today'},
    {id:'POL-012',name:'Departing Employee Focused',type:'Adaptive Observation',scope:'Leaving employees',status:'Active',actions:'Escalate observation',updated:'Today'},
    {id:'POL-013',name:'Customer PII External Transfer',type:'DLP',scope:'All users',status:'Active',actions:'Warn / Block by risk',updated:'Yesterday'},
    {id:'POL-014',name:'Sensitive Website Do Not Record',type:'Privacy',scope:'All users',status:'Active',actions:'Exclude capture',updated:'3 days ago'},
    {id:'POL-015',name:'Public AI Sensitive Prompt',type:'AI Governance',scope:'All users',status:'Simulation',actions:'Warn + Justification',updated:'Today'}
  ],
  activities:[
    {time:'02:13',user:'USR-0042',type:'Login',title:'Off-hours login',detail:'LAPTOP-023 · Dhaka HQ',risk:'High'},
    {time:'02:18',user:'USR-0042',type:'File',title:'Opened Customer_Master_2026.xlsx',detail:'Sensitive: PII · 382 MB',risk:'High'},
    {time:'02:23',user:'USR-0042',type:'File',title:'Exported customer data to CSV',detail:'customer_export_sep.csv · 1.1 GB',risk:'Critical'},
    {time:'02:31',user:'USR-0042',type:'USB',title:'New USB storage connected',detail:'SanDisk Ultra · S/N 77A21',risk:'High'},
    {time:'02:42',user:'USR-0042',type:'Transfer',title:'1.9 GB copied to USB',detail:'42 files · 9 PII matches',risk:'Critical'},
    {time:'02:43',user:'USR-0042',type:'Alert',title:'DLP critical alert created',detail:'ALT-2391',risk:'Critical'},
    {time:'02:44',user:'USR-0042',type:'Response',title:'USB write blocked',detail:'Adaptive DLP action executed',risk:'Low'},
    {time:'09:04',user:'USR-0063',type:'App',title:'VS Code active',detail:'Backend service workspace',risk:'Low'},
    {time:'09:18',user:'USR-0063',type:'Web',title:'GitHub',detail:'Productive · 38 min',risk:'Low'},
    {time:'16:05',user:'USR-0071',type:'AI',title:'Public GenAI usage',detail:'Customer identifier pattern detected in prompt',risk:'Medium'}
  ],
  audits:[
    {time:'Today 02:44',actor:'System',action:'Blocked USB write',target:'USR-0042',purpose:'POL-011',ip:'Automated'},
    {time:'Today 08:12',actor:'Farhana',action:'Opened evidence screenshot',target:'INV-2026-0042',purpose:'Investigation',ip:'10.20.1.14'},
    {time:'Today 09:05',actor:'Privacy Officer',action:'Changed screenshot retention 90 → 60 days',target:'Finance policy',purpose:'Privacy review',ip:'10.20.1.8'},
    {time:'Today 09:41',actor:'Company Admin',action:'Assigned departing employee policy',target:'USR-0088',purpose:'Offboarding',ip:'10.20.1.5'},
    {time:'Today 11:18',actor:'Nadia',action:'Exported redacted incident report',target:'INV-2026-0031',purpose:'Compliance',ip:'10.20.1.18'}
  ],
  integrations:[
    {name:'Microsoft 365',kind:'Cloud',status:'Connected',detail:'Teams, Exchange, SharePoint, OneDrive, Entra ID'},
    {name:'Microsoft Sentinel',kind:'SIEM',status:'Connected',detail:'Alerts + risk signals'},
    {name:'Splunk',kind:'SIEM',status:'Available',detail:'HEC integration'},
    {name:'Entra ID',kind:'IAM',status:'Connected',detail:'Identity + group sync'},
    {name:'Slack',kind:'Communication',status:'Connected',detail:'Enterprise message metadata'},
    {name:'BYO LLM Gateway',kind:'AI',status:'Configured',detail:'Private model via MCP'}
  ],
  tenants:[
    {name:'ABC Bank Limited',users:2416,devices:2289,plan:'Enterprise IRM + DLP',storage:'8.4 TB',health:'Healthy'},
    {name:'Delta Healthcare',users:846,devices:792,plan:'UAM + Compliance',storage:'2.1 TB',health:'Healthy'},
    {name:'Nova Manufacturing',users:1332,devices:1219,plan:'UAM + IRM',storage:'4.7 TB',health:'Warning'}
  ],
  riskFactors:[
    {label:'Large sensitive download',value:22},{label:'Off-hours access',value:18},{label:'New USB destination',value:16},{label:'Abnormal file access',value:13},{label:'Behavioral deviation',value:10},{label:'External transfer sequence',value:8}
  ],
  work:[
    {dept:'Engineering',prod:92,active:7.1,idle:0.7,focus:5.8,overtime:12,burnout:'Low'},
    {dept:'Marketing',prod:83,active:6.4,idle:1.0,focus:4.1,overtime:18,burnout:'Medium'},
    {dept:'Finance',prod:76,active:6.9,idle:0.9,focus:4.9,overtime:27,burnout:'High'},
    {dept:'HR',prod:86,active:6.3,idle:1.1,focus:4.8,overtime:10,burnout:'Low'},
    {dept:'Operations',prod:71,active:6.8,idle:1.2,focus:3.6,overtime:32,burnout:'High'}
  ],
  privacy:{screenshot:'Focused only',keystroke:'Focused only',sensitiveSites:'Do Not Record',retention:'60 days',piiRedaction:'Enabled',employeeTransparency:'Enabled',dualApproval:'Required for Level 3+',location:'Company-owned mobile only'},
  scenarios:[
    {id:'normal',name:'Normal Working Day',desc:'Stable risk and normal productivity'},
    {id:'exfil',name:'Potential Data Exfiltration',desc:'Sensitive download → USB → DLP block'},
    {id:'departing',name:'Departing Employee',desc:'Cumulative exfiltration + focused observation'},
    {id:'compromised',name:'Compromised Account',desc:'Unusual location, hour and access volume'},
    {id:'malicious',name:'Malicious Insider',desc:'Archive, rename, transfer and trace deletion sequence'},
    {id:'negligent',name:'Negligent Data Sharing',desc:'Sensitive attachment to personal email'},
    {id:'burnout',name:'Employee Burnout',desc:'Overtime and weekend-work trend rises'},
    {id:'m365',name:'M365 Data Leak',desc:'SharePoint → device → external destination'},
    {id:'shadowai',name:'Shadow AI Usage',desc:'Sensitive information entered into public GenAI'}
  ]
};

Object.assign(window.USSSeed, {
  departments:[
    {id:'DEP-FIN',name:'Finance',head:'Karim Hasan',users:328,risk:74,productivity:76,parent:'Head Office'},
    {id:'DEP-HR',name:'HR',head:'Sadia Akter',users:96,risk:23,productivity:86,parent:'Head Office'},
    {id:'DEP-ENG',name:'Engineering',head:'Fahim Rahman',users:214,risk:31,productivity:92,parent:'Head Office'},
    {id:'DEP-OPS',name:'Operations',head:'Rezaul Karim',users:472,risk:68,productivity:71,parent:'Head Office'},
    {id:'DEP-MKT',name:'Marketing',head:'Arif Khan',users:164,risk:44,productivity:83,parent:'Head Office'},
    {id:'DEP-SAL',name:'Sales',head:'Imran Ahmed',users:207,risk:26,productivity:81,parent:'Head Office'}
  ],
  groups:[
    {id:'GRP-001',name:'Departing Employees',type:'Dynamic',members:12,rule:'status contains Leaving',policy:'Departing Employee Focused'},
    {id:'GRP-002',name:'Privileged Finance Users',type:'Dynamic',members:43,rule:'department=Finance AND privilege=High',policy:'Finance Strict'},
    {id:'GRP-003',name:'Remote Engineering',type:'Static',members:91,rule:'location=Remote',policy:'Engineering Standard'}
  ],
  notes:[
    {id:'NOTE-001',caseId:'INV-2026-0042',author:'Farhana — Security',time:'Today 08:18',type:'Investigation Note',visibility:'Investigation Team',text:'USB destination is new for this user. Preserve full file lineage and M365 activity.',pinned:true},
    {id:'NOTE-002',caseId:'INV-2026-0039',author:'Rashed — IRM',time:'Today 09:02',type:'Evidence Note',visibility:'Legal + Investigation',text:'Cumulative transfer pattern predates resignation notice by 9 days.',pinned:false}
  ],
  evidence:[
    {id:'EVD-1001',caseId:'INV-2026-0042',user:'USR-0042',type:'Login',time:'02:13',title:'Off-hours login',detail:'LAPTOP-023 from Dhaka HQ outside normal baseline',hash:'sha256:50ac...9210',sensitive:false,relevant:true,source:'Endpoint'},
    {id:'EVD-1002',caseId:'INV-2026-0042',user:'USR-0042',type:'File',time:'02:18',title:'Customer_Master_2026.xlsx opened',detail:'PII classified · 382 MB',hash:'sha256:5c82...1fd1',sensitive:true,relevant:true,source:'File Monitor'},
    {id:'EVD-1003',caseId:'INV-2026-0042',user:'USR-0042',type:'File',time:'02:23',title:'Customer export generated',detail:'customer_export_sep.csv · 1.1 GB',hash:'sha256:3ad1...d991',sensitive:true,relevant:true,source:'File Monitor'},
    {id:'EVD-1004',caseId:'INV-2026-0042',user:'USR-0042',type:'USB',time:'02:31',title:'New USB device connected',detail:'SanDisk Ultra · Serial 77A21',hash:'sha256:420e...143d',sensitive:false,relevant:true,source:'Device Control'},
    {id:'EVD-1005',caseId:'INV-2026-0042',user:'USR-0042',type:'Transfer',time:'02:42',title:'1.9 GB copied to USB',detail:'42 files · 9 PII matches',hash:'sha256:8f91...0c21',sensitive:true,relevant:true,source:'DLP'},
    {id:'EVD-1006',caseId:'INV-2026-0042',user:'USR-0042',type:'Response',time:'02:44',title:'USB write blocked',detail:'Adaptive DLP action executed',hash:'sha256:78d0...b82e',sensitive:false,relevant:true,source:'Policy Engine'},
    {id:'EVD-2001',caseId:'INV-2026-0039',user:'USR-0088',type:'File',time:'01:04',title:'Vendor export archive created',detail:'vendor_contacts_q3.zip · 420 MB',hash:'sha256:792a...11d0',sensitive:true,relevant:true,source:'File Monitor'},
    {id:'EVD-2002',caseId:'INV-2026-0039',user:'USR-0088',type:'Cloud',time:'01:18',title:'External cloud transfer',detail:'Personal Dropbox destination · cumulative 2.6 GB / 21 days',hash:'sha256:4cab...1190',sensitive:true,relevant:true,source:'Cloud DLP'},
    {id:'EVD-3001',caseId:'INV-2026-0031',user:'USR-0099',type:'M365',time:'23:14',title:'OneDrive bulk download',detail:'17x normal daily baseline',hash:'sha256:1a31...3dd9',sensitive:true,relevant:true,source:'Microsoft 365'}
  ],
  screenshots:[
    {id:'SCR-01',caseId:'INV-2026-0042',user:'USR-0042',time:'02:18',app:'Excel',title:'Customer workbook open',caption:'PII workbook visible; sensitive fields automatically redacted in preview.',sensitive:true},
    {id:'SCR-02',caseId:'INV-2026-0042',user:'USR-0042',time:'02:23',app:'Excel',title:'CSV export dialog',caption:'Large customer export is being created.',sensitive:true},
    {id:'SCR-03',caseId:'INV-2026-0042',user:'USR-0042',time:'02:31',app:'Explorer',title:'USB drive mounted',caption:'New removable device appears in File Explorer.',sensitive:false},
    {id:'SCR-04',caseId:'INV-2026-0042',user:'USR-0042',time:'02:38',app:'Explorer',title:'Bulk copy in progress',caption:'Files are being copied to removable storage.',sensitive:true},
    {id:'SCR-05',caseId:'INV-2026-0042',user:'USR-0042',time:'02:42',app:'DLP',title:'Adaptive protection warning',caption:'Transfer blocked and user justification requested.',sensitive:false},
    {id:'SCR-06',caseId:'INV-2026-0039',user:'USR-0088',time:'01:18',app:'Browser',title:'External cloud upload',caption:'Focused observation screenshot linked to cumulative exfiltration.',sensitive:true}
  ],
  fileEvents:[
    {id:'FIL-001',caseId:'INV-2026-0042',user:'USR-0042',time:'02:18',name:'Customer_Master_2026.xlsx',operation:'OPEN',size:'382 MB',classification:'Customer PII',path:'C:/Finance/Exports/',lineage:'LIN-042',destination:'Local',hash:'5c82...1fd1'},
    {id:'FIL-002',caseId:'INV-2026-0042',user:'USR-0042',time:'02:23',name:'customer_export_sep.csv',operation:'CREATE',size:'1.1 GB',classification:'Customer PII',path:'C:/Users/Rahim/Downloads/',lineage:'LIN-042',destination:'Local',hash:'3ad1...d991'},
    {id:'FIL-003',caseId:'INV-2026-0042',user:'USR-0042',time:'02:27',name:'customer_export_sep.zip',operation:'ARCHIVE',size:'980 MB',classification:'Customer PII',path:'C:/Users/Rahim/Downloads/',lineage:'LIN-042',destination:'Local',hash:'51cf...b988'},
    {id:'FIL-004',caseId:'INV-2026-0042',user:'USR-0042',time:'02:42',name:'customer_export_sep.zip',operation:'COPY',size:'980 MB',classification:'Customer PII',path:'E:/Export/',lineage:'LIN-042',destination:'USB SanDisk 77A21',hash:'51cf...b988'},
    {id:'FIL-005',caseId:'INV-2026-0039',user:'USR-0088',time:'01:04',name:'vendor_contacts_q3.zip',operation:'UPLOAD',size:'420 MB',classification:'Confidential',path:'C:/Operations/',lineage:'LIN-088',destination:'Dropbox Personal',hash:'792a...11d0'}
  ],
  communications:[
    {id:'COM-001',caseId:'INV-2026-0042',user:'USR-0042',time:'02:29',channel:'Teams',direction:'Internal',counterparty:'Finance Ops',subject:'Late-night reconciliation',preview:'Working on a reconciliation export. Will complete before morning.',sensitive:false,sentiment:'Neutral'},
    {id:'COM-002',caseId:'INV-2026-0042',user:'USR-0042',time:'02:40',channel:'Outlook',direction:'External',counterparty:'personal.mail@example.com',subject:'backup',preview:'Message draft created; no send observed after DLP action.',sensitive:true,sentiment:'Neutral'},
    {id:'COM-003',caseId:'INV-2026-0039',user:'USR-0088',time:'00:58',channel:'Slack',direction:'External Connect',counterparty:'Vendor workspace',subject:'Data request',preview:'Conversation references taking a copy of vendor contacts.',sensitive:true,sentiment:'Concern'}
  ],
  appUsage:[
    {user:'USR-0042',app:'Microsoft Excel',minutes:166,classification:'Productive',risk:'Normal'},
    {user:'USR-0042',app:'Chrome',minutes:92,classification:'Neutral',risk:'Moderate'},
    {user:'USR-0042',app:'7-Zip',minutes:12,classification:'Neutral',risk:'High'},
    {user:'USR-0063',app:'VS Code',minutes:294,classification:'Productive',risk:'Normal'},
    {user:'USR-0063',app:'GitHub Desktop',minutes:86,classification:'Productive',risk:'Normal'},
    {user:'USR-0071',app:'Chrome',minutes:210,classification:'Productive',risk:'Moderate'}
  ],
  webUsage:[
    {user:'USR-0042',site:'internal.erp.demo',minutes:121,classification:'Productive',category:'Business',risk:'Normal'},
    {user:'USR-0042',site:'drive.google.com',minutes:8,classification:'Neutral',category:'Cloud Storage',risk:'High'},
    {user:'USR-0063',site:'github.com',minutes:143,classification:'Productive',category:'Development',risk:'Normal'},
    {user:'USR-0071',site:'chatgpt.com',minutes:42,classification:'Neutral',category:'Generative AI',risk:'Medium'},
    {user:'USR-0071',site:'facebook.com',minutes:67,classification:'Productive',category:'Marketing',risk:'Normal'}
  ],
  sensitiveIncidents:[
    {id:'DLP-INC-901',time:'Today 02:42',user:'USR-0042',dataClass:'Customer PII',channel:'USB',volume:'1.9 GB',risk:94,decision:'Blocked',policy:'POL-011',status:'Contained'},
    {id:'DLP-INC-896',time:'Yesterday 16:05',user:'USR-0071',dataClass:'Customer PII',channel:'Public GenAI',volume:'12 identifiers',risk:69,decision:'Warn + Justification',policy:'POL-015',status:'Reviewed'},
    {id:'DLP-INC-881',time:'Yesterday 23:14',user:'USR-0099',dataClass:'Financial Records',channel:'OneDrive',volume:'742 MB',risk:82,decision:'Alert',policy:'POL-013',status:'Investigating'}
  ],
  observationRequests:[
    {id:'OBS-021',user:'USR-0088',requestedBy:'Rashed — IRM',level:3,reason:'Departing employee cumulative exfiltration',status:'Approved',approvers:['Privacy Officer','Security Director'],expires:'08 Sep 2026 18:00'},
    {id:'OBS-022',user:'USR-0042',requestedBy:'Farhana — Security',level:3,reason:'Critical DLP incident evidence capture',status:'Pending dual approval',approvers:['Security Director'],expires:'Pending'}
  ],
  reportSchedules:[
    {id:'RPT-S-01',name:'Weekly Insider Risk Summary',frequency:'Weekly · Monday 08:00',recipients:'Security Leadership',format:'PDF + CSV',enabled:true,lastRun:'31 Aug 2026'},
    {id:'RPT-S-02',name:'Monthly Workforce Intelligence',frequency:'Monthly · 1st 09:00',recipients:'HR + Executive',format:'PDF',enabled:true,lastRun:'01 Sep 2026'}
  ],
  settings:{
    sso:true,mfa:'Required',region:'Asia Pacific',retention:60,encryption:'AES-256',api:'OAuth2 + scoped tokens',timezone:'Asia/Dhaka',notifications:'Critical + High',dataResidency:'Bangladesh / APAC simulation'
  },
  acknowledgements:[
    {user:'USR-0042',policy:'Workplace Monitoring & Privacy Notice v3.2',acknowledged:false,time:null}
  ]
});

window.USSSeed.activities.push(
  {time:'10:12',user:'USR-0017',type:'Email',title:'Exchange email sent',detail:'Internal recipient · no sensitive attachment',risk:'Low'},
  {time:'10:24',user:'USR-0017',type:'Chat',title:'Teams collaboration',detail:'HR Operations channel · 14 messages',risk:'Low'},
  {time:'11:03',user:'USR-0017',type:'Print',title:'Policy document printed',detail:'12 pages · Canon-HR-02',risk:'Low'},
  {time:'13:41',user:'USR-0063',type:'Idle',title:'Workstation idle',detail:'18 minutes · within configured break context',risk:'Low'},
  {time:'14:18',user:'USR-0063',type:'Network',title:'Application network connection',detail:'VS Code extension → api.github.com:443 · 24 MB',risk:'Low'},
  {time:'15:08',user:'USR-0063',type:'Keystroke',title:'Focused keyword telemetry',detail:'Policy-triggered context only · sensitive fields suppressed',risk:'Low'},
  {time:'16:12',user:'USR-0071',type:'Chat',title:'Slack marketing conversation',detail:'Public campaign planning · normal sentiment',risk:'Low'},
  {time:'16:06',user:'USR-0071',type:'Screenshot',title:'Activity-triggered screenshot captured',detail:'Public GenAI warning context · redacted preview',risk:'Medium'},
  {time:'23:14',user:'USR-0099',type:'M365',title:'OneDrive bulk download',detail:'742 MB · 17x personal baseline',risk:'High'},
  {time:'23:16',user:'USR-0099',type:'Network',title:'New external network destination',detail:'Unfamiliar ASN · HTTPS transfer context',risk:'High'},
  {time:'01:18',user:'USR-0088',type:'Cloud',title:'External cloud upload',detail:'Personal Dropbox · cumulative 2.6 GB over 21 days',risk:'Critical'},
  {time:'08:43',user:'USR-0112',type:'Location',title:'Company mobile geofence entry',detail:'Assigned customer service zone · compliant',risk:'Low'}
);
