import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-background z-10" />
        <img 
          src="/images/anselmo_1.jpg" 
          alt="Anselmo Ralph" 
          className="w-full h-full object-cover object-top opacity-80 scale-105 animate-slow-zoom"
        />
      </div>

      {/* Content */}
      <div className="container relative z-20 px-4 sm:px-6 flex flex-col items-center text-center max-w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-primary font-bold tracking-[0.2em] text-sm md:text-base mb-4 uppercase">
            O REI DO R&B
          </h2>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-display font-extrabold text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tighter text-white mb-6 leading-none max-w-full overflow-hidden"
        >
          ANSELMO<br className="md:hidden" />RALPH
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-white/70 max-w-xl text-lg md:text-xl font-light mb-10"
        >
         Um dos artistas mais influentes da música lusófona, conhecido por suas baladas românticas e performances energéticas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row gap-4"
        >
          <a 
            href="https://open.spotify.com/artist/1ts2oIXKCpWSRFnR78bulp" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-primary text-white font-bold tracking-widest overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              OUVIR AGORA <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out mix-blend-difference" />
          </a>
          
          <a 
            href="#biography" 
            className="px-8 py-4 border border-white/20 text-white font-bold tracking-widest hover:bg-white/10 transition-colors"
          >
            BIOGRAFIA
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-[10px] tracking-[0.2em] text-white/50 uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}
