

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
  var numberEls = confirm("Do you want to include numbers?")
  var specialChar = confirm("Do you want ot include special characters?")

  function passLength() {
    if (numberOfLetters >= 8 && numberOfLetters <= 128) {
      alert("Thank You!")
    }
    else {
      alert("Please enter a valid number!")
    }
  }

    // Functions, CharCode (http://net-comber.com/charset.html)
  function lowerCaseFunc (){
      return string.fromCharCode(Math.floor(Math.random() * 26) + 97);
      }
  console.log(lowerCaseFunc()); 

  function upperCaseFunc (){
      return string.fromCharCode(Math.floor(Math.random() * 26) + 65);
      }
  console.log(upperCaseFunc()); 

  function numberElsFunc (){
      return string.fromCharCode(Math.floor(Math.random() * 10) + 48);
      }
  console.log(numberElsFunc()); 

  function specialCharFunc (){
      return string.fromCharCode(Math.floor(Math.random() * 15) + 33);
      }
  console.log(specialCharFunc());

}

// }

//

// Add event listener to generate button
generateBtn.addEventListener("click", () => {
  (writePassword);
});

