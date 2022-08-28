// First portion of HW

let pizzaPlace = "Imo's Pizza"; // String
console.log(typeof pizzaPlace);

let numberOfToppings = 2; // Num
console.log(typeof numberOfToppings);

// Second Portion of HW

`"${pizzaPlace} has many great options of pizza toppings, but I only like ${numberOfToppings}. Which is Hamburger and Bacon."`;
console.log(
  `${pizzaPlace} has many great options of pizza toppings, but I only like ${numberOfToppings}. Which is Hamburger and Bacon.`
);
// Third Portion of HW

if (numberOfToppings > 10) {
  console.log("A whole lot of pizza.");
} else {
  console.log("Quality, not quantity.");
}

// Bonus Challenge

let x = 0;
while (x <= 10) {
  console.log(
    `${pizzaPlace} string ${x}, gain ${numberOfToppings} toppings at ${pizzaPlace}, we have ${x +
      2} toppings.`
  );
  console.log("Quality, not quantity.");
  console.log(x);
  x += 2;
}
