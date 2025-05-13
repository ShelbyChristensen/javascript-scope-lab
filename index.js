// Write your solution in this file!

// Global Scope

const burgers = ['Hamburger', 'Cheeseburger']; // globally-scoped with const
let featuredDrink = 'Strawberry Milkshake';    // globally-scoped with let

// Function-scoped: addBurger function
function addBurger() {
    const newBurger = 'Flatburger';  // function-scoped
    burgers.push(newBurger);         // adds to global burgers array
}

// Block-scoped: if statement
if (true) {
    const anotherNewBurger = 'Maple Bacon Burger'; // block-scoped
    burgers.push(anotherNewBurger);                // adds to global burgers array
}

// Function to change the featured drink
function changeFeaturedDrink() {
    featuredDrink = 'The JavaShake'; // reassign global let variable
}

console.log("Before:", burgers, featuredDrink);

addBurger();
changeFeaturedDrink();

console.log("After:", burgers, featuredDrink);
