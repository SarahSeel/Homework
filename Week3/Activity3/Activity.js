// Activity 1

// 1.a
// Declare a function called helloWorld that prints out the string "Hello World"
function helloWorld() {
  console.log("Hello World");
}
// Invoke the helloWorld function
helloWorld();

// 1.b
// Declare a function called numSum
//    This is the requirements of the function:
//    Accepts 2 parameters
//    Inside the function, add the parameters together
//    The function will print out a string that says: <1st parameter> plus <2nd parameter> equals <sum>
//    The function will output the sum of the two parameters
// Hints: you will need to use template literals to print out the string
//        there is no one right way to do this, but don't overthink it

// Invoke the function inside of a console.log so we can see the returned value
let sum;
function numSum(sum1, sum2) {
  sum = sum1 + sum2;
  console.log(`${sum1} plus ${sum2} equal ${sum}`);
  return sum;
}
console.log(numSum(10, 15));
numSum(5, 7);
console.log(sum);

// 2.a
// Declare a function called testAverage
//  These are the requirements of the function:
//    Accepts a single parameter that can accept an infinite amount of arguments
//    Inside the function, add the parameters together
//    Divide the sum by the number of parameters that were passed in
//    The function will output the result
// Hints: Remember how a rest parameter represents arguments and what methods that can allow us to use

// Invoke testAverage with the following parameters: 92, 71, 85, 83

function testAverage(...params) {
  let sum = 0;
  for (let param of params) {
    sum += param;
  }
  return sum / params.length;
}
console.log(testAverage(92, 71, 85, 83));

// 2.b
// Declare a function called gradeCheck
//  These are the requirements of the function:
//    Accepts a single parameter (we will be passing the returned value of our testAverage function)
//    Inside the function, build the following conditionals:
//    if argument is greater than or equal to 90, print "Your grade is an A, great job!" then output false
//    if argument is greater than or equal to 80 but less than 90, print "Your grade is B, nice job!" then output false
//    if argument is greater than or equal to 70, print "Your grade is a C, extra studying required" then output true
//    if argument is less than 70, print "Uh oh." then output true

// Invoke gradeCheck and pass in testAverage as an argument; testAverage should have the same parameters as before
