// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialCharacter = ["!","#","$","%","&","(",")","*","+",",","-",".","/",":",";","<","?","@","[","]","^","_","`","{","}","~"];
var number = ["1","2","3","4","5","6","7","8","9","0"];

// var randLower = [];
// var randUpper = [];
// var randSpecial = [];
// var randNumber = [];

function generatePassword() {
  alert("Lets Create a Password!");
  var isNum = true;
  //var finalArray = [];

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
    characterList =[];

    //checks if user wants lower case characters
    if (isLowerCase === true) {
      alert("success!");
      characterList.push(lowerCase);
    }else {
      alert("no lower case!");
    };

    //checks if user wants upper case characters
    isUpperCase = confirm("Would you like upper case characters?");
    if (isUpperCase === true) {
      alert("success!");
      characterList.push(upperCase);
    }else {
      alert("no upper case!");
    };

    //checks if user wants special characters
    isSpecialCharacter = confirm("Would you like special characters?");
    if (isSpecialCharacter === true) {
      alert("success!");
      characterList.push(specialCharacter);
    }else {
      alert("no special characters!");
    };

    //checks if user wants numbers
    isNumeric = confirm("Would you like numbers?");
    if (isNumeric === true) {
      alert("success!");
      characterList.push(number);
    }else {
      alert("no numbers!");
    };

    //If all parameters are denide, then it will restart and ask for at least one catogory to be selected
    if (isLowerCase === false && isUpperCase === false && isSpecialCharacter === false && isNumeric === false) {
      alert("Need at least one catogory to be selected!");
      typeOfCharacters();
    }else {
      console.log(characterList);
      combine();
    }
  };

  //combines the desired characters with the desired length using a for loop
  function combine() {
    var finalPassWord = [];
    var randomArray = [];

    for (let i = 0; i < length; i++) {
      //picks a random variable array with the characters the user wanted
      randomArray = characterList[Math.floor(Math.random()*characterList.length)];
      
      //puts in a random character from the random array into the final password
      finalPassWord += randomArray[Math.floor(Math.random()*randomArray.length)];
      
    }
    console.log(finalPassWord);
    return finalPassWord;
  }

};




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);