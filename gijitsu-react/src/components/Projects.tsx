import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: "Mark Tours",
      subtitle: "Terminated",
      category: "Travel & Booking",
      description: "A modern tourism platform engineered for seamless hotel and service bookings.",
      image: "/images/marktours.png",
      link: "https://www.marktours.net/index.php"
    },
    {
      title: "Ceylon Produce Exports",
      subtitle: "Active",
      category: "B2B E-commerce",
      description: "A high-performance storefront for premium export products with full backend integration.",
      image: "/images/cpe.png",
      link: "https://ceylonproduce.com/"
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div>
            <h2 className="text-sm font-bold tracking-widest text-primaryLight uppercase mb-3">Selected Work</h2>
            <h3 className="section-title mb-0">Featured Projects</h3>
          </div>
          <div className="flex gap-6">
            <a href="https://github.com/Jroshan106" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 pb-2">
              GitHub @Roshan <ArrowUpRight className="w-4 h-4" />
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 pb-2">
              GitHub @Hakshan <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <motion.a 
              key={idx} 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-3xl mb-6 glass-panel border-gray-800 p-2 aspect-[4/3]">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7 }}
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover rounded-2xl filter grayscale-[30%] group-hover:grayscale-0"
                />
                
                {/* Floating Action Button */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 z-20 border border-white/20">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
              
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-accentLight">{project.category}</span>
                  <span className="w-8 h-[1px] bg-gray-700"></span>
                </div>
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <h4 className="text-3xl font-display font-bold text-white group-hover:text-primaryLight transition-colors">{project.title}</h4>
                  <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] ${project.subtitle === "Active" ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400" : "border-red-500/20 bg-red-500/10 text-red-400"}`}>
                    {project.subtitle}
                  </span>
                </div>
                <p className="text-gray-400 font-light leading-relaxed">{project.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
        
      </div>
    </section>
  );
}
