import { LegalPage } from '@/components/LegalPage';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta('Cookie policy', 'The JSJ INFOTECH website sets no tracking cookies. This page lists every storage item it uses.', '/cookies/');

export default function Page() {
  return (
    <LegalPage
      title="Cookie policy"
      lead="This website uses no advertising or tracking cookies."
      sections={[
        { h: 'Storage we use', p: ['sessionStorage “jsj-strip-dismissed”: remembers that you closed the announcement strip. Cleared when you close the tab.'] },
        { h: 'Third parties', p: ['Cloudflare Turnstile on the contact form may set a strictly necessary cookie to tell people from bots. Cloudflare Web Analytics is cookieless.'] },
        { h: 'Control', p: ['You can clear storage in your browser settings at any time. The site works without it.'] },
      ]}
    />
  );
}
