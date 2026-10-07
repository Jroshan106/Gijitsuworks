import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    
    setStatus('sending');

    emailjs.sendForm(
      'default_service', 
      'template_default', 
      form.current,
      '3kYErF826wDarNmYG'
    )
    .then(() => {
        setStatus('success');
        form.current?.reset();
        setTimeout(() => setStatus('idle'), 4000);
    }, (error) => {
        console.error(error.text);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
    });
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="container mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto glass-panel p-8 md:p-16 border-gray-800 relative overflow-hidden"
        >
          
          {/* Abstract Shape */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none"
          />

          <div className="text-center mb-12 relative z-10">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Let's build the future.</h2>
            <p className="text-gray-400 text-lg font-light">Tell us about your project and we'll get back to you shortly.</p>
          </div>

          <form ref={form} onSubmit={sendEmail} className="space-y-6 relative z-10 max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="full-name" className="block text-xs font-medium text-gray-400 uppercase tracking-widest mb-2">Name</label>
                <input type="text" name="full-name" id="full-name" required 
                  className="w-full bg-surface/50 border border-gray-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primaryLight focus:ring-1 focus:ring-primaryLight transition-all placeholder:text-gray-600 font-light"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-gray-400 uppercase tracking-widest mb-2">Email</label>
                <input type="email" name="email" id="email" required 
                  className="w-full bg-surface/50 border border-gray-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primaryLight focus:ring-1 focus:ring-primaryLight transition-all placeholder:text-gray-600 font-light"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-xs font-medium text-gray-400 uppercase tracking-widest mb-2">Message</label>
              <textarea name="message" id="message" required rows={4}
                className="w-full bg-surface/50 border border-gray-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primaryLight focus:ring-1 focus:ring-primaryLight transition-all placeholder:text-gray-600 font-light resize-none"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            
            <div className="pt-4 flex flex-col items-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit" 
                disabled={status === 'sending'}
                className="btn-primary w-full md:w-auto md:px-12 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
                <Send size={18} />
              </motion.button>
              
              <div className="h-6 mt-4">
                {status === 'success' && <p className="text-accentLight text-sm font-medium animate-pulse">Message sent successfully! We'll be in touch.</p>}
                {status === 'error' && <p className="text-red-400 text-sm font-medium">Something went wrong. Please try again.</p>}
              </div>
            </div>
          </form>
          
        </motion.div>
      </div>
    </section>
  );
}
