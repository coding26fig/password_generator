// Assignment Code
var generateBtn = document.querySelector("#generate")

 var numbers = ["0,1,2,3,4,5,6,7,8,9"] 
 var upperCase =["A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,U,R,S,T,U,W,X,Y,Z"]
 var lowerCase =["a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"]
 var characters =["!,@,#,$,%,^,&,*,(,),_,+,"]
var lenght=(8)
var passwordValue =("")

var userInput = parseInt(prompt("How many characters would you like your password to be?", "Must be between 8 and 128 characters"))
 if ( length < 8  || length > 128){  // should alert try again if criteria is not met
   alert("Try again");



















































// Write password to the #password input
function writePassword() {
 var password = generatePassword();
  var passwordText = document.querySelector("#password");

   passwordText.value = password;

 }

 // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);


//Creating the prompt window creating a var for these results 
 //added the funtion so we can use return to stop if the criteria is not me 


 var userInput = parseInt(prompt("How many characters would you like your password to be?", "Must be between 8 and 128 characters"))
 if ( length < 8  || length > 128){  // should alert try again if criteria is not met
   alert("Try again");

 }
// using confirm to instead of prompt windows 
 if(confirm("Would you like numbers in your password?"));



if(confirm("Would you like uppercase letters in your password?"));

 if(confirm("Would you like lowercase letters in your password?"));

if(confirm("Would you like special characters in your password?"));




















































// /*var length = 8;
// var passwordValue =[]
// //Array of option for the computer to pick from. 
// var numbers = ['0','1','2','3','4','5','6','7','8','9']
// var upperCase =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','U','R','S','T','U','W','X','Y','Z']
// var lowerCase =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
// var specialCharacters =['!','@','#','$','%','^','&','*','(','_','+','<','>','?','{','}'] 

// var generateBtn = document.querySelector("#generate") // assigning element and assigning it into a variable. 
// //creating generatePassword function as it is called below.
// function generatePassword (){

//   return passwordValue
// }

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();            //This function creates the password and is being called but never defined. 
//   var passwordText = document.querySelector("#password"); // element selected from html assigning to variable passwordText

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword); // assinging event listener to line 9 variable. this is saying
// //listen for the event "click" ,(the execute the function "write password")


// //Creating prompt 
// function getPrompts(){
//   passwordValue = [];
//   length = (prompt("How many characters would you like your password to be?"))
//   if(length < 8 || length > 128)
//   alert("Please try again. Password must be between 8 -128 Characters")
//   return false;
  
// }
// if(confirm("Would you like numbers in your password?")) //ask the user if they would like numbers
// passwordValue = passwordValue.concat(numbers)

// if(confirm("Would you like uppercase letters in your password?")) // ask the user if they would like uppercase letters
// passwordValue = passwordValue.concat(upperCase)

// if(confirm("Would you like lowercase letters in your password?")) // ask the user if they would like lowercase letters
// passwordValue = passwordValue.concat(lowerCase)

// if (confirm("Would you like special characters in your password?"))
// passwordValue = passwordValue.concat(specialCharacters)

// */