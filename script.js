'use strict'
// This is industry standard to enforce tighter grammar for scripts
// alert('Spooky');
// let yeet = prompt('yeet');
//let message = prompt('Yote');
//document.write(message);
let author;
let coinflip = Math.floor(Math.random() * 3);
let SaleStatus;
console.log(coinflip);
if (coinflip == 1) {
  author = 'Aiden';
} else {
  author = 'Zayah';
}
confirm('This website does not use cookies to collect information about you.')
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const d = new Date();
let day = days[d.getDay()];
console.log(day)
function saleDay() {
  if (day == 'Sunday') {
    SaleStatus = 'Sunday Sale!';
  } else {
    SaleStatus = ' ';
  }
  return SaleStatus;
}

function logoClick() {
  window.alert('Illustrated by ' + author)
}
// Script below for Lab 07 but does not make sense in the context of my webpage
function mathHard() {
  let banana = prompt('What is 2 + 2?')
  let monke;

  if (banana == '4' || banana.toLowerCase() === 'four' || banana == '22' || banana.toLowerCase() === 'fish') {
    monke = 'Correct!';
  } else {
    confirm('Not correct.');
    mathHard();
    // monke = 'Not correct!';
  }
  confirm(monke);
  return monke;
}
// let justice = 1
// while(justice < 11){
//   console.log(justice);
//   justice = justice + 1;
// }
// for(let mango = 100; mango >= 0; mango--){
//   //logic
// }
function deckCount() {
  let guess;
  do {
    let guess = prompt('How many cards are in a Tarot deck?');
    if (guess < '78') {
      alert('You\'re a little low!');
    } else if (guess > '78') {
      alert('You\'re a little high!');
    } else  {
      alert('That is correct.')
      return guess;
    }
  } while (guess !== '78');
}
function drawCard() {
  let output = ' ';
  let draws = prompt('How many cards would you like to draw?');
  for(let i = 0; i < draws; i++){
    output = output + "<img class='drawn' src='singlecard.jpg'/>";
  }
  return document.write(output);
}
