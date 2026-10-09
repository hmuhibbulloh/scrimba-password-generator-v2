const characters = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// SELECT DOM ELEMENTS
let digitsEl = document.getElementById("digits");
let charsEl = document.getElementById("chars");
let lengthEl = document.getElementById("length");
let generatePasswordBtn = document.querySelector(".btn");
let password1El = document.querySelector(".password--1");
let password2El = document.querySelector(".password--2");

let length = 8;

// HELPER FUNCTIONS
function getRandomEl(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
let password1 = "";
let password2 = "";
let charsToChooseFrom = [...letters];
generatePasswordBtn.addEventListener("click", () => {
  length = parseInt(lengthEl.value);
  if (digitsEl.checked) {
    charsToChooseFrom = charsToChooseFrom.concat(digits);
  }

  if (charsEl.checked) {
    charsToChooseFrom = charsToChooseFrom.concat(characters);
  }

  for (let i = 1; i <= length; i++) {
    password1 += getRandomEl(charsToChooseFrom);
  }
  password1El.textContent = password1;

  for (let i = 1; i <= length; i++) {
    password2 += getRandomEl(charsToChooseFrom);
  }
  password2El.textContent = password2;

  password1 = "";
  password2 = "";
  charsToChooseFrom = [...letters];
});
