// Your custom list of words
let words = ["example", "schnooble", "wordle", "custom", "list"];

// Select a random word from the list
let currentWord = words[Math.floor(Math.random() * words.length)];

// Store the player's guesses and their results
let guesses = [];

// This function is called when the player submits a guess
function submitGuess() {
    // Get the player's guess from the input field
    let guess = document.getElementById("guess-input").value.toLowerCase();
    
    // Check if the guess is correct
    if (guess === currentWord) {
        alert("Congratulations! You guessed the word correctly.");
        // Reset the game after a correct guess
        resetGame();
    } else {
        // Give feedback on the guess
        let feedback = getFeedback(guess);
        guesses.push({guess: guess, feedback: feedback});
        displayGuesses();
    }
}

// This function gives feedback on the player's guess
function getFeedback(guess) {
    let feedback = "";
    for (let i = 0; i < guess.length; i++) {
        if (guess[i] === currentWord[i]) {
            feedback += "🟩";  // Green for correct letter in correct position
        } else if (currentWord.includes(guess[i])) {
            feedback += "🟨";  // Yellow for correct letter in wrong position
        } else {
            feedback += "🟥";  // Red for incorrect letter
        }
    }
    return feedback;
}

// This function displays the player's guesses and their feedback on the webpage
function displayGuesses() {
    let guessesDiv = document.getElementById("guesses");
    guessesDiv.innerHTML = "";
    for (let guess of guesses) {
        guessesDiv.innerHTML += guess.guess + ": " + guess.feedback + "<br>";
    }
}

// This function resets the game after a correct guess
function resetGame() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    guesses = [];
    document.getElementById("guess-input").value = "";
    displayGuesses();
}
