import React, { createContext, ReactNode, useRef, useState } from 'react';
import { Data, Song } from '../service/types';

type AppContextProps = {
  playingSong?: Song | undefined;
  setPlayingSong?: (song: Song | undefined) => void;
  songsList?: Data;
  setSongsList?: (songsList: Data | undefined) => void;
  audioRef?: React.LegacyRef<HTMLAudioElement | undefined>;
};
export const AppContext = createContext<AppContextProps>({});

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [playingSong, setPlayingSong] = useState<Song | undefined>();
  const [songsList, setSongsList] = useState<Data | undefined>();
  const audioRef = useRef<HTMLAudioElement>();

  return (
    <AppContext.Provider
      value={{
        playingSong,
        setPlayingSong,
        audioRef,
        songsList,
        setSongsList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
