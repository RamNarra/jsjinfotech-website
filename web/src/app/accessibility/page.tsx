import { LegalPage } from '@/components/LegalPage';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta('Accessibility statement', 'JSJ INFOTECH targets WCAG 2.2 AA conformance. Report accessibility issues to our team.', '/accessibility/');

export default function Page() {
  return (
    <LegalPage
      title="Accessibility statement"
      lead="We want everyone, including public-sector users of assistive technology, to use this website."
      sections={[
        { h: 'Conformance target', p: ['WCAG 2.2 level AA.'] },
        { h: 'What we do', p: ['Keyboard operation, visible focus, a pause control on the home carousel, reduced-motion support and semantic structure.'] },
        { h: 'Known gaps', p: ['Formal third-party audit pending before launch.'] },
        { h: 'Feedback', p: ['Email subhash@jsjinfotech.co.in with the page address and the problem. We aim to reply within five working days.'] },
      ]}
    />
  );
}
