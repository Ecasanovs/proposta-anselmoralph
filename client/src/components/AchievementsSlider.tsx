import { motion } from "framer-motion";
import { Trophy, Award, Medal, Star } from "lucide-react";
import { useEffect, useState } from "react";

const achievements = [
  { 
    title: "Melhor Artista Lusófono", 
    subtitle: "MTV Africa Music Awards 2014", 
    icon: Trophy,
    type: "award"
  },
  { 
    title: "Melhor Artista Africano", 
    subtitle: "MTV Europe Music Awards 2006", 
    icon: Trophy,
    type: "award"
  },
  { 
    title: "Disco de Platina", 
    subtitle: "A Dor do Cupido - Portugal", 
    icon: Medal,
    type: "achievement"
  },
  { 
    title: "Disco de Ouro", 
    subtitle: "O Melhor de Anselmo Ralph", 
    icon: Award,
    type: "achievement"
  },
  { 
    title: "Prêmio de Melhor Voz Masculina", 
    subtitle: "Rádio Luanda 2007", 
    icon: Trophy,
    type: "award"
  },
  { 
    title: "Artista Angolano em Portugal", 
    subtitle: "Primeira Platina Conquistada", 
    icon: Star,
    type: "achievement"
  },
  { 
    title: "Best R&B/Soul", 
    subtitle: "Angola Music Awards 2014", 
    icon: Trophy,
    type: "award"
  },
  { 
    title: "Album of the Year", 
    subtitle: "Angola Music Awards 2014", 
    icon: Trophy,
    type: "award"
  }
];

export default function AchievementsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  
  const infiniteAchievements = [...achievements, ...achievements, ...achievements];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentIndex >= achievements.length * 2) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(achievements.length);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 1000);
    }
  }, [currentIndex]);

  return (
    <section className="py-12 bg-gradient-to-r from-black via-background to-black relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8 container mx-auto px-6"
      >
        <h3 className="text-primary font-bold tracking-[0.2em] text-sm mb-4 uppercase flex items-center justify-center gap-4">
          <span className="w-12 h-[1px] bg-primary"></span>
          Conquistas
          <span className="w-12 h-[1px] bg-primary"></span>
        </h3>
      </motion.div>

      <div className="relative h-32 md:h-32 overflow-hidden">
        <div 
          className={`flex gap-4 md:gap-6 ${isTransitioning ? 'transition-transform duration-700 md:duration-1000 ease-in-out' : ''}`}
          style={{ 
            transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 1}rem))`,
          }}
        >
            {infiniteAchievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-full md:w-[calc(33.333%-1.333rem)]"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`group relative h-28 p-4 md:p-6 border transition-all duration-500 cursor-default overflow-hidden ${
                    achievement.type === 'award' 
                      ? 'border-primary/30 bg-gradient-to-br from-primary/10 to-transparent hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20' 
                      : 'border-white/20 bg-gradient-to-br from-white/5 to-transparent hover:border-white/30 hover:bg-white/10'
                  }`}>
                    
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                      achievement.type === 'award' 
                        ? 'bg-gradient-to-r from-primary/20 via-primary/10 to-transparent' 
                        : 'bg-gradient-to-r from-white/10 via-white/5 to-transparent'
                    }`}></div>

                    <div className="relative z-10 flex items-center gap-3 md:gap-4 h-full">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg transition-all duration-300 ${
                        achievement.type === 'award' 
                          ? 'bg-gradient-to-br from-primary to-primary/60 shadow-primary/30 group-hover:shadow-primary/50' 
                          : 'bg-gradient-to-br from-white/20 to-white/10 shadow-white/20 group-hover:shadow-white/30'
                      }`}>
                        <IconComponent className={`w-6 h-6 ${
                          achievement.type === 'award' ? 'text-white' : 'text-white/80'
                        }`} />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className={`font-bold text-sm md:text-lg mb-1 leading-tight transition-colors duration-300 ${
                          achievement.type === 'award' 
                            ? 'text-white group-hover:text-primary' 
                            : 'text-white/90 group-hover:text-white'
                        }`}>
                          {achievement.title}
                        </h4>
                        <p className="text-white/50 text-xs md:text-sm tracking-wide">
                          {achievement.subtitle}
                        </p>
                      </div>

                      <div className={`absolute bottom-0 left-0 h-1 transition-all duration-500 ${
                        achievement.type === 'award' 
                          ? 'bg-gradient-to-r from-primary to-primary/60 w-0 group-hover:w-full' 
                          : 'bg-gradient-to-r from-white/50 to-white/20 w-0 group-hover:w-full'
                      }`}></div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
