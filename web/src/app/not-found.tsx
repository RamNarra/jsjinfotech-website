import { PageHero, Button } from '@/components/ui';

export default function NotFound() {
  return (
    <PageHero eyebrow="404" title="This page does not exist." lead="The address may be wrong or the page has moved.">
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href="/" variant="light">Go to home</Button>
        <Button href="/contact" variant="ghost-dark">Contact us</Button>
      </div>
    </PageHero>
  );
}
