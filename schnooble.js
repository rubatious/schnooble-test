// Your custom list of words
let words = ["example", "schnooble", "wordle", "custom", "list"];

// Select a random word from the list
let currentWord = words[Math.floor(Math.random() * words.length)];

// Store the player's guesses and their results
let guesses = [];

// Keep track of the player's score
let score = 0;

// This function is called when the player submits a guess
function submitGuess() {
    // Get the player's guess from the input field
    let guess = document.getElementById("guess-input").value.toLowerCase();
    
    // Increment the score
    score++;

    // Check if the guess is correct
    if (guess === currentWord) {
        alert("Congratulations! You guessed the word correctly. Your score: " + score);
        // Reset the game after a correct guess
        resetGame();
    } else {
        // Give feedback on the guess
        let feedback = getFeedback(guess);
        guesses.push({guess: guess, feedback: feedback});
        displayGuesses();
    }
}

// The rest of the code is the same...

// This function resets the game after a correct guess
function resetGame() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    guesses = [];
    score = 0;  // Reset the score
    document.getElementById("guess-input").value = "";
    displayGuesses();
}
