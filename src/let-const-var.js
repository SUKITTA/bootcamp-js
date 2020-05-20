var a = 0;
if(true){
  var a = 5;
}

let b = 1;
if(true){
  let b = 2;
}

const c = 3;
if(true){
  const c = 4;
}

console.log(a);
console.log(b);
console.log(c);

var g =0;
function add (){
  g++;
}

add();
add();
console.log(g);

var h = 5;
function minus (){
  var h = 5;
  h--;
  console.log("h in func minus: " + h);
}

minus();
console.log("h " + h);


