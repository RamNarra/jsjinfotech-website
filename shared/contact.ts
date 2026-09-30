import { z } from 'zod';

export const ServiceInterestEnum = z.enum([
  'sap-erp',
  'artificial-intelligence',
  'cybersecurity',
  'software-development',
  'digital-it',
  'digital-content',
  'drone-technology',
  'smart-infrastructure',
  'innovation-rnd',
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
    .min(15, { message: 'Message must be at least 15 characters describing your initiative.' })
    .max(2500, { message: 'Message cannot exceed 2500 characters.' }),
  dpdpConsent: z
    .boolean()
    .refine((val: boolean) => val === true, {
      message: 'You must acknowledge the processing of submitted business information under DPDP guidelines.',
    }),
  turnstileToken: z.string().optional(),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;

export interface ContactActionResponse {
  success: boolean;
  message: string;
  fieldErrors?: Partial<Record<keyof ContactFormData, string[]>>;
  referenceId?: string;
}
