
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // Random Number between 1 - 6

var randomImageSource1 = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src",randomImageSource1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImageSource2 = "images/dice" +randomNumber2 +".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImageSource2);

//If Player 1 wins
if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
}
//If Player 2 Wins
else if (randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Plater 2 Wins 🚩";
}
//If Draw
else{
  document.querySelector("h1").innerHTML = "Draw!";
}
