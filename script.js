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
if(coinflip == 1){
    author = 'Aiden';
} else {
    author =  'Zayah';
}
confirm('This website does not use cookies to collect information about you.')
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const d = new Date();
let day = days[d.getDay()];
console.log( day )
function saleDay() {
  if(day == 'Sunday'){
    SaleStatus = 'Sunday Sale!';
  } else{
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

  if(banana == '4' || banana.toLowerCase() === 'four' || banana == '22' || banana.toLowerCase() === 'fish') {
    monke = 'Correct!';
  } else {
    confirm('Not correct.');
    mathHard();
   // monke = 'Not correct!';
  }
  confirm( monke );
  return monke;
}

