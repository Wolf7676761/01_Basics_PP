
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

const prompt = require('prompt-sync')({sigint: true});

let first_Number = prompt ("Erste Zahl: ");
let second_Number = prompt ("Zweite Zahl: ");
//.log(first_Number + second_Number );
first_Number = parseInt(first_Number); 
second_Number = parseInt(second_Number);
console.log(first_Number + second_Number );
