

/*** Rechner  */
/*
0. a+b | a*b | a/b --> Ergebnis C

1. Dateneingabe + -überprüfung :
2. Auswahl Rechenart :
3. Fkt. Grundrechenarten :
4. Ausgabe in Konsole : check!
*/

// module: addition a + b |  test:
//output(add(2,2));
//output(add(2,-2));
//output(add(2,0));
const prompt = require('prompt-sync')({sigint: true});

let zahlEins = prompt ("Zahl 1: ")
let operator = prompt ("Auswahl Rechenart: ")
let zahlZwei = prompt ("Zahl 2: ")


zahlEins = parseInt (zahlEins);
zahlZwei = parseInt (zahlZwei);

/* if (operator == "+")
    output(calculator(zahlEins,zahlZwei,"+"));

if (operator == "-")
    output(calculator(zahlEins,zahlZwei,"-"));

if (operator == "*")
    output(calculator(zahlEins,zahlZwei,"*"));

if (operator == "x")
    output(calculator(zahlEins,zahlZwei,"x"));

if (operator == "/")
    output(calculator(zahlEins,zahlZwei, "/"));

if (operator == ":")
    output(calculator(zahlEins,zahlZwei,":"));
 */

output(calculator(zahlEins,zahlZwei,operator));

function add(a,b) {
    return a + b; 
}


// module: addition a + b |  test:
// output(add(2,2));
// output(add(2,-2));
// output(add(2,0));
// module: subtraction a - b |  test:
// output(subtract(3,2));
// output(subtract(3,-2));
// output(subtract(3,0));
// output(subtract(0,2));
function subtract(a,b) {
	return a - b;
}

// module: multiplication a * b |  test:
// output(multiply(3,2));
// output(multiply(3,-2));
// output(multiply(3,0));
function multiply(a,b) {
	return  a * b;
}

// const ERROR_STR_GEN = "Irgendwas ging schief";
//const ERROR_STR_DIV = "Teilen durch 0 nicht möglich";

function divide(a,b) {
    if (b == 0){
        return "Teilen durch 0 nicht möglich";
    }else {
        return a / b;

    }
    
}


// module: output | test : 
function output(outputData) {    
console.log(outputData);
}




/** WAS soll gemacht werden? */
// module: calculator | tests:
// agreement : "+","-","*",":","/"
//output(calculator(3,2,"+"));
//ooutput(calculator(3,2,"-"));
//ooutput(calculator(3,2,"*"));
//ooutput(calculator(3,2,":"));
//ooutput(calculator(3,2,"/"));
//ooutput(calculator(3,0,"/"));
//output(calculator(3,2,"#?!"));

function calculator(a,b,op) {
    switch(op) {
        case "+":
            return add(a,b);
        case "-":
            return subtract(a,b);
        case "*":
        case "x":
            return multiply(a,b);
        case ":":
        case "/":
            return divide(a,b);
        default:
             return "Irgendwas ging schief";
    }
}

