for (let number = 0; number <= 12; number = number + 2) {
  console.log(number);
}

let result = 1;
for (let counter = 0; counter <= 10; counter = counter + 1) {
  result = result * 2;
}
console.log(result);

/*
The parentheses  after a fir keyword must contain two semicolons. The part
before the first semicolon initializes the loop, usually by definining a binding.
The second part is the expression that checks whether the loop must continue.
The final part updates the state of the loop after every iteration
IN MOST CASES THIS IS A SHORTER AND CLEARER THAN A WHILE LOOP
*/
