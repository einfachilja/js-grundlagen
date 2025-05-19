  // google nach query parameter bei stackoverflow
  const urlParams = new URLSearchParams(window.location.search);
  const msg = urlParams.get("msg"); // anpassen variable msg und string in der get()

  // abfrage ob eine nachricht vorhanden ist
  if (msg) {
    msgBox.innerHTML = msg;
  }
  else {
    // display: none, falls keine nachricht vorhanden ist
  }

function login() {
    let email = document.getElementById('email'); // email rausholen aus der eingabe
    let password = document.getElementById('password'); // password rausholen aus der eingabe

    // suchen der user aus eingabe bei login in der datenbank
    let user = users.find(u => u.email === email.value && u.password === password.value)
    console.log(user);

    // falls erfolgreich, dann "user gefunden", sonst "user nicht gefunden"
    if (user) {
        console.log('User gefunden');
    } else {
        console.log('User nicht gefunden!');
    }
}
