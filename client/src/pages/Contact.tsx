import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Info Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-primary font-bold tracking-[0.2em] text-sm mb-4 uppercase flex items-center gap-4">
                <span className="w-12 h-[1px] bg-primary"></span>
                Contato
              </h3>
              <h1 className="font-display font-bold text-5xl md:text-7xl text-white mb-8">
                Get in Touch
              </h1>
              <p className="text-white/60 text-lg font-light mb-12 leading-relaxed">
                Para bookings, imprensa, colaborações ou outras questões profissionais, entre em contato com a nossa equipe.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-widest mb-1">Booking & Management</h4>
                    <a href="mailto:booking@anselmoralph.com" className="text-white/60 hover:text-white transition-colors text-lg">
                      booking@anselmoralph.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-widest mb-1">Telefone</h4>
                    <p className="text-white/60 text-lg">
                      +244 923 456 789 (Representante)
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-widest mb-1">Representação Artística</h4>
                    <p className="text-white/60 text-lg">
                      Luanda, Angola
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/5 p-8 md:p-12 border border-white/10"
            >
              <h3 className="font-display font-bold text-3xl text-white mb-8">Envie uma mensagem</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-white/50">Nome</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full bg-black/50 border border-white/10 p-4 text-white focus:border-primary focus:outline-none transition-colors"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-white/50">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full bg-black/50 border border-white/10 p-4 text-white focus:border-primary focus:outline-none transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs font-bold uppercase tracking-widest text-white/50">Assunto</label>
                  <select 
                    id="subject" 
                    className="w-full bg-black/50 border border-white/10 p-4 text-white focus:border-primary focus:outline-none transition-colors appearance-none"
                  >
                    <option>Booking de Show</option>
                    <option>Imprensa / Entrevista</option>
                    <option>Colaboração</option>
                    <option>Outro</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-white/50">Mensagem</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full bg-black/50 border border-white/10 p-4 text-white focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Como podemos ajudar?"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-primary text-white font-bold tracking-widest py-4 hover:bg-white hover:text-black transition-colors uppercase"
                >
                  Enviar Mensagem
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
