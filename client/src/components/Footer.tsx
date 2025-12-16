import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="font-display font-black text-6xl text-white mb-8 tracking-tighter">
              C4 PEDRO
            </h2>
            <p className="text-white/50 max-w-md text-lg font-light">
              Músico, compositor e produtor angolano. Levando a cultura e a sonoridade de Angola para o mundo.
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="text-white font-bold tracking-widest uppercase mb-8 text-sm">Menu</h4>
            <ul className="space-y-4">
              {["Home", "Biografia", "Discografia", "Vídeos", "Imprensa", "Contato"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/60 hover:text-primary transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Socials */}
          <div>
            <h4 className="text-white font-bold tracking-widest uppercase mb-8 text-sm">Social</h4>
            <div className="flex gap-4 mb-8">
              <a href="https://www.instagram.com/c4pedro_official/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="https://www.facebook.com/c4pedro/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="https://twitter.com/c4pedro" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-300">
                <Twitter size={18} />
              </a>
              <a href="https://www.youtube.com/channel/UC9SXqBYyI73z-OjYJJHA6dw" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-300">
                <Youtube size={18} />
              </a>
            </div>
            <a href="mailto:booking@c4pedro.net" className="text-white/80 hover:text-primary transition-colors text-sm font-mono">
              booking@c4pedro.net
            </a>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/10">
          <p className="text-white/30 text-xs tracking-widest uppercase mb-4 md:mb-0">
            © 2025 BLS Produtora. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-white/30 hover:text-white text-xs tracking-widest uppercase transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/30 hover:text-white text-xs tracking-widest uppercase transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
