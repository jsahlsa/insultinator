import React from 'react';
import big from './sounds/big.mp3';
import bonehead from './sounds/bonehead.mp3';
import boring from './sounds/boring.mp3';
import completely from './sounds/completely.mp3';
import creepy from './sounds/creepy.mp3';
import creepy2 from './sounds/creepy2.mp3';
import dweeb from './sounds/dweeb.mp3';
import geek from './sounds/geek.mp3';
import gigantic from './sounds/gigantic.mp3';
import greasy from './sounds/greasy.mp3';
import gross from './sounds/gross.mp3';
import loser from './sounds/loser.mp3';
import nerd from './sounds/nerd.mp3';
import obnoxious from './sounds/obnoxious.mp3';
import real from './sounds/real.mp3';
import slimy from './sounds/slimy.mp3';
import slobbering from './sounds/slobbering.mp3';
import sticky from './sounds/sticky.mp3';
import stinky from './sounds/stinky.mp3';
import super1 from './sounds/super1.mp3';
import totally from './sounds/totally.mp3';
import ugly from './sounds/ugly.mp3';
import ultimate from './sounds/ultimate.mp3';
import wacky from './sounds/wacky.mp3';
import weasel from './sounds/weasel.mp3';
import weird from './sounds/weird.mp3';
import wimp from './sounds/wimp.mp3';
import wormy from './sounds/wormy.mp3';

let intros = [completely, ultimate, totally, gigantic, real, big, super1];
let firstInsults = [gross, creepy, ugly, slimy, weird, slobbering, stinky];
let secondInsults = [wormy, boring, obnoxious, greasy, sticky, wacky, creepy2];
let closers = [bonehead, loser, geek, dweeb, wimp, weasel, nerd];

export default function App() {
  let onOff = false;

  function onButton() {
    onOff = !onOff;
    const pinkButton = document.querySelector('.intro');
    const insultOneButton = document.querySelector('.insult-1');
    const insultTwoButton = document.querySelector('.insult-2');
    const closingButton = document.querySelector('.closing');
    const questionButton = document.querySelector('.question');
    const playButton = document.querySelector('.play');

    console.log(onOff);
    if (onOff) {
      pinkButton.classList.add('on');
      insultOneButton.classList.add('on');
      insultTwoButton.classList.add('on');
      closingButton.classList.add('on');
      questionButton.classList.add('on');
      playButton.classList.add('on');
    } else {
      pinkButton.classList.remove('on');
      insultOneButton.classList.remove('on');
      insultTwoButton.classList.remove('on');
      closingButton.classList.remove('on');
      questionButton.classList.remove('on');
      playButton.classList.remove('on');
    }
  }

  function randomIndex(array) {
    let length = array.length;
    let idx = Math.floor(Math.random() * length);
    return idx;
  }

  let lastIndex;
  let sound;

  function playRandom(array) {
    if (!onOff) {
      return;
    }
    if (sound) {
      sound.currentTime = 0;
      sound.pause();
    }
    let idx = randomIndex(array);
    if (lastIndex === idx) {
      return playRandom(array);
    }
    sound = new Audio(array[idx]);
    console.log(sound, idx, lastIndex);
    lastIndex = idx;

    sound.play();
  }

  return (
    <div className="app-wrapper">
      <div className="app-backgrounds green">
        <button className="left-buttons question">?</button>
        <button className="left-buttons play" onClick={() => onButton()}>
          Play
          <br />
          /On
        </button>
      </div>
      <div className="app-backgrounds black">
        <div className="insult-wrapper">
          <button
            className="insults intro"
            onClick={() => playRandom(intros)}
          ></button>
          <button
            className="insults insult-1"
            onClick={() => playRandom(firstInsults)}
          ></button>
          <button
            className="insults insult-2"
            onClick={() => playRandom(secondInsults)}
          ></button>
          <button
            className="insults closing"
            onClick={() => playRandom(closers)}
          ></button>
        </div>
      </div>
    </div>
  );
}

// 2nd set: creepy2, wacky, sticky, greasy, obnoxious, boring, wormy
