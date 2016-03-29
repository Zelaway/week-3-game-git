alert("Welcome to the Psychic Game");
		alert("This Game will See if the Computer Knows which letter you Will Select.  You'll have 10 tries.  If the computer guess 1 out of the 10 letters you choose in your 10 tries.  You Lose.  If the computer cannot Guess the any of the letter you choose out of 10 tries.  You win.  It will keep score.");
		alert("READY TO PLAY? Press OK---Then select any letter as your first guess");

//Global Variables
//-------------------------------
		var wins = 0;
		var losses = 0;
		var guessesLeft = 10;
		var alreadyGuessed =[];

//Functions for game
//--------------------------------

		function game (){
			// wins = 0;
			// losses = 0;
			guessesLeft = 9;
			alreadyGuessed = [];



			var randomLetter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; // letters users will pick

			var secretLetter = randomLetter[Math.floor(Math.random()*randomLetter.length)];
				console.log(secretLetter); //letters the computer will generate

			document.onkeyup=function(event){
				var userGuess= String.fromCharCode(event.keyCode).toLowerCase(); 

			// var secretLetter = function () {

			// 	randomLetter[Math.floor(Math.random()*randomLetter.length)];
			// 	} 
				//secretLetter() //make function so you can call it
				console.log(alreadyGuessed) // 
					if(userGuess == secretLetter){
						wins ++;
						alert("You Won!");
						console.log("you won!", wins);
						game();
					}else if((userGuess != secretLetter) && (guessesLeft >0)){
						guessesLeft--;
						alreadyGuessed.push(userGuess);
						//console.log("Already Guessed", guessesLeft);
					
					}else if (guessesLeft==0){
						alert("You Loser");
						losses++;
						game();
					}
				var message = "<p> Wins: " + wins + "</p>" +
							  "<p> Losses: " + losses + "</p>" +
							  "<p> Guesses Left: " + guessesLeft + "</p>"+
							  "<p> Your Guesses So Far: " + alreadyGuessed + "</p>";
				document.querySelector("#game").innerHTML=message;

			}
		

		}
		game();

	//Code to get the page started

		document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')