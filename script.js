// console.log(number_to_be_guess);

let secret_number = Math.trunc(Math.random() * 20) + 1;
let maximum = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const displayNumber = function (number) {
  document.querySelector(".number").textContent = number;
};

const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};
const changeBackground = function (backgroundColor) {
  document.querySelector("body").style.backgroundColor = backgroundColor;
};
const changeWidth = function (width) {
  document.querySelector(".number").style.width = width;
};

let score = 20;
document.querySelector(".check").addEventListener("click", function () {
  if (score > 0) {
    const guess_input = Number(document.querySelector(".guess").value);
    if (!guess_input) {
      displayMessage("No Number! Entered ");
    } else if (guess_input < 0) {
      displayMessage("Hint: Use Common Sense");
    } else if (guess_input === secret_number) {
      displayMessage("Correct Number 🎉");
      displayNumber(secret_number);
      changeBackground("#60b347");
      changeWidth("30rem");
      maximum = Math.max(maximum, score);
      document.querySelector(".highscore").textContent = maximum;
    } else if (guess_input != secret_number) {
      displayMessage(guess_input > secret_number ? "Too High" : "Too Low");
      score--;
      displayScore(score);
    }
  }
  if (score === 0) {
    displayMessage("You Lose! But Don't Give Up! You can try Again ");
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secret_number = Math.trunc(Math.random() * 20) + 1;
  displayScore(score);
  displayMessage("Start guessing...");
  changeBackground("#222");
  changeWidth("15rem");
  displayNumber("?");
  document.querySelector(".guess").value = "";
});
