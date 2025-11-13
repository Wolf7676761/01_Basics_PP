

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
    let punct = ".";

    if (op === "Q") punct = "?";
    else if (op === "E") punct = "!";

    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str += arr[i];
        if (i < arr.length - 1) str += GAP;
    }

    return str + punct;
}




// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputData) {
    console.log(outputData);
}
