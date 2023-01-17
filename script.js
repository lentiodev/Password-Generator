// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Set variables
let passwordLength = 0;
let userOptions = [];


// Function to prompt user for password options
function getPasswordOptions() {

  passwordLength = parseInt(prompt("How many characters do you want for your password: Between 10-64"))

  if (passwordLength < 10 || passwordLength > 64) {
    alert("Password length should be between 10 - 64")
    return false;
  }
  
  if (confirm("Would you like lowercase in your password?")){
    userOptions = userOptions.concat(lowerCasedCharacters)
  }
  if (confirm("Would you like uppercase in your password?")){
    userOptions = userOptions.concat(upperCasedCharacters)
  }
  if (confirm("Would you like special characters in your password?")){
    userOptions = userOptions.concat(specialCharacters)
  }
  if (confirm("Would you like numeric characters in your password?")){
    userOptions = userOptions.concat(numericCharacters)
  }

  return true;

}

// Write password to the #password input
function writePassword() {
  let userChoiceCorrect = getPasswordOptions();
  var passwordText = document.querySelector('#password');

  if (userChoiceCorrect) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordText.value = "Try Again";
  }
}

// Function to generate password with user input
function generatePassword() {
  let password = "";
  for(let i = 0; i < passwordLength; i++){
    let randomIndex = Math.floor(Math.random() * userOptions.length);
    password = password + userOptions[randomIndex]

  }
  return password;

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);