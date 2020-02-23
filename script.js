

// the generate button on the html
var generateBtn = document.querySelector("#generate");
var lowerCaseValue;
var upperCaseValue;
var numberCaseValue;
var specialCharValue;
var passLengthValue;

//writes the password into the text box on browser
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

//generates a password with specified criteria that is chosen by the user
function generatePassword() {
  var passLength = prompt("How many letters do you want in your password? (8-128)");

  //what is wanted in the final password
  var passCriteria = [];

  //number of characters wanted needs to be gathered correctly first, then the other critera
  if (passLength >= 8 && passLength <= 128) {
    passLengthValue = parseInt(passLength);
    
    var lowerCase = confirm("Do you want to include lowercase letters?");
    var upperCase = confirm("Do you want to include uppercase letters?");
    var numberCase = confirm("Do you want to include numbers?");
    var specialChar = confirm("Do you want to include special characters?");
  }
  else if (NaN == true) {
    alert("That's not a valid number, please start again!");
  }
  else if (lowerCase === false && uppercase === false && numberCase === false && specialCar === false) {
    alert("You didn't select any password criteria, please start again!")
  }
  else {
    alert("That number is too high or too low! Please try again!");
  } 

  //if lowercase letters are wanted this then pushes them into the password criteria
    if (lowerCase===true) {
      lowerCaseValue = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        for (i = 0; i < lowerCaseValue.length; i++) {
          passCriteria.push(lowerCaseValue[i]);
        }
    }

  //if uppercase letter are wanted this pushes them to password criteria
    if (upperCase===true) {
      upperCaseValue = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

        for (i = 0; i < upperCaseValue.length; i++) {
          passCriteria.push(upperCaseValue[i]);
      }
    }

  //if numbers are wanted this pushes them to password criteria
    if (numberCase===true) {
      numberCaseValue = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

      for (i = 0; i < numberCaseValue.length; i++) {
        passCriteria.push(numberCaseValue[i]);
      }
    }

  //if special characters are wanted this pushes them to password criteria
    if (specialChar===true) {
      specialCharValue = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ":", ";", "'", "<", ">", "?", "/", "`", "~"];

      for (i = 0; i < specialCharValue.length; i++) {
        passCriteria.push(specialCharValue[i]);
      }
    }

    //Randomly takes values from the password criteria and add it to the new password

    var newPassword = ""

    for (var i = 0; i < passLengthValue; i++) {
      newPassword += passCriteria[Math.floor(Math.random() * passCriteria.length)];
    }

    return newPassword;

}


// Add event listener to activate the function when the button is clicked
generateBtn.addEventListener("click", () => {
  writePassword;
});

