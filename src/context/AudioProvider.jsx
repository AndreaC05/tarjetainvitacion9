import { createContext, useContext, useState, useRef, useEffect } from 'react';
import Music from '../assets/music/flores.mp3';

const AudioContext = createContext();

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio debe ser usado dentro de AudioProvider');
  }
  return context;
};

export const AudioProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const startMusic = () => {
    if (audioRef.current && !isPlaying) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
        })
        .catch((error) => {
          console.warn("No se pudo reproducir:", error);
        });
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
  };

  // Configurar listeners globales para la primera interacción
  useEffect(() => {
    const handleUserInteraction = () => {
      if (!hasInteracted) {
        setTimeout(() => {
          startMusic();
        }, 500); // Pequeño delay para que sea más suave
      }
    };

    if (!hasInteracted) {
      const events = ['click', 'keydown', 'touchstart'];
      events.forEach(event => {
        document.addEventListener(event, handleUserInteraction, { once: true });
      });

      return () => {
        events.forEach(event => {
          document.removeEventListener(event, handleUserInteraction);
        });
      };
    }
  }, [hasInteracted]);

  return (
    <AudioContext.Provider
      value={{
        isPlaying,
        hasInteracted,
        togglePlayPause,
        startMusic,
      }}
    >
      {children}
      {/* Audio global que se mantiene durante toda la navegación */}
      <audio
        ref={audioRef}
        src={Music}
        onEnded={handleEnded}
        preload="auto"
        style={{ display: 'none' }}
      />
    </AudioContext.Provider>
  );
};