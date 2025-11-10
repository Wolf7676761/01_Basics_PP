const ageJohn = 33;
const ageMark = 30;


let isJohnOlder, isJohnEqual;


isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);

// console.log("ageJohn: " + ageJohn);
// console.log("ageMark: " + ageMark);
//console.log("isJohnOlder: " + isJohnOlder);
//console.log("isJohnEqual: " + isJohnEqual);
//console.log("---------------");


//if(true)
//if(false)
//if(isJohnOlder)
//if(ageJohn > ageMark)

//{
    // console.log("John ist älter.");
//}
// if(true)
// if(false)

//if (isJohnOlder) {
//console.log("John ist älter.");
//} 
//else if(isJohnEqual)
//{
//    console.log("John ist gleich alt.");
//}
//else
//    { 
//   console.log("John ist jünger.");
//}

// console.log( (isJohnOlder)  ? "John is older" : "Mark is older");


/****** Fallunterscheidung / SWITCH|CASE 1 ******/

//const firstName = "Jane";
//let job;

//job = "driver";  // .. fährt TAXI! / UBER
//job = "diver"; // .. taucht im Rhein!
//job = "artist"; // .. malt ein Bild!
//job = "pilot"; // .. macht etwas anderes! --> default
//job = "teacher"; // .. unterrichtet!
// job = "instructor"; // .. unterrichtet!


//switch (job) {
//    case "driver":
//        console.log(firstName + " fährt Taxi!");
//        break;
//    case "diver":
//        console.log(firstName + " taucht im Rhein!");
//        break;
//    case "artist":  
//       console.log(firstName + " malt ein Bild!");
 //      break;

   // case "artist":  
    //   console.log(firstName + " unterrichtet!");
    //   break;       

  //  default:
   //     console.log(firstName + " macht etwas anderes!");
 //       break;     

    
//}


/******** Fallunterscheidung / SWITCH|CASE 2 *******/

const cond = false;

const value = 1;

switch (cond) {
    case (value == 1):
        console.log("ase 1.");
        break;
    case (value == 2):
        console.log("case 2.");
        break;
    default:
        console.log("Value hat einen anderen Wert.");
        break;
}

