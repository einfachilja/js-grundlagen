// 03 - Die Debugger-Pfeile
/*let count = 0;

function init() {
    debuggerOutput('A');
    debuggerOutput('A');
    testOne();
    debuggerOutput('A');
    debuggerOutput('A');
}

function testOne() {
    debuggerOutput('B');
    debuggerOutput('B');
    testTwo();
    debuggerOutput('B');
    debuggerOutput('B');

}

function testTwo() {
    debuggerOutput('C');
    debuggerOutput('C');
    debuggerOutput('C');
}

function debuggerOutput(text) {
    count++;
    let debuggerLogRef = document.getElementById('debugger_log');
    debuggerLogRef.innerHTML += ' ' +  text + count;
}*/

// 04 - Variablen anzeigen
/*
let count = 0;

function init(){
    testOne();
    debuggerOutput('init');
    testOne();
    testTwo('testTwo');
    testOne();
}

function testOne(){
    debuggerOutput('testOne');
}

function testTwo(text){
    debuggerOutput(text);
    testOne();
}

function debuggerOutput(text){
    count++;
    let debuggerLogRef = document.getElementById('debugger_log');
    debuggerLogRef.innerHTML = text + count;
}*/

// 06 - Scopes im Debugger sehen
// Local = lokale Variable, die deklariert sind
// Global = globale Variablen, die deklariert sind
/*
let count = 0;

function init(){
    debuggerOutput('init');
    testTwo('testTwo');
}

function testOne(){
    debuggerOutput('testOne');
}

function testTwo(text){
    debuggerOutput(text);
}

function debuggerOutput(text){
    count++;
    let debuggerLogRef = document.getElementById('debugger_log');
    debuggerLogRef.innerHTML = text + count;
}*/

// 07 - wichtige Tabs des Debuggers
let count = 0;

function init(){
    debuggerOutput('init');
    testTwo('testTwo');
}

function testOne(){
    debuggerOutput('testOne');
}

function testTwo(text){
    debuggerOutput(text);
}

function debuggerOutput(text){
    count++;
    let debuggerLogRef = document.getElementById('debugger_log');
    debuggerLogRef.innerHTML = text + count;
}