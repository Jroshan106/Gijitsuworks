import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Terms() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link to="/" className="inline-flex items-center text-primaryLight hover:text-white transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">Terms of Service</h1>
        
        <div className="space-y-8 text-gray-400 font-light leading-relaxed">
          <section>
            <h2 className="text-2xl font-display font-semibold text-white mb-4">1. General Overview</h2>
            <p>Welcome to Gijitsu Works. We are a team of freelance developers. By engaging our services or using our website, you agree to these simple terms. Please read them carefully.</p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-white mb-4">2. Services and Scope</h2>
            <p>We provide custom web development, e-commerce solutions, and deployment services. Every project begins with a mutual agreement outlining the scope of work, timeline, and cost. Any additional work outside the agreed scope will be discussed and quoted separately.</p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-white mb-4">3. Payments and Deliverables</h2>
            <p>As freelancers, we typically require an upfront deposit before commencing work, with the remaining balance due upon project completion or defined milestones. Final source code and administrative access will be handed over once full payment is received.</p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-white mb-4">4. Intellectual Property</h2>
            <p>Upon final payment, you will own the rights to the custom design and code we create specifically for your project. We retain the right to showcase the completed work in our portfolio, unless a Non-Disclosure Agreement (NDA) states otherwise.</p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-white mb-4">5. Warranties and Liability</h2>
            <p>We take pride in delivering high-quality, bug-free code. We offer a standard post-launch support period to fix any immediate issues. However, we cannot be held liable for damages, lost profits, or issues arising from third-party services, host downtime, or unauthorized modifications made to the code after handoff.</p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-white mb-4">6. Revisions and Cancellations</h2>
            <p>We allow a reasonable number of revisions during the development phase. If a project is cancelled by the client mid-development, the initial deposit is non-refundable to cover the time and resources already spent.</p>
          </section>
          
          <p className="text-sm mt-12 text-gray-500">Last Updated: October 2026</p>
        </div>
      </div>
    </div>
  );
}
