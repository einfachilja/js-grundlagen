
let randomTitles = [
    "Inception",
    "The Dark Knight",
    "Pulp Fiction",
    "Fight Club",
];

let randomTitlesSecond = [
    "Interstellar",
    "The Matrix",
    "Forrest Gump"
];

let randomDescriptions = [
    "Ein Dieb stiehlt Informationen, indem er in die Träume anderer eindringt – doch ein letzter Auftrag wird zur Herausforderung.",
    "Batman kämpft gegen den Joker, der Gotham ins Chaos stürzen will – ein düsterer Thriller über Moral und Wahnsinn.",
    "Drei miteinander verflochtene Geschichten voller schwarzem Humor und Gewalt im kriminellen Untergrund von L.A.",
    "Ein unzufriedener Büroangestellter gründet mit einem geheimnisvollen Fremden einen illegalen Fight Club.",
];

let randomDescriptionsSecond = [
    "Astronauten reisen durch ein Wurmloch, um eine neue Heimat für die Menschheit zu finden – visuell beeindruckendes Sci-Fi-Drama.",
    "Ein Hacker entdeckt, dass die Welt eine Simulation ist – und beginnt den Kampf gegen die Maschinen, die sie kontrollieren.",
    "Forrest, ein gutmütiger Mann mit niedrigem IQ, erlebt die großen Momente der US-Geschichte – berührend und humorvoll zugleich."
];

let currentTitles = [];
let currentDescriptions = [];

function renderFiltered(index) {
    if (index == 1) {
        console.log('Ich führe 1 aus');
        currentTitles = randomTitles;
        currentDescriptions = randomDescriptions;
        render();
    }

    if (index == 2) {
        console.log('Ich führe 2 aus');
        currentTitles = randomTitlesSecond;
        currentDescriptions = randomDescriptionsSecond;
        render();
    }
}

// render-Funktion für die div Content
function render() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = '';

    for (let index = 0; index < currentTitles.length; index++) {
        contentRef.innerHTML += getNoteTemplate(index, currentTitles, currentDescriptions);
    }
}

// Auslagerung von HTML Code in eine extra Funktion
function getNoteTemplate(i, currentTitles, currentDescriptions) {
    return `
        <div onclick="toggleOverlay(${i})" class="single_element">
            <h2>${currentTitles[i]}</h2>
            <p>${currentDescriptions[i]}</p>
        </div>`;
}

// Funktion zum öffnen und schließen des Overlays
function toggleOverlay(i) {
    let overlayRef = document.getElementById('overlay');
    overlayRef.classList.toggle('d_none');
    overlayRef.innerHTML = `
    <div class="overlay_box">
        <div class="single_element">
            <h2>${currentTitles[i]}</h2>
            <p>${currentDescriptions[i]}</p>
        </div>
    </div>`;
}
