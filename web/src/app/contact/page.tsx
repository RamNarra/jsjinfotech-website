import React from 'react';
import type { Metadata } from 'next';
import { ContactForm } from '@/components/forms/ContactForm';
import { BRAND } from '@/shared';
import { Phone, Mail, MapPin, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact & Commercial Inquiries | JSJ INFOTECH',
  description:
    'Initiate technology partnership engagement with JSJ INFOTECH across enterprise IT, SAP S/4HANA, AI, drone inspection, and government smart infrastructure.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-[#07112D] text-white bg-dark-grid border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold block">
              Engagement Desk · JSJ INFOTECH
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Start a Technology Conversation.
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              We welcome formal tenders, commercial partnership inquiries, and pilot program consultations from public departments and enterprise clients.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Contact Info Section */}
      <section className="py-20 bg-[#F5F7FB] text-[#101A33]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Contact Details & Security */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl font-extrabold text-[#07112D] mb-4">
                  Official Communication Channels
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Connect directly with our leadership and practice heads. All commercial disclosures and requirements are protected under non-disclosure protocols.
                </p>
              </div>

              {/* Direct Info Cards */}
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-white border border-[#DDE4EF] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-200 text-cyan-700 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-400 font-bold block">
                      Direct Telephone
                    </span>
                    <a href={`tel:${BRAND.phone}`} className="text-base font-bold text-[#07112D] hover:text-cyan-700 transition-colors">
                      {BRAND.displayPhone}
                    </a>
                    <span className="text-xs text-slate-500 block mt-0.5">Mon – Sat, 9:00 AM – 7:00 PM IST</span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#DDE4EF] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-200 text-cyan-700 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono uppercase text-slate-400 font-bold block">
                      Official Email Desks
                    </span>
                    <div>
                      <a href={`mailto:${BRAND.supportEmail}`} className="text-sm font-bold text-[#07112D] hover:text-cyan-700 transition-colors block">
                        {BRAND.supportEmail}
                      </a>
                      <span className="text-[11px] text-slate-500">General Support & RFP Submissions</span>
                    </div>
                    <div className="pt-2">
                      <a href={`mailto:${BRAND.executiveEmail}`} className="text-sm font-bold text-[#07112D] hover:text-cyan-700 transition-colors block">
                        {BRAND.executiveEmail}
                      </a>
                      <span className="text-[11px] text-slate-500">Executive & Practice Leadership</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#DDE4EF] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-200 text-cyan-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-400 font-bold block">
                      Operations Footprint
                    </span>
                    <span className="text-sm font-bold text-[#07112D] block">
                      Pan-India Service Coverage
                    </span>
                    <span className="text-xs text-slate-500 block mt-0.5">
                      On-site facility engineering & remote cloud deployments
                    </span>
                  </div>
                </div>
              </div>

              {/* DPDP Rules 2025 Statement */}
              <div className="p-5 rounded-2xl bg-cyan-950/20 border border-cyan-500/30 text-xs text-slate-700 space-y-2">
                <div className="flex items-center gap-2 font-bold text-[#07112D]">
                  <ShieldCheck className="w-4 h-4 text-cyan-600" />
                  <span>DPDP Act 2025 Statutory Protection</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  In compliance with the notified Digital Personal Data Protection Rules 2025, any corporate contact information submitted via this portal is stored encrypted, utilized solely for evaluating technology engagements, and never transferred or commercialized.
                </p>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
