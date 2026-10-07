import { Zap, Code, Layout } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const pillars = [
    {
      icon: <Code className="w-6 h-6 text-primaryLight" />,
      title: "Clean Architecture",
      desc: "Modern, scalable codebase built for the future."
    },
    {
      icon: <Zap className="w-6 h-6 text-accentLight" />,
      title: "High Performance",
      desc: "Optimized delivery for lightning-fast experiences."
    },
    {
      icon: <Layout className="w-6 h-6 text-indigo-400" />,
      title: "Intuitive Design",
      desc: "User-centric interfaces that drive engagement."
    }
  ];

  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2"
          >
            <h2 className="text-sm font-bold tracking-widest text-primaryLight uppercase mb-3">The Studio</h2>
            <h3 className="section-title">Driven by passion, defined by code.</h3>
            
            <div className="space-y-6 text-gray-400 text-lg font-light leading-relaxed mb-10">
              <p>
                Gijitsu Works is a specialized web development boutique. We are a tight-knit collective of three developers who view coding not just as engineering, but as a craft.
              </p>
              <p>
                From initial architecture to final deployment, we handle the entire digital lifecycle. Our philosophy is simple: build things that look beautiful and work flawlessly.
              </p>
            </div>
            
            <a href="/#services" className="inline-flex items-center text-white font-medium hover:text-primaryLight transition-colors group">
              Explore our capabilities <motion.span className="ml-2 group-hover:translate-x-2 transition-transform">→</motion.span>
            </a>
          </motion.div>
          
          <div className="lg:w-1/2 w-full">
            <div className="grid gap-6">
              {pillars.map((pillar, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  whileHover={{ scale: 1.02 }}
                  className="glass-panel p-6 flex items-start gap-5 hover:bg-surface/60 transition-colors border-gray-800/50"
                >
                  <div className="p-3 bg-surfaceLight rounded-xl border border-gray-700">
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-bold text-white mb-2">{pillar.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{pillar.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
