console.log("LoadedScript");

function LoadImage(	) {
		
}

let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrhi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessesSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;

guessSubmit.addEventListener("click",checkGuess);

guessField.focus();
function checkGuess()
{

	if(typeof(guessField.value) == "string")
	{
		alert("Only numbers are allowed");
		return;
	}
	let userGuess = Number(guessField.value);

	if(guessCount === 1)
	{
		guesses.textContent = "intentos anteriores :";
	}

	

	guesses.textContent += userGuess + " ";

	if(userGuess === randomNumber)
	{
		lastResult.textContent = "Correct GG!";
		lastResult.style.backgroundColor = 'green';
		lowOrhi.textContent = "";
		SetGameOver();

	}else if(guessCount === 10)
	{
		lastResult.textContent = "!!!GameOver!!!";
		SetGameOver();
	}else
	{
		lastResult.textContent = "!wrong";
		lastResult.style.backgroundColor = 'red';
		
		if(userGuess > randomNumber)
		{
			lowOrhi.textContent = "number to high!";

		}else if(userGuess < randomNumber){

			lowOrhi.textContent = "number to low";
		}
	}
	guessField.value = "";
	guessField.focus();
	guessCount++;

	console.log("user trys: " + (guessCount -1));
}
function SetGameOver()
{
	guessField.disabled = true;
	guessSubmit.disabled = true;
	resetButton = document.createElement("button");
	resetButton.textContent = "Star New Game"
	document.body.appendChild(resetButton);
	resetButton.addEventListener("click",resetGame);
}

function resetGame()
{
	guessCount = 1;
	const restParas = document.querySelectorAll(".resultParas p");
	for(let i = 0; i < restParas.length; i++)
	{
		restParas[i].textContent = "";
	}

	resetButton.parentNode.removeChild(resetButton);


	guessField.disabled = false;
	guessSubmit.disabled = false;
	guessField.value = "";
	guessField.focus();

	lastResult.style.backgroundColor = "white";
	randomNumber = Math.floor(Math.random()	 * 100) + 1;

}
