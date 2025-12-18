import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "ARTIST", path: "/" },
    { name: "DISCOGRAPHY", path: "/discography" },
    { name: "VIDEOS", path: "/videos" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="text-2xl font-display font-bold tracking-tighter text-white hover:text-primary transition-colors">
            ANSELMO RALPH
          </a>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link key={item.name} href={item.path}>
              <a
                className={cn(
                  "text-sm font-medium tracking-widest hover:text-primary transition-colors relative group",
                  location === item.path ? "text-primary" : "text-white/70"
                )}
              >
                {item.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full",
                  location === item.path ? "w-full" : ""
                )} />
              </a>
            </Link>
          ))}
          <a 
            href="https://open.spotify.com/artist/1ts2oIXKCpWSRFnR78bulp" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-2 border border-white/20 text-xs font-bold tracking-widest hover:bg-white hover:text-black transition-all duration-300"
          >
            LISTEN NOW
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full h-[calc(100vh-5rem)] bg-black/95 flex flex-col items-center justify-center space-y-8 animate-in slide-in-from-top-5">
          {navItems.map((item) => (
            <Link key={item.name} href={item.path}>
              <a
                className="text-2xl font-display font-bold text-white hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            </Link>
          ))}
          <a 
            href="https://open.spotify.com/artist/1ts2oIXKCpWSRFnR78bulp" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-8 px-8 py-3 border border-white/20 text-sm font-bold tracking-widest hover:bg-white hover:text-black transition-all duration-300"
          >
            LISTEN NOW
          </a>
        </div>
      )}
    </nav>
  );
}
