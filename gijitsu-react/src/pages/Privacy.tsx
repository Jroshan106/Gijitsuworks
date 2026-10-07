import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Privacy() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link to="/" className="inline-flex items-center text-primaryLight hover:text-white transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">Privacy Policy</h1>
        
        <div className="space-y-8 text-gray-400 font-light leading-relaxed">
          <section>
            <h2 className="text-2xl font-display font-semibold text-white mb-4">1. Introduction</h2>
            <p>At Gijitsu Works, a freelance web development team, we respect your privacy. This simple Privacy Policy outlines how we handle any information we collect when you interact with our website or hire us for a project.</p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-white mb-4">2. Information We Collect</h2>
            <p>We only collect the information you voluntarily provide to us via our contact form or direct emails. This typically includes your name, email address, phone number, and any details about the project you wish to discuss.</p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-white mb-4">3. How We Use Your Information</h2>
            <p>Your information is used strictly to communicate with you regarding your project inquiry, provide quotes, and manage our freelance relationship. We do not use your information for automated marketing, and we absolutely do not sell or share your data with third parties.</p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-white mb-4">4. Data Storage and Security</h2>
            <p>As a freelance team, we keep our operations lean. Your contact information is stored securely in our private email and project management tools. We take reasonable steps to protect your personal information from unauthorized access.</p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-white mb-4">5. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:gijitsuworks@gmail.com" className="text-primaryLight hover:underline">gijitsuworks@gmail.com</a>.</p>
          </section>
          
          <p className="text-sm mt-12 text-gray-500">Last Updated: October 2026</p>
        </div>
      </div>
    </div>
  );
}
