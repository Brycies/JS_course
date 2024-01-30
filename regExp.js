let re1 = new RegExp("abc");
let re2 = /abc/;

// console.log(re1);
// console.log(re2);

/*
regexp is a type of object that can be either constructed with the RegExp constructor or
written as a liberal value by enclosing a pattern in forward slash character.
*/

//repeating parts of a pattern

// console.log(/abc/.test("abcde"));
// console.log(/abc/.test("abxde"));

// console.log(/'\d+'/.test("'123'"));
// console.log(/'\d+'/.test("''"));

let neighbor = /neighbou?r/;
console.log(neighbor.test("neighbour"));
console.log(neighbor.test("neighbor"));

/*
A question mark makes a part of a pattern optional, meaning it may
 occur zero times or one time
 */

//grouping subexpressions

let cartoonCrying = /boo+(hoo+)+/i;
console.log(cartoonCrying.test("Boohoooohoohooo"));

/*
to use an element like * or + on more than one lement at a time, you 
have to use parentheses. A part of a regular expression enclosed in parentheses counts
as a single elemnt as far as the operator following it are concerned.

the first and second +characters apply only to the second 0 in boo and hoo
respectively. the third + applies to the whole group (hoo+)  matchoing
one or more sequence like that.
*/

//Matches and groups

let match = /\d+/.exec("one two 100");
console.log(match);
console.log(match.index);

//console.log(1 + 1 === 2 && 10 * 10 > 50);
