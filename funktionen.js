/* DATENSTRUKTUREN */

/* Primitives */

// let a; // (var) Definition oder Deklaration

// // Wertzuweisung / Assignment
// a = 2; //number
// a= true; // boolean
// a="Hallo"; // String

// console.log (typeof a);
// console.log (a);

// /* Arrays */
// // Navigation über INDEX

// let arr;

// arr = [true,"Heinz", 1,2];
// console.log (arr);
// console.log (arr[0]);
// console.log (arr[3]);
// console.log (arr.length-1);
// console.log (arr[5]); //undefined
// /* Array -Info, nicht klausurrelevant*/
// arr = [];
// console.log(arr);
// arr.push("a");
// console.log(arr);
// arr.push("b");
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.pop();
// console.log(arr);

// /* Daten-Objekte */
// // Navigation über Bezeichner (keys)
// a={
//     Vorname: "Mathias",
//     Nachname: "Weber",
//     Alter: "54",
// };

// console.log(a);
// console.log(a.Vorname);
// console.log(a.Nachname);
// console.log(a.Alter);


//  let obj = {
//             val0: 10,
//             sub1:{
//                 val1: "hi",
//                 val2: 2,
//                 val3: [{v1: 10,
//                         v2: true,
//                         v3: []},1,"Str"]
//                 }
//         };

//         console.log(obj.sub1.val1);
//         console.log(obj.sub1.val2);

/*DOM*/

//         console.log(document);


// console.log(document.body);
// console.log(document.body.children);
// console.log(document.body.children[0]);
// console.log(document.body.children[0].innerHTML);
// document.body.children[0].innerText = "Hi";
// console.log(document.getElementById("test"));
// document.getElementById("test").innerHTML = "Hallo Text!"


/* ENTSCHEIDUNGSSTRUKTUREN | CONTROL FLOW*/


// cond = true;
// cond = (6 > 4);
// cond = (6 < 4);
// cond = (4 == "4"); // Test auf Wert
// cond = (4 === "4"); // Test auf Wert UND Typ


// if (cond) {console.log("Aussage wahr"); 
// } else {console.log("Aussage falsch"); 
// }

// let key = 2;
// switch (key) {
//     case 1:
//         console.log("case1")
//         break;
//     case 2:
//         console.log("case2")
//         break;
//     default:
//         break;
// }

 //   https://github.com/01-PP/03_Entscheidungsstrukturen

/* FUNKTIONEN */

// 1. Kapselung
// test();
// function test() { // Fkt.-Rumpf | body
//     console.log("Testausgabe");
// }

// 2. return
//  console.log(test2());
//  function test2() { // do something ...
//     return "Testausgabe 2"; // Lieferung an die Stelle des calls
//     console.log("Noch eine Ausgabe"); // nach return Abbruch!
//  }

// 3. Parameter 
//  console.log(test3("Robert")); // Argument(e)
//  function test3(firstName) // Parameter
//  { // do something ...
//     return "Hallo, " + firstName; 
// }

// 4. Fkt-Call aus Funktionen
console.log(test4("Robert")); // Argument(e)

function test4(firstName) // Parameter
{ 
   return grussformel() + firstName; 
   return firstName + grussformel() ; 
}

function grussformel() {
   return "Hallo, ";
    // return "Hola, ";
}

// rechner();



