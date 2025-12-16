import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Disc3, Music } from "lucide-react";

const fullDiscography = [
  {
    year: "2025",
    title: "Ancestralidade",
    type: "Album",
    cover: "/images/album_ancestralidade.jpg",
    tracks: ["Nzambi é Que Manda Mesmo", "Cofres do Céu", "Raízes", "Luanda", "Espírito"]
  },
  {
    year: "2019",
    title: "The Gentleman",
    type: "Album",
    cover: "/images/album_gentleman.jpg",
    tracks: ["Perigosa", "Último Poeta", "Se Eu Soubesse", "Nossas Coisas", "Dona"]
  },
  {
    year: "2015",
    title: "King Ckwa",
    type: "Album",
    cover: "/images/album_kingckwa.jpg",
    tracks: ["Vamos Ficar Por Aqui", "Tu és a Mulher", "Spetxa One", "African Beauty", "Muita Areia"]
  },
  {
    year: "2013",
    title: "Los Compadres",
    type: "Collab Album",
    cover: "/images/album_loscompadres.jpg",
    tracks: ["É Melhor Não Duvidar", "Uma Só Palavra", "Baby Tu Sabes", "Swagg Alliu", "Mapolopolo"]
  },
  {
    year: "2011",
    title: "Calor & Frio",
    type: "Album",
    cover: "/images/album_calorefrio.jpg",
    tracks: ["Dá Só", "Calor e Frio", "Casamento", "Bo Tem Mel", "Pokémon e Picachu"]
  },
  {
    year: "2008",
    title: "Lágrimas",
    type: "Album",
    cover: "/images/album_lagrimas.jpg",
    tracks: ["Lágrimas", "Dá-me Mais", "Vou Ter Saudades", "Será Que É Amor", "Adeus"]
  }
];

export default function DiscographyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-24 text-center"
          >
            <h3 className="text-primary font-bold tracking-[0.2em] text-sm mb-4 uppercase inline-block">
              Música
            </h3>
            <h1 className="font-display font-bold text-5xl md:text-7xl text-white mb-6">
              Discografia Completa
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto text-lg font-light">
              Uma jornada musical através dos anos. De "Lágrimas" a "Ancestralidade", explore a evolução sonora do King Ckwa.
            </p>
          </motion.div>

          <div className="space-y-32">
            {fullDiscography.map((album, index) => (
              <motion.div
                key={album.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}
              >
                {/* Album Cover */}
                <div className="w-full lg:w-1/2 relative group">
                  <div className="aspect-square relative z-10 bg-black shadow-2xl overflow-hidden">
                    <img 
                      src={album.cover} 
                      alt={album.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                        <Disc3 className="text-white w-10 h-10 animate-spin-slow" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative Vinyl Record behind */}
                  <div className={`absolute top-0 ${index % 2 === 0 ? 'right-0 translate-x-1/4' : 'left-0 -translate-x-1/4'} h-full aspect-square rounded-full bg-black border border-white/10 z-0 flex items-center justify-center transition-transform duration-700 group-hover:translate-x-1/2 group-hover:rotate-180 hidden lg:flex`}>
                    <div className="w-1/3 h-1/3 rounded-full bg-gradient-to-br from-primary to-black border-4 border-black" />
                  </div>
                </div>

                {/* Album Info */}
                <div className="w-full lg:w-1/2">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-primary font-bold text-xl">{album.year}</span>
                    <span className="w-12 h-[1px] bg-white/20"></span>
                    <span className="text-white/50 uppercase tracking-widest text-sm">{album.type}</span>
                  </div>
                  
                  <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-8">
                    {album.title}
                  </h2>
                  
                  <div className="space-y-4 mb-10">
                    {album.tracks.map((track, i) => (
                      <div key={i} className="flex items-center gap-4 py-3 border-b border-white/5 group/track cursor-default hover:bg-white/5 hover:px-4 transition-all">
                        <span className="text-white/30 text-sm font-mono w-6">0{i + 1}</span>
                        <span className="text-white/70 group-hover/track:text-white transition-colors">{track}</span>
                        <div className="ml-auto opacity-0 group-hover/track:opacity-100 transition-opacity">
                          <Music size={14} className="text-primary" />
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <button className="px-8 py-3 bg-white text-black font-bold tracking-widest hover:bg-primary hover:text-white transition-colors uppercase text-sm">
                      Ouvir no Spotify
                    </button>
                    <button className="px-8 py-3 border border-white/20 text-white font-bold tracking-widest hover:bg-white hover:text-black transition-colors uppercase text-sm">
                      Apple Music
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
