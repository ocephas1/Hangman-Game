const letter = [ "T", "O", "X", "I", "C"] 
	
let unguessedLetter = "___"
let score = 0;

function correctKeyPressed(guess) {
	correctKeyPressed(letter)

	if ((letter === "t") || (letter ==="o") || (letter ==="x") 

	|| (letter == "i")|| (letter === "c")) {

			document.write(letter);

	score++;
	updateScore();

}
	else {
		prompt("Keep Guessing!")
	}}


	window.addEventListener('keyup', function(guess) {

	})

	"with you", "baby boy", "in da club"]



	//const userGuess = event.key;


	//function renderLetter () {

	//letter = String.fromCharCode(event.keyCode).toLowerCase();


	let rightWord = [];
let wrongWord = [];
let underScore = [];

//Manipulate html (dom)
let docUnderScore = document.getElementsByClassName('underScore');
let docRightGuess = document.getElementsByClassName('rightGuess');
let docWrongGuess = document.getElementsByClassName('wrongGuess');

//creates underscore based on length of word
let generateUnderScore = () => {
	for (let i = 0; i < word.length; i++) {
		underScore.push('___');

	}
	return underScore;
}


document.addEventListener('keypress', (event) => {
	let keyword = String.fromCharCode(event.keyCode);
	if(word.indexOf(keyword) > -1){
		
		rightWord.push(keyword);

		underScore[word.indexOf(keyword)] = keyword;
		docUnderScore[0].innerHTML = underScore.join('');
		docRightGuess[0].innerHTML = rightWord;

	if (underScore.join('') === word) {
			alert('You Win!');
		}
		else {

		wrongWord.push(keyword);
		docUnderScore[0].innerHTML = wrongGuess.join('');
		docWrongGuess[0].innerHTML = wrongWord;
		}
	}

});








//Create array of possible songs 

document.onkeyup = function(event) {

	const userGuess = event.key;
}

const song = [
	"toxic",
	"with you",
	"baby boy",
	"in da club"

];

const song = song[Math.floor(Math.random() = song.length)];

let rightWord = [];
let wrongWord = [];
let underScore = [];

//Manipulate html (dom)
let docUnderScore = document.getElementsByClassName('underScore');
let docRightGuess = document.getElementsByClassName('rightGuess');
let docWrongGuess = document.getElementsByClassName('wrongGuess');

//creates underscore based on length of word
let generateUnderScore = () => {
	for (let i = 0; i < word.length; i++) {
		underScore.push('___');

	}
	return underScore;
}


document.addEventListener('keypress', (event) => {
	let keyword = String.fromCharCode(event.keyCode);
	if(word.indexOf(keyword) > -1){
		
		rightWord.push(keyword);

		underScore[word.indexOf(keyword)] = keyword;
		docUnderScore[0].innerHTML = underScore.join('');
		docRightGuess[0].innerHTML = rightWord;

	if (underScore.join('') === word) {
			alert('You Win!');
		}
		else {

		wrongWord.push(keyword);
		docUnderScore[0].innerHTML = wrongGuess.join('');
		docWrongGuess[0].innerHTML = wrongWord;
		}
	}

});




