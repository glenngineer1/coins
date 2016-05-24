/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

function coinCounter (input) {
  // Initialize a JavaScript object to hold the coins
  var input = "0.67";
  var coinPurse = {};

  coinPurse.quarters = 0;
  coinPurse.dimes = 0;
  coinPurse.nickels = 0;
  coinPurse.pennies = 0;

  coinPurse.quarters = Math.floor(input/.25);
  coinPurse.dimes = Math.floor((input - coinPurse.quarters * .25)/.10);
  coinPurse.nickels = Math.floor((input - (coinPurse.quarters * .25 + coinPurse.dimes * .10))/.05);
  coinPurse.pennies = Math.floor((input - (coinPurse.quarters * .25 + coinPurse.dimes * .10 + coinPurse.nickels * .05))/.01);

  // return coinPurse;
  console.log("coinPurse", coinPurse);
};
coinCounter();
// var coins = coinCounter()
