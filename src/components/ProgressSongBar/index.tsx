import styles from './Progress.module.css';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Container, Duration, ProgressBar } from './styles';
import { AppContext } from '../../context/AppContext';

export const ProgressSongBar = () => {
  const { audioRef, GetDuration } = useContext(AppContext);
  const progressBar = useRef(null); // reference our progress bar
  const [duration, setDuration] = useState<number | undefined>(0);
  console.log(audioRef?.current?.duration);
  useEffect(() => {
    const seconds =
      audioRef?.current && Math.floor(audioRef?.current?.duration);
    setDuration(seconds);
    // progressBar?.current.max = seconds;
  }, [audioRef?.current?.onloadedmetadata, audioRef?.current?.readyState]);

  const calculateTime = (secs: number) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  // const changeRange = () => {
  //   audioRef?.current?.currentTime = progressBar?.current?.value;
  //   changePlayerCurrentTime();
  // };

  // const changePlayerCurrentTime = () => {
  //   progressBar?.current?.style.setProperty(
  //     '--seek-before-width',
  //     `${(progressBar?.current?.value / duration!) * 100}%`,
  //   );
  //   setCurrentTime(progressBar?.current?.value);
  // };
  return (
    <Container>
      <Duration>
        {/* {GetDuration && !isNaN(duration) && calculateTime(duration!)} */}
        {calculateTime(duration!)}
      </Duration>
      <ProgressBar
        type="range"
        // value={props.value}
        id="myRange"
        onChange={() => console.log(audioRef?.current?.currentTime)}
        ref={progressBar as any}
        // onMouseUp={props.onMouseUp}
        // onTouchEnd={props.onTouchEnd}
      />
    </Container>
  );
};
