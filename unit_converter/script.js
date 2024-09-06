// initialize the input value
// initialize the conversion formula for meter-feet, liters-gallons and kg-pounds
// declare the localStorage requirements
// create functions for each conversion
// initialize DOM interaction for each of the three conversion to be more optimal for performance
// function for rendering out the value using individual functions and modify the inner.HTML

const inputA = document.getElementById("digit-input");
const primaryButton = document.getElementById("primary-button");
let lengthText = document.getElementById("length-text");
let volumeText = document.getElementById("volume-text");
let massText = document.getElementById("mass-text");

const meterConversion = 1 * 3.28084;
const feetConversion = 1 / 3.281;
const literConversion = 1 / 3.785;
const gallonConversion = 1 * 3.785;
const kiloConversion = 1 * 2.205;
const poundConversion = 1 / 2.205;

inputA.addEventListener("input", function(){
    console.log("input typed in");
    lengthTextConversion();
});

function lengthTextConversion() {
    lengthText.innerHTML = `
        <p class="body-text" id="length-text">${inputA.value} meters = ${inputA.value * meterConversion} feet | ${inputA.value} feet = ${inputA.value * feetConversion} meters </p>
    `;
};