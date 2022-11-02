// First portion of HW

let pizzaPlace = "Imo's Pizza"; // String
console.log(typeof pizzaPlace, pizzaPlace);

let numberOfToppings = 10; // Num
console.log(typeof numberOfToppings, numberOfToppings);

// Second Portion of HW

`"${pizzaPlace} has many great options of pizza toppings, but I only like ${numberOfToppings}. Which is Hamburger and Bacon."`;

// Third Portion of HW

if (numberOfToppings > 10) {
  console.log("A whole lot of pizza.");
} else {
  console.log("Quality, not quantity.");
}

// Bonus Challenge

for (let i = 1; i <= numberOfToppings; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
