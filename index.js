#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const wl = path.resolve(__dirname, 'all_memes.txt');


let all = fs.readFileSync(wl, 'utf8').split('\n');
const ltrs = ['l', 'g', 't', 'm'];

const letterMap = new Map([
  ['l', []], ['g', []], ['t', []], ['m', []]
]);

const letterHeading = /\B\[(l|g|t|m)\]\B/i;

async function main() {

  let currentLtr;
  for (const word of all) {
    if (word.match(letterHeading)) {
      currentLtr = word.match(letterHeading)[1];
    } else {
      const currentSet = letterMap.get(currentLtr);
      letterMap.set(currentLtr, currentSet.concat(word));
    }
  }

  for (const letter of ltrs) {
    const index = Math.floor((Math.random() * letterMap.get(letter).length));
    console.log(letterMap.get(letter)[index]);
  }
}


main();

