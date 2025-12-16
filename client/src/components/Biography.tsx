import { motion } from "framer-motion";

export default function Biography() {
  return (
    <section id="biography" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image Section */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <div className="aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 ease-in-out">
                <img 
                  src="/images/c4pedro_2.jpg" 
                  alt="C4 Pedro Portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 bg-card border border-white/10 p-6 max-w-xs shadow-2xl hidden md:block">
                <p className="text-primary font-display font-bold text-4xl mb-1">42</p>
                <p className="text-white/60 text-xs tracking-widest uppercase">Anos de Idade</p>
                <div className="w-full h-[1px] bg-white/10 my-4" />
                <p className="text-white font-bold text-lg mb-1">Luanda</p>
                <p className="text-white/60 text-xs tracking-widest uppercase">Angola</p>
              </div>
            </motion.div>
            
            {/* Background Outline Text */}
            <div className="absolute -top-20 -left-20 z-0 opacity-5 pointer-events-none select-none">
              <span className="font-display font-black text-[12rem] text-transparent stroke-text">C4</span>
            </div>
          </div>

          {/* Text Section */}
          <div className="lg:col-span-7 lg:pl-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-primary font-bold tracking-[0.2em] text-sm mb-4 uppercase flex items-center gap-4">
                <span className="w-12 h-[1px] bg-primary"></span>
                Sobre o Artista
              </h3>
              
              <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-tight">
                Pedro Henrique <br />
                <span className="text-white/30">Lisboa Santos</span>
              </h2>
              
              <div className="space-y-6 text-white/70 text-lg font-light leading-relaxed">
                <p>
                  Conhecido artisticamente como <strong className="text-white font-medium">C4 Pedro</strong>, é um dos músicos mais influentes da nova geração da música angolana. Cantor, compositor, produtor e empresário, sua versatilidade o levou a conquistar palcos internacionais.
                </p>
                
                <p>
                  Nascido no Sambizanga, Luanda, mas com raízes musicais cultivadas na Bélgica, C4 Pedro funde a Kizomba tradicional com elementos de R&B, Afrohouse e Pop, criando uma sonoridade única que atravessa fronteiras.
                </p>
                
                <p>
                  Com múltiplos prêmios internacionais, incluindo <em className="text-white">Melhor Artista da África Central</em> e <em className="text-white">Melhor Artista Lusófono</em>, ele continua a redefinir a música africana contemporânea com seu mais recente trabalho, "Ancestralidade".
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                {["Kizomba", "R&B", "Afrohouse", "Zouk", "Pop"].map((genre) => (
                  <span key={genre} className="px-4 py-2 border border-white/10 text-xs tracking-widest uppercase text-white/60 hover:border-primary hover:text-primary transition-colors cursor-default">
                    {genre}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
