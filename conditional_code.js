//06 - Booleans und Operator ("&&" und "||")

let myCondition = true;

myCondition = !myCondition; // -> false: not Operator

myCondition = false || false || true; // -> true: or Operator, sobald nur einer true ist, ist das Ergebnis true

myCondition = true && true; // -> true: and Operator, sobald beide true sind, ist das Ergebnis true

// console.log(myCondition);

// TEST
/*
console.log(true && false); // -> false
console.log(true || false); // -> true
console.log(false && true); // -> false
console.log(true && (false || true)); // -> true
console.log((true && false) || true); // -> true; 
console.log(!(true && false)); // -> true
console.log(!(false || true)); // -> false
console.log(!(true && (false || true))); // -> false
console.log((true && !(false || true)) || (false && (true || false))); // -> false
console.log((true || !(false && true)) && (!(true || false) || (false && true))); // -> false 
console.log(true && false || true);  // -> true 
console.log(!(false || true) && true);  // -> false
console.log((true || false) && (!false || false)); // -> true
// */

// 07 - Booleans und Operatoren ("==", "<=", "===" usw.)
/*
myCondition = 45 == '45'; // == testet ob exakt gleich, ohne Type -> true
myCondition = 45 === 45; // === testet ob exakt gleich, mit Type -> true
myCondition = 45 === '45'; // === testet ob exakt gleich, mit Type -> false
myCondition = 45 > 123; // > größe Abfrage -> false
myCondition = 45 < 123; // < kleiner Abfrage -> true
myCondition = 45 <= 45; // <= kleinergleich Abfrage -> true
myCondition = 45 >= 45; // >= größergleich Abfrage -> true
myCondition = 45 != '47'; // == testet ob exakt gleich, ohne Type -> true
myCondition = 45 !== 47; // === testet ob exakt gleich, mit Type -> true
myCondition = 45 !== '47'; // === testet ob exakt gleich, mit Type -> true
console.log(myCondition);
*/

// TESTS
/*
console.log(5 <= 10); // -> true
console.log(15 == 15); // -> true
console.log(20 > 10); // -> true
console.log((7 <= 7) == (5 < 10)); // -> true
console.log((10 > 5) == (3 < 2)); // -> false
console.log((12 >= 8) && (8 < 9)); // -> true
console.log((3 == 3) || (10 > 20)); // -> true
console.log((6 != 6) || (15 <= 20)); // -> true
console.log((7 < 5) == !(10 >= 10)); // false == false -> true
console.log((4 >= 4) && (8 < 15) && (3 == 3)); // -> true
console.log((5 > 3) && (10 < 20) || (7 > 8)); // -> true
console.log(!(5 === "5") || (10 >= 10));  // -> true
console.log(10 == "10");  // -> true
console.log(10 === "10");  // -> false
console.log(50 !== 50);  // -> false
console.log(20 >= 10 && 15 < 30); // -> true  
console.log((7 > 5) == !(3 >= 3)); // false 
*/

//08 - "if", "else" und "if else"
/*
let myIfCondition = true; 

if (myIfCondition) {
    console.log('Hallo Welt! If Teil');
    
} else {
    console.log('Hallo Welt! Else Teil');
}
    */

// Komplexes Beispiel (verschachtelt)
/*
let myIfCondition = false; 
let mysecondIfCondition = true;

if (myIfCondition) {
   console.log('Hallo Welt! if-Teil');
    
} else if (myIfCondition || mysecondIfCondition){
   console.log('Hallo Welt! if-else Teil'); // -> Ergebnis if-else Teil, da mindestens eine condition true!
    
} else {
   console.log('Hallo Welt! else-Teil');
}
*/

/* Eigenes Beispiel
let myAge = 18;
let myIfCondition = myAge >= 18;

if (myIfCondition) {
  console.log("Du bist volljährig!");
} else {
    console.log('Du bist nicht alt genug!');   
}*/

// TESTS
/*
// Aufgabe 1:
if (5 <= 10) {
    console.log("a"); // -> a
}

// Aufgabe 2:
if (15 == 15) {
    console.log("b"); // -> b
}

// Aufgabe 3:
if (20 > 10) {
    console.log("c"); // -> c
}

// Aufgabe 4:
if (7 <= 7) {
    console.log("a"); // -> a
} else {
    console.log("b");
}

// Aufgabe 5:
if (10 > 5) {
    console.log("a"); // -> a
} else if (3 < 2) {
    console.log("b");
} else {
    console.log("c");
}

// Aufgabe 6:
if (12 >= 8 && 8 < 9) {
    console.log("a"); // -> a
} else {
    console.log("b");
}

// Aufgabe 7:
if (3 == 3) {
    console.log("a"); // -> a
} else if (10 > 20) {
    console.log("b");
} else {
    console.log("c");
}

// Aufgabe 8:
if (6 != 6) {
    console.log("a");
} else if (15 <= 20) {
    console.log("b"); // -> b
} else {
    console.log("c");
}

// Aufgabe 9:
if (7 < 5) {
    console.log("a");
} else if (!(10 >= 10)) {
    console.log("b");
} else {
    console.log("c"); // -> c
}

// Aufgabe 10:
if (4 >= 4 && 8 < 15 && 3 == 3) {
    console.log("a"); // -> a
} else {
    console.log("b");
}
*/

// Ändere diese Zahl, um verschiedene Fälle zu testen
/*
let zahl = 12; // -> Die Zahl ist positiv
zahl = -1; // -> Die Zahl ist negativ
zahl = 0; // -> Die Zahl ist null

if (zahl > 0) {
    console.log("Die Zahl ist positiv.");
} else if (zahl < 0) {
    console.log("Die Zahl ist negativ.");
} else {
    console.log("Die Zahl ist null.");
}
*/

/* 1. Temperaturbewertung
Aufgabe:
Schreibe ein Programm, das eine Temperatur (temp) überprüft und folgende Nachrichten ausgibt:
	•	Falls temp über 30 ist: "Es ist heiß draußen!"
	•	Falls temp zwischen 15 und 30 liegt (inklusive): "Das Wetter ist angenehm."
	•	Falls temp unter 15 ist: "Es ist kalt draußen!"

    let temp = 12; 

    if (temp > 30) {
        console.log('Es ist heiß draußen!');
    } else if (temp >15 && temp <= 30 ){
        console.log('Das Wetter ist angenehm.');    
    } else {
        console.log('Es ist kalt draußen!'); 
    }*/

/*2. Notenbewertung

Aufgabe:
Ein Schüler erhält eine Note von 0 bis 100. Schreibe ein if-else-Programm, das die Note in eine Schulnote umwandelt:
	•	90–100: "Sehr gut"
	•	75–89: "Gut"
	•	50–74: "Befriedigend"
	•	25–49: "Mangelhaft"
	•	0–24: "Ungenügend"
    
let grade = 90; 

if (grade >= 90 ) {
    console.log('Sehr gut');
} else if (grade >= 75){
    console.log('Gut');
} else if (grade >= 50){
    console.log('Befriedigend');
} else if (grade >= 25){
    console.log('Mangelhaft');
} else if (grade >= 0){
    console.log('Ungenügend');
}*/
