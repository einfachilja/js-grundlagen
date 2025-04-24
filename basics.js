// 03 - Variablen (Container wo ich was reinschreiben kann!)
// Beispiel für let
let meineVariable = 27; // let ist veränderbar!
console.log(meineVariable);
meineVariable = 32;
console.log(meineVariable);

// Beispiel für const
const neueVariable = 7; // const ist nicht veränderbar!
console.log(neueVariable);
neueVariable = 8; // Fehler, da nicht veränderbar: Uncaught TypeError: Assignment to constant variable. at basics.js:17:14

// 04 - Datentypen
let myString = "Das ist ein Text bzw Text einer Zahl 32"; // Strings sind Texte
myString = "https://google.de"; // Auch das ist ein String, gibt keinen Datentyp URL!
let myNumber = 32.07765; // Einfach eine Zahl
let myFloat = 32.1; // Float ist eine Kommazahl
let myInt = 32; //Integer ist eine Ganzzahl
let myBoolean = true; // Wahr oder Falsch, true oder false
let myArray = [2, 5, "Text"]; // Eine Liste mit Dingen
let myObject = { age: 32, height: 175 }; // Liste aus Key z.B. Age und Value z.B. 32 Paaren
