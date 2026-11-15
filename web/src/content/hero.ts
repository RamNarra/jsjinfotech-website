// Hero slides. Exact copy per SRS §6.3.
export type Slide = {
  id: string;
  headline: string;
  body: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
  visual: 'sap' | 'seven';
};

// Owner decision 2026-11-15: two slides only, rotating every 7 seconds.
export const slides: Slide[] = [
  {
    id: 's4',
    headline: 'One Technology Partner. Seven Integrated Verticals.',
    body: 'IT Projects & Consulting, SAP Solutions with SGN, AI Innovations, Drone Technology, Software Development, HVAC Government Projects, New Technology R&D.',
    primary: { label: 'View All Services', href: '/services' },
    secondary: { label: 'Request a Consultation', href: '/contact' },
    visual: 'seven',
  },
  {
    id: 's2',
    headline: 'Enterprise SAP Delivery. Powered by a Joint Partnership.',
    body: 'JSJ INFOTECH works with SGN Software Pvt. Ltd., its joint venture partner for SAP projects. SGN is an SAP Gold Partner, bringing SAP credentials and delivery expertise to the combined engagement.',
    primary: { label: 'Explore SAP Solutions', href: '/services/sap' },
    secondary: { label: 'Meet the Partnership', href: '/partnership' },
    visual: 'sap',
  },
];
