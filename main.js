// Letters
const letters = "abcdefghijklmnopqrstvwxyz";
const word = {
  programming: ["java", "PHP", "react", "JavaScript", "HTML"],
  cities: ["Gaza", "Juraslem"],
  pepole: ["Fawzi", "khaled", "moamen"],
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
let gussedLetter = Array.from(guesWord);
let gussContinar= document.querySelector(".letter-guess")
gussedLetter.forEach((letter) => {
  let EmptySpan = document.createElement("span");
    if (letter ===' ') {
        EmptySpan.classList.add("Empty")
    }
    gussContinar.appendChild(EmptySpan);
});

document.addEventListener("click",(e)=>{
        if (e.target.className==="letter-box") {
            e.target.classList.add("clicked")
        }
})