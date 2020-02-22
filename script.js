

// Assignment Code
var generateBtn = document.querySelector("#generate");

var securePassword = {
  numberOfLetters : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28],
  lowerCase : true,
  upperCase : true,
  numberEls : true,
  specialChar : true,

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  function passLength() {

    if (numberOfLetters >= 1 && numberOfLetters <= 28) {
      alert("Thank You!")
    }
    else {
      alert("Please enter a valid number!")
    }
  }
  console.log(passLength())

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

}

// Add event listener to generate button
generateBtn.addEventListener("click", () => {
  var numberOfLetters = prompt("How many letters do you want in your password? (1-28)");
  var lowerCase = confirm("Do you want to include lowercase letters?")
  var upperCase = confirm("Do you want to include uppercase letters?")
  var numberEls = confirm("Do you want to include numbers?")
  var specialChar = confirm("Do you want ot include special characters?")

});

