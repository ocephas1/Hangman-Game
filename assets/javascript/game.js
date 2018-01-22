//Game object, encompassing logic variables
let game = {


	answerArray: {

			britney: {
				picture: "images/Britney.jpg",
				song: "toxic",
				preview: "http://musicmegaboxen.net/song/436258-toxic/",

			},

			usher: {
				picture: "images/usher.jpeg",
				song: "burn",
				preview: "http://musicmegaboxen.net/song/91655-Burn/",
			},


			pink: {
				picture: "images/pink.jpeg",
				song: "Get This Party Started",
				preview: "http://musicmegaboxen.net/song/12862-Get_The_Party_Started/",
			}
	},
			

//sets start of game

currentWord: null,
correctLetter: [],
guessedLetter: [],
lettersOfWord: [],
guessesLeft: 0,
totalGuesses: 0,
letterGuessed: null, 
wins: 0, 

beginGame: function() {
//pick random word
	let answers = Object.keys(this.answerArray);
	this.currentWord = answers[Math.floor(Math.random() * answers.length)];

//separate individual letters

	this.lettersOfWord = this.currentWord.split("");

//Creates representation of word being guessed and displays to page 
//At start of game sets underscores to respresent each letter in word
	this.setUnderscore();
//Generates and renders to HTML number of guesses user gets
	this.processUpdateTotalGuesses();

},

//run when user makes guess
updatePage: function(letter) {
	//restart if number of guesses is maxed out
		if (this.guessesLeft === 0) {
		this.restartGame();
	}
	//Otherwise..
	else {
		//check and handle incorrect guesses 
		this.updateGuesses(letter);
		//check and handle correct guesses
		this.updateMatchedLetters(letter);
		//Rebuild view of word. Reveal guessed letters, underscores remain for unguessed letters
		this.setUnderscore();
		//If user wins, restart game
		if (this.updateWins() === true) {
			this.restartGame();
		}
	}

},
//This function reacts to user making incorrect guess for the first time
updateGuesses: function(letter) {
	//letters not in the guessedLetters array, 
		if ((this.guessedLetter.indexOf(letter) === -1) && (this.lettersOfWord.indexOf(letter) === -1)) {
			//Add the letter to the guessedLetters array
			this.guessedLetter.push(letter);

			//Decrease guesses by one 
			this.guessesLeft --;

			//Update guesses remaing and guessed letters on page 
			document.querySelector("#guesses-remaining").innerHTML = this.guessesLeft;
			document.querySelector("#guessed-letter").innerHTML = 
			this.guessedLetter.join(",");
		}
},
//Sets the initial guesses per game 

processUpdateTotalGuesses: function() {
	//Number of guesses increase with word length 
	this.totalGuesses = this.lettersOfWord.length + 5;
	this.guessesLeft = this.totalGuesses;


	//Render the guesses left, to the page 
	document.querySelector("#guesses-remaining").innerHTML = this.guessesLeft;

},

//This function successful guesses

updateMatchedLetters: function(letter) {
	//Loop through the letters of the "solution"
	for (let i = 0; i < this.lettersOfWord.length; i++) {
		//If the guessed letter is in Solution, and ha snot been guessed..

		if ((letter === this.lettersOfWord[i]) && (this.correctLetter.indexOf(letter) === -1)) {
			
			//Push the newly guessed letter into the matchedLetters array
			this.correctLetter.push(letter);
		}
	}
},


//Function builds the display of the word that is currently being guessed for letters not guessed in order
setUnderscore: function() {
	//Begin with empty string 

	let wordView = "";


	//Loop through the letters of the word we are trying to guess 
	for (let i = 0; i < this.lettersOfWord.length; i++) {

		//Unguessed letters remain with underscores 
		if (this.correctLetter.indexOf(this.lettersOfWord[i]) !== -1) {
			wordView += this.lettersOfWord[i];
		}

		//If it hasn't been guessed, display a "_" instead 

		else {
			wordView += "&nbsp;_&nbsp;";
		}
	}

	//Update the page with the new string we built 
	document.querySelector("#current-word").innerHTML = wordView;

},

restartGame: function () {
	document.querySelector("#guessed-letter").innerHTML = "";
	this.currentWord = null;
	this.lettersOfWord = [];
	this.guessedLetter = [];
	this.correctLetter = [];
	this.guessesLeft = 0;
	this.totalGuesses = 0;
	this.letterGuessed = null; 
	this.game ();
	this.setUnderscore();

},

//Function that checks for user win

updateWins: function () {
	let win; 

	//Set win to false if you haven't already currectly guessed a letter in the word 
	if (this.correctLetter.length === 0) {
		win = false; 

	}
	//Else, we set to true

	else {
		win = true;

	}
	 //If a letter appears in letterofWord arra, but not in the correctLetter array 
	 //set win to false

	 for( let i = 0; i < this.lettersOfWord.length; i ++) {
	 	if (this.correctLetter.indexOf(this.lettersOfWord[i]) === -1){
	 	win = false; 

	 }
}

		//If win is true.. 
	if (win) {

	//Increment wins 
	this.wins = this.wins + 1;

//Update wins on the page
	document.querySelector("#wins").innerHTML = this.wins;

	document.querySelector("#music").innerHTML = this.answerArray[this.currentWord].song +
	" By " + this.currentWord;

	//Update the image of the Artist on page 

	document.querySelector("#artistDiv").innerHTML = 
	"<img class='artist-image' src='images/" + 
	this.answerArray[this.currentWord].picture + "' alt='" +
	this.answerArray[this.currentWord].song + "'>";

	//Play an audio track of the artist

	let audio = new Audio(this.answerArray[this.currentWord].preview);
	audio.play();

	//return true, which will trigger the restart of our game in the updatePage function 
		return true;
	}
	//If win is false. return false to the updatePage function. 

		return false;
	}
};

	//Initialize the game when page load 
	game.beginGame();


	//on key press 

	document.onkeyup = function(event) {

		//capture pressed key and make it lowercase 
		game.letterGuessed = String.fromCharCode(event.which).toLowerCase();

		//pass guessed letter into updatePage function 

		game.updatePage(game.letterGuessed);

};



