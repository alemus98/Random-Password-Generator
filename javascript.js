// Assignment code here

function generatePassword()  {
    var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var specialCharacters = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
    var resultArray = [];
    var userArray = [];
    var numOfCharacters = prompt ("Choose between 8 and 128 characters")
    var numberConfirm = confirm ("Do you want numbers in your password?")
    var lowerCaseConfirm = confirm ("Do you want lowercases in your password?")
    var upperCaseConfirm = confirm ("Do you want uppercase letters in your password?")
    var specialCharactersConfirm = confirm ("Do you want special characters in your password?")
    
    if (numberConfirm){
      resultArray = resultArray.concat(numbers);
    }
    
    if (lowerCaseConfirm) {
      resultArray = resultArray.concat(lowerCase);
    }
    
    if (upperCaseConfirm) {
      resultArray = resultArray.concat(upperCase);
    }
    
    if (specialCharactersConfirm) {
      resultArray = resultArray.concat(specialCharacters);
    }
    console.log(resultArray)
    
    for (var i = 0; i < numOfCharacters; i++) {
      userArray.push (resultArray[Math.floor(Math.random() * resultArray.length)]);
    }
    return userArray.join("") 
    }
    
    // Get references to the #generate element
    var generateBtn = document.querySelector("#generate");
    
    // Write password to the #password input
    function writePassword() {
      var password = generatePassword();
      var passwordText = document.querySelector("#password");
    
      passwordText.value = password;
    
    }
    
    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);