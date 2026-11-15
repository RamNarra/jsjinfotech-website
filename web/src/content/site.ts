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
  email: { enquiry: 'subhash@jsjinfotech.co.in', support: 'support@jsjinfotech.co.in' },
  // Public MCA / GST records (thecompanycheck.com, indiacos.com), checked 2026-11-15.
  // VERIFY: owner to confirm legal name, LLPIN, GSTIN and registered office before launch.
  legal: {
    name: 'JSJ Infotech LLP',
    llpin: 'ACN-9130',
    gstin: '36AAVFJ5969N1Z4',
    incorporated: '25 April 2025',
    registeredOffice: '6-3-1237/A 102, Renuka Enclave, Raj Bhavan Road, Somajiguda, Hyderabad, Telangana 500082',
  },
  mapUrl: 'https://www.openstreetmap.org/search?query=Road%20Number%2072%20Jubilee%20Hills%20Hyderabad',
} as const;

export type NavItem = { label: string; href: string };

export const primaryNav: NavItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Partnership', href: '/partnership' },
  { label: 'Services', href: '/services' },
  { label: 'SAP', href: '/services/sap' },
  { label: 'Industries', href: '/industries' },
  { label: 'Roadmap', href: '/roadmap' },
  { label: 'Insights', href: '/insights' },
  { label: 'Careers', href: '/careers' },
];
