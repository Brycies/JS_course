// function greet(who) {
//   console.log("Hello " + who);
// }
// greet("Bryson");
// console.log("Bye Bryson");

function chicken() {
  return egg();
}
function egg() {
  return chicken();
}
console.log(chicken() + " came first.");
// storing this stack the computer required space in hte memory, when the stack
// grows too big the computer will fail with a message like 'out of stack space' or
//'too much recurssion'
