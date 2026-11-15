import { LegalPage } from '@/components/LegalPage';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta('Terms of use', 'Terms for using the JSJ INFOTECH website, including intellectual property, disclaimers and governing law.', '/terms/');

export default function Page() {
  return (
    <LegalPage
      title="Terms of use"
      lead="By using this website you accept these terms."
      sections={[
        { h: '1. Use of the website', p: ['Use this website for lawful purposes only. Do not attempt to disrupt, probe or misuse it.'] },
        { h: '2. Intellectual property', p: ['Content, logos and design belong to JSJ INFOTECH or its licensors. SAP and related marks belong to SAP SE. Client names belong to their owners.'] },
        { h: '3. Information only', p: ['Content is general information, not a binding offer. Roadmap and research content describes ambitions, not current services.'] },
        { h: '4. Third-party links', p: ['We are not responsible for third-party websites linked from this site.'] },
        { h: '5. Limitation of liability', p: ['To the extent the law allows, JSJ INFOTECH is not liable for loss arising from use of this website.'] },
        { h: '6. Governing law', p: ['These terms are governed by the laws of India. Courts in Telangana have exclusive jurisdiction.'] },
        { h: '7. Changes', p: ['We may update these terms. The date above shows the latest version.'] },
      ]}
    />
  );
}
