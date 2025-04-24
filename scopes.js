

// Fehler, da nicht auf den Block zugegriffen werden kann
function scopeTest() {
   if (true) {
    let testScopeVar = 'hello world';
   }
    console.log(testScopeVar);
    
}

// Auch Fehler, da Funktion scopeTest() und scopeTestTwo() nichts miteinander zu tun haben
function scopeTest() {
    let testScopeVar = 'hello world';
    scopeTestTwo();
     
 }

 function scopeTestTwo() {
    console.log(testScopeVar);
     
 }

