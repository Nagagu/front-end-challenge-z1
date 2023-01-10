import React, { useContext, useRef } from 'react';
import { Container, Duration, ProgressBar } from './styles';
import { AppContext } from '../../context/AppContext';

export const ProgressSongBar = () => {
  const { audioRef, duration, currentTime, setCurrentTime } =
    useContext(AppContext);
  const progressBar = useRef(null); // reference our progress bar
  const calculateTime = (secs: number) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const onScrub = (value: number) => {
    if (audioRef?.current) {
      audioRef.current.currentTime = value;
      setCurrentTime && setCurrentTime(value);
    }
  };

  return (
    <Container>
      <Duration>{calculateTime(currentTime ?? 0)}</Duration>
      <ProgressBar
        type="range"
        value={currentTime}
        id="myRange"
        max={duration}
        onChange={(e) => onScrub(Number(e.target.value))}
        ref={progressBar as any}
      />
      <Duration>{calculateTime(duration ?? 0)}</Duration>
    </Container>
  );
};
