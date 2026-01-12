document.querySelector("radio:checked")?.value;
document.getElementById("fPlanet").value;
document.querySelector(".color-btn.selected")?.getAttribute("data-color");
document.getElementById("cAge").value;

function getPrefix(cDay) {
    if (
        cDay === "Monday" ||
        cDay === "Tuesday" ||
        cDay === "Wednesday" ||
    ) {
        return "astro";
    } else if (
        cDay === "Thursday" ||
        cDay === "Friday" ||
    ) {
        return "hyper";
    }else {
        return "cosmo";
    }
}

function getFirstName(fInital) {
    if (fInital >= "A" && fInital <= "J") {
        return "Alex";
    } else if (fInital >= "K" && fInital <= "P") {
        return "Julia";
    } else {
        return "Jackson";
    }
}

function getMiddleName(fColor) {
    let middleName;

    switch (fColor) {
        case "red":
            middleName = "Luna";
            break;
        case "orange":
            middleName = "Stella";
            break;
        case "yellow":
            middleName = "Solar";
            break;
        case "green":
            middleName = "Nova";
            break;
        case "blue":
            middleName = "Comet";
            break;
        case "Indigo":
            middleName = "Orbit";
            break;
        case "violet":
            middleName = "Galaxy";
            break;
        case "black":
            middleName = "Nebula";
            break;
        case "white":
            middleName = "Astro";
            break;

        
    }
    return middleName;
}

document.getElementById("generate").addEventListener("click", function() {
    const cDay = document.querySelector("radio:checked")?.value;
    const fInital = document.getElementById("fInitial").value;
    const fColor = document.querySelector(".color-btn.selected")?.getAttribute("data-color");
    const cPlanet = document.getElementById("fPlanet").value;
    const cAge = document.getElementById("cAge").value;

    const name = `${getPrefix(cDay)} ${getFirstName(fInital)} ${getMiddleName(fColor)} ${cAge}`;
    if (name) {
        document.getElementById("result").innerHTML = name;
    }
}