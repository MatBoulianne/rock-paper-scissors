let scorePlayer = 0;
let scoreCPU = 0;
let currentRound = 0;
let roundDisplay = 1;
const choices = document.querySelectorAll('.choice');
const playerSelection = '';

currentScorePlayer = document.getElementById('currentScorePlayer');
currentScorePlayer.innerHTML = scorePlayer;

currentScoreCPU = document.getElementById('currentScoreCPU');
currentScoreCPU.innerHTML = scoreCPU;

const startBtn = document.getElementById('startBtn');
startBtn.addEventListener('click', function(){
	if(roundsInput.value != '') {
		UI();
		console.log(roundsInput.value);
	} else {
		alert('Enter the number of rounds');
	}
});

function UI(){
	// Change form container & choices
	const formContainer = document.querySelector('.form-container');
	const scoreContainer = document.querySelector('.score-container');

		// Styles
		formContainer.style.display = 'none';
		scoreContainer.style.display = 'flex';
		// Loop an array of choices
		for(let x = 0; x < choices.length; x++){
			choices[x].style.opacity = '1';
			choices[x].style.cursor = 'pointer';
		}
	// Init playerPlay() after clicking start
	playerPlay();
}

function computerPlay(){
	let things = ['ROCK', 'PAPER', 'SCISSORS'];
	let computerSelection = things[Math.floor(Math.random() * things.length)];

	let imgComputer = document.querySelector('.img-computer');

	if(computerSelection === 'ROCK'){
		imgComputer.src = 'img/rock2.png';
	} else if(computerSelection === 'PAPER'){
		imgComputer.src = 'img/paper2.png';
	} else if(computerSelection === 'SCISSORS'){
		imgComputer.src = 'img/scissors2.png';
	}

	return computerSelection;
};

function playerPlay(){
	let rockBtn = document.querySelector('.rockPlayer');
	let paperBtn = document.querySelector('.paperPlayer');
	let scissorsBtn = document.querySelector('.scissorsPlayer');

	let imgPlayer = document.querySelector('.img-player');

	rockBtn.addEventListener('click', function(){
		playRound('ROCK', computerPlay());
		imgPlayer.src = 'img/rock2.png';
	});

	paperBtn.addEventListener('click', function(){
		playRound('PAPER', computerPlay());
		imgPlayer.src = 'img/paper2.png';
	});

	scissorsBtn.addEventListener('click', function(){
		playRound('SCISSORS', computerPlay());
		imgPlayer.src = 'img/scissors2.png';
	});
}

function playRound(playerSelection, computerSelection){

	// Round Result
	roundResult = document.getElementById('roundResult');
	// Round number
	roundNumber = document.getElementById('roundNumber');

	// Draw
	if(playerSelection === 'ROCK' && computerSelection === 'ROCK' || 
		playerSelection === 'PAPER' && computerSelection === 'PAPER' || 
		playerSelection === 'SCISSORS' && computerSelection === 'SCISSORS'){

		currentRound++;
		roundNumber.innerHTML = roundDisplay++;
		roundResult.innerHTML = 'Draw!';

	// Victory
	} else if(playerSelection === 'ROCK' && computerSelection === 'SCISSORS' || 
		playerSelection === 'PAPER' && computerSelection === 'ROCK' || 
		playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {

		currentRound++;
		roundNumber.innerHTML = roundDisplay++;
		roundResult.innerHTML = 'You Won!';
		scorePlayer++;
		currentScorePlayer.innerHTML = scorePlayer;	

	// Defeat
	} else if(playerSelection === 'ROCK' && computerSelection === 'PAPER' || 
		playerSelection === 'PAPER' && computerSelection === 'SCISSORS' || 
		playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
				
		currentRound++;
		roundNumber.innerHTML = roundDisplay++;
		roundResult.innerHTML = 'You Lose!';
		scoreCPU++;
		currentScoreCPU.innerHTML = scoreCPU;
	}

	endGame();

	return computerSelection;
};

function endGame(){
	let roundsInput = parseInt(document.getElementById('roundsInput').value);

	if(currentRound === roundsInput) {
		if(scorePlayer > scoreCPU){
			roundResult.innerHTML = `<span class='win-text result-text'>You won the game!</span>`;
			let imgWinner = document.querySelector('.img-winner');
			imgWinner.style.display = 'block';
		} else if(scorePlayer < scoreCPU){
			roundResult.innerHTML = `<span class='lost-text result-text'>You lost the game!</span>`;
			let imgLoser = document.querySelector('.img-loser');
			imgLoser.style.display = 'block';
		} else {
			roundResult.innerHTML = `<span class='result-text'>It's a Draw!</span>`;
			let imgDraw = document.querySelector('.img-draw');
			imgDraw.style.display = 'block';
		}

		for(let x = 0; x < choices.length; x++){
			choices[x].style.display = 'none';
		}
	}
}