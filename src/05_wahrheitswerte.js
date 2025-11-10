/* Berechnung Alter */

// Deklaration

let ageJohn, ageMark;
const birthYearJohn = 2000;
const birthYearMark = 1990;


// Berechnung Alter Iteration I

//let year = 2025;
//ageJohn = year - birthYearJohn;
//ageMark = year - birthYearMark;
let date = new Date();
let year = date.getFullYear();
console.log("Datum: " + date);
console.log("Jahr: " + year);
ageJohn = year - birthYearJohn;
ageMark = year - birthYearMark;

// let year =

//console.log("Datum: " + date);


// Ausgabe

console.log("ageJohn: " + ageJohn);
console.log("AgeMark: " + ageMark);

//Deklaration
// let isJohnOlder = false;

let isJohnOlder = (ageJohn > ageMark); //Test auf Ungleichheit
let isJohnEqual = (ageJohn == ageMark); // Test auf Gleichheit

console.log("isJohnOlder: " + isJohnOlder);
console.log("isJohnEqual: " + isJohnEqual);



