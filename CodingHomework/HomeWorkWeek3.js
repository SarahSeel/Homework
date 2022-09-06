// 1.
// Create an array of pizzaToppings with at least four different toppings
const pizzaToppings = ["Cheese", "Pineapple", "Chicken", "Onion"];

// 2.
// Create a greetCustomer function that prints a message that welcomes a guest,
//then informs them of the available toppings by looping over pizzaToppings
// (don't worry about perfect grammar here yet, i.e. "a, b, and c", see Bonus Challenge #9)
// i.e. "Welcome to Pizza House, our toppings are: a, b, c, ..."
function greetCustomer() {
  let greeting = "Welcome to Sarah's Pizza, our toppings are: ";
  for (let topping of pizzaToppings) {
    greeting += `${topping}`;
  }
  console.log(greeting);
}
greetCustomer();

// 3.
// Create a getPizzaOrder function that
// has the parameters size, crust, and an indefinite amount of toppings as inputs
// prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!"
// outputs a list with the size, crust, and toppings
function getPizzaOrder(size, crust, ...toppings) {
  let order = `One ${size} ${crust} crust pizza with`;
  for (let topping of toppings) {
    order += `${topping}`;
  }
  console.log(`${order}. Coming up!`);
  return;
}
getPizzaOrder("medium", "stuffed", "bacon", "onions", "cheese");

// 4.
// Create a preparePizza function that
// has an array as its parameter with three items: a size, a crust, and a list of toppings
// prints something like "...Cooking pizza..."
// outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings
function preparePizza() {
  ["medium", "stuffed", "bacon", "onion", "cheese"];
  console.log("...Pizza cooking...");
  for (const prepare in preparePizza) {
    console.log(`${prepare} = ${preparePizza[prepare]}`);
    return;
  }
}
preparePizza("size", "crust", "topping 1", "topping 2", "topping 3");

// 5.
// Create a servePizza function that
// has a parameter of a pizza Object
// logs a message that the pizza is ready and repeats the order,
// i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
// outputs the same pizza Object that was passed in
const servePizza = {
size: "medium",
crust: "stuffed",
toppings: "bacon, onion, cheese"
};

//6.
// Call each function and (starting with preparePizza) use the returned
// value from the previous function as its input

// Bonus Challenge

// 9.
// Figure out how to add "and" before the last topping in a list of toppings so when we list toppings it is more grammatically correct.
// You could create a listToppings function that stores the functionality, and call the function each time we list toppings in a function.
// i.e. "Our toppings are a, b, and c." instead of "Our toppings are a, b, c"
function listToppings(t1, t2, t3, t4) {
  console.log(`Our toppings are ${t1}, ${t2}, ${t3}, and ${t4}`);
  return;
}
listToppings("cheese", "pineapple", "chicken", "onion");

// 10.
// In getPizzaOrder, if an order is placed with no toppings, print a slightly different message, like "One large thick crust cheese pizza coming up!"
// (Instead of "One large thick crust pizza with coming up!").
// Alter servePizza in a similar way to fix its grammar when serving a "plain" cheese pizza.
function getCheeseOrder(size, crust, cheese) {
  console.log(
    `One ${size} ${crust} crust pizza with ${cheese} coming right up!`
  );
}
getCheeseOrder("medium", "stuffed", "cheese");

// 11.
// In getPizzaOrder, check the toppings the customer ordered against your list of available toppings. If they order a topping you don't offer,
//  print a message that informs them you don't offer that topping and to order again.