// // 2. make songs random
// 		let answers = Math.floor(Math.random() * answerArray.length);

// 		let correctLetter = [];
// 		let incorrectLetter = [];
// 		let chances = 10;
// 		let wins = 0;
// 		let underScore = [];
// 		let chosenWord = answerArray[answers];

// //1a. declare Dom classes
// 		let docUnderScore = document.getElementsByClassName('underScore')
// 		let docCorrectLetter = document.getElementsByClassName('correctLetter')
// 		let docIncorrectLetter = document.getElementsByClassName('incorrectLetter')


// // 3. make dash length equivalent to random word that will be chosen: I have not been 
// //able to make the underscores appear. The letters simply replace the underscores. I also cannot 
// //get the letters to replace the undescores in order. If you type the word in order it will 
// //alert 'You Win!'.


// let generateUnderscore = () => {
// 	for(let i = 0; i < chosenWord.length; i++) {
// 		underScore.push('___');
// 	}
// 	 return underScore;
// }
// // 4. make pressing a key trigger function

// document.addEventListener('keypress', (event) => {
// 	let keyword = String.fromCharCode(event.keyCode);


// 	//4a. if guess is correct
// 	if(chosenWord.indexOf(keyword) > -1){
// 		//add to array
// 		correctLetter.push(keyword)
// 	}
// // 5. reveal dash when correct letter is typed
// 		underScore[correctLetter.indexOf(keyword)] = keyword;
// 		docUnderScore[0].innerHTML = underScore.join('');
// 		docCorrectLetter[0].innerHtml = correctLetter;

// 		if(underScore.join('') == chosenWord) {
// 			alert('You Win!')
// 		}

// 	else (incorrectLetter.push(event))
// 		docIncorrectLetter[0].innerHtml = incorrectLetter;

// });
// // 6. change score: Here I am having trouble getting a score to appear and  increase each
// //time the word is written correctly. 

// //let changeScore = () => {
// 	//for(let i = 0; i === wins; 1++)
// 		//wins.push(event);

// }

// // 7. change remaining guesses
// // 8. You win/You Lose 
// // 9. Reset game 

// //I would liek to get this code to work, and to have the html/css change with thte photo of the 
// //artist with a corresponding song playing. 