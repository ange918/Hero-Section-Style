import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Services } from '@/components/sections/services';
import { Stats } from '@/components/sections/stats';
import { Work } from '@/components/sections/work';
import { Testimonials } from '@/components/sections/testimonials';
import { Team } from '@/components/sections/team';
import { FAQ } from '@/components/sections/faq';
import { ContactGenerator } from '@/components/sections/contact-generator';
import { CTA } from '@/components/sections/cta';
import { Footer } from '@/components/sections/footer';

export function Home() {
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <div className="relative z-10 bg-background">
        <About />
        <Services />
        <Stats />
        <Work />
        <Testimonials />
        <Team />
        <FAQ />
        <ContactGenerator />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}
