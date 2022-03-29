var generateBtn = document.querySelector("#generate");



function passwordGenerator(){
  var possibleCharacters = "abcdefghijklmnopqrstuvwxyz"
  var generatedPassword = ""
  var length = 8

  var length = prompt("How long would you like your password to be? The password should be between 8 and 128 characters");

  while(length < 8 || length > 128){
    var length = prompt("Please try again. Input a number between 8 and 128");
  }
  
  alert("Right now your password will only contain lowercase letters, please answer the next alert boxes to choose other characters")
  var upper = confirm("Would you like to include uppercase letters?");
  var number = confirm("Would you like to include numbers?");
  var special = confirm("Would you like to include special characters?");


  if (upper) {
    possibleCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  if (number) {
    possibleCharacters += "0123456789"
  }
  if (special) {
    possibleCharacters += "!@#$%^&*()"
  }


  for(var i = 0; i < length; i++){
    generatedPassword += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length))
  }

  return generatedPassword
}

function createPassword() {
  var password = passwordGenerator();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", createPassword);
























































// // /*var length = 8;
// // var passwordValue =[]
// // //Array of option for the computer to pick from. 
// // var numbers = ['0','1','2','3','4','5','6','7','8','9']
// // var upperCase =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','U','R','S','T','U','W','X','Y','Z']
// // var lowerCase =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
// // var specialCharacters =['!','@','#','$','%','^','&','*','(','_','+','<','>','?','{','}'] 

// // var generateBtn = document.querySelector("#generate") // assigning element and assigning it into a variable. 
// // //creating generatePassword function as it is called below.
// // function generatePassword (){

// //   return passwordValue
// // }

// // // Write password to the #password input
// // function writePassword() {
// //   var password = generatePassword();            //This function creates the password and is being called but never defined. 
// //   var passwordText = document.querySelector("#password"); // element selected from html assigning to variable passwordText

// //   passwordText.value = password;

// // }

// // // Add event listener to generate button
// // generateBtn.addEventListener("click", writePassword); // assinging event listener to line 9 variable. this is saying
// // //listen for the event "click" ,(the execute the function "write password")


// // //Creating prompt 
// // function getPrompts(){
// //   passwordValue = [];
// //   length = (prompt("How many characters would you like your password to be?"))
// //   if(length < 8 || length > 128)
// //   alert("Please try again. Password must be between 8 -128 Characters")
// //   return false;
  
// // }
// // if(confirm("Would you like numbers in your password?")) //ask the user if they would like numbers
// // passwordValue = passwordValue.concat(numbers)

// // if(confirm("Would you like uppercase letters in your password?")) // ask the user if they would like uppercase letters
// // passwordValue = passwordValue.concat(upperCase)

// // if(confirm("Would you like lowercase letters in your password?")) // ask the user if they would like lowercase letters
// // passwordValue = passwordValue.concat(lowerCase)

// // if (confirm("Would you like special characters in your password?"))
// // passwordValue = passwordValue.concat(specialCharacters)

// // */