// 1. declare variables

const answerArray = [
		"toxic", 
		"fireflies", 
		"bootylicious", 
		"dilema"
];

// 2. make songs random
let answers = Math.floor(Math.random() * answerArray.length);

let score = 0;
let correctLetter = [];
let incorrectLetter = [];
let chances = 10;
let wins = 0;
let underScore = [];
let chosenWord = answerArray[answers];

//1a. declare Dom classes
let docUnderScore = document.getElementsByClassName('underScore')
let docCorrectLetter = document.getElementsByClassName('correctLetter')
let docIncorrectLetter = document.getElementsByClassName('incorrectLetter')


// 3. make dash length equivalent to random word that will be chosen

let generateUnderscore = () => {
	for(let i = 0; i < chosenWord.length; i++) {
		underScore.push('___');
	}
	 return underScore;
}
// 4. make pressing a key trigger function

document.addEventListener('keypress', (event) => {
	let keyword = String.fromCharCode(event.keyCode);


	//4a. if guess is correct
	if(chosenWord.indexOf(keyword) > -1){
		//add to array
		correctLetter.push(keyword)
	}
// 5. reveal dash when correct letter is typed
		underScore[correctLetter.indexOf(keyword)] = keyword;
		docUnderScore[0].innerHTML = underScore.join('');
		docCorrectLetter[0].innerHtml = correctLetter;

		if(underScore.join('') == chosenWord) {
			alert('You Win!')
		}

	else (incorrectLetter.push(event))
});
// 6. change score 
// 7. change remaining guesses
// 8. You win/You Lose 
// 9. Reset game 