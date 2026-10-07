import { Code, ShoppingCart, Globe } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and database-driven web applications tailored to your business.",
      icon: <Code className="w-8 h-8 text-white" />
    },
    {
      title: "E-commerce",
      description: "Complete online store setups with product listings and secure integration.",
      icon: <ShoppingCart className="w-8 h-8 text-white" />
    },
    {
      title: "Deployment",
      description: "Domain registration, hosting setup, and ongoing website maintenance.",
      icon: <Globe className="w-8 h-8 text-white" />
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="section-title">What We <span className="text-primary">Do</span></h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 group">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h5 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h5>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
