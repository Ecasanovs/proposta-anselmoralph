import { Play, SkipBack, SkipForward, Volume2, Pause } from "lucide-react";
import { useState, useRef, useEffect } from "react";

// AVISO: Os arquivos de áudio são placeholders e não correspondem às músicas reais de Anselmo Ralph.
const tracks = [
  { 
    title: "Não Me Toca", 
    artist: "Anselmo Ralph", 
    duration: "4:25",
    src: "/music/nzambi.mp3" // Placeholder
  },
  { 
    title: "Única Mulher", 
    artist: "Anselmo Ralph", 
    duration: "3:55",
    src: "/music/cofres.mp3" // Placeholder
  },
  { 
    title: "A Dor do Cupido", 
    artist: "Anselmo Ralph", 
    duration: "4:10",
    src: "/music/tudo-bem.mp3" // Placeholder
  },
];

export default function MusicPlayer() {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
      if (currentTrack < tracks.length - 1) {
        setCurrentTrack(currentTrack + 1);
      }
    };

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentTrack]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = volume;
  }, [volume]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.load();
    setProgress(0);
    setIsPlaying(false);
  }, [currentTrack]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error('Error playing audio:', error);
      setIsPlaying(false);
    }
  };

  const changeTrack = (index: number) => {
    setCurrentTrack(index);
    setProgress(0);
    setIsPlaying(false);
  };

  const skipTrack = (direction: 'prev' | 'next') => {
    let newTrack = currentTrack;
    if (direction === 'next' && currentTrack < tracks.length - 1) {
      newTrack = currentTrack + 1;
    } else if (direction === 'prev' && currentTrack > 0) {
      newTrack = currentTrack - 1;
    }
    changeTrack(newTrack);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const newTime = (clickX / width) * audio.duration;
    audio.currentTime = newTime;
    setProgress((newTime / audio.duration) * 100);
  };

  return (
    <section className="py-24 bg-background relative">
      <audio 
        ref={audioRef}
        src={tracks[currentTrack].src}
        preload="metadata"
        onError={(e) => console.error('Audio error:', e)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1">
            <h3 className="text-primary font-bold tracking-[0.2em] text-sm mb-8 uppercase flex items-center gap-4">
              <span className="w-12 h-[1px] bg-primary"></span>
              Top Tracks
            </h3>
            
            <div className="space-y-0">
              {tracks.map((track, index) => (
                <div 
                  key={index}
                  onClick={() => changeTrack(index)}
                  className={`group flex items-center justify-between py-6 border-b border-white/5 cursor-pointer transition-colors ${currentTrack === index ? 'bg-white/5 px-4 -mx-4' : 'hover:bg-white/5 hover:px-4 hover:-mx-4'}`}
                >
                  <div className="flex items-center gap-6">
                    <span className={`text-sm font-bold ${currentTrack === index ? 'text-primary' : 'text-white/30'}`}>
                      0{index + 1}
                    </span>
                    <div>
                      <h4 className={`font-display font-bold text-xl ${currentTrack === index ? 'text-white' : 'text-white/70 group-hover:text-white'}`}>
                        {track.title}
                      </h4>
                      <p className="text-white/40 text-xs tracking-widest uppercase mt-1">
                        {track.artist}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <span className="text-white/30 text-sm font-mono">{track.duration}</span>
                    {currentTrack === index && isPlaying && (
                      <div className="flex gap-1 h-4 items-end">
                        <div className="w-1 bg-primary animate-music-bar-1 h-full"></div>
                        <div className="w-1 bg-primary animate-music-bar-2 h-2/3"></div>
                        <div className="w-1 bg-primary animate-music-bar-3 h-full"></div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <a 
                href="https://open.spotify.com/artist/1ts2oIXKCpWSRFnR78bulp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/60 hover:text-primary transition-colors text-sm tracking-widest uppercase font-bold"
              >
                Ver todas as músicas no Spotify <span className="text-lg">↗</span>
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-square bg-gradient-to-br from-white/5 to-transparent border border-white/10 p-8 flex flex-col justify-between overflow-hidden group">
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700">
                <img src="/images/anselmo_4.jpg" alt="Background" className="w-full h-full object-cover filter blur-xl scale-150" />
              </div>
              
              <div className="relative z-10 w-full aspect-square bg-black mb-8 overflow-hidden shadow-2xl">
                <img src="/images/anselmo_4.jpg" alt="Album Art" className="w-full h-full object-cover" />
              </div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="text-white font-display font-bold text-2xl">{tracks[currentTrack].title}</h3>
                    <p className="text-white/50 text-sm uppercase tracking-widest">{tracks[currentTrack].artist}</p>
                  </div>
                </div>
                
                <div 
                  className="w-full h-1 bg-white/10 mb-6 cursor-pointer group/progress"
                  onClick={handleProgressClick}
                >
                  <div 
                    className="h-full bg-primary relative transition-all duration-100"
                    style={{ width: `${progress}%` }}
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover/progress:opacity-100 transition-opacity" />
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <button 
                      onClick={() => skipTrack('prev')}
                      disabled={currentTrack === 0}
                      className="text-white/70 hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <SkipBack size={24} />
                    </button>
                    <button 
                      onClick={togglePlay}
                      className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center hover:scale-105 transition-transform"
                    >
                      {isPlaying ? (
                        <Pause size={24} fill="currentColor" />
                      ) : (
                        <Play size={24} fill="currentColor" className="ml-1" />
                      )}
                    </button>
                    <button 
                      onClick={() => skipTrack('next')}
                      disabled={currentTrack === tracks.length - 1}
                      className="text-white/70 hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <SkipForward size={24} />
                    </button>
                  </div>
                  
                  <div className="flex items-center gap-2 text-white/50">
                    <Volume2 size={18} />
                    <div 
                      className="w-20 h-1 bg-white/10 cursor-pointer"
                      onClick={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const clickX = e.clientX - rect.left;
                        const newVolume = clickX / rect.width;
                        setVolume(Math.max(0, Math.min(1, newVolume)));
                      }}
                    >
                      <div 
                        className="h-full bg-white/50"
                        style={{ width: `${volume * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
