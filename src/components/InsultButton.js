import React from 'react';

export default function InsultButton(props) {
  function randomIndex(array) {
    let length = array.length;
    let idx = Math.floor(Math.random() * length);
    return idx;
  }

  let lastIndex;

  function playRandom() {
    if (props.onOff) return;
    let idx = randomIndex(props.sound);

    // ensures sounds do not duplicate
    if (idx === lastIndex && props.sound.length > 1) {
      console.log(idx, lastIndex);
      return playRandom();
    }

    // turn off all other sounds if playing
    if (sound !== undefined && sound.duration > 0) {
      sound.pause();
      sound.currentTime = 0;
    }
    const sound = props.sound[idx];

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
