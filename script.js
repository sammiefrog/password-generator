// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  function passLength() {
    var numberOfLetters = prompt("How many letters do you want in your password? (1-28)")
  
    if (i >= 1 && i <= 28) {
      then ("Thank You!")
    }
    else {
      alert("Please enter a valid number!")
    }
  }
    // Functions, CharCode (http://net-comber.com/charset.html)
  function lowerCase (){
  return string.fromCharCode (Math.floor(Math.random() * 26) + 97);
  }
  console.log(lowerCase()); 

  function upperCase (){
      return string.fromCharCode (Math.floor(Math.random() * 26) + 65);
      }
  console.log(upperCase()); 

  function numberEls (){
      return string.fromCharCode (Math.floor(Math.random() * 10) + 48);
      }
  console.log(numberEls()); 

  function specialChar (){
      return string.fromCharCode (Math.floor(Math.random() * 15) + 33);
      }
  console.log(specialChar());
}

// Add event listener to generate button
generateBtn.addEventListener("click", () => {
  var numberOfLetters = prompt("How many letters do you want in your password? (1-28)");
  var lowerCase = confirm("Do you want to include lowercase letters?")
  var upperCase = confirm("Do you want to include uppercase letters?")
  var numberEls = confirm("Do you want to include numbers?")
  var specialChar = confirm("Do you want ot include special characters?")

});

(writePassword);