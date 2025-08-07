let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
  let options = ["rock", "paper", "scissors"];
  //rock, paper, scissors
};

const playGame = (userChoice) => {
  console.log(userChoice);
  //generating computer choice
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame();
  });
});
