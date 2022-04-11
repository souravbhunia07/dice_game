// Dice section

var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var photo1 = "images/dice" + randomNumber1 + ".png";
var photo2 = "images/dice" + randomNumber2 + ".png";
document.querySelector("img.img1").setAttribute("src", photo1);
document.querySelector("img.img2").setAttribute("src", photo2);

// Heading section

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩Player1 Wins!";
}
else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player2 Wins!🚩";
}
else{
  document.querySelector("h1").innerHTML = "Draw";
}
