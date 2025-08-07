let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreDisplay = document.querySelector("#user-score");
const compScoreDisplay = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  console.log("It's a draw!");
  msg.innerText = "It's a draw!";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWins, userChoice, compChoice) => {
  if (userWins) {
    userScore++;
    userScoreDisplay.innerText = userScore;
    console.log("You win!");
    msg.innerText = `You win! , Computer chose ${compChoice} `;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScoreDisplay.innerText = compScore;
    console.log("Computer wins!");
    msg.innerText = `You loose! , Computer chose ${compChoice} `;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  console.log("userchoice", userChoice);
  const compChoice = genCompChoice();
  console.log("compchoice", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWins = true;

    if (userChoice === "rock") {
      userWins = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWins = compChoice === "scissor" ? false : true;
    } else if (userChoice === "scissor") {
      userWins = compChoice === "rock" ? false : true;
    }
    showWinner(userWins, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice); // FIXED: pass userChoice as argument
  });
});
