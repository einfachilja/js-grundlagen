// 01 - Arrays: Basics
/*
let myList = [12, "Bananna", true, , "Welt"]; // Syntax Array mit Numbers, Strings, Boolean etc. empty Einträge vermeiden!

function initArrays() {
  myList[1] = "No Bananna!"; // Einträge überschreiben

  console.log(myList);
}
*/

// 03 - Arrays: Funktionen - pop() und push()
/*
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi", "Lemon"); // Fügt am Ende des Arrays neue Einträge hinzu

let singleTestVar = fruits.push("Kiwi", "Lemon"); // Tipp Ergebnis Zwischenspeichern. Returned neue Länge des Arrays

singleTestVar = fruits.pop(); // Löscht am Ende des Arrays Einträge und returned den Eintrag der rausgezogen wurde

function initArrays() {
  console.log(fruits);
  console.log(singleTestVar);
}*/

// 04 - Aufgaben: Arrays
// Aufgabenstellung 1: includes
// Implementiere eine Funktion namens containsElement(array, element), die true zurückgibt, wenn element im array enthalten ist, andernfalls false.
/*
function containsElement(array, element, position) {
  return array.includes(element, position); // Return in Funktion benutzen!
}

//Test:

function initArrays() {
  console.log(containsElement(["Anna", "Ben", "Clara"], "Ben", 2)); // false
  console.log(containsElement(["Anna", "Ben", "Clara"], "Daniel")); // false
}

// Aufgabenstellung 2: indexOf
// Implementiere eine Funktion namens findElementIndex(array, element), die den Index des ersten Vorkommens von element im array zurückgibt oder -1, wenn es nicht gefunden wird.

function findElementIndex(array, element, start) {
  return array.indexOf(element, start);
}

// Test:

function initArrays() {
  console.log(findElementIndex([10, 20, 30, 40], 30)); // 2
  console.log(findElementIndex([10, 20, 30, 40], 50)); // -1
}

// Aufgabenstellung 3: shift
// Implementiere eine Funktion namens removeFirstElement(array), die das erste Element aus dem array entfernt und das neue Array zurückgibt.

function removeFirstElement(array) {
  array.shift();
  console.log(array);
}

//Test: 

function initArrays() {
  console.log(removeFirstElement([10, 20, 30, 40])); // [20, 30, 40]
  console.log(removeFirstElement(["a", "b", "c", "d"])); // ['b', 'c', 'd']
}

// Aufgabenstellung 4: unshift
// Implementiere eine Funktion namens addElementToStart(array, element), die das element am Anfang des array hinzufügt und das neue Array zurückgibt.

function addElementToStart(array, element) {
  array.unshift(element);
  console.log(array);
}

// Test: 

function initArrays() {
  console.log(addElementToStart([2, 3, 4], 1)); // [1, 2, 3, 4]
  console.log(addElementToStart(["b", "c", "d"], "a")); // ['a', 'b', 'c', 'd']
}

// Aufgabenstellung 5: slice
// Implementiere eine Funktion namens getSubArray(array, start, end), die ein neues Array zurückgibt, das die Elemente von start bis end (nicht eingeschlossen) enthält.

function getSubArray(array, start, end) {
  let newArray = array.slice(start, end);
  return newArray;
}

// Test:

function initArrays() {
  console.log(getSubArray([1, 2, 3, 4, 5], 1, 4)); // [2, 3, 4]
  console.log(getSubArray(["a", "b", "c", "d", "e"], 0, 3)); // ['a', 'b', 'c']
}

// Aufgabenstellung 6: join
// Implementiere eine Funktion namens joinArray(array, separator), die eine Zeichenkette zurückgibt, die aus den Elementen des array besteht, getrennt durch den separator.

function joinArray(array, separator) {
    let newArray = array.join(separator);
    return newArray;
    
}

// Test:

function initArrays() {
  console.log(joinArray(["apple", "banana", "cherry"], " , ")); // "apple, banana, cherry"
  console.log(joinArray([1, 2, 3, 4], " - ")); // "1 - 2 - 3 - 4"
}
*/

// 05 - for-Schleife: Basics
/*
function initArrays() {
  for (let index = 0; index < 10; index += 2) {
    console.log(index);
  }
}*/

