// 1. declare variables

const answerArray = [
		"toxic", 
		"angel", 
		"burn", 
		"dilema"
];

// 2. make songs random
let answers = Math.floor(Math.random() * answerArray.length);

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


// 3. make dash length equivalent to random word that will be chosen: I have not been 
//able to make the underscores appear. The letters simply replace the underscores. I also cannot 
//get the letters to replace the undescores in order. If you type the word in order it will 
//alert 'You Win!'.

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
		docIncorrectLetter[0].innerHtml = incorrectLetter;

});
// 6. change score: Here I am having trouble getting a score to appear and  increase each
//time the word is written correctly. 

//let changeScore = () => {
	//for(let i = 0; i === wins; 1++)
		//wins.push(event);

}

// 7. change remaining guesses
// 8. You win/You Lose 
// 9. Reset game 

//I would liek to get this code to work, and to have the html/css change with thte photo of the 
//artist with a corresponding song playing. 