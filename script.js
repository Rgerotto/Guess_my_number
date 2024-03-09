//clicking in the button
let secretNumber = Math.trunc(Math.random() * 20 + 1); // here i generate a random number untill 20

let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    //using the negation selector i can check if the user enter a valid number or not
    document.querySelector(".message").textContent = "no number!"; // if user do not enter a valid number this message will appear
  } else if (guess === secretNumber) {
    // here i compare if guess is iqual secret number
    document.querySelector(".number").textContent = secretNumber; // here i display the number in the browser
    document.querySelector(".message").textContent = "Correct Number!"; // if is correct will display this message
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess > secretNumber) {
    //here i compare if is bigger than the secret number
    if (score > 1) {
      document.querySelector(".message").textContent = " Too high!"; // if is bigger will display this message
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lose!";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = " Too LOW!"; // if is bigger will display this message
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lose!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = " ";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
