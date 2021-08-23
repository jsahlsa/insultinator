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

export default function App() {
  return (
    <div class="app-wrapper">
      <div className="app-backgrounds green">
        <audio controls src={weasel}></audio>
      </div>
      <div className="app-backgrounds black">
        <div className="insult-wrapper">
          <button className="insults intro"></button>
          <button className="insults insult-1"></button>
          <button className="insults insult-2"></button>
          <button className="insults closing"></button>
        </div>
      </div>
    </div>
  );
}

// 2nd set: creepy2, wacky, sticky, greasy, obnoxious, boring, wormy
