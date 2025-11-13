
/* Die Satzbau-Maschine | Arrays */

/**
 *   THEORIE
 * 
 */
//let arr;
//arr = new Array(); // Konstruktor
//arr = [];
//arr = [2,11,7,8,10,20];



//output(arr);
//output(arr.length); // Anzahl der Elemente
//output(arr[0]); // Index 0 (1. Pos. im Array)
//output(arr[arr.length-1]);

/* 02a. Theorie: Schleifen (forschleife) */
/* For -Schleifen als allg. Wiederholungs-Struktur */


// Inkrement (untere Grenze --> obere Grenze)
//for (let i = 0; i < 100 ; i++) {
//    output("index :" + i); // --> Schleifen -Index
//}

// Dekrement (obere Grenze --> untere Grenze
//Dekrement (obere Grenze --> untere Grenze)
//for (let i = 10; i > 0; i--) {  // i --> Schleifen-Index
//     output("index :" + i); 
//}

// Dekrement (obere Grenze --> untere Grenze)
// for (let i = 10; i > 0; i--) {  // i --> Schleifen-Index
//     output(i); 
// }



// Inkrement (var. Schrittweite)
//for (let i = 10; i <= 100; i += 5) 
//{
//    output(i);   
//}
/* 02b. For-Schleife für Array-Index (Iteration)*/
//let arr = ["Ich","bin","die","coole","Maxine","Mützerich"];
//for (let i = 0; i < arr.length; i++) 
//{
//    output(i); // interner Index 
//        output(arr[i]);  // Mapping  intern --> extern
//}


/********* Überlegungen - Transponierung **********/

/*
1. Einer Variablen kann Ihr eigener Wert zugewiesen werden.
Solange die Variable existiert, bleibt dieser erhalten.
hier: Aufsummierung
*/

/* Zu "Fuß" - DRY !!! */
/* let a = 0; // Anfangswert
output("inhalt von a: " + a);
a = a + 1; // a = 0 + 1
output("inhalt von a: " + a);
a = a + 1; // a = 1 + 1
output("inhalt von a: " + a);
a = a + 1; // a = 2 + 1
output("inhalt von a: " + a); */


/* Besser: mit FOR-Schleife */

/* let a = 0; // Anfangswert
for (let i = 0; i < 10; i++) {
    a = a + 1
    //a += 1;  
     output("inhalt von a: " + a);
} */




/**
 *   PRAXIS
 * 
 */



/*** 01. Funktionalität mit Einzelparametern */
// --> "Ich bin Max Mütze."
//output(getSentence("Ich","bin","Max","Mütze"));
//output(getSentence("Ich","bin","die","coole","Maxine","Mützerich"));
 /*  function getSentence(arr) {
    const GAP = " ";
    const PUNCT = ".";
    let str =   arr[0] + GAP +
                arr[1] + GAP +
                arr[2] + GAP +
                arr[3] + GAP +
                arr[4] + GAP +                
                arr[5] +              
                PUNCT;

    return str;
} */




// Modul: Ausgabe in Konsole : Test
// output("hi"); 
/* function output(outputStr) {
    console.log(outputStr);
} */


/*** 01a. Funktionalität mit Array 1 */
// Kritik | Überlegung
// word1,word2, .... wordN :: Semantische Struktur
// arr[0],arr[1] ... arr[n-1] :: Numerische Struktur (0,1,2,3 ... n)
// --> Transformation semantisches Problem --> numerisches Problem
// output(getSentenceArr(["Ich","bin","die","coole","Maxine","Mützerich"]));

/*** 01b. Funktionalität mit Array 2  */


function getSentence(word1,word2,word3,word4,word5,word6) {
}

function getSentenceArr(arr) {
}


// Transponierung:  untereinander ---> nebeneinander
// Helge Schneider: Anananananderdereihung ...
output(getSentenceArr2(["Ich","bin","die","coole","Maxine","Mützerich"]));
function getSentenceArr2(arr) {

    const GAP = " ";
    const PUNCT = ".";
    let str = "";

 for (let i = 0; i < arr.length; i++) {
    if (i != arr.length - 1) {
    str += arr[i] + GAP;
    } else {
        str += arr[i] + PUNCT;
     }
 }

 return str + PUNCT;
}



// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputStr) {
    console.log(outputStr);
}



// 2. Iteration: Struktur erzeugen + trimmen()
    // for (let i = 0; i < arr.length; i++) {
    //     str += arr[i] + GAP; 
    // }
    // return str.trim() + PUNCT;

// 2. Iteration: Struktur erzeugen + trimmen()
    // for (let i = 0; i < arr.length; i++) {
    //     str += arr[i] + GAP; 
    // }
    // return str.trim() + PUNCT;


// 3. Variante: Ausnutzen von generischen Fuktionen ...
    return arr.join(GAP) + PUNCT;
