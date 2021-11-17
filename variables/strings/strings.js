//! String Variables - Requires "" Double quotes
//todo: Or Single '' Quotes
var firstName = "Bob"; //* Double Quotes
//var age = 42;
var lastName = 'Ross'; //* Single Quotes
var greeting = ("Hello, " + firstName + lastName + ".")

const warninglabel = ("Dont drive over the speed limit. You'll get hurt or hurt someone else."); //! Back slashes (/) can make text ignore apostrophies (') in words
var driverGreeting = ('The bus didnt turn left. The driver said "He aint got time for no turns."');

//? Below is outputting double quote variable and checking the data type.
console.log(firstName);
console.log(typeof(firstName));

// console.log(age)
// console.log(typeof(age))


//? Below is outputting single quote variable and checking the data type.
console.log(lastName);
console.log(typeof(lastName));


console.log(warninglabel);
console.log(driverGreeting)

console.log(`I am ${firstName}`);
//? Prints concatenated greeting
console.log(greeting)

//! Just a test comment.