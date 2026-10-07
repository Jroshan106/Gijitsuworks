import { MonitorSmartphone, ShoppingBag, Server } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "Web Engineering",
      description: "Custom web applications built with modern frameworks. We deliver scalable, responsive, and robust solutions.",
      icon: <MonitorSmartphone className="w-10 h-10" />
    },
    {
      title: "Digital Commerce",
      description: "End-to-end e-commerce platforms designed to maximize conversion and provide seamless shopping experiences.",
      icon: <ShoppingBag className="w-10 h-10" />
    },
    {
      title: "Cloud & Ops",
      description: "Reliable hosting architecture, domain management, and ongoing maintenance to keep your business running 24/7.",
      icon: <Server className="w-10 h-10" />
    }
  ];

  return (
    <section id="services" className="section-padding bg-surface/30 border-y border-gray-800/50 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-sm font-bold tracking-widest text-accentLight uppercase mb-3">Expertise</h2>
          <h3 className="section-title mb-6">What we do best.</h3>
          <p className="text-gray-400 text-lg font-light">We combine technical excellence with creative thinking to deliver solutions that solve real business problems.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="glass-panel p-10 group hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="text-gray-400 mb-8 group-hover:text-primaryLight transition-colors duration-500">
                {service.icon}
              </div>
              <h4 className="text-2xl font-display font-bold text-white mb-4">{service.title}</h4>
              <p className="text-gray-400 leading-relaxed font-light">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
