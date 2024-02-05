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

/////////////////////////////

const power = function (base, exponent) {
  let result = 1;
  for (let count = 0; count < exponent; count = count + 1) {
    result *= base;
  }
  return result;
};
console.log(power(2, 10));
/*
a rturn statement determines the value of a function returns. When control comes
before such statement it immediately jumps out of the current function and gives the 
return value t the code that called the function.
A return keywprd withoutan expression after it will cause the function to return undefined.
*/

//BINDINGS AND SCOPES
let x = 10;
if (true) {
  let y = 20;
  var z = 30;
  console.log(x + y + z);
}
console.log(x + z);

/*
Binding declared with 'let' and 'const' are in fact local to the block that they are
declared in, so if you create one of those inside of a loop, the code before and after
the loop cannot 'see' it.
In pre-2015 JavaScript, only the functions creeated new scopes, so old-style bindings, created with
the 'var' keyword arevisible throughout the whole function that they appear in -or  throughout the global
scope, if they are not a function.
*/
