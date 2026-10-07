import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Phone, Mail, Send } from 'lucide-react';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    
    setStatus('sending');

    emailjs.sendForm(
      'default_service', // user would configure this
      'template_default', // user would configure this
      form.current,
      '3kYErF826wDarNmYG' // Original public key
    )
    .then(() => {
        setStatus('success');
        form.current?.reset();
        setTimeout(() => setStatus('idle'), 3000);
    }, (error) => {
        console.error(error.text);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
    });
  };

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
          
          <div className="lg:w-3/5 p-10 md:p-14">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Start a Project</h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <input type="text" name="full-name" id="full-name" required 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div className="relative">
                  <input type="email" name="email" id="email" required 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Email Address"
                  />
                </div>
              </div>
              <div className="relative">
                <textarea name="message" id="message" required rows={5}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Project details: How can we help?"
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={status === 'sending'}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
                <Send size={18} />
              </button>
              
              {status === 'success' && <p className="text-green-500 text-center font-medium mt-2">Message sent successfully!</p>}
              {status === 'error' && <p className="text-red-500 text-center font-medium mt-2">Something went wrong. Please try again.</p>}
            </form>
          </div>

          <div className="lg:w-2/5 bg-primary p-10 md:p-14 text-white flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h5 className="text-blue-100 text-sm mb-1">Call Us</h5>
                  <a href="tel:+94767300195" className="text-xl font-semibold hover:text-blue-200 transition-colors">+94 76 730 0195</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h5 className="text-blue-100 text-sm mb-1">Email Us</h5>
                  <a href="mailto:gijitsuworks@gmail.com" className="text-xl font-semibold hover:text-blue-200 transition-colors">gijitsuworks@gmail.com</a>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <p className="text-blue-100 text-sm">Working Hours</p>
              <p className="font-medium mt-1">Available for freelance opportunities</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
