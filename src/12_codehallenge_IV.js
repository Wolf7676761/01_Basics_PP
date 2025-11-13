

/*** Mini-Challenge  */
// Satzbau + variable Punktuation

// Vereinbarung:
// "S" (sentence) --> "."  Ich bin Max.
// "Q" (question) --> "?"  Bist du Max?
// "E" (exclamation) --> "!"  Ich bin!

// Parameter --> funktion getSentence([ ...], "Q"){ ...}


/*** Funktion mit Array als Parameter */
// mögliche Tests:
output(getSentence(["Ich","bin","Max"],"S"));
output(getSentence(["Bist","du","Max"],"Q"));
output(getSentence(["Ich","bin"],"E"));
output(getSentence(["Ich","hätt","gern","die","Platt","von","dene","zwei","diwodaso","Spass","mache,","habbe","Sie","die"],"Q"));

function getSentence(arr,op) {
    const GAP = " ";
    let punct = ".";        // const steht für Konstante und darf nicht verändert werden darum wird die Variable let verwendet

    if (op === "Q") punct = "?";
    else if (op === "E") punct = "!";

    let str = "";
    for (let i = 0; i < arr.length; i++) {    //for (let i = 0; i < arr.length; i++) {
        str += arr[i];                        //str += arr[i] -->>>(+ PUNCT;)<<<--  
        if (i < arr.length - 1)               //if (i != arr.length - 1) 
            str += GAP;                       //str += arr[i] + GAP;
    }

    return str + punct;                       //return str + PUNCT;  
}

//// -->>> Änderung<<<--
// Satzzeichen (punct) wird nicht mehr
// in der Schleife nach jedem Wort angehängt,
// sondern erst nach der Schleife einmal am Satzende.
// So steht das Satzzeichen nur einmal am Ende.


// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputData) {
    console.log(outputData);
}



