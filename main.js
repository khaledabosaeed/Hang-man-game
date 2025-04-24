// Letters
const letters = "abcdefghijklmnopqrstuvwxyz";
const word = {
  programming: [
    "php",
    "javascript",
    "go",
    "scala",
    "fortran",
    "mysql",
    "python",
  ],
  movies: [
    "Prestige",
    "Inception",
    "Parasite",
    "Interstellar",
    "Whiplash",
    "Memento",
    "Coco",
    "Up",
  ],
  people: [
    "Albert Einstein",
    "Hitchcock",
    "Alexander",
    "Cleopatra",
    "Mahatma Ghandi",
  ],
  countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"],
};

// get random category
let allkey = Object.keys(word);
let randomKey = Math.floor(Math.random() * allkey.length);
let randomName = allkey[randomKey];

// set the category name
document.querySelector(".category span").innerHTML = randomName;

// get random value
let randomValue = Math.floor(Math.random() * word[randomName].length);

let guesWord = word[randomName][randomValue];
console.log(guesWord);

// create Array from letters
const lettersArray = Array.from(letters);
let lettersContinar = document.querySelector(".letters");

// add to page
lettersArray.forEach((element) => {
  // crrate span
  let span = document.createElement("span");
  // add letter to span
  let text = document.createTextNode(element);
  span.appendChild(text);
  span.className = "letter-box";
  lettersContinar.appendChild(span);
});

// add input to guess Word to the body
let gussedLetter = Array.from(guesWord.toLowerCase());
console.log(gussedLetter);
// All span we have

let gussContinar = document.querySelector(".letter-guess");
gussedLetter.forEach((letter) => {
  let EmptySpan = document.createElement("span");
  if (letter === " ") {
    EmptySpan.classList.add("Empty");
  }
  gussContinar.appendChild(EmptySpan);
});

let guessedSpan = document.querySelectorAll(".letter-guess span");

let attmpet = 1;
document.addEventListener("click", (e) => {
  let stutes = false;
  // check if click on key
  if (e.target.className === "letter-box") {
    // add class clicked to the clicked key
    e.target.classList.add("clicked");
    // get the letter
    let currntLetter = e.target.innerHTML;

    // check if the letter is in the gussedLetter
    gussedLetter.forEach((letter, index) => {
      if (letter === currntLetter) {
        // add the letter to the guessedSpan
        stutes = true;
        guessedSpan.forEach((span, indexSpan) => {
          if (index === indexSpan) {
            span.innerHTML = letter;
            console.log(`found in index ${index}`);
          }
        });
      }
    });
  }
  if (stutes != true) {
    // add class wrong to the clicked key
    document.querySelector(".man-draw").classList.add(`wrong-${attmpet}`);
    attmpet++;
    document.getElementById("failed").play();
    if (attmpet == 8) {
      document.querySelector(".letters").classList.add("disabled");
      gameOver();
    }
  }
  if (stutes == true) {
    document.getElementById("scusess").play();
  }
});
function gameOver() {
  let gameOver = document.createElement("div");
  gameOver.classList.add("game-over");
  gameOver.innerHTML = `
  <div class="game-over-content">
    <h2>Game Over</h2>
    <p>You lost the game</p>
  </div>  
  `;
  document.body.appendChild(gameOver);
}
