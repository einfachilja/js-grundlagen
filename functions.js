//09 - functions: Einführung
/*
let discount = 50;
let price = 500;

logCalculatedPrice()

price = 400;

logCalculatedPrice()

function logCalculatedPrice() { 
  console.log((price - discount) * 1.19);
}
*/

// 10 - functions: Parameter
/*
logCalculatedPrice(50, 500);

logCalculatedPrice(50, 300);

function logCalculatedPrice(discount, price) {
  console.log((price - discount) * 1.19);
}*/

//11 - functions: return

console.log(logCalculatedPrice(50, 300)); // Input

function logCalculatedPrice (discount, price) {

   let value = (price - discount) * 1.19; // Algorithmus;  bessere Schreibweise, falls man hier noch was verändern möchte

   console.log('vor dem return');
   
   return value; // Output: Gibt immer den return Wert der Funktion zurück!
   
   console.log('nach dem return'); // wird nicht ausgeführt, da nach return schluss ist    
}

