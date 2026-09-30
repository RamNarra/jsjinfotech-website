import { IndustryPageContent } from './types';

export const INDUSTRIES_DATA: Record<string, IndustryPageContent> = {
  government: {
    slug: 'government',
    title: 'Government & Public Infrastructure',
    eyebrow: 'Sovereign Scale & Critical Asset Operations',
    tagline: 'Digitising public systems, maintaining vital facilities, and securing civic assets through autonomous intelligence.',
    summary:
      'JSJ INFOTECH partners with state departments, civic authorities, and public institutions to modernise physical facilities and administrative platforms. From 24/7 HVAC AMC maintenance across administrative secretariats to precision drone surveys of public land reserves and zero-trust sovereign cybersecurity, we provide a unified engineering foundation built for public accountability.',
    mandates: [
      'Digital India E-Governance Alignment',
      'Continuous Facility Uptime & Safety AMC',
      'Air-Gapped Sovereign Data Security & DPDP Compliance',
      'Aerial Infrastructure & Encroachment Auditing',
    ],
    solutionOfferings: [
      {
        title: 'Smart Infrastructure & HVAC AMC for Public Complexes',
        description:
          'Dedicated mechanical and electrical maintenance teams managing central chillers, VRV systems, and building automation across government secretariats, hospitals, and judicial facilities.',
        verticalLink: '/solutions/smart-infrastructure',
      },
      {
        title: 'Autonomous Drone Survey & Civic Asset Audits',
        description:
          'DGCA-compliant UAV mapping, flood basin modeling, highway right-of-way surveys, and automated encroachment detection using aerial thermal and optical sensors.',
        verticalLink: '/solutions/drone-technology',
      },
      {
        title: 'Sovereign IT Infrastructure & E-Governance Consulting',
        description:
          'Designing resilient hybrid cloud infrastructure, digitized document repositories, and self-healing AIOps monitoring for government departments.',
        verticalLink: '/solutions/digital-it',
      },
      {
        title: 'Zero-Trust Cybersecurity & Critical OT Protection',
        description:
          'Securing public sector networks, isolating building management controls, and ensuring strict compliance with Indian cybersecurity advisories and DPDP 2025.',
        verticalLink: '/solutions/cybersecurity',
      },
    ],
    casePoints: [
      {
        challenge: 'Preventing catastrophic cooling failure during peak summer in high-occupancy state administrative headquarters.',
        convergenceSolution: 'Installed non-invasive IoT current and vibration pods on central chiller compressors; predictive algorithms detect refrigerant leaks and bearing wear 3 weeks prior to breakdown.',
        futureHorizon: 'Autonomous closed-loop facility management where cooling systems adjust dynamically based on civic footfall and outdoor temperature.',
      },
      {
        challenge: 'Tracking encroachment and terrain erosion along hundreds of kilometers of public infrastructure corridors.',
        convergenceSolution: 'Scheduled high-precision drone flights capturing GIS orthomosaics, processed via computer vision models that automatically flag newly erected unauthorized structures.',
        futureHorizon: 'Autonomous drone-in-a-box stations deployed along transport corridors executing scheduled daily audits without pilot dispatch.',
      },
    ],
    seo: {
      metaTitle: 'Government & Public Sector Technology Solutions | JSJ INFOTECH',
      metaDescription:
        'Sovereign IT consulting, government facility HVAC AMC, autonomous drone asset surveys, and zero-trust cybersecurity for public institutions.',
      keywords: ['Government Technology India', 'Public Sector IT Consulting', 'Government HVAC AMC', 'Drone Survey Government', 'Sovereign Cybersecurity'],
    },
  },

  enterprise: {
    slug: 'enterprise',
    title: 'Enterprise & Industrial Systems',
    eyebrow: 'Connected Operations & Global Scale',
    tagline: 'Modernising enterprise ERP, unifying facility telemetry, and accelerating autonomous intelligence.',
    summary:
      'Large enterprises face fragmented silos between corporate ERP, cloud software, physical factory infrastructure, and corporate facilities. JSJ INFOTECH bridges these boundaries. We transform SAP landscapes, engineer bespoke cloud software, harden industrial networks, and integrate real-time sensor streams into one converged intelligence core.',
    mandates: [
      'SAP S/4HANA Modernisation & Clean Core Extensibility',
      'Industrial IoT Telemetry Ingestion into Core Business Logic',
      'Continuous Zero-Trust Security Across Hybrid Clouds & Plants',
      'Predictive Asset Life Cycle & Carbon Optimization',
    ],
    solutionOfferings: [
      {
        title: 'SAP S/4HANA Transformation & BTP Extensions',
        description:
          'Full-cycle advisory, brownfield ECC migration, advanced ABAP on HANA, BASIS administration, and clean-core side-by-side cloud developments.',
        verticalLink: '/solutions/sap-erp',
      },
      {
        title: 'Custom Software & API Integration Gateways',
        description:
          'High-throughput microservices, bespoke operational portals, and real-time integration middleware connecting field assets to executive dashboards.',
        verticalLink: '/solutions/software-development',
      },
      {
        title: 'Enterprise AI & Predictive Maintenance Engines',
        description:
          'Time-series machine learning models forecasting industrial machinery wear, cutting unplanned factory downtime, and optimizing corporate energy budgets.',
        verticalLink: '/solutions/artificial-intelligence',
      },
      {
        title: 'Enterprise Facility Precision HVAC & Energy Management',
        description:
          'Mission-critical precision cooling maintenance for enterprise data centers and corporate campuses, backed by 24/7 SLAs and automated failover.',
        verticalLink: '/solutions/smart-infrastructure',
      },
    ],
    casePoints: [
      {
        challenge: 'Synchronizing multi-factory equipment maintenance logs with corporate SAP enterprise asset management without manual latency.',
        convergenceSolution: 'Deployed edge IoT gateways that translate machine telemetry directly into standard SAP PM maintenance notifications and automated parts requisitions.',
        futureHorizon: 'Self-improving enterprise systems that adjust production scheduling dynamically based on machine health and component wear.',
      },
      {
        challenge: 'Securing distributed enterprise sites against ransomware and supply-chain network intrusion.',
        convergenceSolution: 'Implemented zero-trust microsegmentation, separating corporate workstations from manufacturing control networks and enforcing hardware-backed MFA.',
        futureHorizon: 'Autonomous threat neutralisation where anomalies trigger instant container isolation across multi-cloud clusters.',
      },
    ],
    seo: {
      metaTitle: 'Enterprise IT & Industrial Technology Solutions | JSJ INFOTECH',
      metaDescription:
        'SAP S/4HANA migration, custom enterprise software engineering, predictive AI, and critical infrastructure management for industrial leaders.',
      keywords: ['Enterprise IT India', 'SAP S4HANA Enterprise', 'Industrial AI Telemetry', 'Predictive Maintenance Manufacturing', 'Enterprise Infrastructure'],
    },
  },
};
