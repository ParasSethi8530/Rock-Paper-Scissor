const computer = document.querySelector(".computer img");
const player = document.querySelector(".player img");
let computerPoints = document.querySelector(".computerpoints");
let playerPoints = document.querySelector(".playerpoints");
const options = document.querySelectorAll(".options button");

options.forEach((option) => {
  option.addEventListener("click", () => {
    computer.classList.add("shakecomputer");
    player.classList.add("shakeplayer");

    setTimeout(() => {
      computer.classList.remove("shakecomputer");
      player.classList.remove("shakeplayer");

      player.src = "img/" + option.innerHTML + "Player.png";

      const choice = ["rock", "paper", "scissor"];
      let arrayNo = Math.floor(Math.random() * 3);
      let computerChoice = choice[arrayNo];

      computer.src = "img/" + computerChoice + "Computer.png";

      let cPoints = parseInt(computerPoints.innerHTML);
      let pPoints = parseInt(playerPoints.innerHTML);

      if (option.innerHTML === "rock") {
        if (computerChoice === "paper") computerPoints.innerHTML = cPoints + 1;
        else if (computerChoice === "scissor")
          playerPoints.innerHTML = pPoints + 1;
      } else if (option.innerHTML === "paper") {
        if (computerChoice === "rock") playerPoints.innerHTML = pPoints + 1;
        else if (computerChoice === "scissor")
          computerPoints.innerHTML = cPoints + 1;
      } else {
        if (computerChoice === "paper") playerPoints.innerHTML = pPoints + 1;
        else if (computerChoice === "rock")
          computerPoints.innerHTML = cPoints + 1;
      }
    }, 900);
  });
});
