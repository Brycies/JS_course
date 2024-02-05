const square = function (x) {
  return x * x;
};
console.log(square(12));
/*
A function is created with an expression that starts with a key word function. Functions
have a set of parameters(in this case only x) and a body which contains the statement that 
are to be executed when the function is called. THe function body of a function created his
way must be wrapped in braces, even when it consists of only a single statement.
A function can have multiple parameters of no parameters at all. IN the next exapmple
makeNoise doesn't list any parameters names at all while power lists two:
*/

const makeNoise = function () {
  console.log("Pling!");
};
makeNoise();

/////////////////////////////

const power = function (base, exponent) {
  let result = 1;
  for (let count = 0; count < exponent; count = count + 1) {
    result *= base;
  }
  return result;
};
console.log(power(2, 10));
