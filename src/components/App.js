import React from 'react';
// import each sound
import big1 from './sounds/big.mp3';
import bonehead1 from './sounds/bonehead.mp3';
import boring1 from './sounds/boring.mp3';
import completely1 from './sounds/completely.mp3';
import creepy1 from './sounds/creepy.mp3';
import creepy21 from './sounds/creepy2.mp3';
import dweeb1 from './sounds/dweeb.mp3';
import geek1 from './sounds/geek.mp3';
import gigantic1 from './sounds/gigantic.mp3';
import greasy1 from './sounds/greasy.mp3';
import gross1 from './sounds/gross.mp3';
import loser1 from './sounds/loser.mp3';
import nerd1 from './sounds/nerd.mp3';
import obnoxious1 from './sounds/obnoxious.mp3';
import real1 from './sounds/real.mp3';
import slimy1 from './sounds/slimy.mp3';
import slobbering1 from './sounds/slobbering.mp3';
import sticky1 from './sounds/sticky.mp3';
import stinky1 from './sounds/stinky.mp3';
import super11 from './sounds/super1.mp3';
import totally1 from './sounds/totally.mp3';
import ugly1 from './sounds/ugly.mp3';
import ultimate1 from './sounds/ultimate.mp3';
import wacky1 from './sounds/wacky.mp3';
import weasel1 from './sounds/weasel.mp3';
import weird1 from './sounds/weird.mp3';
import wimp1 from './sounds/wimp.mp3';
import wormy1 from './sounds/wormy.mp3';
// convert each to audio to here vs. in function to avoid lag
const big = new Audio(big1);
const bonehead = new Audio(bonehead1);
const boring = new Audio(boring1);
const completely = new Audio(completely1);
const creepy = new Audio(creepy1);
const creepy2 = new Audio(creepy21);
const dweeb = new Audio(dweeb1);
const geek = new Audio(geek1);
const gigantic = new Audio(gigantic1);
const greasy = new Audio(greasy1);
const gross = new Audio(gross1);
const loser = new Audio(loser1);
const nerd = new Audio(nerd1);
const obnoxious = new Audio(obnoxious1);
const real = new Audio(real1);
const slimy = new Audio(slimy1);
const slobbering = new Audio(slobbering1);
const sticky = new Audio(sticky1);
const stinky = new Audio(stinky1);
const super1 = new Audio(super11);
const totally = new Audio(totally1);
const ugly = new Audio(ugly1);
const ultimate = new Audio(ultimate1);
const wacky = new Audio(wacky1);
const weasel = new Audio(weasel1);
const weird = new Audio(weird1);
const wimp = new Audio(wimp1);
const wormy = new Audio(wormy1);
// arrays for each button
let intros = [completely, ultimate, totally, gigantic, real, big, super1];
let firstInsults = [gross, creepy, ugly, slimy, weird, slobbering, stinky];
let secondInsults = [wormy, boring, obnoxious, greasy, sticky, wacky, creepy2];
let closers = [bonehead, loser, geek, dweeb, wimp, weasel, nerd];
// Todo: make component for insul button
// make data set for each insult button
export default function App() {
  let onOff = false;
  // gives the machine the appearance that it has turned on or off
  function onButton() {
    onOff = !onOff;
    const pinkButton = document.querySelector('.intro');
    const insultOneButton = document.querySelector('.insult-1');
    const insultTwoButton = document.querySelector('.insult-2');
    const closingButton = document.querySelector('.closing');
    const questionButton = document.querySelector('.question');
    const playButton = document.querySelector('.play');
    const svgBackground = document.querySelector('svg');

    console.log(onOff);
    if (onOff) {
      pinkButton.classList.add('on');
      insultOneButton.classList.add('on');
      insultTwoButton.classList.add('on');
      closingButton.classList.add('on');
      questionButton.classList.add('on');
      playButton.classList.add('on');
      svgBackground.classList.add('on');
    } else {
      pinkButton.classList.remove('on');
      insultOneButton.classList.remove('on');
      insultTwoButton.classList.remove('on');
      closingButton.classList.remove('on');
      questionButton.classList.remove('on');
      playButton.classList.remove('on');
      svgBackground.classList.remove('on');
    }
  }
  // simple random function
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

    let idx = randomIndex(array);
    // ensures sounds do not duplicate
    if (lastIndex === idx) {
      return playRandom(array);
    }

    if (sound !== undefined) {
      sound.pause();
      sound.currentTime = 0;
    }

    // gets a random sound,
    sound = array[idx];
    console.log(sound, idx, lastIndex);
    lastIndex = idx;
    // so sounds do not overlap

    sound.play();
  }

  let sound1;
  let sound2;
  let sound3;
  let sound4;

  function questionMarkButton() {
    if (!onOff) return;
    // get a random sound from each array
    if (sound1 && sound1.duration > 0) {
      sound1.pause();
    }
    if (sound2 && sound2.duration > 0) {
      sound2.pause();
    }
    if (sound3 && sound3.duration > 0) {
      sound3.pause();
    }
    if (sound4 && sound4.duration > 0) {
      sound4.pause();
    }
    sound1 = intros[randomIndex(intros)];
    sound2 = firstInsults[randomIndex(firstInsults)];
    sound3 = secondInsults[randomIndex(secondInsults)];
    sound4 = closers[randomIndex(closers)];

    // automatically play one after the other
    sound1.pause();
    sound1.currentTime = 0;
    sound1.play();
    sound1.onended = function () {
      sound2.pause();
      sound2.currentTime = 0;
      sound2.play();
    };
    sound2.onended = function () {
      sound3.pause();
      sound3.currentTime = 0;
      sound3.play();
    };
    sound3.onended = function () {
      sound4.pause();
      sound4.currentTime = 0;
      sound4.play();
    };
  }

  return (
    <div className="app-wrapper">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="252.45"
        height="324.51"
        viewBox="-10 -10 272 344"
      >
        <style>{`.black-svg { fill: hsla(126, 80%, 33%, 1) }
                  .green-svg { fill: hsla(126, 80%, 0%, 1) }`}</style>

        <g id="Layer_2">
          <path
            className="green-svg"
            d="M79.78,1.1c0,0,63.18,6.71,94.24,17.29s39.18,25.06,43.06,31.76s26.47,50.47,32.82,116.12
		c6.35,65.65-1.06,113.65-1.76,124.59c-19.93-0.16-34.24-5.65-40.59-11.65c-6.35-6-12.71-32.82-15.53-46.94s-5.65-43.76-12-55.76
		c-6.35-12-26.82-34.94-37.41-39.53c-10.59-4.59-13.41-8.12-17.29-17.65c-3.88-9.53,0.35-27.88-1.41-36.35
		c-1.76-8.47-3.88-15.88-13.41-19.06c-9.53-3.18-20.47-7.06-24.71-11.65C81.54,47.69,76.25,28.27,79.78,1.1z"
          />
          <path
            className="black-svg"
            d="M248.13,290.86c-19.93-0.16-34.24-5.65-40.59-11.65c-6.35-6-12.71-32.82-15.53-46.94s-5.65-43.76-12-55.76
		c-6.35-12-26.82-34.94-37.41-39.53c-10.59-4.59-13.41-8.12-17.29-17.65c-3.88-9.53,0.35-27.88-1.41-36.35
		c-1.76-8.47-3.88-15.88-13.41-19.06c-9.53-3.18-20.47-7.06-24.71-11.65c-4.24-4.59-9.53-24-6-51.18c0,0-39.18-2.47-48.71,0
		S11.31,6.39,4.96,17.69s-5.29,28.94-3.88,35.29s3.88,21.53,6.71,27.88c2.82,6.35,8.82,34.59,9.18,50.82s-1.06,37.75-3.18,52.93
		c-2.12,15.19-5.65,49.42-4.94,57.89c0.71,8.47-2.82,28.24,17.65,52.59c20.47,24.35,61.41,30.35,108.71,29.29
		c47.29-1.06,92.47-0.71,100.94-10.59C244.6,303.92,248.13,290.86,248.13,290.86z"
          />
        </g>
      </svg>
      <div className="app-backgrounds green">
        <button
          className="left-buttons question"
          onClick={() => questionMarkButton()}
        >
          &#63;
        </button>
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
