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
