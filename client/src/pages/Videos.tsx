import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const videos = [
  {
    id: "nzambi",
    title: "Nzambi é Que Manda Mesmo",
    thumbnail: "/images/album_ancestralidade.jpg",
    views: "1.2M Views",
    date: "2025"
  },
  {
    id: "cofres",
    title: "Cofres do Céu",
    thumbnail: "/images/album_gentleman.jpg",
    views: "850K Views",
    date: "2024"
  },
  {
    id: "esta_tudo_bem",
    title: "Está Tudo Bem",
    thumbnail: "/images/album_kingckwa.jpg",
    views: "2.5M Views",
    date: "2023"
  },
  {
    id: "love_again",
    title: "Love Again (feat. Sauti Sol)",
    thumbnail: "/images/c4pedro_1.jpg",
    views: "5M Views",
    date: "2017"
  },
  {
    id: "african_beauty",
    title: "African Beauty (feat. DJ Maphorisa)",
    thumbnail: "/images/c4pedro_2.jpg",
    views: "10M Views",
    date: "2018"
  },
  {
    id: "vou_ter_saudades",
    title: "Vou Ter Saudades",
    thumbnail: "/images/c4pedro_3.jpg",
    views: "15M Views",
    date: "2016"
  }
];

export default function Videos() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <h3 className="text-primary font-bold tracking-[0.2em] text-sm mb-4 uppercase inline-block">
              Videografia
            </h3>
            <h1 className="font-display font-bold text-5xl md:text-7xl text-white mb-6">
              Latest Visuals
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto text-lg font-light">
              Mergulhe no universo visual de C4 Pedro. Videoclipes oficiais, performances ao vivo e bastidores.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video bg-white/5 overflow-hidden mb-4">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
                      <Play className="text-white w-6 h-6 ml-1" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/80 px-2 py-1 text-xs font-bold text-white rounded">
                    4:35
                  </div>
                </div>
                
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-display font-bold text-white mb-1 group-hover:text-primary transition-colors line-clamp-1">
                      {video.title}
                    </h3>
                    <p className="text-white/50 text-sm tracking-widest uppercase">
                      {video.views} • {video.date}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-24 text-center">
            <a 
              href="https://www.youtube.com/channel/UC9SXqBYyI73z-OjYJJHA6dw" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-bold tracking-widest hover:bg-white hover:text-black transition-all duration-300"
            >
              VER CANAL COMPLETO
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
