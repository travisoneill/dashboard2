'use strict';

const dollarFormat = (num, showCents) => {
  let [dollars, cents] = num.toString().split('.');
  dollars = dollars[0] === '-' ? dollars.slice(1) : dollars;
  let dollarString = '';
  for(var i = 0; i < dollars.length; i++){
    let idx = dollars.length - i - 1;
    if(i % 3 === 0 && i > 0){
      dollarString = ',' + dollarString
    }
    dollarString = dollars[idx] + dollarString;
  }
  if(showCents){
    let centString = cents || '';
    while(centString.length < 2){
      centString += '0'
    }
    if(centString.length > 2){ centString = centString.slice(0, 2); }
    dollarString += '.';
    dollarString += centString;
  }
  dollarString = '$' + dollarString;
  if(num < 0){ dollarString = '-' + dollarString; }
  return dollarString;
}
