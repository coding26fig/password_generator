
// Array of options for the computer to pick from
var length=8;
var passwordValue =[]

var numbers = ['0','1','2','3','4','5','6','7','8','9']
var upperCase =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','U','R','S','T','U','W','X','Y','Z']
var lowerCase =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var characters =['!','@','#','$','%','^','&','*','(','_','+','<','>','?','{','}'] 


// Assignment Code

var generateBtn = document.querySelector("#generate")

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompt();

if(correctPrompts){
  var newPassword = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = newPassword;
  }



  function generatePassword(){
var newPassword = --;
for(var i =0; i < length; i++){
  var randomValue = Math.floor(Math.random()* length);
  newPassword = newPassword + password [randomValue]
}

  }
  



//Prompting user to ok if they want that type of charactor or not
function getPrompt(){
  length = parseInt(prompt("How many characters would you like your password to be? (8 - 128"))
  
  if(isNaN(length) || length < 8 || length > 128){
  alert("Incorrect input. Please try again!")
  return false;
}


if (confirm("Would you like lowercase letters in your password")){
  passwordValue = passwordValue.concat(lowerCase);
}  
if (confirm("Would you like uppercase letters in your password")){
  passwordValue = passwordValue.concat(upperCase);
}  

if (confirm("Would you like numbers  in your password")){
  passwordValue = passwordValue.concat(numbers);
}  
if (confirm("Would you like special characters in your password")){
  passwordValue = passwordValue.concat(characters);

  }
  return true;

}


