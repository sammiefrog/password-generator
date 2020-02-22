

// Assignment Code
var generateBtn = document.querySelector("#generate");


function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function generatePassword() {
  var numberOfLetters = prompt("How many letters do you want in your password? (1-28)");
  var lowerCase = confirm("Do you want to include lowercase letters?")
  var upperCase = confirm("Do you want to include uppercase letters?")
  var numberCase = confirm("Do you want to include numbers?")
  var specialChar = confirm("Do you want ot include special characters?")

  
    if (numberOfLetters >= 8 && numberOfLetters <= 128) {
      numberOfLettersValue = parseInt(numberOfLetters);
    }
    else {
      alert("Please enter a valid number!")
    }
  
    if (lowerCase===true) {
      lowerCaseValue = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    }

    if (upperCase===true) {
      upperCaseValue = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    }

    if (numberCase===true) {
      numberCaseValue = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    }

    if (specialChar===true) {
      specialCharValue = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ":", ";", "'", "<", ">", "?", "/", "`", "~"];
    }


}

// }

//

// Add event listener to generate button
generateBtn.addEventListener("click", () => {
  (writePassword);
});

