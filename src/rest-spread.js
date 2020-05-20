// rest func

function restFunc(a, ...rest){
  console.log(a);
  console.log(rest);
  console.log(rest.length);
}

restFunc(1, 2, 3, 4, 5, "A");

function getAverage(...value){
  var total = 0;
  for (const v of value){
    total += v;
  } 
  console.log(value.reduce((a, b) => a + b))
  console.log(total/value.length);
}

getAverage(10, 10, 10, 10, 10);

// spread func

const bp = ["black", "pink"];
const color = ["red", "blue", "green", ...bp];
const copy = [...bp];
const concat = [...bp, ...color];

console.log(color);
console.log(copy);
console.log(concat);

// curently value
const mom = {name: "j", age: "50", x: "yoah"};
const dad = {name: "e", age: "51", y: "yeah"};
const merge1 = {...mom, ...dad};
const merge2 = {...dad, ...mom};
console.log(merge1);
console.log(merge2);


