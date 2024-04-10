// COIN FLIP SIMULATOR
//gbl variables
let otpt = document.getElementById("output");
let diceOtpt = document.getElementById("diceOtpt");
//counting variables
//for coin flip
let numHeads = 0;
let numTails = 0;
//for dice roll
let num1 = 0;
let num2 = 0;
let num3 = 0;
let num4 = 0;
let num5 = 0;
let num6 = 0;
//btn event listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  //generate randome numebr
  let randNum = Math.random();
  console.log(randNum);
  let headCount = document.getElementById("headsOTPT");
  let tailCount = document.getElementById("tailsOTPT");
  //simulate the coin flip
  if (randNum < 0.5) {
    otpt.innerHTML = "<img src='img/heads.png'>";
    numHeads += 1;
    headCount.innerHTML = numHeads;
  } else {
    otpt.innerHTML = "<img src='img/tails.png'>";
    numTails += 1;
    tailCount.innerHTML = numTails;
  }
}

//dice roll event listener
document.getElementById("rollDice").addEventListener("click", roll);

function roll() {
  //random number
  let randNum2 = Math.floor(Math.random() * 6 + 1);
  console.log(randNum2);
  //counters
  let rolled1 = document.getElementById("rollcount1");
  let rolled2 = document.getElementById("rollcount2");
  let rolled3 = document.getElementById("rollcount3");
  let rolled4 = document.getElementById("rollcount4");
  let rolled5 = document.getElementById("rollcount5");
  let rolled6 = document.getElementById("rollcount6");

  //dice stuff
  if (randNum2 === 1) {
    diceOtpt.innerHTML = "<img src = 'img/1.png'>";
    num1++;
    rolled1.innerHTML = num1;
  } else if (randNum2 == 2) {
    diceOtpt.innerHTML = "<img src = 'img/2.png'>";
    num2++;
    rolled2.innerHTML = num2;
  } else if (randNum2 == 3) {
    diceOtpt.innerHTML = "<img src = 'img/3.png'>";
    num3++;
    rolled3.innerHTML = num3;
  } else if (randNum2 == 4) {
    diceOtpt.innerHTML = "<img src = 'img/4.png'>";
    num4++;
    rolled4.innerHTML = num4;
  } else if (randNum2 == 5) {
    diceOtpt.innerHTML = "<img src = 'img/5.png'>";
    num5++;
    rolled5.innerHTML = num5;
  } else if (randNum2 == 6) {
    diceOtpt.innerHTML = "<img src = 'img/6.png'>";
    num6++;
    rolled6.innerHTML = num6;
  }
}
