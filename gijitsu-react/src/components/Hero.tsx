import { ArrowRight } from 'lucide-react';
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
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 md:py-20 overflow-hidden">
      {/* High-Performance Ambient Background Glows (GPU Accelerated, No Blend-Mode Overhead) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-80 sm:w-96 h-80 sm:h-96 bg-primary/20 rounded-full filter blur-[80px] transform-gpu" />
        <div className="absolute top-[25%] right-[-5%] w-80 sm:w-96 h-80 sm:h-96 bg-accent/15 rounded-full filter blur-[80px] transform-gpu" />
        <div className="absolute bottom-[-10%] left-[25%] w-[32rem] h-[32rem] bg-blue-900/15 rounded-full filter blur-[90px] transform-gpu" />
        
        {/* Floating Tech Icons - Desktop only, GPU-accelerated smooth float */}
        <div className="hidden md:block absolute inset-0 pointer-events-none">
          {techIcons.map((item, idx) => (
            <motion.div
              key={idx}
              className={`absolute ${item.color} opacity-80 hover:opacity-100 transition-opacity transform-gpu`}
              style={{ left: item.left, top: item.top }}
              animate={{ 
                y: [0, -18, 0]
              }}
              transition={{
                duration: 4.5 + (idx % 3),
                repeat: Infinity,
                ease: "easeInOut",
                delay: item.delay
              }}
            >
              <item.Icon className="w-12 h-12 lg:w-14 lg:h-14 filter drop-shadow-sm" />
            </motion.div>
          ))}
        </div>

        {/* Clean, high-performance tech grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:28px_28px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,#000_60%,transparent_100%)]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[1.15] mb-6 sm:mb-8 tracking-tight drop-shadow-2xl"
          >
            We craft <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryLight via-primary to-accentLight">digital</span> <br/>
            experiences.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 max-w-2xl leading-relaxed font-light drop-shadow-md px-2 sm:px-0"
          >
            Gijitsu Works transforms ambitious ideas into remarkable digital products. We specialize in high-performance web development and creative design.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full sm:w-auto"
          >
            <a href="/#projects" className="btn-primary group shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] justify-center">
              View Our Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/#about" className="btn-outline backdrop-blur-sm bg-surface/30 justify-center">
              Who We Are
            </a>
          </motion.div>

          {/* Mobile Tech Stack Dock */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="md:hidden mt-10 w-full pt-6 border-t border-gray-800/60"
          >
            <p className="text-[11px] font-mono tracking-widest text-gray-400 uppercase mb-3 text-center">Tech Stack</p>
            <div className="flex flex-wrap justify-center items-center gap-2.5 px-2">
              {techIcons.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-2 rounded-xl bg-surface/80 border border-gray-800/80 ${item.color} shadow-sm backdrop-blur-md`}
                >
                  <item.Icon className="w-5 h-5" />
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
      
    </section>
  );
}
