import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Studio', href: '/#home' },
    { name: 'Expertise', href: '/#services' },
    { name: 'Work', href: '/#projects' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-[padding] duration-300 ${isScrolled ? 'py-2 sm:py-3 md:py-4' : 'py-3 sm:py-4 md:py-6'}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className={`flex items-center justify-between transition-all duration-300 rounded-full ${isScrolled ? 'bg-surface/85 backdrop-blur-md px-4 sm:px-8 py-2 sm:py-3 shadow-2xl border border-gray-800/40' : 'px-2 py-2'}`}>
          <a href="/#home" className="flex items-center gap-3 group">
            <img src="/images/logo.png" alt="Gijitsu Works" className="h-10 sm:h-12 md:h-16 w-auto group-hover:scale-105 transition-transform" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-sm font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-widest"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a href="/#contact" className="btn-primary py-2.5 px-7 text-sm">
              Create Your Project
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-2xl border-t-0 border-x-0 rounded-none transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 py-6 border-b border-gray-800 shadow-2xl' : 'max-h-0 py-0 border-none'}`}>
        <div className="flex flex-col items-center gap-6 px-6">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-white font-display text-lg tracking-wide hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a href="/#contact" className="btn-primary w-full text-center mt-2 justify-center" onClick={() => setIsMobileMenuOpen(false)}>
            Start Your Project
          </a>
        </div>
      </div>
    </nav>
  );
}
