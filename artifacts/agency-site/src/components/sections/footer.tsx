import logo from '@/assets/logo.jpg';

export function Footer() {
  return (
    <footer className="bg-background pt-16 md:pt-24 pb-12 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-black flex items-center justify-center ring-1 ring-white/10 shrink-0">
                <img src={logo} alt="JRC Digit" className="w-full h-full object-contain" />
              </div>
              <span className="heading-wavy text-2xl tracking-tight">JRC DIGIT</span>
            </div>
            <p className="text-muted-foreground max-w-sm mb-8 leading-relaxed">
              L'ingénierie digitale au service de vos ambitions. Nous transformons vos idées en solutions sur-mesure, performantes et réellement adaptées au terrain.
            </p>
            <div className="flex gap-4">
              {['Twitter', 'Instagram', 'Dribbble', 'LinkedIn'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 font-display tracking-wide uppercase text-sm">Navigation</h4>
            <ul className="space-y-4">
              {[
                { label: 'Réalisations', href: '#work' },
                { label: 'Services', href: '#services' },
                { label: 'Agence', href: '#agency' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 font-display tracking-wide uppercase text-sm">Bureaux</h4>
            <ul className="space-y-6">
              <li>
                <strong className="block mb-1">San Francisco</strong>
                <span className="text-muted-foreground text-sm">100 Market St, Suite 400<br/>CA 94105</span>
              </li>
              <li>
                <strong className="block mb-1">London</strong>
                <span className="text-muted-foreground text-sm">71-75 Shelton St<br/>WC2H 9JQ</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} JRC Digit. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-foreground transition-colors">Conditions d'utilisation</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
