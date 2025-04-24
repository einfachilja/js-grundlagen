//01 - Das DOM und .innerHTML (Inhalt von Website auslesen und verändern)
/*
let title = document.getElementById("website_title"); // Auf das HTML-Elemnt mit der id "website_title" zugreifenk
console.log(title.innerHTML); // Ausgabe null, dann wird script vor body geladen. Lösung: script js am Ende der HTML laden.
title.innerHTML = "Neuer Titel"; // Titel wird angepasst bzw. Inhalt von h1 manipuliert

// 02 - .innerHTML vs. .innerText
document.getElementById('test_div').innerHTML = '<p>test</p>'; // Zeigt Inhalt des HTML_Elements an. HTML-Elemente werde nicht angezeigt!

document.getElementById('test_div').innerText = '<p>test</p><script></script>'; // Zeigt alles als Text an, auch HTML-Elemente als Text.
*/

// 03 - Aufgaben: Button hinzufügen
// Aufgabe 1
// Erstelle mit Hilfe von JavaScript einen Button innerhalb einer div.
// Tipp: Im besten Fall bekommt der Button hier schon eine id.

//document.getElementById('test_div').innerHTML = `<button class="text_color" id="btn"></button>`; // button hinzufügen

// Aufgabe 2
// Füge diesem Button wieder mit Hilfe von JavaScript den Text hinzu "Klick mich"

//document.getElementById('btn').innerText = 'Klick Mich!'; // Text hinzufügen

// 04 - .classList mit add, remove und toggle
/*
document.getElementById('btn').classList.add('green_bg'); // eine Klasse zum Element hinzufügen
document.getElementById('btn').classList.remove('text_color'); // eine Klasse aus dem Element entfernen
document.getElementById('btn').classList.toggle('text_color'); // prüft, ob eine Klasse drin ist oder nicht und fügt bzw. entfernt es
*/

// 05 - setAttribute und value
/*
document.getElementById('test_input').setAttribute('type', 'text'); // Attribut eines HTML-Tags verändern
document.getElementById('test_input').setAttribute('value', 'Hallo Welt') // Attribut eines HTML-Tags verändern
document.getElementById('test_input').value = 123; // schneller den value ansprechen, Empfehlung mit setAttribute zu arbeiten
console.log(document.getElementById('test_input').value); // Wert in der console ausloggen -> 123
*/

// 06 - Aufgaben: setAttribute
// 1. Aufgabe:
// Erstelle ein p-tag mit einer selbst gewählten id und Inhalt.
/*
// siehe index.html

// 2. Aufgabe:
// Füge mit JavaScript dem p-tag einen title hinzu.
// Hinweis: das title Attribute ist meist auch als Tooltip zu verstehen, mehr dazu z.B. hier:
//  https://www.w3schools.com/tags/att_global_title.asp

document.getElementById('test_p').setAttribute('title', 'Ich bin ein p-Tag');

// 3. Probiere aus:
// Kannst du auch eine css class mit setAttribute hinzufügen?

document.getElementById('test_p').setAttribute('class', 'green_bg'); // Überschreibt eine vorhandene Klasse

// 4. Probiere aus:
// Worin liegt der Unterschied von classList.add("test_class") und setAttribute("class", "test_class")?

// Hinweis: Füge hierzu vorher schon einmal eine andere class ein!

document.getElementById('test_p').classList.add('text_color'); // fügt eine zusätzliche Klasse hinzu

// Wichtiger Tipp:
// Du siehst, dass manchmal beides geht, sowohl setAttribute() als auch der direkte Zugriff.

// Hierbei sollte dein Entwicklergeist geweckt sein. Wenn du nicht sicher bist, wie oder ob etwas geht, dann probier es aus! 

// Genau das macht dich zum Entwickler!!
*/

// Vorbereitung nächstes Video:
// Erstelle im CSS eine Klasse d_none, diese sollte "display:none;" beinhalten.

// Bau nun eine Funktion, die die Klasse "d_none" mit classList.toggle() hinzufügt/entfernt bei einem beliebigen HTML Element.

// Hinweis: Beliebig heißt hier, dass die id aus dem Parameter der Funktion genommen wird.

function classToggle(id) {
  document.getElementById(id).classList.toggle("d_none"); // fügt eine beliebigen id die klasse d_none hinzu bzw. entfernt diese
}

// 07 - onclick -> auf Events im DOM/HTML reagieren

// 09 - Aufgabe: onkeyup/onkeydown
function inputTest(id) {
  let value = document.getElementById(id).value;
  return console.log(value);
}

// 10 - addEventListener (damit man es mal gesehn hat)
document.getElementById("toggleButton").addEventListener("click", logger);

function logger() {
  console.log("Event Listener click wurde ausgeführt!");
}
