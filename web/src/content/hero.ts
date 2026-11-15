// Hero slides. Exact copy per SRS §6.3.
export type Slide = {
  id: string;
  headline: string;
  body: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
  visual: 'network' | 'sap' | 'twin' | 'seven';
};

export const slides: Slide[] = [
  {
    id: 's1',
    headline: 'Intelligent Technology. Connected Enterprise.',
    body: 'JSJ INFOTECH brings enterprise IT, AI, software engineering and smart infrastructure together to help organizations modernize the systems that power business and public services.',
    primary: { label: 'Explore Our Capabilities', href: '/services' },
    secondary: { label: 'Talk to Our Team', href: '/contact' },
    visual: 'network',
  },
  {
    id: 's2',
    headline: 'Enterprise SAP Delivery. Powered by a Joint Partnership.',
    body: 'JSJ INFOTECH works with SGN Software Pvt. Ltd., its joint venture partner for SAP projects. SGN is an SAP Gold Partner, bringing SAP credentials and delivery expertise to the combined engagement.',
    primary: { label: 'Explore SAP Solutions', href: '/services/sap' },
    secondary: { label: 'Meet the Partnership', href: '/partnership' },
    visual: 'sap',
  },
  {
    id: 's3',
    headline: 'From Enterprise Intelligence to Smart Infrastructure.',
    body: 'Connect AI, computer vision, autonomous drone data, software and IoT-enabled infrastructure to create more informed, responsive operations.',
    primary: { label: 'Discover AI & Innovation', href: '/services/ai' },
    secondary: { label: 'Discuss a Project', href: '/contact' },
    visual: 'twin',
  },
  {
    id: 's4',
    headline: 'One Technology Partner. Seven Integrated Verticals.',
    body: 'IT Projects & Consulting, SAP Solutions with SGN, AI Innovations, Drone Technology, Software Development, HVAC Government Projects, New Technology R&D.',
    primary: { label: 'View All Services', href: '/services' },
    secondary: { label: 'Request a Consultation', href: '/contact' },
    visual: 'seven',
  },
];
