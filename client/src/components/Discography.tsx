import { motion } from "framer-motion";
import { Disc3, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const albums = [
  {
    year: "2025",
    title: "Ancestralidade",
    type: "Album",
    cover: "/images/album_ancestralidade.jpg"
  },
  {
    year: "2019",
    title: "The Gentleman",
    type: "Album",
    cover: "/images/album_gentleman.jpg"
  },
  {
    year: "2015",
    title: "King Ckwa",
    type: "Album",
    cover: "/images/album_kingckwa.jpg"
  },
  {
    year: "2013",
    title: "Los Compadres",
    type: "Collab Album",
    cover: "/images/album_loscompadres.jpg"
  },
  {
    year: "2011",
    title: "Calor & Frio",
    type: "Album",
    cover: "/images/album_calorefrio.jpg"
  },
  {
    year: "2008",
    title: "Lágrimas",
    type: "Album",
    cover: "/images/album_lagrimas.jpg"
  }
];

export default function Discography() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      const newScrollLeft = direction === 'left' 
        ? scrollRef.current.scrollLeft - scrollAmount
        : scrollRef.current.scrollLeft + scrollAmount;
      
      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 bg-black relative border-t border-white/5">
      <div className="container mx-auto px-6 mb-16 flex items-end justify-between">
        <div>
          <h3 className="text-primary font-bold tracking-[0.2em] text-sm mb-4 uppercase flex items-center gap-4">
            <span className="w-12 h-[1px] bg-primary"></span>
            Discografia
          </h3>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
            Álbuns & Singles
          </h2>
        </div>
        
        <div className="hidden md:flex gap-2">
          <button 
            onClick={() => scroll('left')}
            className="group w-12 h-12 border border-white/10 flex items-center justify-center text-white hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
          >
            <ChevronLeft className="w-5 h-5 group-hover:text-primary transition-colors" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="group w-12 h-12 border border-white/10 flex items-center justify-center text-white hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
          >
            <ChevronRight className="w-5 h-5 group-hover:text-primary transition-colors" />
          </button>
        </div>
      </div>

      <div ref={scrollRef} className="overflow-x-auto pb-12 custom-scrollbar">
        <div className="flex px-6 gap-8 w-max">
          {albums.map((album, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative w-[300px] md:w-[400px] cursor-pointer"
            >
              <div className="aspect-square overflow-hidden bg-white/5 mb-6 relative border border-white/10 group-hover:border-primary/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/20">
                <img 
                  src={album.cover} 
                  alt={album.title} 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 group-hover:brightness-110"
                />
                
                {/* Red Glow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Vinyl Effect Overlay */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-sm">
                  <div className="w-16 h-16 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center border border-primary/40 shadow-lg shadow-primary/30">
                    <Disc3 className="text-primary w-8 h-8 animate-spin-slow drop-shadow-lg" />
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-start border-t border-white/10 group-hover:border-primary/30 pt-4 transition-colors duration-300">
                <div>
                  <h3 className="text-2xl font-display font-bold text-white mb-1 group-hover:text-primary transition-all duration-300 group-hover:drop-shadow-lg">
                    {album.title}
                  </h3>
                  <p className="text-white/50 text-sm tracking-widest uppercase group-hover:text-white/70 transition-colors duration-300">
                    {album.type}
                  </p>
                </div>
                <span className="text-white/30 font-display font-bold text-xl group-hover:text-primary/70 transition-colors duration-300">
                  {album.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
