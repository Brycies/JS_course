function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}
console.log(power(2, 3));
console.log(power(6, 0));
/*
its perfectly OK for a function t call itself as long as it doesn't so oftern
thatit overflows the stack
A fucntion that calls itself isknon as recursive.
*/

function findSolution(target) {
  function find(current, history) {
    if (current === target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return (
        find(current + 5, `(${history} + 5)`) ||
        find(current * 3, `(${history} * 3)`)
      );
    }
  }
  return find(1, "1");
}
console.log(findSolution(14));
console.log(findSolution(24));

/*
A function that, givena number, tries tofind a sequence of such additions and
 multiplications that produces that number. Eg 13 can be reached by first multiplying by 3
 and then adding 5 twice. the number 25 can not. If o solution can be found starting from this
number it returns null
*/
console.log(findSolution(15));
