//var and data type
let lowerCase = ('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
let upperCase = ('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
let numbers = ("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
let specialCharacters = ('#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@');

var option = {};
// funtion to prompt the user for password options

function getPassword() {


  // creat a variable to store the length of password

  var length = prompt("How many characters would you like it to be?");
  length = parseInt(length);

  //conditional statement to check if password is a t least 8 char

  if (length < 8) {
    alert('Password length must be at least 8 characters');
    return;
  }

  //conditional statement to check if password length is at least 128 character
  if (length > 128) {
    alert('Password cannot contain more than 128 characters');
    return;
  }

  //creat conditional statement to check if paswword length is actually a number
  if (Number.isNaN(length)) {
    alert('password must be a number');
  }
  option.length = length;
  console.log(option);

  //create confirmation prompts for the type of characters the user wants to use in there password

  var capConfirm = confirm("Would you like the password to have CAPITAL letters?");

  option.upperCase = capConfirm;
  console.log(option);
  

  var lowerConfirm = confirm("Would you like the password to have lowercase letters?");

  option.lowerCase = lowerConfirm;
  console.log(option);

  var confirmNumbers = confirm("Would you like it to contain number(1,2,3,etc)?");

  option.numbers = confirmNumbers;
  console.log(option);

  var confirmChara = confirm("Would you like special characters(?><@#$%)?");

  option.specialCharacters = confirmChara;
  console.log(option);
  
  return option;
}

//need to create a conditional statement to check if user included ATLEAST 1 of the char types. return user back to start of app

function getRandomEl(arr) {
  var random = Math.floor(Math.random() * arr.length);
  var rand = arr[random];

  return rand;
}


function generatePassword() {

  var options = getPassword();
  var pwResult = [];
  var possibleChars = [];


  if (options.specialCharacters) {
    possibleChars = possibleChars.concat(specialCharacters);
  }
  if (options.lowerCase) {
    possibleChars = possibleChars.concat(lowerCase);
  }
  if (options.upperCase) {
    possibleChars = possibleChars.concat(upperCase);
  }
  if (options.numbers) {
    possibleChars = possibleChars.concat(numbers);
  }

  for (let count = 0; count <= Option.length; count++) {

    pwResult[count] = getRandomElement(possibleChars);
  }
  console.log(pwResult);
  pwResult = pwResult.join("");
  return pwResult;
}


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function rcvPassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", rcvPassword);
