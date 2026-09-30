import { SolutionPageContent } from './types';

export const SOLUTIONS_DATA: Record<string, SolutionPageContent> = {
  'sap-erp': {
    slug: 'sap-erp',
    title: 'SAP & ERP Transformation',
    eyebrow: 'Enterprise Layer',
    tagline: 'Transforming transactional systems of record into AI-augmented intelligent platforms.',
    overview:
      'JSJ INFOTECH delivers full-lifecycle SAP advisory, implementation, migration, and continuous maintenance. Rather than treating ERP as an isolated accounting ledger, we architect SAP S/4HANA landscapes that natively ingest real-time operational data from field sensors, facilities, and software pipelines to power intelligent enterprise decision-making.',
    autonomousCoreRole:
      'The transactional backbone of the Autonomous Core. SAP translates physical asset telemetry and AI recommendations into real-time procurement, work orders, financial accounting, and inventory movements without manual data entry.',
    architecturalLayer: 'Enterprise',
    keyCapabilities: [
      {
        title: 'SAP S/4HANA Implementation & Brownfield Migration',
        description:
          'Structured transition journeys from SAP ECC 6.0 to S/4HANA Cloud and On-Premise with zero disruption to active business operations.',
        tags: ['S/4HANA', 'ECC Migration', 'Data Migration', 'Clean Core'],
      },
      {
        title: 'Advanced ABAP & Cloud BTP Development',
        description:
          'Custom business logic, enterprise extensions on SAP Business Technology Platform (BTP), and clean-core side-by-side extensibility.',
        tags: ['ABAP on HANA', 'SAP BTP', 'RESTful ABAP (RAP)', 'CAP'],
      },
      {
        title: 'BASIS Administration & Landscape Hardening',
        description:
          '24/7 technical administration, performance tuning, kernel patching, high-availability cluster setup, and disaster recovery drill management.',
        tags: ['BASIS', 'High Availability', 'Security Patching', 'Disaster Recovery'],
      },
      {
        title: 'Enterprise Integration & IoT Connectors',
        description:
          'Direct bi-directional integration of field IoT telemetry, drone inspection data, and third-party APIs into SAP PM (Plant Maintenance) and MM (Materials Management).',
        tags: ['SAP Integration Suite', 'OData', 'IoT Telemetry', 'SAP PM/MM'],
      },
    ],
    useCases: [
      {
        title: 'Autonomous Plant Maintenance (SAP PM)',
        description:
          'Connecting HVAC temperature anomalies directly to auto-generated SAP maintenance work orders and spare parts requisition.',
        target: 'Government',
      },
      {
        title: 'Global Supply Chain & Financial Consolidation',
        description:
          'Harmonizing multi-entity financial ledgers, inventory tracking, and automated reconciliation across distributed operating divisions.',
        target: 'Enterprise',
      },
    ],
    techStack: ['SAP S/4HANA', 'SAP BTP', 'SAP Integration Suite', 'ABAP Restful Application Programming', 'SAP Fiori', 'SAP HANA Database'],
    faqs: [
      {
        question: 'How does JSJ approach SAP S/4HANA migration risks?',
        answer:
          'We utilize a staged methodology comprising pre-migration readiness assessments, custom code analysis (Clean Core principles), sandbox dry-runs, and minimal-downtime cutover windows to guarantee business continuity.',
      },
      {
        question: 'Can JSJ integrate external drone and sensor data into existing SAP systems?',
        answer:
          'Yes. Our convergence engineering team builds certified API and event-driven connectors to map external telemetric anomalies into standard SAP Plant Maintenance (PM) and asset management modules.',
      },
    ],
    seo: {
      metaTitle: 'SAP & ERP Services | Intelligent Enterprise Systems | JSJ INFOTECH',
      metaDescription:
        'End-to-end SAP S/4HANA implementation, ABAP development, BASIS administration, and IoT-driven ERP integration for enterprise and public sector.',
      keywords: ['SAP S/4HANA India', 'SAP Implementation', 'SAP ABAP BASIS', 'ERP Modernization', 'SAP IoT Integration'],
    },
  },

  'artificial-intelligence': {
    slug: 'artificial-intelligence',
    title: 'Artificial Intelligence & Predictive Analytics',
    eyebrow: 'Intelligence Layer',
    tagline: 'Deploying neural intelligence, computer vision, and predictive twins at scale.',
    overview:
      'JSJ INFOTECH develops custom machine learning models, computer vision systems, and automated predictive analytics that bridge digital infrastructure and physical reality. We build models that run at the edge on sensor gateways and in secure cloud clouds, turning disparate data streams into proactive automated actions.',
    autonomousCoreRole:
      'The cognitive brain of the Autonomous Core. The AI layer continuously ingests telemetry from drones, HVAC units, server clusters, and ERP systems to predict failures before they happen, detect structural anomalies, and trigger automated remediations.',
    architecturalLayer: 'Intelligence',
    keyCapabilities: [
      {
        title: 'Computer Vision & Visual Defect Analytics',
        description:
          'High-throughput computer vision models for aerial thermal inspection, structural crack segmentation, and automated object recognition.',
        tags: ['Computer Vision', 'Thermal Imaging', 'YOLO/Segment Anything', 'Edge AI'],
      },
      {
        title: 'Predictive Maintenance & Anomaly Detection',
        description:
          'Time-series forecasting algorithms that detect subtle vibrational, thermal, and electrical deviations in facility equipment weeks before mechanical breakdown.',
        tags: ['Time Series', 'Predictive Maintenance', 'IoT Machine Learning', 'Anomaly Detection'],
      },
      {
        title: 'Digital Twins & Operational Simulation',
        description:
          'Real-time digital representations of government physical facilities and enterprise server infrastructure for scenario testing and energy optimisation.',
        tags: ['Digital Twins', 'Telemetry Ingestion', 'Scenario Modeling', 'Simulation'],
      },
      {
        title: 'Enterprise Document Intelligence & RAG',
        description:
          'Air-gapped, zero-trust retrieval-augmented generation systems that securely index enterprise records, blueprints, and standard operating procedures.',
        tags: ['Enterprise RAG', 'Private LLMs', 'OCR', 'Sovereign AI'],
      },
    ],
    useCases: [
      {
        title: 'Public Asset Condition Telemetry',
        description:
          'Real-time automated scoring of civic structures, bridges, and public HVAC plants to forecast municipal expenditure and eliminate emergency shutdowns.',
        target: 'Government',
      },
      {
        title: 'Enterprise Energy Consumption Optimization',
        description:
          'Self-adjusting cooling and compute schedules for enterprise data centers and corporate campuses that cut electricity waste by 20-30%.',
        target: 'Enterprise',
      },
    ],
    techStack: ['Python', 'PyTorch', 'TensorRT', 'OpenCV', 'LangChain / LlamaIndex', 'Milvus / Chroma Vector DB', 'ONNX Runtime Edge'],
    faqs: [
      {
        question: 'Can JSJ deploy AI models in air-gapped or sensitive government environments?',
        answer:
          'Yes. All our AI models, vector stores, and inference engines can be compiled and deployed completely on-premise or within sovereign private clouds without external Internet egress.',
      },
      {
        question: 'How do you ensure AI accuracy for physical asset inspections?',
        answer:
          'We employ human-in-the-loop validation frameworks, domain-specific labeled training sets, and cross-verification using both thermal and high-resolution optical telemetry.',
      },
    ],
    seo: {
      metaTitle: 'AI Innovations & Predictive Intelligence | JSJ INFOTECH',
      metaDescription:
        'Enterprise AI solutions, predictive maintenance, computer vision for drone inspections, and private sovereign neural architectures.',
      keywords: ['Enterprise AI India', 'Predictive Maintenance AI', 'Computer Vision Infrastructure', 'Digital Twins Government', 'Sovereign AI'],
    },
  },

  cybersecurity: {
    slug: 'cybersecurity',
    title: 'Cybersecurity & Infrastructure Hardening',
    eyebrow: 'Resilience & Compliance',
    tagline: 'Zero-trust architecture, cyber-physical defense, and continuous proactive hardening.',
    overview:
      'As physical infrastructure and enterprise systems converge, cyber threats extend beyond servers into smart facilities, industrial controllers, and aerial telemetry. JSJ INFOTECH delivers holistic, defense-in-depth cybersecurity engineered for mission-critical government installations and enterprise platforms.',
    autonomousCoreRole:
      'The immune system of the Autonomous Core. Continuously scans network boundaries, IoT communication brokers, and ERP transactions for anomalous behavior, automatically isolating compromised vectors before damage can propagate.',
    architecturalLayer: 'Enterprise',
    keyCapabilities: [
      {
        title: 'Zero-Trust Architecture (ZTA) Implementation',
        description:
          'End-to-end principle of least privilege, strict micro-segmentation, continuous identity verification, and multi-layered cryptographic enforcement.',
        tags: ['Zero Trust', 'Micro-segmentation', 'IAM / MFA', 'Software Defined Perimeter'],
      },
      {
        title: 'Cyber-Physical & OT/IoT Security',
        description:
          'Hardening industrial protocols (BACnet, Modbus, MQTT), HVAC controllers, and drone telemetry against interception, spoofing, and remote intrusion.',
        tags: ['OT Security', 'SCADA / ICS', 'MQTT Encryption', 'Firmware Auditing'],
      },
      {
        title: 'Continuous Vulnerability Management & Red Teaming',
        description:
          'Automated attack-surface monitoring, adversary emulation, authenticated code auditing, and compliance verification against national standards.',
        tags: ['Penetration Testing', 'Red Teaming', 'Vulnerability Management', 'CERT-In Baseline'],
      },
      {
        title: 'Cloud & Sovereign Data Governance',
        description:
          'Data residency enforcement, encrypted backup immutability, and compliance alignment with India DPDP Act 2025 and ISO 27001 standards.',
        tags: ['DPDP 2025 Compliance', 'Data Sovereignty', 'Immutable Backups', 'Post-Quantum Crypto'],
      },
    ],
    useCases: [
      {
        title: 'Government Facility Network & BMS Isolation',
        description:
          'Architecting air-gapped security zones isolating public access networks from building management systems, HVAC controllers, and surveillance grids.',
        target: 'Government',
      },
      {
        title: 'Enterprise ERP & API Gateway Defense',
        description:
          'Protecting SAP core endpoints, automated payment rails, and customer software platforms with behavioral rate limiting and web application firewalls.',
        target: 'Enterprise',
      },
    ],
    techStack: ['WireGuard', 'HashiCorp Vault', 'Wazuh SIEM', 'Suricata IDS/IPS', 'OpenSCAP', 'Cloudflare Zero Trust', 'Trivy'],
    faqs: [
      {
        question: 'Does JSJ help organizations comply with India DPDP Act 2025?',
        answer:
          'Yes. We provide complete technical data audit, consent management architecture, pseudonymization pipelines, and breach notification mechanisms compliant with notified DPDP rules.',
      },
      {
        question: 'How do you secure field IoT sensors and drone links?',
        answer:
          'All sensor telemetry utilizes TLS 1.3 mutual authentication (mTLS) with hardware-rooted keys (TPM / Secure Elements) and encrypted flight command links.',
      },
    ],
    seo: {
      metaTitle: 'Cybersecurity & OT Defense Services | JSJ INFOTECH',
      metaDescription:
        'Zero-trust security architecture, cyber-physical OT/IoT defense, sovereign compliance, and penetration testing for government and enterprise.',
      keywords: ['Cybersecurity India', 'Zero Trust Enterprise', 'OT IoT Security', 'DPDP Compliance 2025', 'Government Infrastructure Hardening'],
    },
  },

  'software-development': {
    slug: 'software-development',
    title: 'Custom Software Engineering',
    eyebrow: 'Built for What\'s Next',
    tagline: 'Modular, API-first software architectures designed to absorb emerging technologies.',
    overview:
      'JSJ INFOTECH builds high-performance enterprise platforms, custom operational portals, and distributed microservices. Engineered with modern cloud-native patterns, our software architectures are modular by design—ready to ingest real-time AI capabilities, automate internal workflows, and scale effortlessly.',
    autonomousCoreRole:
      'The operational interface of the Autonomous Core. Connects human operators, mobile field technicians, and executive leadership to real-time analytics, automated controls, and cross-platform workflows.',
    architecturalLayer: 'Enterprise',
    keyCapabilities: [
      {
        title: 'Cloud-Native Distributed Applications',
        description:
          'Event-driven microservices engineered with containerized workflows, resilient messaging queues, and sub-100ms response targets.',
        tags: ['Next.js', 'Go / Node.js', 'PostgreSQL', 'Kafka / Redis', 'Docker / Kubernetes'],
      },
      {
        title: 'Industrial & Facility Management Portals',
        description:
          'Bespoke web and mobile dashboards for dispatching maintenance crews, tracking real-time HVAC health, and managing AMC asset life cycles.',
        tags: ['Field Tech Apps', 'BMS Dashboards', 'Work Order Automation', 'Offline-First PWA'],
      },
      {
        title: 'Enterprise Integration & API Gateways',
        description:
          'Secure high-throughput API gateways unifying legacy database systems, modern SaaS applications, and physical telemetric data streams.',
        tags: ['GraphQL', 'RESTful APIs', 'gRPC', 'API Gateway', 'Zero-Downtime Releases'],
      },
      {
        title: 'Modern UI/UX & High-Performance Frontends',
        description:
          'Accessible, keyboard-navigable, and data-dense dashboards that empower operators to visualize complex multi-site telemetry with clarity.',
        tags: ['React 19', 'Tailwind CSS', 'TypeScript', 'WCAG 2.2 AA', 'Realtime WebSockets'],
      },
    ],
    useCases: [
      {
        title: 'Statewide Government Infrastructure AMC Platform',
        description:
          'A centralized portal managing thousands of facility maintenance requests, engineer geo-tracking, SLA countdowns, and automated billing verification.',
        target: 'Government',
      },
      {
        title: 'Multi-Tenant Industrial Logistics Engine',
        description:
          'Custom software connecting procurement, fleet tracking, and automated SAP inventory reconciliations for high-throughput manufacturing plants.',
        target: 'Enterprise',
      },
    ],
    techStack: ['TypeScript', 'Next.js 16', 'React 19', 'Go', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'Tailwind CSS'],
    faqs: [
      {
        question: 'Do you build bespoke solutions or resell third-party software?',
        answer:
          'We engineer bespoke, IP-clean software tailored strictly to our clients’ operational logic, while ensuring seamless integration with standard enterprise platforms like SAP.',
      },
      {
        question: 'How do you guarantee long-term software maintainability?',
        answer:
          'We enforce strict static typing, comprehensive automated test suites, clean architectural layering, and exhaustive documentation to avoid vendor lock-in.',
      },
    ],
    seo: {
      metaTitle: 'Custom Software Engineering | Enterprise Cloud Applications | JSJ INFOTECH',
      metaDescription:
        'Custom enterprise software engineering, cloud-native architectures, API gateways, and industrial facility portals for government and corporate clients.',
      keywords: ['Enterprise Software India', 'Custom App Development', 'Next.js Enterprise', 'Cloud Native Development', 'Industrial Software Systems'],
    },
  },

  'digital-it': {
    slug: 'digital-it',
    title: 'IT Projects & Consulting',
    eyebrow: 'Future-Ready Infrastructure',
    tagline: 'Architecting resilient digital foundations that adapt as technology evolves.',
    overview:
      'JSJ INFOTECH delivers comprehensive IT consulting, data center modernization, and managed infrastructure services. We design systems engineered for continuous AI workloads, high-concurrency civic transactions, and uninterrupted operations.',
    autonomousCoreRole:
      'The physical and virtual computing fabric powering the Autonomous Core. Provides high-bandwidth, resilient, and fault-tolerant compute, storage, and networking across edge gateways and centralized clouds.',
    architecturalLayer: 'Enterprise',
    keyCapabilities: [
      {
        title: 'End-to-End IT Project Delivery',
        description:
          'Turnkey execution from feasibility analysis and procurement through deployment, commissioning, and continuous SLA-backed operations.',
        tags: ['Turnkey Delivery', 'Vendor Agnostic', 'Milestone Governance', 'SLA Assurance'],
      },
      {
        title: 'Hybrid & Multi-Cloud Infrastructure',
        description:
          'Resilient infrastructure strategies balancing on-premise sovereignty with cloud elasticity, optimized for AI model inference and big data pipelines.',
        tags: ['AWS / Azure / Sovereign Cloud', 'Hybrid Cloud', 'Cost Optimization', 'Terraform IaC'],
      },
      {
        title: 'Automated IT Operations (AIOps)',
        description:
          'Self-healing infrastructure monitoring that detects memory leaks, network throttling, and disk saturation, executing automated triage scripts.',
        tags: ['AIOps', 'Self-Healing Systems', 'Prometheus / Grafana', 'Automated Remediation'],
      },
      {
        title: 'Government Digitization Advisory',
        description:
          'Strategic roadmapping for public sector departments migrating legacy paper and siloed systems into unified digital e-governance workflows.',
        tags: ['Digital India Advisory', 'Process Re-engineering', 'Change Management', 'Citizen Portals'],
      },
    ],
    useCases: [
      {
        title: 'Departmental E-Governance Digitization',
        description:
          'Transitioning legacy departmental archives into searchable, encrypted digital repositories with secure multi-tier administrative approval workflows.',
        target: 'Government',
      },
      {
        title: 'Enterprise Server Migration & Consolidation',
        description:
          'Migrating fragmented regional office servers into unified hybrid private cloud clusters with automated failover and 99.99% uptime SLAs.',
        target: 'Enterprise',
      },
    ],
    techStack: ['Linux Enterprise (RHEL/Debian)', 'Kubernetes', 'Terraform', 'Prometheus', 'Grafana', 'Proxmox / VMware', 'Cisco / Fortinet Networking'],
    faqs: [
      {
        question: 'What size IT projects does JSJ handle?',
        answer:
          'We execute projects ranging from multi-site institutional server rollouts to statewide departmental digital transformation initiatives.',
      },
      {
        question: 'How do you handle hardware obsolescence?',
        answer:
          'We specify software-defined infrastructure (SDI) and open standards architectures that decouple operational software from underlying physical silicon.',
      },
    ],
    seo: {
      metaTitle: 'IT Projects & Consulting | Future-Ready Infrastructure | JSJ INFOTECH',
      metaDescription:
        'Turnkey IT consulting, hybrid cloud deployments, AIOps self-healing operations, and public sector digitization advisory from JSJ INFOTECH.',
      keywords: ['IT Consulting India', 'AIOps Infrastructure', 'Government Digitisation Services', 'Hybrid Cloud Architecture', 'Turnkey IT Projects'],
    },
  },

  'drone-technology': {
    slug: 'drone-technology',
    title: 'Autonomous Drone Technology',
    eyebrow: 'Autonomous Data Capture',
    tagline: 'Moving from one-off surveys toward continuous, AI-analyzed aerial intelligence.',
    overview:
      'JSJ INFOTECH harnesses cutting-edge UAV hardware and proprietary computer vision analytics to transform physical surveys into autonomous data streams. From public infrastructure inspections and high-precision mapping to agricultural monitoring, our drone solutions deliver sub-centimeter spatial accuracy and real-time defect alerts.',
    autonomousCoreRole:
      'The aerial sensory extension of the Autonomous Core. Drones act as mobile edge sensors that collect visual, thermal, and spatial photogrammetry, automatically feeding high-resolution data into our AI analytics and SAP maintenance pipelines.',
    architecturalLayer: 'Physical',
    keyCapabilities: [
      {
        title: 'High-Precision Aerial Survey & 3D Photogrammetry',
        description:
          'Centimeter-level topographic surveying, LiDAR point clouds, digital surface models (DSM), and GIS-ready orthomosaics for master planning.',
        tags: ['LiDAR', 'Photogrammetry', 'GIS Orthomosaics', 'Sub-Centimeter RTK'],
      },
      {
        title: 'Infrastructure & Building Envelope Inspection',
        description:
          'Autonomous flight paths inspecting bridges, high-rise facades, power transmission towers, and rooftop solar/HVAC installations.',
        tags: ['Thermal Inspection', 'Crack Detection', 'Solar Telemetry', 'Tower Audits'],
      },
      {
        title: 'Automated AI Defect Classification',
        description:
          'Immediate processing of captured aerial imagery through neural vision pipelines to detect structural rust, micro-fractures, and water pooling.',
        tags: ['Edge Vision', 'Anomaly Flagging', 'Instant Heatmaps', 'Automated Reports'],
      },
      {
        title: 'Roadmap Toward Fleet Autonomy & Swarms',
        description:
          'Pioneering automated docking station deployments and synchronized multi-drone patrol algorithms for continuous perimeter security.',
        tags: ['Drone-in-a-Box', 'Swarm Coordination', 'Automated Recharging', 'BVLOS Readiness'],
      },
    ],
    useCases: [
      {
        title: 'Municipal Asset & Encroachment Auditing',
        description:
          'Periodic autonomous drone flyovers of public land reserves and highway corridors, automatically detecting unauthorized construction or environmental degradation.',
        target: 'Government',
      },
      {
        title: 'Industrial Complex Roof & Thermal Audits',
        description:
          'High-resolution thermal scanning of sprawling commercial manufacturing plants to pinpoint heat leaks, insulation failures, and electrical junction hazards.',
        target: 'Enterprise',
      },
    ],
    techStack: ['RTK / PPK GPS', 'DJI Enterprise SDK', 'Pix4D / WebODM', 'Thermal FLIR Sensors', 'YOLO Defect Models', 'GIS QGIS / ArcGIS'],
    faqs: [
      {
        question: 'Are JSJ drone operations compliant with Directorate General of Civil Aviation (DGCA) regulations?',
        answer:
          'Yes. All our flights are conducted by certified remote pilots adhering to DigitalSky permissions, designated airspace zones, and safety protocols.',
      },
      {
        question: 'Can drone inspection data automatically generate repair tickets?',
        answer:
          'Yes. When the AI model flags an anomaly exceeding severity thresholds, it directly triggers an API event creating a maintenance ticket in our software portal or SAP system.',
      },
    ],
    seo: {
      metaTitle: 'Autonomous Drone Technology & Aerial AI Analytics | JSJ INFOTECH',
      metaDescription:
        'High-precision aerial mapping, LiDAR surveying, infrastructure drone inspections, and AI thermal analytics for enterprise and government.',
      keywords: ['Drone Inspection India', 'Aerial Survey LiDAR', 'Drone Infrastructure AI', 'Autonomous Drone Fleet', 'Thermal Drone Audit'],
    },
  },

  'smart-infrastructure': {
    slug: 'smart-infrastructure',
    title: 'Smart Infrastructure & HVAC AMC',
    eyebrow: 'Physical Systems & Facilities',
    tagline: 'Converting legacy facility operations into connected, predictive, and energy-efficient environments.',
    overview:
      'JSJ INFOTECH manages large-scale government and commercial infrastructure with an engineering-first mindset. Specialising in comprehensive HVAC Annual Maintenance Contracts (AMC) and Building Management Systems (BMS), we integrate IoT sensors and predictive algorithms to eliminate catastrophic equipment failure and optimize power consumption.',
    autonomousCoreRole:
      'The foundational physical layer of the Autonomous Core. Transforms heavy electromechanical assets (chillers, air handling units, pumps) into live data generators that report on their own health, cooling efficiency, and servicing requirements.',
    architecturalLayer: 'Physical',
    keyCapabilities: [
      {
        title: 'Comprehensive HVAC Annual Maintenance Contracts (AMC)',
        description:
          'Full-scope engineering maintenance for central chiller plants, VRV/VRF systems, ducting networks, and precision air conditioning in critical facilities.',
        tags: ['Chiller Overhauls', 'VRV / VRF Systems', 'Air Quality Auditing', '24/7 Rapid Response'],
      },
      {
        title: 'IoT Telemetry & Building Automation',
        description:
          'Retrofitting smart vibration, current, and temperature transducers onto existing mechanical systems for continuous real-time telemetry streaming.',
        tags: ['Modbus / BACnet', 'IoT Gateways', 'Current Transducers', 'Real-time BMS'],
      },
      {
        title: 'Predictive Energy Analytics',
        description:
          'Dynamic setpoint optimization algorithms that adjust compressor loads in response to outdoor ambient temperature and room occupancy patterns.',
        tags: ['Energy Optimization', 'Peak Shaving', 'Carbon Reduction', 'Coefficient of Performance (COP)'],
      },
      {
        title: 'Government Facility Regulatory Compliance',
        description:
          'Maintaining public sector secretariats, hospitals, and educational institutions in full alignment with national safety and energy conservation codes.',
        tags: ['Govt AMC Standards', 'Clean Room HVAC', 'Fire & Life Safety Sync', 'Energy Audits'],
      },
    ],
    useCases: [
      {
        title: 'State Government Administrative Complexes',
        description:
          'Ensuring 100% cooling uptime across sprawling government headquarters, managing preventive maintenance schedules with zero disruption to state administration.',
        target: 'Government',
      },
      {
        title: 'Enterprise Data Center Precision Cooling',
        description:
          'Redundant precision HVAC maintenance with automated failure switchover and microsecond temperature alerts to protect mission-critical server racks.',
        target: 'Enterprise',
      },
    ],
    techStack: ['BACnet/IP', 'Modbus RTU', 'MQTT Telemetry', 'Siemens / Honeywell Controllers', 'InfluxDB Time Series', 'Grafana IoT'],
    faqs: [
      {
        question: 'What sets JSJ apart from traditional HVAC AMC vendors?',
        answer:
          'Traditional vendors only show up after equipment breaks. JSJ combines certified mechanical engineers with IoT telemetry and AI predictive models to fix anomalies before failures cause operational halts.',
      },
      {
        question: 'Can you retrofit existing older HVAC installations with smart sensors?',
        answer:
          'Yes. We non-intrusively install clamp-on current transducers, surface thermistors, and acoustic vibration pods without voiding existing manufacturer warranties.',
      },
    ],
    seo: {
      metaTitle: 'HVAC AMC & Smart Infrastructure Management | JSJ INFOTECH',
      metaDescription:
        'Large-scale government HVAC AMC, building management systems (BMS), IoT telemetry, and predictive facility maintenance.',
      keywords: ['HVAC AMC Government India', 'Smart Infrastructure Facility', 'Building Management Systems BMS', 'Predictive HVAC Maintenance', 'Central Chiller AMC'],
    },
  },

  'digital-content': {
    slug: 'digital-content',
    title: 'Digital Content & Technical Media',
    eyebrow: 'Documentation & Communications',
    tagline: 'Bridging engineering precision and executive clarity through high-impact technical content.',
    overview:
      'Modern technology ecosystems require structured knowledge dissemination, interactive operational guides, and compelling executive communication. JSJ INFOTECH creates technical documentation platforms, interactive training media, and digital publishing pipelines that turn complex engineering and government initiatives into accessible knowledge.',
    autonomousCoreRole:
      'The communication fabric of the Autonomous Core. Transforms raw telemetry and complex system architectures into structured operating manuals, compliance reports, interactive simulations, and executive intelligence briefings.',
    architecturalLayer: 'Cross-Layer',
    keyCapabilities: [
      {
        title: 'Interactive Technical Documentation & Portals',
        description:
          'Doc-as-code documentation portals, API developer hubs, and interactive digital standard operating procedure (SOP) repositories.',
        tags: ['Docs-as-Code', 'Interactive SOPs', 'Markdown / MDX', 'Searchable Knowledgebases'],
      },
      {
        title: 'Operational Training & E-Learning Modules',
        description:
          'Interactive multimedia training programs for facility engineers, drone pilots, and enterprise ERP users with step-by-step simulations.',
        tags: ['E-Learning Systems', 'Video Simulations', 'Engineering Training', 'Interactive Quizzes'],
      },
      {
        title: '3D Technical Visualizations & Exploded Diagrams',
        description:
          'Interactive WebGL/SVG architectural schematics, drone flight corridors, and mechanical cross-sections for stakeholder alignment.',
        tags: ['3D CAD Rendering', 'Technical Schematics', 'Exploded Views', 'Architectural Diagrams'],
      },
      {
        title: 'Public Sector Program Communications',
        description:
          'Accessible digital communication kits, infographic reports, and citizen-facing explanatory materials for government technology rollouts.',
        tags: ['Citizen Outreach', 'Infographic Design', 'Multilingual Publishing', 'Accessibility Standards'],
      },
    ],
    useCases: [
      {
        title: 'Standard Operating Procedures for Civic Facilities',
        description:
          'Developing interactive tablet-accessible maintenance guides for on-site facility staff across municipal properties.',
        target: 'Government',
      },
      {
        title: 'Enterprise Software User Onboarding Curriculum',
        description:
          'Comprehensive digital training portals reducing user error during statewide enterprise software and SAP rollouts.',
        target: 'Enterprise',
      },
    ],
    techStack: ['MDX / Next.js', 'Figma', 'Blender 3D', 'Remotion Video', 'WCAG Accessible Media', 'Structured JSON-LD'],
    faqs: [
      {
        question: 'Why does a technology company offer digital content development?',
        answer:
          'Complex technological infrastructure fails when human operators lack clear, accurate documentation. We integrate content directly with engineering blueprints to ensure flawless adoption.',
      },
      {
        question: 'Are the materials accessible for diverse user groups?',
        answer:
          'All digital content complies with WCAG 2.2 AA accessibility guidelines, screen readers, and supports responsive rendering across field mobile devices.',
      },
    ],
    seo: {
      metaTitle: 'Digital Content & Technical Media Development | JSJ INFOTECH',
      metaDescription:
        'Interactive technical documentation, 3D engineering visualizations, e-learning training modules, and public sector communications.',
      keywords: ['Technical Content Development', 'Interactive SOPs', 'Engineering Media India', 'E-Learning Technology Systems', 'Technical Documentation Portals'],
    },
  },

  'innovation-rnd': {
    slug: 'innovation-rnd',
    title: 'R&D & New Technology Development',
    eyebrow: 'Innovation Frontier',
    tagline: 'Pioneering cross-vertical integration to define the 2030 autonomous horizon.',
    overview:
      'JSJ INFOTECH maintains an active Applied Research & Development group dedicated to testing and validating the next wave of converged technology. We build proofs-of-concept uniting autonomous drone swarms, edge neural accelerators, smart city telemetry, and self-directing software workflows.',
    autonomousCoreRole:
      'The innovation laboratory where the Autonomous Core evolves. Discovers, benchmarks, and hardens novel algorithms, sensor protocols, and robotic platforms before they transition into commercial production.',
    architecturalLayer: 'Intelligence',
    keyCapabilities: [
      {
        title: 'Cross-Vertical Telemetry Fusion',
        description:
          'Researching multi-modal sensor fusion algorithms that combine aerial drone thermal imagery with ground-level HVAC vibration metrics.',
        tags: ['Sensor Fusion', 'Multi-Modal Data', 'Cross-Domain Analytics', 'Kalman Filters'],
      },
      {
        title: 'Autonomous Swarm Robotics & Edge Coordination',
        description:
          'Testing decentralized mesh communication protocols for coordinated drone fleets operating in GPS-denied or degraded environments.',
        tags: ['Swarm Algorithms', 'Mesh Networking', 'GPS-Denied Navigation', 'Edge Compute'],
      },
      {
        title: 'Smart City & Connected Facility Pilots',
        description:
          'Prototyping next-generation urban monitoring fabrics integrating smart lighting, environmental air quality sensors, and automated energy management.',
        tags: ['Smart Cities', 'Urban IoT', 'Low-Power WAN (LoRaWAN)', 'Autonomous Micro-Grids'],
      },
      {
        title: 'Rapid Prototyping for Government Innovation Mandates',
        description:
          'Accelerated 8-week proof-of-concept development sprints validating feasibility, security, and economic ROI for public initiatives.',
        tags: ['Rapid Prototyping', 'GovTech Sandboxes', 'Proof of Concept', 'Technology Transfer'],
      },
    ],
    useCases: [
      {
        title: 'Autonomous Smart Campus Pilot',
        description:
          'Deploying an integrated testbed across an institutional campus linking building chillers, autonomous security drones, and centralized AI alerts.',
        target: 'Government',
      },
      {
        title: 'Self-Healing Enterprise Micro-Grid',
        description:
          'Validating AI-controlled switchgear that dynamically routes battery storage, solar generation, and grid power according to real-time industrial tariffs.',
        target: 'Enterprise',
      },
    ],
    techStack: ['Rust', 'Python', 'ROS2 (Robot Operating System)', 'LoRaWAN', 'Jetson Orin Nano Edge', 'WebAssembly', 'ZeroMQ'],
    faqs: [
      {
        question: 'How does JSJ select R&D initiatives?',
        answer:
          'Projects must directly advance our 2030 roadmap toward full cross-vertical autonomy, solving tangible operational bottlenecks for our clients.',
      },
      {
        question: 'Can enterprise clients co-sponsor pilot development?',
        answer:
          'Yes. We offer joint innovation sandboxes where clients provide domain test environments and JSJ provides engineering and algorithmic talent.',
      },
    ],
    seo: {
      metaTitle: 'R&D & New Technology Development | Autonomous Horizon | JSJ INFOTECH',
      metaDescription:
        'Applied R&D in autonomous drone swarms, cross-vertical sensor fusion, smart city pilots, and edge neural processing.',
      keywords: ['Technology R&D India', 'Autonomous Drone Swarms', 'Smart City IoT Pilots', 'Applied AI Research', 'Edge Robotics Development'],
    },
  },
};
