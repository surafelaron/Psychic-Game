 //Variables for Psychic Game

 var machineLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 var Win = 0;
 var Lose = 0;
 var guessesRemaining = 10;
 var guessedLetters = []; // An Array that will keep track of key letters entered 

 document.onkeyup = function (event) {
 // Gathers user's guessed letters 
   var userGuess = event.key;
   guessedLetters.push(userGuess); 
   //  adds new items to the end of an array    
   var psychicAnswer = machineLetters[Math.floor(Math.random() * machineLetters.length)];

   //reset
   var reset = function () {
     guessesRemaining = 10;
     guessedLetters = [];
   }

   // score up
   if (userGuess === psychicAnswer) {
     Win++;
     guessesRemaining = 9;
     reset();
   }
   // guess remaining down
   else {
     guessesRemaining--;
   }

   // try again
   if (guessesRemaining === 0) {
     Lose++;
     guessesRemaining = 9;
     reset();
   }

   var text = "<h1>Let See If You're Lucky...!!</h1>" + "<h3>Wins: " + Win + "</h3>" + "<h3>Loses: " + Lose + "<h3>Guesses Left: " + guessesRemaining + "<h3>Your Guesses so far: " + guessedLetters.join(', ');
    //Reveal guessed letters here
   document.getElementById("gameInformation").innerHTML = text;
 }
