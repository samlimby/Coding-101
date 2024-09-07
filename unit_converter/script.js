// declare the localStorage requirements
// initialize DOM interaction for each of the three conversion to be more optimal for performance

const inputA = document.getElementById("digit-input");
const primaryButton = document.getElementById("primary-button");
const modeButton = document.getElementById("mode-button");
let lengthText = document.getElementById("length-text");
let volumeText = document.getElementById("volume-text");
let massText = document.getElementById("mass-text");

const meterConversion = 1 * 3.28084;
const feetConversion = 1 / 3.281;
const literConversion = 1 / 3.785;
const gallonConversion = 1 * 3.785;
const kiloConversion = 1 * 2.205;
const poundConversion = 1 / 2.205;

localStorage.setItem("value", "input");

inputA.addEventListener("input", function(){
    console.log("input typed in");
    lengthTextConversion();
    volumeTextConversion();
    massTextConversion();
});

function lengthTextConversion() {
    lengthText.innerHTML = `
        <p class="body-text" id="length-text">${inputA.value} meters = ${inputA.value * meterConversion.toFixed(2)} feet | ${inputA.value} feet = ${inputA.value * feetConversion.toFixed(2)} meters </p>
    `;
};

function volumeTextConversion() {
    volumeText.innerHTML = `
        <p class="body-text" id="volume-text">${inputA.value} liters = ${inputA.value * literConversion.toFixed(2)} gallons | ${inputA.value} gallons = ${inputA.value * gallonConversion.toFixed(2)} liters </p>
    `;
};

function massTextConversion() {
    massText.innerHTML = `
        <p class="body-text" id="mass-text">${inputA.value} kilos = ${inputA.value * kiloConversion.toFixed(2)} pounds | ${inputA.value} pounds = ${inputA.value * poundConversion.toFixed(2)} kilos </p>
    `;
};

