import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { SiReact, SiNodedotjs, SiTypescript, SiHtml5, SiCss, SiCplusplus, SiPython, SiAndroidstudio, SiXcode } from 'react-icons/si';

export default function Hero() {
  const techIcons = [
    { Icon: SiReact, color: "text-[#61DAFB]", left: "12%", top: "25%", delay: 0 },
    { Icon: SiNodedotjs, color: "text-[#339933]", left: "82%", top: "20%", delay: 0.5 },
    { Icon: SiTypescript, color: "text-[#3178C6]", left: "18%", top: "70%", delay: 1 },
    { Icon: SiHtml5, color: "text-[#E34F26]", left: "78%", top: "75%", delay: 1.5 },
    { Icon: SiCss, color: "text-[#1572B6]", left: "28%", top: "15%", delay: 0.8 },
    { Icon: SiCplusplus, color: "text-[#00599C]", left: "70%", top: "12%", delay: 1.2 },
    { Icon: SiPython, color: "text-[#3776AB]", left: "8%", top: "45%", delay: 0.3 },
    { Icon: SiAndroidstudio, color: "text-[#3DDC84]", left: "88%", top: "50%", delay: 0.7 },
    { Icon: SiXcode, color: "text-[#157EFB]", left: "50%", top: "10%", delay: 1.1 },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[100px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] right-[-10%] w-96 h-96 bg-accent/10 rounded-full mix-blend-screen filter blur-[100px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.1, 1], x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-20%] left-[20%] w-[40rem] h-[40rem] bg-indigo-900/20 rounded-full mix-blend-screen filter blur-[120px]"
        />
        
        {/* Floating Tech Icons */}
        <div className="absolute inset-0 pointer-events-none">
          {techIcons.map((item, idx) => (
            <motion.div
              key={idx}
              className={`absolute ${item.color} opacity-60 md:opacity-90 drop-shadow-lg`}
              style={{ left: item.left, top: item.top }}
              animate={{ 
                y: [0, -30, 0],
                rotate: [0, 15, -15, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 6 + (idx % 3),
                repeat: Infinity,
                ease: "easeInOut",
                delay: item.delay
              }}
            >
              <item.Icon className="w-12 h-12 md:w-16 md:h-16" />
            </motion.div>
          ))}
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 border border-gray-700/50 backdrop-blur-md bg-surface/40"
          >
            <Sparkles className="w-4 h-4 text-accentLight" />
            <span className="text-sm font-medium text-gray-300">Modern Digital Studio</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[1.1] mb-8 tracking-tight drop-shadow-2xl"
          >
            We craft <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryLight via-primary to-accentLight">digital</span> <br/>
            experiences.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed font-light drop-shadow-md"
          >
            Gijitsu Works transforms ambitious ideas into remarkable digital products. We specialize in high-performance web development and creative design.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
          >
            <a href="#projects" className="btn-primary group shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)]">
              View Our Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#about" className="btn-outline backdrop-blur-sm bg-surface/30">
              Who We Are
            </a>
          </motion.div>

        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce"
      >
        <span className="text-xs tracking-widest text-gray-500 uppercase font-medium">Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-gray-500 to-transparent"></div>
      </motion.div>
    </section>
  );
}