// 06 - for-Schleife: durch Arrays iterieren
/*
let fruits = ["Banana", "Orange", "Apple", "Mango"];

function initArrays() {
  let contentRef = document.getElementById("my_content");
  contentRef.innerHTML += "";

  for (let index = 0; index < fruits.length; index++) {
    // contentRef.innerHTML += fruits[index] + ','; // Kann man beliebig erweitern
    contentRef.innerHTML += `<p>+ ${fruits[index]}</p>`;
  }
}*/

// Aufgabenstellung 1: Summe der Elemente eines Arrays
// Implementiere eine for-Schleife, um die Summe der Elemente in einem Array zu berechnen und zurückzugeben.
/*
function sumArray(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
}

// Test:

console.log(sumArray([3, 7, 1, 4])); // Erwartete Ausgabe: 15 (3 + 7 + 1 + 4)

console.log(sumArray([1, 2, 3, 4, 5])); // Erwartete Ausgabe: 15 (1 + 2 + 3 + 4 + 5)
*/

// Aufgabenstellung 2: Ausgabe einer Zahlenreihe
// Implementiere eine for-Schleife, um die Zahlen von 1 bis n in aufsteigender Reihenfolge auszugeben.
/*
function printNumbers(num) {
  for (let i = 1; i <= num; i++) {
    console.log(i);
  }
}

// Test:

printNumbers(5); // Erwartete Ausgabe: 1, 2, 3, 4, 5

printNumbers(3); // Erwartete Ausgabe: 1, 2, 3
*/

// Aufgabenstellung 3: Rückwärts laufende for-Schleife
// Aufgabe: Implementiere eine for-Schleife, die die Zahlen von der gegebenen Zahl bis 1 in absteigender Reihenfolge ausgibt.
/*
function printNumbersReverse(num) {
  for (let i = num; i >= 1; i--) {
    console.log(i);
    
  }
}

// Test:

printNumbersReverse(5);

// Erwartete Ausgabe: 5, 4, 3, 2, 1

printNumbersReverse(3);

// Erwartete Ausgabe: 3, 2, 1
*/

// Aufgabenstellung 4: Nur jedes dritte Element ausgeben
// Implementiere eine for-Schleife, die jedes dritte Element des gegebenen Arrays ausgibt.
/*
function printEveryThirdElement(array) {
  for (let i = 0; i < array.length; i += 3) {
    let element = array[i];
    console.log(element);
    
  }
}

//Test:

printEveryThirdElement([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// Erwartete Ausgabe: 1, 4, 7

printEveryThirdElement(["a", "b", "c", "d", "e", "f"]);

// Erwartete Ausgabe: 'a', 'd'
*/

// Bonusaufgabe: Prüfung auf Primzahlen
// Implementiere eine for-Schleife, um zu überprüfen, ob die gegebene Zahl eine Primzahl ist (d.h. nur durch 1 und sich selbst teilbar ist). Gib true zurück, wenn sie eine Primzahl ist, andernfalls false.
/*
function isPrime(num) {
  if (num <= 1) {
    return false // Zahlen kleiner 1 oder 1 sind keine Primzahlen
  }

  // Prüfung, ob durch 2 geteilt einen Rest ergibt oder nicht. Wenn genau aufgeht, dann keine Primzahl
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }

  }
  return true; // Alle anderen Zahlen sind Primzahlen
}

//Test:

console.log(isPrime(7)); // Erwartete Ausgabe: true (7 ist eine Primzahl)
console.log(isPrime(4)); // Erwartete Ausgabe: true (4 ist keine Primzahl)
*/

// 08 - for-Schleife: break und continue
/*
function sumArray(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {

    if (array[i] == 'error') {
      //console.error('Fehler!!!');
      //break; // for-Schleife wird abgebrochen
      continue; // 'error' wird übersprungen und weitergerechnet
    }

    sum += array[i];
  }

  return sum;
}

console.log(sumArray([1,2,5,'error',2,10]));
*/

// 10 - Weitere Schleifenarten: While und ForEach

let fruits = ['Banana', 'Orange', 'Apple', 'Mango']

function initArrays() {

  let i = 0; // start

  while (i < 5) { // Abbruch
    console.log('while ' + i);
    i++ // Schritt
  }

  for (let index = 0; index < 5; index++) {
    console.log('for ' + index);
  }

  fruits.forEach(element => {
    console.log('forEach ' + element);

  });

  for (let element = 0; element < fruits.length; element++) {
    console.log('for ' + fruits[element]);
  }

}



