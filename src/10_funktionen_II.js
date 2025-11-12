

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
//function add(a,b) {
//    return a-b; 
//}





// module: addition a + b |  test:
// output(add(2,2));
// output(add(2,-2));
// output(add(2,0));


// module: subtraction a - b |  test:
// output(subtract(3,2));
// output(subtract(3,-2));
// output(subtract(3,0));
// output(subtract(0,2));
//function subtract(a,b) {
//	return a - b;
//}

// module: multiplication a * b |  test:
// output(multiply(3,2));
// output(multiply(3,-2));
// output(multiply(3,0));
//function multiply(a,b) {
//	return  a * b;
//}


// module: output | test : 
//function output(outputData) {    
//console.log(outputData);
//}


const ERROR_STR_DIV = "Teilen durch 0 nicht möglich";
const ERROR_STR_GEN = "Irgendwas ging schief";


/** WAS soll gemacht werden? */



// module: calculator | tests:
// agreement : "+","-","*",":","/"
output(calculator(3,2,"+"));
output(calculator(3,2,"-"));
output(calculator(3,2,"*"));
output(calculator(3,2,":"));
output(calculator(3,2,"/"));
output(calculator(3,0,"/"));
output(calculator(3,2,"#?!"));
function calculator(a,b,op) {
    switch(op) {
        case "+":
            return add(a,b);
        case "-":
            return subtract(a,b);
        case "*":
            return multiply(a,b);
            case ":":
            case "/":
                return divide(a,b);
            default:
                return Error_STR_GEN;
    }
}

