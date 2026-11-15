import { describe, expect, it } from 'vitest';
import { whoBringsWhat, clientGroups, sgnMetrics, sgn } from '../src/content/sap';
import { verticals } from '../src/content/verticals';
import { industries } from '../src/content/industries';
import { slides } from '../src/content/hero';
import { enquirySchema } from '../src/lib/enquiry-schema';

describe('content rules', () => {
  it('T-07: SAP Gold Partner never attributed to JSJ column', () => {
    for (const r of whoBringsWhat) expect(r.jsj).not.toMatch(/SAP Gold Partner/i);
  });
  it('seven verticals with unique slugs', () => {
    expect(verticals).toHaveLength(7);
    expect(new Set(verticals.map((v) => v.slug)).size).toBe(7);
  });
  it('T-10: 14 industries', () => expect(industries).toHaveLength(14));
  it('36 SGN clients in four groups', () => {
    expect(clientGroups).toHaveLength(4);
    expect(clientGroups.flatMap((g) => g.clients)).toHaveLength(36);
  });
  it('SGN metrics match profile', () => expect(sgnMetrics.map((m) => m.value)).toEqual([15, 250, 100, 75, 25, 16]));
  it('partner ID matches certificate', () => expect(sgn.partnerId).toBe('0001635021'));
  it('slide 2 keeps SGN attribution', () => expect(slides[1].body).toContain('SGN is an SAP Gold Partner'));
});

describe('enquiry schema', () => {
  const ok = { name: 'Asha Rao', company: 'Dept', email: 'a@b.in', country: 'India', service: 'AI Innovations', message: 'We need predictive maintenance for HVAC.', consent: true };
  it('accepts valid', () => expect(enquirySchema.safeParse(ok).success).toBe(true));
  it('rejects bad email', () => expect(enquirySchema.safeParse({ ...ok, email: 'x' }).success).toBe(false));
  it('requires consent', () => expect(enquirySchema.safeParse({ ...ok, consent: false }).success).toBe(false));
  it('rejects honeypot', () => expect(enquirySchema.safeParse({ ...ok, website: 'spam' }).success).toBe(false));
});
