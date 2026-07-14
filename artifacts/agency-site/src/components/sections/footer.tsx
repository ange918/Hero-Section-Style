import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="bg-background pt-24 pb-12 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center">
                <div className="w-3 h-3 bg-background rounded-sm rotate-45" />
              </div>
              <span className="heading-wavy text-2xl tracking-tight">JRC DIGIT</span>
            </div>
            <p className="text-muted-foreground max-w-sm mb-8 leading-relaxed">
              A fiercely modern creative agency building premium digital experiences for brands that refuse to blend in.
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
              {['Work', 'Services', 'Agency', 'Careers'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 font-display tracking-wide uppercase text-sm">Offices</h4>
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
          <p>© {new Date().getFullYear()} JRC Digit. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
