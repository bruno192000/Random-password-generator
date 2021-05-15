
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y",'Z'];
var simbols =["@","#","$","%","&","(",")","=","+","{","}","!"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];

//Initial question and popping alert for userInput 
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function generatePassword() {
    var usernumber = prompt("Select a number between 8 to 128")


    //limit of numbers

    if (usernumber < 8 || usernumber > 128 ) {
        alert("only numbers between 8 to 128")
        return
    }
    // confirm for details of password
    var chooselowers = confirm("Add lowercase letters?");
    var chooseuppers = confirm("Add uppercase letters?");
    var choosesimbols = confirm("Add special characters?");
    var choosenumbers = confirm("Add numbers ?");

    var selected = []
    var finalpassword = ""
//conditionals for characters
    if (chooselowers === true) {
      selected = selected.concat(lowerCase)
    }

    if (chooseuppers === true) {
      selected = selected.concat(upperCase)
    }
    if (choosesimbols === true) {

      selected = selected.concat(simbols)

    }
    if (choosenumbers === true) {
      selected = selected.concat(numbers)
    }
    
    // random characaters


    for (var i = 0; i < usernumber; i++) {
        var mixed = selected[
            Math.floor(Math.random() * selected.length)];

        finalpassword = mixed + finalpassword

    }
    console.log(finalpassword)


    return finalpassword
}
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    //     generatePassword()
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);