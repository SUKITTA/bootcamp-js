var name = "bong";
var weight = 62;
var height = 1.75;

//calculate BMI
// var bmi = weight/(height**2)
var bmi = weight / Math.pow(height, 2);
console.log(name + "'s BMI: " + bmi.toFixed(2));

var status;
if (bmi <= 18.9) {
  status = "UnderWeight";
} else if (bmi > 18.9 && bmi <= 22.9) {
  status = "Normal";
} else if (bmi > 22.9 && bmi <= 24.9) {
  status = "Overweight";
} else if (bmi > 24.9 && bmi <= 29.9) {
  status = "Obese";
} else {
  status = "Extremely Obese";
}

console.log("That is mean you are " + status);
