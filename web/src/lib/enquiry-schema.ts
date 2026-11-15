import { z } from 'zod';
import { verticals } from '../content/verticals';

// Shared by client form and Cloudflare Pages Function (§8.3).
export const serviceOptions = [...verticals.map((v) => v.name), 'Other'] as const;

export const enquirySchema = z.object({
  name: z.string().trim().min(2, 'Enter your full name.').max(100),
  company: z.string().trim().min(2, 'Enter your organisation.').max(150),
  role: z.string().trim().max(100).optional().or(z.literal('')),
  email: z.email('Enter a valid email address.').max(200),
  phone: z.string().trim().max(30).regex(/^[+0-9 ()-]*$/, 'Use digits, spaces and + only.').optional().or(z.literal('')),
  country: z.string().trim().min(2, 'Enter your country.').max(80),
  service: z.enum(serviceOptions, { error: 'Choose a service.' }),
  message: z.string().trim().min(20, 'Tell us a little more (20 characters minimum).').max(4000),
  consent: z.literal(true, { error: 'Consent is required to send your enquiry.' }),
  website: z.string().max(0).optional(), // honeypot
});

export type Enquiry = z.infer<typeof enquirySchema>;
