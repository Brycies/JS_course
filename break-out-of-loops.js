for (let current = 20; ; current = current + 1) {
  if (current % 7 === 0) {
    console.log(current);
    break;
  }
}
/*
Having the looping conditionproduce false is not the only way a loop can
finish. A speciail statement called BREAK that has the effect of immediately
jjumping out of the encosing loop.
The program above illustrates the break statement. It finds the first number that is
both greater that or equal to 20 and divisible by 7.

using the remainder (%) operator is an easy way to test whether a number
is divisible by another number. If it is, the remainder of their division is ZERO.

The FOR construct in the example doesn't have a part that checks for the end of the loop.
This means that the loop will never stop unless the BREAK statement inside is executed.
*/
