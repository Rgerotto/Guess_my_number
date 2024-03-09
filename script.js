//clicking in the button
let secretNumber = Math.trunc(Math.random() * 20 + 1); // here i generate a random number untill 20 include 20 // from 0 to 20
//console.log(secretNumber)
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
}
const displayNumber = function (number) {
  document.querySelector(".number").textContent = number;
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {//using the negation selector i can check if the user enter a valid number or not
  displayMessage('no number!') // if user do not enter a valid number this message will appear
  } 
  else if (guess === secretNumber) {// here i compare if guess is iqual secret number
    displayNumber(secretNumber)// here i display the number in the browser
    displayMessage("Correct Number!") ; // if is correct will display this message
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }
    else if (guess !== secretNumber){
      if (score > 1) {
        displayMessage(guess > secretNumber ? " Too high!" : "Too low!")// if is bigger or small will display this message
        score--;
        document.querySelector(".score").textContent = score;
      } else {
        displayMessage('You lose!')
        document.querySelector(".score").textContent = 0;
      }
    }
  })

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  displayMessage('Start guessing...')
  document.querySelector(".score").textContent = score;
  displayNumber('?')
  document.querySelector(".guess").value = " ";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
})