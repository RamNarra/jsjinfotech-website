'use client';

import React, { useState, useTransition } from 'react';
import { submitContactForm } from '@/app/actions/contact';
import { ContactActionResponse, ServiceInterestEnum } from '@/shared';
import { CheckCircle2, AlertCircle, Send, Loader2, Lock, ShieldCheck } from 'lucide-react';

const INTEREST_OPTIONS = [
  { value: 'sap-erp', label: 'SAP & ERP Transformation' },
  { value: 'artificial-intelligence', label: 'AI & Predictive Analytics' },
  { value: 'cybersecurity', label: 'Cybersecurity & Sovereign Defense' },
  { value: 'software-development', label: 'Custom Software Engineering' },
  { value: 'digital-it', label: 'IT Infrastructure & Consulting' },
  { value: 'drone-technology', label: 'Autonomous Drone Technology' },
  { value: 'smart-infrastructure', label: 'Smart Infrastructure & HVAC AMC' },
  { value: 'digital-content', label: 'Digital Content & Technical Media' },
  { value: 'innovation-rnd', label: 'R&D / New Technology Development' },
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
    <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#DDE4EF] shadow-2xl shadow-slate-900/5">
      {response?.success ? (
        <div className="p-8 rounded-2xl bg-cyan-50 border border-cyan-200 text-center animate-in fade-in zoom-in-95">
          <div className="w-14 h-14 rounded-full bg-cyan-500/10 text-cyan-600 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-[#07112D]">Inquiry Received Successfully</h3>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
            {response.message}
          </p>
          <div className="mt-6 pt-4 border-t border-cyan-100 flex items-center justify-center gap-2">
            <span className="text-xs font-mono text-slate-500">Tracking Reference:</span>
            <span className="text-xs font-mono font-bold text-cyan-800 bg-cyan-100/70 px-2.5 py-1 rounded">
              {response.referenceId}
            </span>
          </div>
          <button
            onClick={() => setResponse(null)}
            className="mt-6 inline-flex text-xs font-semibold text-cyan-700 hover:text-cyan-900 underline"
          >
            Send another inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {response && !response.success && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3 text-red-800 text-xs">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
              <div>
                <span className="font-semibold block">{response.message}</span>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-xs font-semibold text-[#101A33] mb-1.5">
                Full Name <span className="text-cyan-600">*</span>
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                placeholder="e.g. Subhash Sharma"
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#DDE4EF] bg-slate-50/50 text-sm text-[#101A33] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white transition-all"
              />
              {response?.fieldErrors?.fullName && (
                <p className="mt-1 text-[11px] text-red-600">{response.fieldErrors.fullName[0]}</p>
              )}
            </div>

            {/* Work Email */}
            <div>
              <label htmlFor="workEmail" className="block text-xs font-semibold text-[#101A33] mb-1.5">
                Work Email <span className="text-cyan-600">*</span>
              </label>
              <input
                id="workEmail"
                name="workEmail"
                type="email"
                required
                placeholder="name@organization.gov.in"
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#DDE4EF] bg-slate-50/50 text-sm text-[#101A33] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white transition-all"
              />
              {response?.fieldErrors?.workEmail && (
                <p className="mt-1 text-[11px] text-red-600">{response.fieldErrors.workEmail[0]}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-xs font-semibold text-[#101A33] mb-1.5">
                Phone Number <span className="text-cyan-600">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="+91 98765 43210"
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#DDE4EF] bg-slate-50/50 text-sm text-[#101A33] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white transition-all"
              />
              {response?.fieldErrors?.phone && (
                <p className="mt-1 text-[11px] text-red-600">{response.fieldErrors.phone[0]}</p>
              )}
            </div>

            {/* Company / Department */}
            <div>
              <label htmlFor="company" className="block text-xs font-semibold text-[#101A33] mb-1.5">
                Company / Department <span className="text-cyan-600">*</span>
              </label>
              <input
                id="company"
                name="company"
                type="text"
                required
                placeholder="Ministry / Enterprise Name"
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#DDE4EF] bg-slate-50/50 text-sm text-[#101A33] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white transition-all"
              />
              {response?.fieldErrors?.company && (
                <p className="mt-1 text-[11px] text-red-600">{response.fieldErrors.company[0]}</p>
              )}
            </div>
          </div>

          {/* Service Interest */}
          <div>
            <label htmlFor="interest" className="block text-xs font-semibold text-[#101A33] mb-1.5">
              Primary Area of Interest <span className="text-cyan-600">*</span>
            </label>
            <select
              id="interest"
              name="interest"
              required
              defaultValue="sap-erp"
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#DDE4EF] bg-slate-50/50 text-sm text-[#101A33] focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white transition-all"
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
            <label htmlFor="message" className="block text-xs font-semibold text-[#101A33] mb-1.5">
              Project Context / Objectives <span className="text-cyan-600">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              placeholder="Describe your operational requirements, timeline, or current infrastructure challenge..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#DDE4EF] bg-slate-50/50 text-sm text-[#101A33] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white transition-all"
            />
            {response?.fieldErrors?.message && (
              <p className="mt-1 text-[11px] text-red-600">{response.fieldErrors.message[0]}</p>
            )}
          </div>

          {/* DPDP 2025 Explicit Statutory Consent Notice */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="dpdpConsent"
                value="true"
                required
                className="mt-1 h-4 w-4 rounded border-slate-300 text-cyan-600 focus:ring-cyan-500"
              />
              <span className="text-[11px] text-slate-600 leading-relaxed">
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
            className="w-full py-3.5 px-6 rounded-xl text-xs font-bold uppercase tracking-widest text-[#07112D] bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-white shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 disabled:opacity-50"
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
