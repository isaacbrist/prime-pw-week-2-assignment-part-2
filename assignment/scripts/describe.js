// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// we make a variable called Dane
// We check to see if name is Mary, if yes, we console log "Hi, Mary"
// Otherwise, we console log "How do you do?"
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We make a variable called secret
//We make a variable called code and set it equal to 123.
//then we check to see if it i true that code is an exact match to 123. 
// If that is true, then we set secret equal to super and set code equal 
//itself multiplied by 2. 
// Then we check to see if code is greater than 250, if it is, then we set 
//secret equal to duper.
//Then we console log secret, which should give us the response of "super."
//
//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We make a variable called isStudent and set it to true. 
// We also make a variable called age and set it to 34.
// We make a variable called zip and set it to 55407
// We check to see if isStudent is exactly true and if the zip is greater
//than 80000. If both of those were true, then we console log "You're a 
//student on the West Coast!"
//Otherwise we check to see if isStudent exactly equals false or if the age 
//is less than 30 If either one of those instances is met, then we 
// console log "What are your hobbies?"
//Otherwise we check to see if isStudent is exactly true, then we console log
// "Welcome to Prime!"
//Otherwise we console log "How about the weather?"
//
//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
//in the above desccription, colorOne should be blue and colorTwo should be 
//red
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;
//this is missing a line of code. We should add the following under colorOne
//colorTwo = 'purple';
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
//Time should be a variable not a constant. so "let time = 4;"
let temp = 40;
const time = 4;
// || meanes "Or" we want "and" so it should use "&&" so it should say 
//"if (temp > 39 && time >= 4)
//{console.log('throw away the food!');"
//if (temp > 39 || time >= 4) {
//  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
//We want two variables not a variable and a constant, so it should be 
//let minAge = 21;
let age = 21;
const minAge = 21;
//Currently, how this code is written, it would deny entry to anyone below
// the minAge AND anyone equal to it. It should use just a "<" sign.
//if(minAge < age) {
//  console.log('no entry');
} else {
  console.log('enter');
}
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
