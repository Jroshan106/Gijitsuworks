import { Linkedin, Twitter, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background pt-20 pb-10 border-t border-gray-800/50">
      <div className="container mx-auto px-6">
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-3 mb-6 inline-flex group">
              <img src="/images/logo.png" alt="Gijitsu Works" className="h-10 w-auto group-hover:scale-105 transition-transform" />
              <span className="text-xl font-display font-bold text-white tracking-wide">Gijitsu.</span>
            </a>
            <p className="text-gray-400 font-light max-w-sm leading-relaxed mb-8">
              A modern digital studio crafting high-performance web experiences.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-surface border border-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-surface border border-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                <Twitter size={18} />
              </a>
              <a href="https://wa.me/message/ICU5XS2G3WG7N1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface border border-gray-800 flex items-center justify-center text-gray-400 hover:bg-accent hover:text-white hover:border-accent transition-all duration-300">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h5 className="text-white font-display font-semibold mb-6">Connect</h5>
            <ul className="space-y-4 font-light text-gray-400">
              <li><a href="mailto:gijitsuworks@gmail.com" className="hover:text-primaryLight transition-colors">gijitsuworks@gmail.com</a></li>
              <li><a href="tel:+94767300195" className="hover:text-primaryLight transition-colors">+94 76 730 0195</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-white font-display font-semibold mb-6">Navigation</h5>
            <ul className="space-y-4 font-light text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Studio</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Expertise</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Work</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm font-light">
            © {new Date().getFullYear()} Gijitsu Works. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500 font-light">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
