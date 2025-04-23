// Letters
const letters = "abcdefghijklmnopqrstvwxyz";
const word = {
  programming: ["java", "PHP", "react", "JavaScript", "HTML"],
  cities: ["Gaza", "Juraslem"],
  pepole: ["Fawzi", "khaled", "moamen"],
};
//
// get random category
let allkey = Object.keys(word);
let randomKey = Math.floor(Math.random() * allkey.length);
let randomName = allkey[randomKey];

// set the category name
let category = document.querySelector(".category");
category.innerHTML = ` word from :<span>${randomName}</span>`;

// get random value
let randomValue = Math.floor(Math.random() * word[randomName].length);
console.log(word[randomName][randomValue]);
    

// console.log(randomKey);
const lettersArray = Array.from(letters);
// console.log(lettersArray);
let lettersContinar = document.querySelector(".letters");
lettersArray.forEach((element) => {
  // crrate span
  let span = document.createElement("span");
  // add letter to span
  let text = document.createTextNode(element);
  span.appendChild(text);
  span.className = "letter-box";
  lettersContinar.appendChild(span);
});
