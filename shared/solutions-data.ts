import { SolutionPageContent } from './types';

export const SOLUTIONS_DATA: Record<string, SolutionPageContent> = {
  'digital-it': {
    slug: 'digital-it',
    title: 'Digital & IT Consulting',
    eyebrow: 'Strategy & Modernisation',
    tagline: 'Identifying technology opportunities, modernising systems, and executing structured digital programmes.',
    overview:
      'JSJ INFOTECH supports organisations in assessing existing technology environments, business processes, and future objectives to recommend practical, scalable architectures. Rather than limiting our role to advisory, we focus on turnkey execution—assembling specialist teams to deliver IT strategy, system integration, process automation, and technology modernisation with measurable business outcomes.',
    autonomousCoreRole:
      'The strategic and structural foundation of the Autonomous Core. Architects the resilient computing topology, cloud-native pipelines, and automated AIOps workflows that allow all operational layers to communicate securely.',
    architecturalLayer: 'Enterprise',
    keyCapabilities: [
      {
        title: 'IT Strategy & Digital Transformation Roadmaps',
        description: 'Comprehensive assessment of existing infrastructure, technical debt, and business workflows to design phased modernisation roadmaps.',
        tags: ['IT Strategy', 'Digital Transformation', 'Architecture Assessment', 'Roadmaps'],
      },
      {
        title: 'Enterprise System Integration',
        description: 'Unifying disparate enterprise software platforms, database clusters, legacy mainframes, and modern cloud applications via robust middleware.',
        tags: ['System Integration', 'API Gateways', 'Legacy Connectors', 'Data Pipelines'],
      },
      {
        title: 'Business Process Automation',
        description: 'Streamlining repetitive administrative and operational workflows through automated business logic, rules engines, and event-driven triggers.',
        tags: ['Process Automation', 'Workflow Engines', 'Operational Efficiency'],
      },
      {
        title: 'IT System Enhancement & Modernisation',
        description: 'Continuously modernising existing systems with AI, automation, analytics, and modern software technologies rather than costly total replacements.',
        tags: ['System Enhancement', 'Cloud Migration', 'AIOps', 'Lifecycle Modernisation'],
      },
    ],
    useCases: [
      {
        title: 'Enterprise IT Landscape Consolidation',
        description: 'Auditing and consolidating multi-location corporate servers and enterprise platforms into resilient, cost-optimised cloud environments.',
        target: 'Enterprise',
      },
      {
        title: 'Public Department Digital Transformation',
        description: 'Modernising departmental processes, record management, and administrative tracking into unified digital workflows with clear audit trails.',
        target: 'Government',
      },
    ],
    techStack: ['Linux Enterprise (RHEL/Debian)', 'Kubernetes', 'Terraform', 'Prometheus', 'Grafana', 'Proxmox / VMware', 'Cisco / Fortinet Networking'],
    faqs: [
      {
        question: 'How does JSJ approach consulting engagements?',
        answer: 'We assess existing systems, business processes, and operational constraints before recommending architectures, then partner through execution to guarantee measurable project outcomes.',
      },
      {
        question: 'Do you work with third-party software and external vendors?',
        answer: 'Yes. We collaborate with specialist technology partners, hardware vendors, and global providers to assemble the ideal combination of domain specialists for each project.',
      },
    ],
    seo: {
      metaTitle: 'Digital & IT Consulting Services | JSJ INFOTECH Hyderabad',
      metaDescription: 'IT consulting, technology assessment, system integration, process automation, and digital transformation services in Hyderabad and across India.',
      keywords: ['IT Consulting Hyderabad', 'Digital Transformation India', 'System Integration Services', 'Enterprise IT Strategy', 'Technology Modernisation'],
    },
  },

  'sap-erp': {
    slug: 'sap-erp',
    title: 'SAP Implementation & Management',
    eyebrow: 'Enterprise Technology',
    tagline: 'Supporting organisations in implementing, enhancing, and managing SAP-based environments through structured project execution.',
    overview:
      'SAP forms an important part of JSJ INFOTECH’s enterprise technology capabilities. We support organisations in implementing, enhancing, and managing SAP environments through a structured lifecycle. Beyond initial rollout, we recognise that SAP landscapes require continuous enhancement as organisations grow—providing configuration coordination, data migration, third-party integration, AI-enabled process enhancement, and ongoing application management.',
    autonomousCoreRole:
      'The transactional backbone of the Autonomous Core. Translates real-time field data, asset maintenance triggers, and AI insights directly into standard SAP Plant Maintenance (PM), Materials Management (MM), and Financial Accounting (FI) modules without manual intervention.',
    architecturalLayer: 'Enterprise',
    keyCapabilities: [
      {
        title: 'SAP Implementation & Rollout Support',
        description: 'Structured implementation planning, business blueprinting, configuration coordination, testing, and cutover for SAP S/4HANA environments.',
        tags: ['SAP S/4HANA', 'Implementation Support', 'Clean Core', 'Configuration'],
      },
      {
        title: 'SAP Upgrade & Enhancement Projects',
        description: 'Structured migration from legacy ECC 6.0 environments, kernel patching, enhancement pack upgrades, and custom code remediation.',
        tags: ['ECC to S/4HANA', 'Upgrades', 'ABAP Remediation', 'BTP Extensions'],
      },
      {
        title: 'Data Migration & Validation',
        description: 'High-integrity extraction, cleansing, transformation, and reconciliation of master and transactional data during enterprise migrations.',
        tags: ['Data Migration', 'Validation', 'Master Data Governance', 'ETL'],
      },
      {
        title: 'SAP Application Management & Integration',
        description: 'Ongoing technical and functional support, BASIS administration, third-party API integration, and AI-enabled SAP workflow enhancement.',
        tags: ['Application Management', 'BASIS', 'Third-Party Integration', 'AI-Enabled Workflows'],
      },
    ],
    useCases: [
      {
        title: 'Enterprise ERP Modernisation & Cloud Migration',
        description: 'Executing clean-core transitions to S/4HANA Cloud with side-by-side extensions, eliminating operational bottlenecks for manufacturing leaders.',
        target: 'Enterprise',
      },
      {
        title: 'Government Asset & Inventory Management on SAP',
        description: 'Configuring SAP Plant Maintenance (PM) and Materials Management (MM) to manage public sector assets, parts replenishment, and maintenance SLAs.',
        target: 'Government',
      },
    ],
    techStack: ['SAP S/4HANA', 'SAP BTP', 'SAP Integration Suite', 'ABAP Restful Application Programming', 'SAP Fiori', 'SAP HANA Database'],
    faqs: [
      {
        question: 'How does JSJ deliver specialized SAP capabilities?',
        answer: 'We execute projects through experienced internal practitioners and, where project scale requires, collaborate with certified SAP specialists and system integrator partners.',
      },
      {
        question: 'Can you support post-implementation SAP maintenance?',
        answer: 'Yes. Our approach extends across the full lifecycle to include system optimization, user support, functional enhancements, and continuous performance tuning.',
      },
    ],
    seo: {
      metaTitle: 'SAP Implementation & Management Services | JSJ INFOTECH',
      metaDescription: 'SAP S/4HANA implementation support, upgrades, data migration, BASIS administration, application management, and third-party integration.',
      keywords: ['SAP Implementation India', 'SAP Management Hyderabad', 'S4HANA Migration', 'SAP Application Support', 'Enterprise ERP Systems'],
    },
  },

  'artificial-intelligence': {
    slug: 'artificial-intelligence',
    title: 'AI & Intelligent Solutions',
    eyebrow: 'Intelligence Layer',
    tagline: 'Identifying practical applications of AI to improve productivity, decision-making, and operational efficiency.',
    overview:
      'Artificial Intelligence is becoming an important component of enterprise and government transformation. JSJ INFOTECH focuses on practical, grounded implementations—integrating AI into existing enterprise systems and workflows rather than treating it as a standalone novelty. We partner with specialist AI providers and global technology companies to deploy intelligent document processing, predictive analytics, enterprise assistants, and computer vision.',
    autonomousCoreRole:
      'The reasoning engine of the Autonomous Core. Ingests streaming telemetry from physical infrastructure, enterprise ERP, and field drones to detect anomalies, forecast failures, and optimize system workflows in real time.',
    architecturalLayer: 'Intelligence',
    keyCapabilities: [
      {
        title: 'AI-Powered Business Applications',
        description: 'Custom machine learning models integrated directly into corporate applications to automate decision support and reduce operational cycle time.',
        tags: ['Business AI', 'Machine Learning', 'Decision Support', 'Operational Intelligence'],
      },
      {
        title: 'Intelligent Document Processing (IDP)',
        description: 'High-accuracy OCR, semantic classification, and structured data extraction from invoices, government filings, and legal records.',
        tags: ['Intelligent Document Processing', 'OCR', 'Information Extraction', 'NLP'],
      },
      {
        title: 'Predictive Analytics & Maintenance',
        description: 'Time-series forecasting models detecting subtle vibrational, thermal, and electrical variations to forecast mechanical and operational bottlenecks.',
        tags: ['Predictive Analytics', 'Time-Series Forecasts', 'Anomaly Detection'],
      },
      {
        title: 'Enterprise Knowledge Assistants & GenAI',
        description: 'Secure, private retrieval-augmented generation (RAG) assistants that index internal standard operating procedures, manuals, and enterprise documents.',
        tags: ['Enterprise RAG', 'Knowledge Assistants', 'Generative AI', 'Sovereign Privacy'],
      },
    ],
    useCases: [
      {
        title: 'Enterprise Operational Decision Support',
        description: 'Deploying predictive demand forecasting and automated invoice parsing within corporate supply chain and financial operations.',
        target: 'Enterprise',
      },
      {
        title: 'Public Infrastructure Condition Analytics',
        description: 'Analyzing sensor and inspection data to forecast municipal asset degradation and schedule preemptive maintenance before civic disruption.',
        target: 'Government',
      },
    ],
    techStack: ['Python', 'PyTorch', 'TensorRT', 'OpenCV', 'LangChain / LlamaIndex', 'Milvus / Chroma Vector DB', 'ONNX Runtime Edge'],
    faqs: [
      {
        question: 'Does JSJ require replacing existing software to implement AI?',
        answer: 'No. Our philosophy emphasizes integrating AI into existing systems, allowing organizations to enhance current investments while gradually adopting intelligent capabilities.',
      },
      {
        question: 'How do you ensure data confidentiality for proprietary enterprise records?',
        answer: 'All models and vector stores can be deployed completely within private clouds or on-premise infrastructure without external internet data leakage.',
      },
    ],
    seo: {
      metaTitle: 'AI & Intelligent Solutions | Enterprise & Government | JSJ INFOTECH',
      metaDescription: 'Practical AI implementations: intelligent document processing, predictive analytics, enterprise knowledge assistants, and process optimisation.',
      keywords: ['AI Solutions India', 'Predictive Analytics Hyderabad', 'Intelligent Document Processing', 'Enterprise AI Integration', 'Generative AI Business'],
    },
  },

  cybersecurity: {
    slug: 'cybersecurity',
    title: 'Cybersecurity & Sovereign Defense',
    eyebrow: 'Resilience & Compliance',
    tagline: 'Zero-trust architecture, continuous hardening, and data protection for mission-critical operations.',
    overview:
      'As digital platforms, physical facilities, and enterprise applications become increasingly connected, robust cybersecurity becomes paramount. JSJ INFOTECH delivers structured cybersecurity consulting, OT network micro-segmentation, continuous vulnerability auditing, and regulatory alignment—safeguarding government departments and enterprises against modern threat vectors.',
    autonomousCoreRole:
      'The immune system of the Autonomous Core. Continuously inspects network boundaries, telemetric gateways, and API transactions to detect anomalous behavior, isolating threats before they can compromise core operations.',
    architecturalLayer: 'Enterprise',
    keyCapabilities: [
      {
        title: 'Zero-Trust Architecture (ZTA) Implementation',
        description: 'Enforcing strict identity verification, micro-segmentation, and least-privilege access across distributed enterprise and cloud networks.',
        tags: ['Zero Trust', 'Micro-segmentation', 'IAM / MFA', 'Access Control'],
      },
      {
        title: 'Operational Technology (OT) & IoT Security',
        description: 'Hardening industrial controllers, BMS protocols (BACnet, Modbus), and field edge gateways against unauthorized remote interception.',
        tags: ['OT Security', 'SCADA / BMS Hardening', 'IoT Gateway Encryption'],
      },
      {
        title: 'Vulnerability Assessment & Penetration Auditing',
        description: 'Comprehensive vulnerability scanning, configuration auditing, and remediation advisory in full compliance with national security guidelines.',
        tags: ['Vulnerability Assessment', 'Penetration Testing', 'Security Audits'],
      },
      {
        title: 'Data Governance & DPDP 2025 Compliance',
        description: 'Aligning enterprise data flows with India’s Digital Personal Data Protection Rules 2025, ensuring encryption, consent records, and sovereign storage.',
        tags: ['DPDP Rules 2025', 'Data Governance', 'Encryption', 'Sovereign Compliance'],
      },
    ],
    useCases: [
      {
        title: 'Government Department Network Hardening',
        description: 'Establishing sovereign, air-gapped security perimeters and strict access controls for sensitive civic databases and administrative platforms.',
        target: 'Government',
      },
      {
        title: 'Corporate ERP & API Threat Protection',
        description: 'Securing mission-critical SAP endpoints and customer web platforms with behavioural rate limiting, web firewalls, and encrypted pipelines.',
        target: 'Enterprise',
      },
    ],
    techStack: ['WireGuard', 'HashiCorp Vault', 'Wazuh SIEM', 'Suricata IDS/IPS', 'OpenSCAP', 'Cloudflare Zero Trust', 'Trivy'],
    faqs: [
      {
        question: 'Does JSJ help organizations comply with India DPDP Act 2025?',
        answer: 'Yes. We provide complete technical data audit, consent management architecture, pseudonymization pipelines, and breach notification mechanisms compliant with notified DPDP rules.',
      },
      {
        question: 'How do you secure field IoT sensors and drone links?',
        answer: 'All sensor telemetry utilizes TLS 1.3 mutual authentication (mTLS) with hardware-rooted keys (TPM / Secure Elements) and encrypted flight command links.',
      },
    ],
    seo: {
      metaTitle: 'Cybersecurity & Sovereign Defense Services | JSJ INFOTECH',
      metaDescription: 'Zero-trust architecture, OT/IoT network hardening, penetration auditing, and DPDP 2025 compliance for enterprise and public sector.',
      keywords: ['Cybersecurity Services India', 'Zero Trust Architecture', 'DPDP Compliance 2025', 'OT Network Security', 'Government IT Security'],
    },
  },

  'software-development': {
    slug: 'software-development',
    title: 'Software & Application Development',
    eyebrow: 'Custom Digital Platforms',
    tagline: 'Creating customised digital solutions that address specific operational and business requirements.',
    overview:
      'JSJ INFOTECH develops scalable, secure, and maintainable software solutions ranging from internal enterprise tools to customer-facing web and mobile applications. Our development approach emphasises clean architecture, robust APIs, database integrity, and seamless integration with existing enterprise systems. Where required, projects are executed through a combination of internal teams and specialist technology development partners.',
    autonomousCoreRole:
      'The operational interface of the Autonomous Core. Delivers high-performance web dashboards, mobile field tools, and automated workflow microservices that connect human decision-makers directly to real-time machine intelligence.',
    architecturalLayer: 'Enterprise',
    keyCapabilities: [
      {
        title: 'Custom Web & Mobile Application Development',
        description: 'High-performance, responsive applications built with modern frameworks for seamless cross-platform operational management.',
        tags: ['React 19', 'Next.js', 'Mobile Apps', 'Modern Frontends'],
      },
      {
        title: 'Enterprise & Business Process Applications',
        description: 'Tailored platforms managing internal workflows, approval hierarchies, inventory movements, and multi-tenant department records.',
        tags: ['Enterprise Software', 'Workflow Automation', 'Business Process Apps'],
      },
      {
        title: 'API Development & Integration Middleware',
        description: 'High-throughput REST and GraphQL APIs connecting disparate databases, legacy systems, and external third-party services.',
        tags: ['API Development', 'Integration Middleware', 'Microservices'],
      },
      {
        title: 'Application Modernisation & Cloud Enablement',
        description: 'Refactoring monolithic legacy applications into containerised, cloud-enabled microservices with automated deployment pipelines.',
        tags: ['Application Modernisation', 'Cloud Enabled', 'Docker', 'Containerisation'],
      },
    ],
    useCases: [
      {
        title: 'Industrial Operations Management Portal',
        description: 'Custom portal linking shop-floor machine telemetry, engineer shift logs, and executive inventory dashboards in real time.',
        target: 'Enterprise',
      },
      {
        title: 'Civic Service Delivery & Tracking Platform',
        description: 'Developing high-concurrency public service web platforms with citizen request tracking, SLA monitors, and administrative oversight.',
        target: 'Government',
      },
    ],
    techStack: ['TypeScript', 'Next.js 16', 'React 19', 'Go', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'Tailwind CSS'],
    faqs: [
      {
        question: 'Do you develop bespoke solutions or customize packaged software?',
        answer: 'We engineer bespoke software tailored to our clients’ specific business processes while ensuring clean integration with standard enterprise platforms like SAP.',
      },
      {
        question: 'How do you ensure software security and scalability?',
        answer: 'We employ strict typing, automated security linters, code reviews, and containerized architectures designed for horizontal scaling under high transaction loads.',
      },
    ],
    seo: {
      metaTitle: 'Custom Software & Application Development | JSJ INFOTECH',
      metaDescription: 'Custom web application development, mobile apps, enterprise process software, API integration, and application modernisation.',
      keywords: ['Software Development Hyderabad', 'Custom Web Applications India', 'Enterprise App Development', 'API Integration Services', 'Mobile App Development'],
    },
  },

  'digital-content': {
    slug: 'digital-content',
    title: 'Digital Content Development',
    eyebrow: 'Technical Media & Publishing',
    tagline: 'Bridging engineering precision and operational clarity through high-impact technical documentation and media.',
    overview:
      'Complex technological systems and large-scale government programmes require clear, structured digital knowledge dissemination. JSJ INFOTECH creates technical documentation portals, interactive operational SOPs, and structured digital training content that empower field personnel, operators, and executive stakeholders to adopt modern technology with confidence.',
    autonomousCoreRole:
      'The communication fabric of the Autonomous Core. Converts complex system telemetric architectures and enterprise workflows into interactive digital operating manuals, regulatory compliance documentation, and clear stakeholder briefings.',
    architecturalLayer: 'Cross-Layer',
    keyCapabilities: [
      {
        title: 'Interactive Technical Documentation Portals',
        description: 'Doc-as-code platforms, developer documentation, and searchable knowledgebases for enterprise tools and public platforms.',
        tags: ['Docs-as-Code', 'Technical Documentation', 'Knowledgebases'],
      },
      {
        title: 'Operational Training Media & SOPs',
        description: 'Step-by-step interactive digital standard operating procedures (SOPs) and training multimedia for operational personnel.',
        tags: ['Interactive SOPs', 'Training Media', 'Operational Guides'],
      },
      {
        title: '3D Technical Schematics & Visualisations',
        description: 'Visual process maps, exploded component diagrams, and architectural schematics for stakeholder and public communication.',
        tags: ['Technical Visualisation', 'Schematics', 'Architecture Diagrams'],
      },
      {
        title: 'Public Program Digital Communications',
        description: 'Accessible communication kits, infographic reports, and explanatory digital assets for civic technology modernisation rollouts.',
        tags: ['Public Outreach', 'Accessible Media', 'Infographics', 'WCAG 2.2'],
      },
    ],
    useCases: [
      {
        title: 'Standard Operating Procedures for Infrastructure Facilities',
        description: 'Interactive digital operating manuals accessible on field tablets for facility engineers and maintenance crews.',
        target: 'Government',
      },
      {
        title: 'Enterprise Software User Onboarding Portals',
        description: 'Digital training hubs reducing operational learning curves during statewide enterprise application rollouts.',
        target: 'Enterprise',
      },
    ],
    techStack: ['MDX / Next.js', 'Figma', 'Blender 3D', 'Remotion Video', 'WCAG Accessible Media', 'Structured JSON-LD'],
    faqs: [
      {
        question: 'Why does a technology company offer digital content development?',
        answer: 'Technology deployments fail when operators lack clear, accessible documentation. We integrate technical content directly with system engineering to guarantee adoption.',
      },
      {
        question: 'Are all digital content materials accessible on mobile devices?',
        answer: 'Yes. All portals and media comply with responsive mobile design standards and WCAG 2.2 AA accessibility guidelines.',
      },
    ],
    seo: {
      metaTitle: 'Digital Content & Technical Media Development | JSJ INFOTECH',
      metaDescription: 'Technical documentation portals, interactive SOPs, digital training media, and structured technology communications.',
      keywords: ['Technical Content Development', 'Interactive SOPs India', 'Technical Documentation Portals', 'Operational Training Media'],
    },
  },

  'drone-technology': {
    slug: 'drone-technology',
    title: 'Drone Technology Projects',
    eyebrow: 'Aerial Telemetry & Inspection',
    tagline: 'Participating in drone technology projects where aerial data, mapping, and inspection improve decision-making.',
    overview:
      'Drone technology is creating transformative opportunities across infrastructure, construction, agriculture, surveying, inspection, public-sector operations, and asset management. JSJ INFOTECH participates in drone projects where aerial data, imaging, mapping, and automated inspection improve project efficiency and decision-making. Our role spans project coordination, technology integration, software platforms, data management, and deployment of specialised drone technology partners.',
    autonomousCoreRole:
      'The aerial sensory extension of the Autonomous Core. Captures high-resolution photogrammetry, thermal imagery, and GIS spatial data, feeding aerial intelligence directly into AI defect classifiers and enterprise maintenance registries.',
    architecturalLayer: 'Physical',
    regulatoryNotice: 'All drone-related projects will be undertaken in accordance with applicable regulatory requirements and permissions.',
    keyCapabilities: [
      {
        title: 'Land & Infrastructure Surveys',
        description: 'Topographic mapping, contour generation, digital surface models (DSM), and GIS integration for planning and civil projects.',
        tags: ['Land Surveys', 'Topographic Mapping', 'GIS Integration', 'DSM'],
      },
      {
        title: 'Construction Progress Monitoring',
        description: 'Periodic, high-accuracy aerial surveys providing volumetric calculations, timeline tracking, and site documentation.',
        tags: ['Construction Monitoring', 'Volumetric Analysis', 'Site Documentation'],
      },
      {
        title: 'Asset & Infrastructure Inspection',
        description: 'Detailed visual and thermal inspection of buildings, industrial facilities, bridges, and utility corridors without manual hazard.',
        tags: ['Asset Inspection', 'Thermal Imaging', 'Utility Corridor Inspection'],
      },
      {
        title: 'Aerial Data Collection & Analytics',
        description: 'Processing aerial imagery through computer vision pipelines for automated defect detection, change monitoring, and reporting.',
        tags: ['Aerial Analytics', 'Defect Detection', 'Change Monitoring', 'AI Analytics'],
      },
    ],
    useCases: [
      {
        title: 'Public Land & Infrastructure Corridor Monitoring',
        description: 'Periodic drone surveys along highway corridors and civic lands, automatically detecting encroachment and terrain shifts.',
        target: 'Government',
      },
      {
        title: 'Industrial Facility Roof & Thermal Audits',
        description: 'High-resolution thermal scanning of industrial plants to pinpoint heat leaks, insulation failures, and electrical hotspots.',
        target: 'Enterprise',
      },
    ],
    techStack: ['RTK / PPK GPS', 'DJI Enterprise SDK', 'Pix4D / WebODM', 'Thermal FLIR Sensors', 'YOLO Defect Models', 'GIS QGIS / ArcGIS'],
    faqs: [
      {
        question: 'How does JSJ ensure regulatory compliance for drone flights?',
        answer: 'All drone-related projects are executed in strict accordance with Directorate General of Civil Aviation (DGCA) regulations, DigitalSky permissions, and applicable local clearances.',
      },
      {
        question: 'What is JSJ’s role in drone project delivery?',
        answer: 'Our role encompasses end-to-end project coordination, technology integration, software platforms, spatial data management, and the deployment of qualified drone flight partners.',
      },
    ],
    seo: {
      metaTitle: 'Drone Technology Projects & Aerial Analytics | JSJ INFOTECH',
      metaDescription: 'Drone technology projects: land surveys, construction progress monitoring, asset inspection, GIS integration, and aerial data collection.',
      keywords: ['Drone Projects India', 'Aerial Survey Hyderabad', 'Drone Asset Inspection', 'Infrastructure Drone Monitoring', 'GIS Drone Mapping'],
    },
  },

  'project-management': {
    slug: 'project-management',
    title: 'Project Management & Execution',
    eyebrow: 'Governance & Accountability',
    tagline: 'Bringing together technology teams, vendors, and stakeholders under a structured execution framework.',
    overview:
      'Successful technology projects require disciplined planning, coordination, governance, and execution. JSJ INFOTECH’s project management practice brings together internal technology teams, equipment vendors, specialist implementation partners, and client stakeholders. We manage projects across the complete lifecycle—from requirement definition and planning through procurement, implementation, testing, commissioning, handover, and post-implementation support—ensuring delivery within agreed scope, schedule, quality, and commercial parameters.',
    autonomousCoreRole:
      'The governance and execution framework of the Autonomous Core. Guarantees that every multi-vertical initiative is delivered with rigorous milestone tracking, risk mitigation, and commercial accountability.',
    architecturalLayer: 'Governance',
    keyCapabilities: [
      {
        title: 'Project Planning & Scheduling',
        description: 'Developing granular work breakdown structures, critical-path schedules, dependency mapping, and milestone delivery baselines.',
        tags: ['Planning & Scheduling', 'Critical Path', 'Milestone Baselines'],
      },
      {
        title: 'Scope & Budget Management',
        description: 'Maintaining strict scope controls, change management processes, and proactive budget monitoring to avoid cost overruns.',
        tags: ['Scope Management', 'Cost Monitoring', 'Budget Control'],
      },
      {
        title: 'Resource & Vendor Coordination',
        description: 'Orchestrating multi-disciplinary teams, external hardware vendors, and specialist partners under unified accountability.',
        tags: ['Vendor Management', 'Resource Coordination', 'Partner Governance'],
      },
      {
        title: 'Testing, Commissioning & Handover',
        description: 'Structured quality assurance, user acceptance testing (UAT), operational documentation, knowledge transfer, and post-implementation support.',
        tags: ['Testing & Commissioning', 'Quality Assurance', 'Documentation', 'Post-Implementation'],
      },
    ],
    useCases: [
      {
        title: 'Turnkey Enterprise Technology Rollout',
        description: 'Managing end-to-end project governance for multi-site software, ERP, and infrastructure upgrades across distributed commercial operations.',
        target: 'Enterprise',
      },
      {
        title: 'Public Sector Program Management Office (PMO)',
        description: 'Serving as the execution management arm for multi-vendor government digitization and infrastructure modernization initiatives.',
        target: 'Government',
      },
    ],
    techStack: ['Structured PM Lifecycle', 'Agile / Hybrid Governance', 'Risk Registers', 'Milestone Tracking', 'UAT Validation Protocols'],
    faqs: [
      {
        question: 'What is JSJ’s project delivery approach?',
        answer: 'We follow a proven six-stage lifecycle: 01 Assessment, 02 Solution Development, 03 Project Planning, 04 Implementation, 05 Testing & Deployment, and 06 Enhancement & Support.',
      },
      {
        question: 'How do you handle multi-vendor projects?',
        answer: 'We establish unified governance, clear interface definitions, joint delivery schedules, and single-point accountability to eliminate vendor finger-pointing.',
      },
    ],
    seo: {
      metaTitle: 'Technology Project Management & Execution | JSJ INFOTECH',
      metaDescription: 'Turnkey technology project management: planning, scope control, resource coordination, vendor management, budget monitoring, and commissioning.',
      keywords: ['Technology Project Management India', 'IT Project Execution Hyderabad', 'Vendor Management IT', 'Commissioning & Handover', 'Project Governance'],
    },
  },

  'government-technology': {
    slug: 'government-technology',
    title: 'Government Technology Projects',
    eyebrow: 'Public Sector Modernisation',
    tagline: 'Participating in government IT projects, system upgrades, and digital infrastructure modernisation.',
    overview:
      'Government organisations are increasingly adopting digital platforms to improve public service delivery, operational transparency, data management, and administrative efficiency. JSJ INFOTECH participates in government technology projects involving IT implementation, application development, system integration, digital transformation, technology upgrades, and modernisation of existing systems. We work with qualified technology partners and specialist agencies wherever specific technical certifications or statutory mandates are required.',
    autonomousCoreRole:
      'The public infrastructure deployment of the Autonomous Core. Implements compliant, auditable, and secure technological frameworks that modernize citizen-facing services and civic infrastructure operations.',
    architecturalLayer: 'Cross-Layer',
    keyCapabilities: [
      {
        title: 'Government Application Modernisation',
        description: 'Modernising legacy departmental software and administrative platforms into responsive, cloud-enabled digital systems.',
        tags: ['Gov Application Modernisation', 'Legacy Upgrades', 'Cloud Enablement'],
      },
      {
        title: 'Digital Service Delivery Platforms',
        description: 'Building secure, high-concurrency citizen portals and departmental workflows supporting transparent public service delivery.',
        tags: ['Digital Service Platforms', 'Citizen Portals', 'Public Delivery'],
      },
      {
        title: 'IT System Upgrades & Infrastructure Monitoring',
        description: 'Turnkey upgrades of departmental computing infrastructure, network security perimeters, and continuous facility monitoring.',
        tags: ['IT System Upgrades', 'Infrastructure Monitoring', 'Network Hardening'],
      },
      {
        title: 'GIS & Drone-Enabled Civic Projects',
        description: 'Deploying aerial surveys, GIS mapping, and telemetric monitoring for public land administration, urban planning, and civic works.',
        tags: ['GIS Integration', 'Civic Drone Projects', 'Public Works Auditing'],
      },
    ],
    useCases: [
      {
        title: 'Statewide Departmental Workflow Digitisation',
        description: 'Transitioning multi-tier manual bureaucratic approvals into encrypted, auditable digital workflow portals with role-based access.',
        target: 'Government',
      },
      {
        title: 'Civic Asset & Infrastructure Monitoring',
        description: 'Deploying continuous sensor telemetry and periodic drone photogrammetry to monitor condition and maintenance across public works.',
        target: 'Government',
      },
    ],
    techStack: ['E-Governance Frameworks', 'DPDP 2025 Compliance', 'GIS / Spatial Databases', 'Zero-Trust Networks', 'Audit Trail Logging'],
    faqs: [
      {
        question: 'How does JSJ meet specific government procurement and certification mandates?',
        answer: 'We collaborate with qualified technology partners and accredited agencies wherever specific domain empanelments, security clearances, or statutory certifications are required.',
      },
      {
        question: 'What is JSJ’s approach to upgrading existing government systems?',
        answer: 'Our approach covers rigorous assessment of legacy systems, development of phased upgrade strategies, coordination, integration testing, and comprehensive handover.',
      },
    ],
    seo: {
      metaTitle: 'Government Technology Projects & System Modernisation | JSJ INFOTECH',
      metaDescription: 'Government IT implementation, application modernisation, system upgrades, digital service platforms, and GIS infrastructure monitoring.',
      keywords: ['Government IT Projects India', 'Public Sector Technology Modernisation', 'GovTech Hyderabad', 'Government Digital Services', 'Departmental IT Upgrades'],
    },
  },
};
