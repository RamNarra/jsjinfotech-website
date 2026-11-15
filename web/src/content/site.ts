// Company facts. Source: JSJ_INFOTECH_Corporate_Profile_SGN_SAP_Gold.pdf (page 10).
export const site = {
  name: 'JSJ INFOTECH',
  url: 'https://www.jsjinfotech.co.in',
  tagline: 'Autonomous by Design. IT, SAP, AI, Robotics and Smart Infrastructure.',
  description:
    'JSJ INFOTECH is a technology and engineering company in Hyderabad. Enterprise IT, SAP with SGN Software (SAP Gold Partner), AI, drones, software and government HVAC.',
  address: {
    street: 'Plot No.144, Rd Number 72, Jubilee Hills',
    city: 'Hyderabad',
    region: 'Telangana',
    postalCode: '500096',
    country: 'IN',
    full: 'Plot No.144, Rd Number 72, Jubilee Hills, Hyderabad, Telangana 500096',
  },
  phone: { display: '+91 89430 32965', tel: '+918943032965' },
  email: { enquiry: 'support@jsjinfotech.co.in', support: 'support@jsjinfotech.co.in' },
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Plot+No.144%2C+Rd+Number+72%2C+Jubilee+Hills%2C+Hyderabad%2C+Telangana+500096',
} as const;

export type NavItem = { label: string; href: string };

export const primaryNav: NavItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Partnership', href: '/partnership' },
  { label: 'Services', href: '/services' },
  { label: 'SAP', href: '/services/sap' },
  { label: 'Industries', href: '/industries' },
  { label: 'Insights', href: '/insights' },
  { label: 'Careers', href: '/careers' },
];
