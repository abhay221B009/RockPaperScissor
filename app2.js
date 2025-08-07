// each of the occurrences have equal chances of happening with this logic
let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreDisplay = document.querySelector("#user-score");
const compScoreDisplay = document.querySelector("#comp-score");

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
    msg.innerText = `You win! , Computer chose ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScoreDisplay.innerText = compScore;
    console.log("Computer wins!");
    msg.innerText = `You lose! , Computer chose ${compChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  console.log("userchoice", userChoice);

  // Random outcome: 0 = draw, 1 = user wins, 2 = comp wins
  const outcome = Math.floor(Math.random() * 3);

  let compChoice;

  if (outcome === 0) {
    // Draw: compChoice same as userChoice
    compChoice = userChoice;
    drawGame();
  } else if (outcome === 1) {
    // User wins: compChoice = what userChoice beats
    if (userChoice === "rock") compChoice = "scissor";
    else if (userChoice === "paper") compChoice = "rock";
    else compChoice = "paper";
    showWinner(true, userChoice, compChoice);
  } else {
    // Comp wins: compChoice = what beats userChoice
    if (userChoice === "rock") compChoice = "paper";
    else if (userChoice === "paper") compChoice = "scissor";
    else compChoice = "rock";
    showWinner(false, userChoice, compChoice);
  }

  console.log("compchoice", compChoice);
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
