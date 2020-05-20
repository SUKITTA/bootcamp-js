var fruits = ["passion fruit", "orange", "watermalon", "blueBerry"];

console.log(fruits.length);

// for of
/*
for (const fruit of fruits) {
  console.log(fruit);
}
*/

fruits.push("apple");
var out = fruits.shift();
fruits.unshift("grape");

console.log(out);
console.log(fruits);

var fruits2 = ["passion fruit", "orange", "watermalon", "blueBerry"];

console.log(fruits2);

// for each
/*
fruits.forEach(fruit => {
  console.log(fruit);
});
*/

var splice = fruits2.splice(1, 3);
console.log(splice);

// .map()
const array1 = [1, 2, 3, 4];
const map1 = array1.map(val => val * 2);
console.log(map1);

/*
[2, 4, 6, 8]
0: 2
1: 4
2: 6
3: 8

*/
