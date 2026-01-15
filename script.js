document.querySelector("radio:checked")?.value;
document.getElementById("Fplanet").value;
document.querySelector(".color-btn.selected")?.getAttribute("data-color");
document.getElementById("Cage").value;

function getPrefix(cDay) {
    if (
        cDay === "monday" ||
        cDay === "tuesday" ||
        cDay === "wednesday"
    ) {
        return "astro";
    } else if (
        cDay === "thursday" ||
        cDay === "friday"
    ) {
        return "hyper";
    } else {
        return "cosmo";
    }
}

function getFirstName(fInital) {
    const initial = fInital.toUpperCase();
    if (initial >= "A" && initial <= "J") {
        return "Julia";
    } else if (initial >= "K" && initial <= "P") {
        return "Alex";
    } else if (initial >= "Q" && initial <= "Z") {
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
    } else if (fColor === "indigo") {
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
    if (cPlanet === "mercury") {
        return "Redstone";
    } else if (cPlanet === "venus") {
        return "Silversky";
    } else if (cPlanet === "earth") {
        return "Stormcloud";
    } else if (cPlanet === "mars") {
        return "Ringshadow";
    } else if (cPlanet === "jupiter") {
        return "Deepwave";
    } else if (cPlanet === "saturn") {
        return "Iceflare";
    } else if (cPlanet === "uranus") {
        return "Swiftwind";
    } else if (cPlanet === "neptune") {
        return "Brightstar";
    }
}

function getSuffix(cAge) {
    if (cAge === 16 || cAge === 17) {
        return "Senior";
    } else if (cAge === 18 || cAge === 19) {
        return "Adult";
    } else if (cAge === 20) {
        return "III";
    }
    return "";
}

// I did use chat GPT to help me with the code that is below this line because nothing i was doing was working correctly.//
document.getElementById("generate").addEventListener("click", function() {
    const cDay = document.querySelector("input[name='Cday']:checked")?.value;
    const fInitial = document.getElementById("Finitial").value;
    const fColor = document.querySelector(".color-btn.selected")?.getAttribute("data-color");
    const cPlanet = document.getElementById("Fplanet").value;
    const cAge = parseInt(document.getElementById("Cage").value);

    const name = `${getPrefix(cDay)} ${getFirstName(fInitial)} ${getMiddleName(fColor)} ${getLastName(cPlanet)} ${getSuffix(cAge)}`;
    if (name) {
        document.getElementById("result").innerHTML = name;
    }
});


document.querySelectorAll(".color-btn").forEach(button => {
    button.addEventListener("click", function() {
        document.querySelectorAll(".color-btn").forEach(btn => btn.classList.remove("selected"));
        this.classList.add("selected");
    });
});
