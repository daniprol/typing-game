const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("eng-game");
const settingsBtn = document.getElementById("settings-btn");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const difficultySelect = document.getElementById("difficulty");

// List of words for the game:
const words = [
  "Lorem",
  "ipsum",
  "dolor",
  "sit",
  "amet",
  "consectetur",
  "adipisicing",
  "elit",
  "Officia",
  "veniam",
  "et",
  "maxime",
  "odit",
  "Iure",
  "officia",
  "recusandae",
  "minima",
  "commodi",
  "consequuntur",
  "sunt",
  "aut",
  "eveniet",
  "sapiente",
  "nam",
  "debitis",
  "quas",
  "quia",
  "doloribus",
  "cumque",
  "quod"
];

// Init word:
let randomWord;

// Init score
let score = 0;

// Init time:
let time = 10;

// Generate random word from array
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

// console.log(getRandomWord());

// Add word to DOM
function addWordToDOM() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}

// Update score:
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}
addWordToDOM();

// Event listeners:
text.addEventListener("input", e => {
  const insertedText = e.target.value;
  //   console.log(insertedText);
  if (insertedText === randomWord) {
    addWordToDOM();
    updateScore();
    // clear input:
    e.target.value = "";
  }
});
