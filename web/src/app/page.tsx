import { Hero } from '@/components/home/Hero';
import { Ticker } from '@/components/home/Ticker';
import { Statement } from '@/components/home/Statement';
import { Convergence } from '@/components/home/Convergence';
import { SolutionsShowcase } from '@/components/home/SolutionsShowcase';
import { Audiences } from '@/components/home/Audiences';
import { DeliverySection } from '@/components/home/DeliverySection';
import { Ecosystem } from '@/components/home/Ecosystem';
import { Roadmap } from '@/components/home/Roadmap';
import { ContactCta } from '@/components/home/ContactCta';

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* <Ticker /> */}
      <Statement />
      <Convergence />
      <SolutionsShowcase />
      <Audiences />
      <DeliverySection />
      <Ecosystem />
      <Roadmap />
      <ContactCta />
    </>
  );
}
