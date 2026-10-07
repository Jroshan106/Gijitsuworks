import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Studio', href: '#home' },
    { name: 'Expertise', href: '#services' },
    { name: 'Work', href: '#projects' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-6'}`}>
      <div className="container mx-auto px-6">
        <div className={`flex items-center justify-between transition-all duration-500 ${isScrolled ? 'glass-panel px-6 py-3' : 'px-2'}`}>
          <a href="#home" className="flex items-center gap-3 group">
            <img src="/images/logo.png" alt="Gijitsu Works" className="h-10 w-auto group-hover:scale-105 transition-transform" />
            <span className="text-xl font-display font-bold text-white tracking-wide">Gijitsu.</span>
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
            <a href="#contact" className="btn-primary py-2.5 px-7 text-sm">
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full glass-panel border-t-0 border-x-0 rounded-none transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 py-6 border-b border-gray-800' : 'max-h-0 py-0 border-none'}`}>
        <div className="flex flex-col items-center gap-6">
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
          <a href="#contact" className="btn-primary mt-2" onClick={() => setIsMobileMenuOpen(false)}>
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  );
}
