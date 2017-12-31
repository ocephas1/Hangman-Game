//letter to guess will be chosen from this array

const letterArray = [ 

["T", "O", "X", "I" , "C"],

["B", "O", "O", "T", "Y", "L" , "I", "C", "I", "O", "U", "S"], 

["B", "U", "R", "N"], 

]

//word chosen will be random 

const random = Math.floor((Math.random()*(letterArray.length-1)));

const letters = letterArray[random];

const chosenWord = new Array(letters.length);

const guesses = 0;

//every letter is represented by an underscore 

for (let i = 0; i < chosenWord.length; i++){
	chosenWord[i] = "_ ";
}
//prints  to the guess field

function printWord() {
	for (let i = 0; i <
		chosenWord.length; i++){
		const div1 = 
		document.getElementById("div1");

		const wrong = document.createTextNode(chosenWord[i]);

		div1.appendChild(wrong);

	}
}

//identifies if letter guessed matches one or more letters in the chosen word

const displayGuess = function(){
	let m = 
	document.letterGuess;
	let dm = 
	m.elements["letterDisplay"]; 




	const display = dm.value;
	//the letter guessed by player 
	display =

	display.toUpperCase();
	//make any letter pressed default to upper case 
	for (let i = 0; i < letters.length; i ++){
		if(letters[i] === display) {
			chosenWord[i] = display + " ";

			const wordMatch = true;

			dm.value = "";


	//deletes the guessfield and replaces it with the new one
	var div1 =
	document.getElementById("div1");
		div1.innerHTML="";
		printDiv1();
	//if letter guessed is incorrect it willbe places in "incorrect letter list"

	if (!wordMatch){

		const incorrectLetter = document.getElementById("incorrectLetter");

		const incorrect = document.createTextNode(" " + display)

		incorrectLetter.appendChild(incorrect);
	}

//checks if all letters have been found and word is complete 

	const complete = true; 

		for (let i = 0; i < chosenWord.length; i ++) {
			if(chosenWord[i] === "_  ") {
				complete = false;

			}
		}

		if(complete) {
			window.alert("You Win!");

		}

//once you get 10 wrong letters you lose 
		if(guesses === 10) {
			window.alert("Guess Max -- Game Over");

		}
	}
	
		function gameOver() {
			printChosenWord();
		}
		window.onload = gameOver;
}

}