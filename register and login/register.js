function addUser() {
    let email = document.getElementById('email'); // email rausholen aus der eingabe
    let password = document.getElementById('password'); // password rausholen aus der eingabe
    // weiterleitung zur login seite + nachricht anzeigen "erfolgreiche registrierung"

    users.push({"email": email.value, "password": password.value}); // email und password in Array pushen
    window.location.href="login.html?msg=Du hast Dich erfolgreich registriert"; // message in URL übergeben
}