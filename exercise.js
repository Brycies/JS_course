// let yourName = "William Odhiambo";
// const age = 19;
// if ((age = 24)) {
//   console.log("You can drink");
// } else if (age >= 18) {
//   console.log("Don't drink and drive");
// } else {
//   console.log("You are underage");
// }
// console.log(yourName);

// function name() {
//   myName = "Bryson";
//   myAge = 16;
// }
// if (age >= 21) {
//   console.log("You are allowed to drink");
// } else if (age <= 18) {
//   console.log("Illegal to persons under the age of 18");
// } else {
//   console.log("Dont drink and drive");
// }
// myAge = 17;
// console.log(myName);

function checkAge() {
  var myName = "Bryson";
  var myAge = 16;

  if (myAge >= 21) {
    console.log("You are allowed to drink");
  } else if (myAge <= 18) {
    console.log("Ilegal for persons under the age of 18");
  } else {
    console.log("Don't drink and drive");
  }

  checkAge(); // Call the function to check age

  let myAge = 17;
  console.log(myName);
}
