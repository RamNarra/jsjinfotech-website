import { LegalPage } from '@/components/LegalPage';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta('Privacy policy', 'How JSJ INFOTECH collects and uses personal data from website enquiries, under India’s DPDP Act 2023 and DPDP Rules 2025.', '/privacy/');

export default function Page() {
  return (
    <LegalPage
      title="Privacy policy"
      lead="This notice explains what personal data this website collects, why, and your rights under India’s Digital Personal Data Protection Act 2023."
      sections={[
        { h: '1. Who we are', p: ['JSJ INFOTECH, Plot No.144, Rd Number 72, Jubilee Hills, Hyderabad, Telangana 500096, is the data fiduciary for this website.'] },
        { h: '2. Data we collect', p: ['Enquiry form: name, organisation, role, email, phone (optional), country, service interest and message.', 'Server logs: IP address, browser type and request time, kept by our hosting provider for security.', 'Analytics: aggregate, cookieless page statistics from Cloudflare Web Analytics. No profile of you is built.'] },
        { h: '3. Why we use it', p: ['To reply to your enquiry and discuss the project you describe. To keep the website secure and prevent spam.'] },
        { h: '4. Legal basis and consent', p: ['We process enquiry data on your consent, given by ticking the consent box. You can withdraw consent at any time by emailing subhash@jsjinfotech.co.in. Withdrawal does not affect processing done before it.'] },
        { h: '5. Retention', p: ['The website stores no form data. Enquiries arrive in our email inbox and are kept only as long as needed to respond and manage any resulting engagement.'] },
        { h: '6. Recipients', p: ['Cloudflare (hosting, Turnstile bot protection, analytics) and our transactional email provider (Resend) process data on our behalf. Joint SAP enquiries may be shared with SGN Software Pvt. Ltd., our joint venture partner, only to respond to you.'] },
        { h: '7. International transfer', p: ['Our service providers may process data outside India. We use providers that apply contractual safeguards.'] },
        { h: '8. Your rights', p: ['You may ask to access, correct or erase your personal data, nominate another person, and seek grievance redressal. Email subhash@jsjinfotech.co.in. If unsatisfied, you may complain to the Data Protection Board of India.'] },
        { h: '9. Children', p: ['This website is not directed at children. Enquiries must come from adults or for business use.'] },
        { h: '10. Changes', p: ['We will post changes on this page with a new date.'] },
      ]}
    />
  );
}
