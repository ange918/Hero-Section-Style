import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { Work } from '@/components/sections/work';
import { Team } from '@/components/sections/team';
import { ContactGenerator } from '@/components/sections/contact-generator';
import { Footer } from '@/components/sections/footer';

export function Home() {
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <div className="relative z-10 bg-background">
        <Services />
        <Work />
        <Team />
        <ContactGenerator />
        <Footer />
      </div>
    </div>
  );
}
