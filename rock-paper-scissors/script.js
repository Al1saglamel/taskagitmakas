const choices = ["rock", "paper", "scissors"];

function computerChoice() {
	return choices[Math.floor(Math.random() * choices.length)];
}

function getGameResult(playerChoice, computerChoice) {
	if (playerChoice === computerChoice) {
		return "Berabere!";
	} else if (
		(playerChoice === "rock" && computerChoice === "scissors") ||
		(playerChoice === "paper" && computerChoice === "rock") ||
		(playerChoice === "scissors" && computerChoice === "paper")
	) {
		return "Tebrikler, kazandınız!";
	} else {
		return "Maalesef kaybettiniz.";
	}
}

function startGame() {
	const rockButton = document.getElementById("rock");
	const paperButton = document.getElementById("paper");
	const scissorsButton = document.getElementById("scissors");
	const resultElement = document.getElementById("result");
	
	rockButton.addEventListener("click", () => {
		const computer = computerChoice();
		const result = getGameResult("rock", computer);
		resultElement.textContent = `Bilgisayar "${computer}" seçti. ${result}`;
	});
	
	paperButton.addEventListener("click", () => {
		const computer = computerChoice();
		const result = getGameResult("paper", computer);
		resultElement.textContent = `Bilgisayar "${computer}" seçti. ${result}`;
	});
	
	scissorsButton.addEventListener("click", () => {
		const computer = computerChoice();
		const result = getGameResult("scissors", computer);
		resultElement.textContent = `Bilgisayar "${computer}" seçti. ${result}`;
	});
}

startGame();