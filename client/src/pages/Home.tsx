import Biography from "@/components/Biography";
import Discography from "@/components/Discography";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MusicPlayer from "@/components/MusicPlayer";
import Navbar from "@/components/Navbar";
import AchievementsSlider from "@/components/AchievementsSlider";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Biography />
        <AchievementsSlider />
        <Discography />
        <MusicPlayer />
      </main>
      <Footer />
    </div>
  );
}
