// Write your solution in this file!

// 🔹 Global scope variables
const burgers = ['Hamburger', 'Cheeseburger'];
let featuredDrink = 'Strawberry Milkshake';

// 🔹 Function-scoped variable and logic
function addBurger() {
  const newBurger = 'Flatburger'; // function-scoped
  burgers.push(newBurger);        // modifies global burgers array
}

// 🔹 Block-scoped variable inside always-true if statement
if (true) {
  const anotherNewBurger = 'Maple Bacon Burger'; // block-scoped
  burgers.push(anotherNewBurger);                // modifies global burgers array
}

// 🔹 Function that updates a global variable
function changeFeaturedDrink() {
  featuredDrink = 'The JavaShake'; // updates global let variable
}

