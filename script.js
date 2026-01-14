document.querySelector("radio:checked")?.value;
document.getElementById("Fplanet").value;
document.querySelector(".color-btn.selected")?.getAttribute("data-color");
document.getElementById("Cage").value;

function getPrefix(cDay) {
    if (
        cDay === "Monday" ||
        cDay === "Tuesday" ||
        cDay === "Wednesday"
    ) {
        return "astro";
    } else if (
        cDay === "Thursday" ||
        cDay === "Friday"
    ) {
        return "hyper";
    } else {
        return "cosmo";
    }
}

function getFirstName(fInital) {
    if (fInital >= "A" && fInital <= "J") {
        return "Alex";
    } else if (fInital >= "K" && fInital <= "P") {
        return "Julia";
    } else if (fInital >= "Q" && fInital <= "Z") {
        return "Jackson";
    }
}

function getMiddleName(fColor) {
    let middleName;

    if (fColor === "red") {
        middleName = "Luna";
    } else if (fColor === "orange") {
        middleName = "Stella";
    } else if (fColor === "yellow") {
        middleName = "Solar";
    } else if (fColor === "green") {
        middleName = "Nova";
    } else if (fColor === "blue") {
        middleName = "Comet";
    } else if (fColor === "Indigo") {
        middleName = "Orbit";
    } else if (fColor === "violet") {
        middleName = "Galaxy";
    } else if (fColor === "black") {
        middleName = "Nebula";
    } else if (fColor === "white") {
        middleName = "Astro";
    }

    return middleName;
}


function getLastName(cPlanet) {
    if (cPlanet === "Mercury") {
        return "Redstone";
    } else if (cPlanet === "Venus") {
        return "Silversky";
    } else if (cPlanet === "Earth") {
        return "Stormcloud";
    } else if (cPlanet === "Mars") {
        return "Ringshadow";
    } else if (cPlanet === "Jupiter") {
        return "Deepwave";
    } else if (cPlanet === "Saturn") {
        return "Iceflare";
    } else if (cPlanet === "Uranus") {
        return "Swiftwind";
    } else if (cPlanet === "Neptune") {
        return "Brightstar";
    }
}

function getSuffix(cAge) {
    if (cAge < 10) {
        return "Junior";
    } else if (cAge === 16 || cAge === 17) {
        return "Senior";
    } else if (cAge === 18 || cAge === 19) {
        return "Adult";
    } else if (cAge === 20) {
        return "III";
    }
}


document.getElementById("generate").addEventListener("click", function() {
    const cDay = document.querySelector("radio:checked")?.value;
    const fInitial = document.getElementById("Finitial").value;
    const fColor = document.querySelector(".color-btn.selected")?.getAttribute("data-color");
    const cPlanet = document.getElementById("Fplanet").value;
    const cAge = document.getElementById("Cage").value;

    const name = `${getPrefix(cDay)} ${getFirstName(fInitial)} ${getMiddleName(fColor)} ${getLastName(cPlanet)} ${getSuffix(cAge)}`;
    if (name) {
        document.getElementById("result").innerHTML = name;
    }
});
