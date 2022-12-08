import { createContext, ReactNode, useState } from 'react';
import { Song } from '../service/types';

type AppContextProps = {
  playingSong?: Song | undefined;
  setPlayingSong?: (song: Song | undefined) => void;
};
export const AppContext = createContext<AppContextProps>({});

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [playingSong, setPlayingSong] = useState<Song | undefined>();

  return (
    <AppContext.Provider
      value={{
        playingSong,
        setPlayingSong,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
