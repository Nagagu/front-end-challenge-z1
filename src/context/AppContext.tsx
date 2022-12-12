import React, {
  createContext,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Data, Song } from '../service/types';

type AppContextProps = {
  playingSong?: Song | undefined;
  setPlayingSong?: (song: Song | undefined) => void;
  songsList?: Data;
  setSongsList?: (songsList: Data | undefined) => void;
  audioRef?: React.MutableRefObject<HTMLAudioElement | undefined>;
  duration?: number;
  currentTime?: number;
};
export const AppContext = createContext<AppContextProps>({});

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [playingSong, setPlayingSong] = useState<Song | undefined>();
  const [songsList, setSongsList] = useState<Data | undefined>();
  const audioRef = useRef<HTMLAudioElement>();
  const [duration, setDuration] = useState<number>();
  const [currentTime, setCurrentTime] = useState<number>();

  useEffect(() => {
    const newAudio = new Audio(playingSong?.audio?.url);
    newAudio.ondurationchange = () => {
      setDuration(newAudio.duration);
    };
    newAudio.autoplay = true;
    audioRef.current = newAudio;
    return () => {
      newAudio.src = '';
      newAudio.ondurationchange = null;
    };
  }, [playingSong]);

  useEffect(() => {
    if (playingSong && audioRef.current) {
      audioRef.current.addEventListener('timeupdate', () => {
        setCurrentTime(audioRef.current?.currentTime || 0);
        setDuration(audioRef.current?.duration || 0);
      });
    }
    return () => {
      audioRef?.current?.removeEventListener('timeupdate', () => {
        setCurrentTime(audioRef.current?.currentTime || 0),
          setDuration(audioRef.current?.duration || 0);
      });
    };
  }, [playingSong, audioRef.current]);

  return (
    <AppContext.Provider
      value={{
        playingSong,
        setPlayingSong,
        audioRef,
        songsList,
        setSongsList,
        duration,
        currentTime,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
