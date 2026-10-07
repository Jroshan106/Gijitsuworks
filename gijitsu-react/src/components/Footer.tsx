import { Linkedin, MessageCircle, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-background pt-20 pb-10 border-t border-gray-800/50">
      <div className="container mx-auto px-6">
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <a href="/#home" className="flex items-center gap-3 mb-6 inline-flex group">
              <img src="/images/logo.png" alt="Gijitsu Works" className="h-16 w-auto group-hover:scale-105 transition-transform" />
            </a>
            <p className="text-gray-400 font-light max-w-sm leading-relaxed mb-8">
              A modern digital studio crafting high-performance web experiences.
            </p>
            <div className="flex gap-6 mt-4">
              <div className="group relative">
                <a href="#" className="flex">
                  <Linkedin className="w-7 h-7 text-gray-400 hover:scale-125 duration-200 hover:stroke-primary transition-all" strokeWidth={1.5} />
                </a>
                <span className="absolute -top-12 left-[50%] -translate-x-[50%] z-20 origin-bottom scale-0 px-3 rounded-lg border border-gray-700 bg-surfaceLight py-1.5 text-sm font-medium text-white shadow-xl transition-all duration-300 ease-in-out group-hover:scale-100">
                  LinkedIn
                </span>
              </div>

              <div className="group relative">
                <a href="https://github.com/Jroshan106" target="_blank" rel="noreferrer" className="flex">
                  <Github className="w-7 h-7 text-gray-400 hover:scale-125 duration-200 hover:stroke-primary transition-all" strokeWidth={1.5} />
                </a>
                <span className="absolute -top-12 left-[50%] -translate-x-[50%] z-20 origin-bottom scale-0 px-3 rounded-lg border border-gray-700 bg-surfaceLight py-1.5 text-sm font-medium text-white shadow-xl transition-all duration-300 ease-in-out group-hover:scale-100 whitespace-nowrap">
                  GitHub @Roshan
                </span>
              </div>

              <div className="group relative">
                <a href="#" target="_blank" rel="noreferrer" className="flex">
                  <Github className="w-7 h-7 text-gray-400 hover:scale-125 duration-200 hover:stroke-primary transition-all" strokeWidth={1.5} />
                </a>
                <span className="absolute -top-12 left-[50%] -translate-x-[50%] z-20 origin-bottom scale-0 px-3 rounded-lg border border-gray-700 bg-surfaceLight py-1.5 text-sm font-medium text-white shadow-xl transition-all duration-300 ease-in-out group-hover:scale-100 whitespace-nowrap">
                  GitHub @Hakshan
                </span>
              </div>

              <div className="group relative">
                <a href="https://wa.me/message/ICU5XS2G3WG7N1" target="_blank" rel="noopener noreferrer" className="flex">
                  <MessageCircle className="w-7 h-7 text-gray-400 hover:scale-125 duration-200 hover:stroke-accent transition-all" strokeWidth={1.5} />
                </a>
                <span className="absolute -top-12 left-[50%] -translate-x-[50%] z-20 origin-bottom scale-0 px-3 rounded-lg border border-gray-700 bg-surfaceLight py-1.5 text-sm font-medium text-white shadow-xl transition-all duration-300 ease-in-out group-hover:scale-100">
                  WhatsApp
                </span>
              </div>
            </div>
          </div>
          
          <div>
            <h5 className="text-white font-display font-semibold mb-6">Connect</h5>
            <ul className="space-y-4 font-light text-gray-400">
              <li><a href="mailto:gijitsuworks@gmail.com" className="hover:text-primaryLight transition-colors">gijitsuworks@gmail.com</a></li>
              <li><a href="https://wa.me/message/ICU5XS2G3WG7N1" className="hover:text-primaryLight transition-colors">Contact Dev @Roshan</a></li>
              <li><a href="https://wa.me/message/ICU5XS2G3WG7N1" className="hover:text-primaryLight transition-colors">Contact Dev @Hakshan</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-white font-display font-semibold mb-6">Navigation</h5>
            <ul className="space-y-4 font-light text-gray-400">
              <li><a href="/#home" className="hover:text-white transition-colors">Studio</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors">Expertise</a></li>
              <li><a href="/#projects" className="hover:text-white transition-colors">Work</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm font-light">
            © {new Date().getFullYear()} Gijitsu Works. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500 font-light">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
