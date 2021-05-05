// Assignment Code
var specialChars =[""];

// number array
var numberArray = [""];

  // lower case array
  var lowerCase = [""];

  // upper casr array
  var upperCase = [""].split(); //hint


 // funtion to prompt the user for password options

function getPassword(){


 // creat a variable to store the length of password

var length = parseInt(
  prompt('How many characters would you like it to be?'))
)

 //creat conditional statement to check if paswword length is actually a number
if (numberArray.isnan(length)){
  alert('password must be a number');
  return null;
}



 //conditional statement to check if password is a t least 8 char

if (length < 8){
  alert('Password length must be at least 8 characters');
  return null;
}

 //conditional statement to check if password length is at least 128 character
 if (length > 8){
  alert('Password cannot contain more than 128 characters');
  return null;
 };


//create confirmation prompts for the type of characters the user wants to use in there password




//need to create a conditional statement to check if user included ATLEAST 1 of the char types. return user back to start of app






var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
