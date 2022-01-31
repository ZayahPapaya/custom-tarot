'use strict'
// This is industry standard to enforce tighter grammar for scripts
// alert('Spooky');
// let yeet = prompt('yeet');
//let message = prompt('Yote');
//document.write(message);
let author; 
let coinflip = Math.floor(Math.random() * 3);
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
let SaleStatus;
if(day == 'Sunday'){
    SaleStatus = 'Sunday Sale!';
  } else{
    SaleStatus = ' ';
  }
