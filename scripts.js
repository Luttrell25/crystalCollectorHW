console.log("hi");


//variables
var userNum = 0;
var randNum = 0;
var blueDiamond = 3;
var yellowDiamond = 6;
var redDiamond = 9;
var greenDiamond = 12;
var tempNum = 0;
var wins = 0;
var losses = 0;

//functions
function blueCrystalFunc() {
  userNum = tempNum + blueDiamond;
  tempNum = userNum;
  document.getElementById("userNum").innerHTML = userNum;
  console.log(userNum);

  if (userNum > randNum) {
    losses--;
    startgame();
  } else if (userNum === randNum) {
    wins++;
    startgame();
  };
};

function yellowCrystalFunc() {
  userNum = tempNum + yellowDiamond;
  tempNum = userNum;
  document.getElementById("userNum").innerHTML = userNum;
  console.log(userNum);

  if (userNum > randNum) {
    losses--;
    startgame();
  } else if (userNum === randNum) {
    wins++;
    startgame();
  };
};

function redCrystalFunc() {
  userNum = tempNum + redDiamond;
  tempNum = userNum;
  document.getElementById("userNum").innerHTML = userNum;
  console.log(userNum);

  if (userNum > randNum) {
    losses--;
    startgame();
  } else if (userNum === randNum) {
    wins++;
    startgame();
  };
};

function greenCrystalFunc() {
  userNum = tempNum + greenDiamond;
  tempNum = userNum;
  document.getElementById("userNum").innerHTML = userNum;
  console.log(userNum);

  if (userNum > randNum) {
    losses--;
    startgame();
  } else if (userNum === randNum) {
    wins++;
    startgame();
  };
};


function startgame() {
  randNum = ((Math.floor(Math.random() * 3) * 3) + (Math.floor(Math.random() * 6) * 6) + (Math.floor(Math.random() * 9) * 9));
  tempNum = 0;
  userNum = 0;
  document.getElementById("userNum").innerHTML = userNum;
  document.getElementById("randNum").innerHTML = randNum;
  console.log("game has started!");

  document.getElementById("losses").innerHTML = losses;
  document.getElementById("wins").innerHTML = wins;
};
startgame();


//execution
document.getElementById("blueCrystal").addEventListener("click", blueCrystalFunc);
document.getElementById("yellowCrystal").addEventListener("click", yellowCrystalFunc);
document.getElementById("redCrystal").addEventListener("click", redCrystalFunc);
document.getElementById("greenCrystal").addEventListener("click", greenCrystalFunc);
