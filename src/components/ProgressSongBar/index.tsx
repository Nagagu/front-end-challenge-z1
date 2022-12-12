import styles from './Progress.module.css';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Container, Duration, ProgressBar } from './styles';
import { AppContext } from '../../context/AppContext';

export const ProgressSongBar = () => {
  const { audioRef, duration, currentTime } = useContext(AppContext);
  const progressBar = useRef(null); // reference our progress bar
  // const [duration, setDuration] = useState<number | undefined>(0);

  console.log(duration);

  const calculateTime = (secs: number) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  return (
    <Container>
      <Duration>{calculateTime(currentTime ?? 0)}</Duration>
      <ProgressBar
        type="range"
        // value={props.value}
        id="myRange"
        onChange={() => console.log(audioRef?.current?.currentTime)}
        ref={progressBar as any}
        // onMouseUp={props.onMouseUp}
        // onTouchEnd={props.onTouchEnd}
      />
      <Duration>{calculateTime(duration ?? 0)}</Duration>
    </Container>
  );
};
