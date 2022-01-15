function generatePassword() {
  // Assignment code here
  //set variables
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWUXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var specialChr = "!#$%&*+-.:;<=>?@^_{|}~";
var selectedChoices = [];
var finalPassword = "";

window.alert("Please select password options");
  //validate inputs
var passwordLength = parseInt(
    window.prompt("How long would you like our password to be?")
);

if (
    passwordLength === "" ||
    passwordLength === null ||
    passwordLength < 8 ||
    passwordLength > 128
) {
    window.alert("Please enter a valid number");
    return "";
}

var upperCaseConfirm = window.confirm("Would you like upper case letters?");
  // if the user slected uppcase, add uppercase to array
if (upperCaseConfirm) {
    //add uppcase letter to selected choices array
    selectedChoices += upperCase;
    console.log(selectedChoices);
} else {
    window.alert("No upper selected");
    upperCase = "";
}

var lowerCaseConfirm = window.confirm("Would you like lower case letters?");
if (lowerCaseConfirm) {
    //add lowercase letter to selected choices array
    selectedChoices += lowerCase;
    console.log(selectedChoices);
} else {
    window.alert("No lower selected");
    lowerCase = "";
}

var numbersConfirm = window.confirm("Would you like numbers?");
if (numbersConfirm) {
    //add numbers to selected choices array
    selectedChoices += numbers;
    console.log(selectedChoices);
} else {
    window.alert("No numbers selected");
    numbers = "";
}

var specialChrConfirm = window.confirm("Would you like special characters?");
if (specialChrConfirm) {
    //add special characters to selected choices array
    selectedChoices += specialChr;
} else {
    window.alert("No special character selected");
    specialChr = "";
}

  //Make password random
for (let i = 0; i < passwordLength; i++) {
    finalPassword +=
      selectedChoices[Math.floor(Math.random() * selectedChoices.length)];
}

return finalPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;
}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
