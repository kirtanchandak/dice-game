// changing image 1
var randomNumber1 = Math.floor(Math.random() * 6 ) + 1;
var randomDiceImg = `./images/dice${randomNumber1}.png`;


var image1 = document.querySelectorAll(".img1")[0];
image1.setAttribute("src", randomDiceImg); 

// changing image 2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImg2 = `./images/dice${randomNumber2}.png`;

var kirtan = document.querySelectorAll(".img2")[0]; 
kirtan.setAttribute("src", randomDiceImg2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h2").innerHTML = "Player 1 Won 🚀!"; 
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h2").innerHTML = "Player 2 Won 🚀!"; 
} else {
    document.querySelector("h2").innerHTML = "It's a Tie🪢!"; 
} 
















