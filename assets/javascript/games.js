alert("Welcome to the Psychic Game");
alert("This Game will See if the Computer Knows which letter you Will Select.  You'll have 10 tries.  If the computer guess 1 out of the 10 letters you choose in your 10 tries.  You Lose.  If the computer cannot Guess the any of the letter you choose out of 10 tries.  You win.  It will keep score.");
alert("READY TO PLAY? Press OK---Background will chnage while game is in play"); //instructions 

var computerChoice["q","w","e","r","t","y","u","i","o","p",
					"a","s","d","f","g","h","j","k","l",
					"z","x","c","v","b","n","m"]


var humanChoice["q","w","e","r","t","y","u","i","o","p",
					"a","s","d","f","g","h","j","k","l",
					"z","x","c","v","b","n","m"]


if(computerChoice===humanChoice){
	alert("You won!")
}