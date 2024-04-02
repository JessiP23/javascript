console.log('My name is Jessi');

console.log(`
    Hello
    World!
`);

var message = "Welcome!";
let user1 = "Max";
let user2 = "Anna";
const username = "christ11";

console.log(message);
console.log(user1);

let userInput;
userInput = 'Jessi';
userInput = prompt('enter your name: ');
console.log(userInput);

const userId = 'idx8548jjer';
console.log(userId);


let postViews = 0;
postViews = 1;
console.log(postViews);

let number1 = 5+9;
console.log(number1);

if (number1 < 15) {
    console.log('It is less than 15')
} else{
    console.log('It is greater than 15.')
}

const number2 = 23;
if (number2 < 10 && number2 > 14){
    console.log('True')
} else{
    console.log('False')
}



/*String Concetenation */
let name = 'Jessi';
console.log('Hello' + name);

/* Math Problem*/
// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);


/*
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;
 */

if (n1%5==0 && n2%5==0 && n3%5==0 && n4%5==0){
    console.log('All numbers are divided by 5');
} else{
    console.log('The numbers are not divided by 5');
}

/*The first number is 10, the last number is 5 */

if (n1 < n4){
    console.log('The first number is less than the last.');
} else{
    console.log('The first number is greater than the last');
}

/*Arithmetic chain: 
Subtract the first number from the second number.
Multiply the result by the third number.
Find the remainder of dividing the result by the fourth number.
  */

let operation = n1 - n2;
operation *= n3;
operation %= n4;
console.log(operation);