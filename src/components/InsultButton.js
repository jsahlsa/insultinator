import React from 'react';

export default function InsultButton(props) {
  function randomIndex(array) {
    let length = array.length;
    let idx = Math.floor(Math.random() * length);
    return idx;
  }

  let lastIndex;
  let sound;

  function playRandom() {
    if (props.onOff) return;
    if (props.sound !== undefined && props.sound.duration > 0) {
      props.sound.pause();
      props.sound.currentTime = 0;
      console.log(props.sound.duration);
    }

    let idx = randomIndex(props.sound);

    // ensures sounds do not duplicate
    if (idx === lastIndex && props.sound.length > 1) {
      console.log(idx, lastIndex);
      return playRandom();
    }
    console.log(sound, 1);
    // turn off all other sounds if playing
    sound = props.sound[idx];
    console.log(sound, 3, idx);
    // gets a random sound,
    //console.log(sound, idx, lastIndex);
    lastIndex = idx;
    // so sounds do not overlap
    sound.currentTime = 0;
    sound.pause();
    sound.play();
  }
  return (
    <button
      className={props.class}
      name={props.name}
      onClick={playRandom}
    ></button>
  );
}
