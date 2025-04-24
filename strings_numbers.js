// 05 - Strings und Numbers
// NUMBERS
let myDivision = 10 / 5;
let myMulty = 10 * 2;
let myAddition = 12 + 6;
let mySubtraction = 15 / 5;
let myPow = 2 ** 7;
//console.log(myPow);

// STRINGS
let myConcet = "Hello " + "World"; // String zusammenfügen
myConcet = "Hello " - "World"; // Fehler: NaN = Not a Number
//console.log(myConcet);

// COMBINATION STRINGS AND NUMBERS
let myCombination = "5" + 10; // Beim + wird aus der Zahl ein String gebaut
myCombination = "5" - 5; // Beim - wird aus String eine Zahl gebaut
//console.log(myCombination);

//13 - String-Funktionen: length und trim()
/*
let myTestString = 'hallo  '

myTestString = myTestString.trim(); // Methode trim() vorne und hinten Leerzeichen abschneiden

console.log(myTestString.length); // länge von dem String abfragen

myTestString = myTestString.toLocaleUpperCase(); // Methode welche alles Buchstaben in Großbuchstaben ändert

console.log(myTestString); // ausloggen in der console

myTestString = myTestString.charAt(2); // Methode chatAt() gibt Buchstaben am bestimten Index aus

console.log(myTestString); // ausloggen in der console
*/

// 15 Übungen
// 01 Aufgabe
// Erstelle eine Funktion namens "fullName", die zwei Strings als Parameter übernimmt, sie zusammenfügt zu einem einzigen String und diesen zurückgibt (returned).
//Beispiel: console.log(fullName('Max','Mustermann')); // Ausgabe: Max Mustermann

function fullName(firstName, lastName) {
  let combineName = firstName + " " + lastName;
  return combineName;
}

console.log(fullName("Ilja", "Völker-Savkiv")); // Ausgabe Ilja Völker-Savkiv
console.log(fullName("Max", "Mustermann")); // Ausgabe: Max Mustermann

// 02 Aufgabe
// Erstelle eine Funktion namens "capitalizeLetters", die einen String als Parameter übernimmt, jeden Buchstaben darin groß schreibt und diesen dann wieder zurückgibt.
// Beispiel: console.log(capitalizeLetters('bAnanE')); // Ausgabe: BANANE

function capitalizeLetters(input) {
  let result = input.toLocaleUpperCase();
  return result;
}

console.log(capitalizeLetters("bAnanE")); // Ausgabe BANANE
console.log(capitalizeLetters("BundeSlIgA")); // Ausgabe BUNDESLIGA

// 03 Aufgabe
// Erstelle eine Funktion namens "countCharacters", die einen String als Parameter übernimmt und die Anzahl der Zeichen in diesem String zurückgibt.
// Beispiel: console.log(countCharacters('banana')); // Ausgabe: 6

function countCharacters(input) {
  let result = input.length;

  return result;
}

console.log(countCharacters("HALLO"));

// Knacker-Aufgabe
// Erstelle eine Funktion namens "formatToCurrency", die eine Dezimalzahl als Parameter übernimmt und diese als Währungswert im Format 0,00€ zurückgibt. Verwende die toFixed() Methode, um zwei Nachkommastellen sicherzustellen und ersetze den Punkt durch ein Komma.
// Beispiel: console.log(formatToCurrency(0.5)); // Ausgabe: "0,50€"

function formatToCurrency (num) {
    newNum = num.toFixed(2);
    newNum = newNum.replace('.', ',')
    return newNum + '€';
}

console.log(formatToCurrency(0.5)); // Ausgabe 0,50€