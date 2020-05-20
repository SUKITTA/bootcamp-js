var food = {
  name: "pizza",
  price: 399,
  calories: 350,
  getCalories: function() {
    // iletterlar
    console.log(`${this.name} 's calories is ${this.calories}`);
    //return this.name + "'s calories is: " + this.calories;
  },
  getPrice: function() {
    return this.name + "'s price is: " + this.price;
  }
};
/*
console.log(name);
console.log(price);
console.log(calories);
*/

console.log(food.getPrice());
console.log(food.getCalories());
