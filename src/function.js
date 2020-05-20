function add(num1, num2) {
  var sum = num1 + num2;
  /*
  if(typeof(sum) === "number"){
    return sum;
  }else{
    return "sum is NaN";
  }
  */

  // same result in one line
  return typeof sum === "number" ? sum : "sum is NaN";
}
console.log(add("10", 2));

// Arrow func
let minus = (num1, num2) =>
  typeof (num1 - num2) === "number" ? sum : "sum is NaN";
console.log(minus(5, 2));

// Annonymous func (no-func's name)
var sum = function(num1, num2) {
  console.log(num1 + num2);
};
sum(2, 3);

var even = [];
function isEven(n1, n2, n3, n4, n5) {
  if (n1 % 2 === 0) {
    even.push(n1);
  }
  if (n2 % 2 === 0) {
    even.push(n2);
  }
  if (n3 % 2 === 0) {
    even.push(n3);
  }
  if (n4 % 2 === 0) {
    even.push(n4);
  }
  if (n5 % 2 === 0) {
    even.push(n5);
  }
  console.log(even);
}

isEven(1, 2, 3, 4, 5);
