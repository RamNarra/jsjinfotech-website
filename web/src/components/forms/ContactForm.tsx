'use client';

import React, { useState, useTransition } from 'react';
import { submitContactForm } from '@/app/actions/contact';
import { ContactActionResponse } from '@/shared';
import { CheckCircle2, AlertCircle, Send, Loader2 } from 'lucide-react';

const INTEREST_OPTIONS = [
  { value: 'digital-it', label: 'Digital & IT Consulting' },
  { value: 'sap-erp', label: 'SAP Implementation & Management' },
  { value: 'artificial-intelligence', label: 'AI & Intelligent Solutions' },
  { value: 'cybersecurity', label: 'Cybersecurity & Sovereign Defense' },
  { value: 'software-development', label: 'Software & Application Development' },
  { value: 'digital-content', label: 'Digital Content Development' },
  { value: 'drone-technology', label: 'Drone Technology Projects' },
  { value: 'project-management', label: 'Project Management & Execution' },
  { value: 'government-technology', label: 'Government Technology Projects' },
  { value: 'other', label: 'Comprehensive Multi-Vertical Initiative' },
];

export function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [response, setResponse] = useState<ContactActionResponse | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    startTransition(async () => {
      const res = await submitContactForm(null, formData);
      setResponse(res);
      if (res.success) {
        (event.target as HTMLFormElement).reset();
      }
    });
  };

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#DDE3EA] shadow-sm">
      {response?.success ? (
        <div className="p-8 rounded-xl bg-[#EBF8FF] border border-[#D1EFFF] text-center animate-in fade-in zoom-in-95">
          <div className="w-12 h-12 rounded-full bg-[#D1EFFF] text-[#0070F2] flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-[#12171C]">Inquiry Received Successfully</h3>
          <p className="mt-2 text-sm text-[#475E75] leading-relaxed max-w-md mx-auto">
            {response.message}
          </p>
          <div className="mt-6 pt-4 border-t border-[#D1EFFF] flex items-center justify-center gap-2">
            <span className="text-xs font-mono text-[#5B738B]">Tracking Reference:</span>
            <span className="text-xs font-mono font-bold text-[#0070F2] bg-white px-2.5 py-1 rounded border border-[#D1EFFF]">
              {response.referenceId}
            </span>
          </div>
          <button
            onClick={() => setResponse(null)}
            className="mt-6 inline-flex text-xs font-semibold text-[#0070F2] hover:text-[#0057D2] underline"
          >
            Send another inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {response && !response.success && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3 text-red-800 text-xs">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
              <div>
                <span className="font-semibold block">{response.message}</span>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-xs font-semibold text-[#12171C] mb-1.5">
                Full Name <span className="text-[#0070F2]">*</span>
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                placeholder="e.g. Subhash Sharma"
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#DDE3EA] bg-white text-sm text-[#12171C] placeholder:text-[#5B738B] focus:outline-none focus:ring-2 focus:ring-[#0070F2] focus:border-[#0070F2] transition-all"
              />
              {response?.fieldErrors?.fullName && (
                <p className="mt-1 text-[11px] text-red-600">{response.fieldErrors.fullName[0]}</p>
              )}
            </div>

            {/* Work Email */}
            <div>
              <label htmlFor="workEmail" className="block text-xs font-semibold text-[#12171C] mb-1.5">
                Work Email <span className="text-[#0070F2]">*</span>
              </label>
              <input
                id="workEmail"
                name="workEmail"
                type="email"
                required
                placeholder="name@organization.com"
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#DDE3EA] bg-white text-sm text-[#12171C] placeholder:text-[#5B738B] focus:outline-none focus:ring-2 focus:ring-[#0070F2] focus:border-[#0070F2] transition-all"
              />
              {response?.fieldErrors?.workEmail && (
                <p className="mt-1 text-[11px] text-red-600">{response.fieldErrors.workEmail[0]}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-xs font-semibold text-[#12171C] mb-1.5">
                Phone Number <span className="text-[#0070F2]">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="+91 98765 43210"
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#DDE3EA] bg-white text-sm text-[#12171C] placeholder:text-[#5B738B] focus:outline-none focus:ring-2 focus:ring-[#0070F2] focus:border-[#0070F2] transition-all"
              />
              {response?.fieldErrors?.phone && (
                <p className="mt-1 text-[11px] text-red-600">{response.fieldErrors.phone[0]}</p>
              )}
            </div>

            {/* Company / Department */}
            <div>
              <label htmlFor="company" className="block text-xs font-semibold text-[#12171C] mb-1.5">
                Company / Department <span className="text-[#0070F2]">*</span>
              </label>
              <input
                id="company"
                name="company"
                type="text"
                required
                placeholder="Ministry / Enterprise Name"
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#DDE3EA] bg-white text-sm text-[#12171C] placeholder:text-[#5B738B] focus:outline-none focus:ring-2 focus:ring-[#0070F2] focus:border-[#0070F2] transition-all"
              />
              {response?.fieldErrors?.company && (
                <p className="mt-1 text-[11px] text-red-600">{response.fieldErrors.company[0]}</p>
              )}
            </div>
          </div>

          {/* Service Interest */}
          <div>
            <label htmlFor="interest" className="block text-xs font-semibold text-[#12171C] mb-1.5">
              Primary Area of Interest <span className="text-[#0070F2]">*</span>
            </label>
            <select
              id="interest"
              name="interest"
              required
              defaultValue="sap-erp"
              className="w-full px-3.5 py-2.5 rounded-lg border border-[#DDE3EA] bg-white text-sm text-[#12171C] focus:outline-none focus:ring-2 focus:ring-[#0070F2] focus:border-[#0070F2] transition-all"
            >
              {INTEREST_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-semibold text-[#12171C] mb-1.5">
              Project Context / Objectives <span className="text-[#0070F2]">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              placeholder="Describe your operational requirements, timeline, or current infrastructure challenge..."
              className="w-full px-3.5 py-2.5 rounded-lg border border-[#DDE3EA] bg-white text-sm text-[#12171C] placeholder:text-[#5B738B] focus:outline-none focus:ring-2 focus:ring-[#0070F2] focus:border-[#0070F2] transition-all"
            />
            {response?.fieldErrors?.message && (
              <p className="mt-1 text-[11px] text-red-600">{response.fieldErrors.message[0]}</p>
            )}
          </div>

          {/* DPDP 2025 Explicit Statutory Consent Notice */}
          <div className="p-4 rounded-xl bg-[#F7F9FC] border border-[#DDE3EA]">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="dpdpConsent"
                value="true"
                required
                className="mt-1 h-4 w-4 rounded border-[#DDE3EA] text-[#0070F2] focus:ring-[#0070F2]"
              />
              <span className="text-[11px] text-[#475E75] leading-relaxed">
                I acknowledge that submitted business information will be processed by JSJ INFOTECH solely for responding to this commercial engagement inquiry in accordance with the <strong>Digital Personal Data Protection (DPDP) Rules 2025</strong>. We do not sell or transfer personal data to third parties.
              </span>
            </label>
            {response?.fieldErrors?.dpdpConsent && (
              <p className="mt-1.5 text-[11px] text-red-600 font-semibold">{response.fieldErrors.dpdpConsent[0]}</p>
            )}
          </div>

          {/* Turnstile Test token passed in hidden input */}
          <input type="hidden" name="turnstileToken" value="1x00000000000000000000AA" />

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isPending}
            className="w-full py-3 px-6 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-[#0070F2] hover:bg-[#0057D2] shadow-sm transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0070F2] disabled:opacity-50"
          >
            {isPending ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Encrypting & Submitting...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Initiate Technology Engagement
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
