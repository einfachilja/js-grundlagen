// 12 - objects: Einführung (Liste von Key : Value Pairs)
let myFancyobject = {
  age: 34,
  height: 175,
  name: function () {
    console.log("Peter");
    return "Ilja";
  },
};

console.log(myFancyobject.age);
console.log(myFancyobject["age"]); // andere Schreibweisekk
console.log(myFancyobject.name()); // Funktion aus dem Object aufrufen
