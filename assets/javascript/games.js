var computerChoice = ["q","w","e","r","t","y","u","i","o","p",
					"a","s","d","f","g","h","j","k","l",
					"z","x","c","v","b","n","m"];


var humanChoice = ["q","w","e","r","t","y","u","i","o","p",
					"a","s","d","f","g","h","j","k","l",
					"z","x","c","v","b","n","m"];

var wins = 0;
var losses =0;


alert("Welcome to the Psychic Game");
alert("This Game will See if the Computer Knows which letter you Will Select.  You'll have 10 tries.  If the computer guess 1 out of the 10 letters you choose in your 10 tries.  You Lose.  If the computer cannot Guess the any of the letter you choose out of 10 tries.  You win.  It will keep score.");
alert("READY TO PLAY? Press OK---the background will change color to let you know you can start and just start pressing keys");
 //instructions

/*var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];				
alert(computerGuess);*/


document.onkeyup = function(event){
	
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
		console.log(computerGuess);
		console.log(userGuess);
			if(computerGuess==userGuess){
				wins++;
				console.log(wins)
			}else{
				losses++;
				console.log(losses);
			}
	
	
}



/*if((userGuess == computerGuess)){
		wins++;
	} else {
		losses++;
	}

}*/
