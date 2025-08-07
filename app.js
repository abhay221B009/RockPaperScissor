let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  console.log("It's a draw!");
  msg.innerText = "It's a draw!";
};

const showWinner = (userWins) => {
  if (userWins) {
    console.log("You win!");
    msg.innerText = "You win!";
  } else {
    console.log("Computer wins!");
    msg.innerText = "You loose!";
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
      userWins = compChoice === "scissors" ? false : true;
    } else if (userChoice === "scissors") {
      userWins = compChoice === "rock" ? false : true;
    }
    showWinner(userWins);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice); // FIXED: pass userChoice as argument
  });
});
