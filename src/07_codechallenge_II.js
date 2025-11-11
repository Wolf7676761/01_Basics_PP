/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */


const prompt = require('prompt-sync')({sigint: true});

let firstName = prompt ("Name: ");
let age = prompt ("Alter: ");
 

switch (true) {
    case age < 6:
        console.log(firstName + " trinkt Milch!");
        break;
    case age < 13:
       console.log(firstName + " trinkt Saft!");
              break;
    case age < 18:  
      console.log(firstName + " trinkt Cola!");
      break;
    default:
      console.log(firstName + " trinkt Wein!");
      break;
}

