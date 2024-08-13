const computer = document.querySelector(".computer img");
const player = document.querySelector(".player img");
const computerPointsElement = document.querySelector(".computerpoints");
const playerPointsElement = document.querySelector(".playerpoints");
const options = document.querySelectorAll(".options button");

const CHOICES = ["rock", "paper", "scissor"];
const TIMEOUT = 900;

let computerPoints = 0;
let playerPoints = 0;

options.forEach((option) => {
  option.addEventListener("click", () => {
    const playerChoice = option.innerHTML.toLowerCase();
    if (!CHOICES.includes(playerChoice)) {
      console.error(`Invalid player choice: ${playerChoice}`);
      return;
    }

    computer.classList.add("shakecomputer");
    player.classList.add("shakeplayer");

    setTimeout(() => {
      computer.classList.remove("shakecomputer");
      player.classList.remove("shakeplayer");

      player.src = `img/${playerChoice}Player.png`;

      const computerChoice =
        CHOICES[Math.floor(Math.random() * CHOICES.length)];
      computer.src = `img/${computerChoice}Computer.png`;

      updatePoints(playerChoice, computerChoice);
    }, TIMEOUT);
  });
});

function updatePoints(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    // Handle tie
    console.log("It's a tie!");
  } else if (
    (playerChoice === "rock" && computerChoice === "scissor") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissor" && computerChoice === "paper")
  ) {
    playerPoints++;
    playerPointsElement.innerHTML = playerPoints;
  } else {
    computerPoints++;
    computerPointsElement.innerHTML = computerPoints;
  }
}
