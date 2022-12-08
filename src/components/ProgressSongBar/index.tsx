import styles from './Progress.module.css';
import React from 'react';
import { Container, ProgressBar } from './styles';

export const ProgressSongBar = () => {
  return (
    <Container>
      <ProgressBar
        type="range"
        min="1"
        max="100"
        step="1"
        // value={props.value}
        id="myRange"
        // onChange={props.onChange}
        // onMouseUp={props.onMouseUp}
        // onTouchEnd={props.onTouchEnd}
      />
    </Container>
  );
};
