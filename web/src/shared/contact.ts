import { z } from 'zod';

export const ServiceInterestEnum = z.enum([
  'digital-it',
  'sap-erp',
  'artificial-intelligence',
  'cybersecurity',
  'software-development',
  'digital-content',
  'drone-technology',
  'project-management',
  'government-technology',
  'other',
]);

export type ServiceInterest = z.infer<typeof ServiceInterestEnum>;

export const ContactFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, { message: 'Full name must be at least 2 characters.' })
    .max(100, { message: 'Full name must not exceed 100 characters.' }),
  workEmail: z
    .string()
    .trim()
    .email({ message: 'Please enter a valid work email address.' }),
  phone: z
    .string()
    .trim()
    .min(7, { message: 'Phone number must be at least 7 digits.' })
    .max(20, { message: 'Phone number is too long.' })
    .regex(/^[+0-9\s\-()]+$/, { message: 'Phone number contains invalid characters.' }),
  company: z
    .string()
    .trim()
    .min(2, { message: 'Company or organization name is required.' })
    .max(120, { message: 'Company name too long.' }),
  interest: ServiceInterestEnum,
  message: z
    .string()
    .trim()
    .min(15, { message: 'Please add a few words about what you need (15 characters minimum).' })
    .max(2500, { message: 'Message cannot exceed 2500 characters.' }),
  dpdpConsent: z
    .boolean()
    .refine((val: boolean) => val === true, {
      message: 'Please tick the box to confirm we may use these details to respond.',
    }),
  turnstileToken: z.string().optional(),
  /** Honeypot; must stay empty. */
  website: z.string().max(0).optional(),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;

export interface ContactActionResponse {
  success: boolean;
  message: string;
  fieldErrors?: Partial<Record<keyof ContactFormData, string[]>>;
  referenceId?: string;
  /** True only when an email was actually dispatched. */
  delivered?: boolean;
}
