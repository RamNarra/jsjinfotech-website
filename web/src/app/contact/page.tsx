import React from 'react';
import type { Metadata } from 'next';
import { ContactForm } from '@/components/forms/ContactForm';
import { BRAND } from '@/shared';
import { Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';

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
      <section className="py-16 lg:py-20 bg-white text-[#12171C] bg-enterprise-grid border-b border-[#DDE3EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0070F2] font-semibold block">
              Engagement Desk · JSJ INFOTECH
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#12171C] leading-tight">
              Start a Technology Conversation.
            </h1>
            <p className="text-[#475E75] text-base sm:text-lg leading-relaxed">
              We welcome formal tenders, commercial partnership inquiries, and pilot program consultations from public departments and enterprise clients.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Contact Info Section */}
      <section className="py-20 bg-[#F7F9FC] text-[#12171C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Contact Details & Security */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h2 className="text-2xl font-extrabold text-[#12171C] mb-3">
                  Official Communication Channels
                </h2>
                <p className="text-[#475E75] text-sm leading-relaxed">
                  Connect directly with our leadership and practice heads. All commercial disclosures and requirements are protected under non-disclosure protocols.
                </p>
              </div>

              {/* Direct Info Cards */}
              <div className="space-y-4">
                <div className="p-5 rounded-xl bg-white border border-[#DDE3EA] flex items-start gap-4 shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-[#EBF8FF] border border-[#D1EFFF] text-[#0070F2] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-[#5B738B] font-semibold block">
                      Direct Telephone
                    </span>
                    <a href={`tel:${BRAND.phone}`} className="text-base font-bold text-[#12171C] hover:text-[#0070F2] transition-colors">
                      {BRAND.displayPhone}
                    </a>
                    <span className="text-xs text-[#5B738B] block mt-0.5">Mon – Sat, 9:00 AM – 7:00 PM IST</span>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-white border border-[#DDE3EA] flex items-start gap-4 shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-[#EBF8FF] border border-[#D1EFFF] text-[#0070F2] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono uppercase text-[#5B738B] font-semibold block">
                      Official Email Desks
                    </span>
                    <div>
                      <a href={`mailto:${BRAND.supportEmail}`} className="text-sm font-bold text-[#12171C] hover:text-[#0070F2] transition-colors block">
                        {BRAND.supportEmail}
                      </a>
                      <span className="text-[11px] text-[#5B738B]">General Support & RFP Submissions</span>
                    </div>
                    <div className="pt-2">
                      <a href={`mailto:${BRAND.executiveEmail}`} className="text-sm font-bold text-[#12171C] hover:text-[#0070F2] transition-colors block">
                        {BRAND.executiveEmail}
                      </a>
                      <span className="text-[11px] text-[#5B738B]">Executive & Practice Leadership</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-white border border-[#DDE3EA] flex items-start gap-4 shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-[#EBF8FF] border border-[#D1EFFF] text-[#0070F2] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-[#5B738B] font-semibold block">
                      Registered Office
                    </span>
                    <span className="text-sm font-bold text-[#12171C] block">
                      {BRAND.address.street}, {BRAND.address.area}
                    </span>
                    <span className="text-xs text-[#475E75] block mt-0.5">
                      {BRAND.address.city}, {BRAND.address.state}, {BRAND.address.country}
                    </span>
                  </div>
                </div>
              </div>

              {/* DPDP Rules 2025 Statement */}
              <div className="p-5 rounded-xl bg-[#EBF8FF] border border-[#D1EFFF] text-xs text-[#475E75] space-y-2">
                <div className="flex items-center gap-2 font-bold text-[#12171C]">
                  <ShieldCheck className="w-4 h-4 text-[#0070F2]" />
                  <span>DPDP Act 2025 Statutory Protection</span>
                </div>
                <p className="text-[11px] leading-relaxed">
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
