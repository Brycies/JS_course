let number = 0;
while (number <= 12) {
  console.log(number);
  number = number + 2;
}
/*
a program that output all even numbers between 1-12
console.log(2)
console.log(4)....
console.log(12).
this programs works but supoose you want an output of even number between 1- 1000
this approach would be unworkable.
what we need to do is run a piece of code multiple times in a form of crontrol called al LOOP
Looping control flow allows us to go back to some point in hte program 
where we were before and repeat it with our current program state.
If we combine this with a binding that counts, we can do something like the one above.
*/

let result = 1;
let count = 0;
while (count < 10) {
  result = result * 2;
  count = count + 1;
}
console.log(result);
/*
the program calculates and shows the value of 2 to the tenth power
we use two binding one to keep track of our result and one to count
how often we have multiplies this result by 2. The loop tests whether 
the second binding has reached 10 yet and if not updates both bindings.
*/
