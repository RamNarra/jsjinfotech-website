import { Hero } from '@/components/home/Hero';
import { Statement } from '@/components/home/Statement';
import { Convergence } from '@/components/home/Convergence';
import { SolutionsIndex } from '@/components/home/SolutionsIndex';
import { Audiences } from '@/components/home/Audiences';
import { DeliverySection } from '@/components/home/DeliverySection';
import { Ecosystem } from '@/components/home/Ecosystem';
import { Roadmap } from '@/components/home/Roadmap';
import { ContactCta } from '@/components/home/ContactCta';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Statement />
      <Convergence />
      <SolutionsIndex />
      <Audiences />
      <DeliverySection />
      <Ecosystem />
      <Roadmap />
      <ContactCta />
    </>
  );
}
