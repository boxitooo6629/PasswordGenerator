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


// Function to prompt user for password options
// Function to prompt user for password options

function getPasswordOptions() {
  
  let options = { passwordLenght : 64 , hasNumbers : true, hasUpperCase : true, hasLowerCase : true, hasSpecial : true };
  
  options.passwordLenght = parseInt(
    prompt("How many characters would you like to your password to contain?")
  )
  alert('You choose ' + options.passwordLenght);
  
  if (isNaN(options.passwordLenght) === true) {
    alert('Password length must be provided as number');
    return;
  }
  
  if (options.passwordLenght < 10) {
    alert('Password lenght must be at least 10 characters');
  return;
  }

  if (options.passwordLenght > 64) {
    alert('Password lenght must be less than 64 characters');
    return;
  }

    options.hasSpecial = confirm(
    'Click OK to confirm including speacial characters'
  )
    options.hasNumbers = confirm(
    'Click OK to confirm including numbers'
  )
    options.hasLowerCase = confirm(
    'Click OK to confirm including lower case'
  )
    options.hasUpperCase = confirm(
    'Click OK to confirm including upper case'
  )
  return options;
}

// Function for getting a random element from an array
function getRandom(arr) {
  var arraylength = arr.length;
  var position =  Math.floor(Math.random() * arraylength);
  return arr[position];
}

// Function to generate password with user input
function generatePassword(options) {
    var characters = [];
    var password = "";
    
    if (options.hasLowerCase){
      characters=characters.concat(lowerCasedCharacters)   
    }

    if (options.hasUpperCase){
       characters=characters.concat(upperCasedCharacters)
    }

    if (options.hasSpecial){
       characters=characters.concat(specialCharacters)
    }

    if (options.hasNumbers){
       characters=characters.concat(numericCharacters)
    }
    
    for (var index = 0; index < options.passwordLenght; index++) { 
      password += getRandom(characters);  
    }    

    return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var options = getPasswordOptions();
  var password = generatePassword(options);
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);