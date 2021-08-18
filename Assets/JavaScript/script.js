// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = [];
var upperCase = [];
var specialCharacter = [];
var number = [];




function generatePassword() {
  alert("Lets Create a Password!");
  var isNum = true;

  //determines how many characters long while also determining if it is more than 8, less than 128, and if it is a number
  while (isNum === true) {
    length = prompt("How many characters long? (8-128)");
     if (length>0 && length<8) {
      alert("Too few characters!");
    } else if (length>128) {
      alert("Too many characters!");
    } else if (length>=8 && length<=128) {
      alert("success!");
      isNum = false;
      typeOfCharacters(); //Sends user to the next set of questions
    } else if (length === null) {
      alert("Cancelled")
      isNum = false;
      return;
    } else {
      alert("Not Valid!");
    };
  };

  //Askes for the type of characters to be added
  function typeOfCharacters(){
    isLowerCase = confirm("Would you like lower case characters?");
    if (isLowerCase === true) {
      alert("success!");
    }else {
      alert("no lower case!");
    };
    isUpperCase = confirm("Would you like upper case characters?");
    if (isUpperCase === true) {
      alert("success!");
    }else {
      alert("no upper case!");
    };
    isSpecialCharacter = confirm("Would you like special characters?");
    if (isSpecialCharacter === true) {
      alert("success!");
    }else {
      alert("no special characters!");
    };
    isNumeric = confirm("Would you like numbers?");
    if (isNumeric === true) {
      alert("success!");
    }else {
      alert("no numbers!");
    };

    //If all parameters are denide, then it will restart and ask for at least one catogory to be selected
    if (isLowerCase === false && isUpperCase === false && isSpecialCharacter === false && isNumeric === false) {
      alert("Need at least one catogory to be selected!");
      typeOfCharacters();
    };
  };
};




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)