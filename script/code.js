const amount = document.querySelector("#enterAmount");
const celString = "°C";
const farString = "°F";
const range = document.querySelector("#choose");
const tempInput = document.querySelector("#enterAmount");
const button = document.querySelector("#calculate");
const answer = document.querySelector("#myAnswer");
const clear = document.querySelector("#clear");
button.addEventListener("click", () => {
  let toFarhenheit = (tempInput.value * 9) / 5 + 32;
  let toCelsius = ((tempInput.value * 5) / 9 - 32).toFixed(2);
  if (range.checked) {
    let finalAnswer = parseFloat(toCelsius);
    answer.textContent = parseFloat(finalAnswer) + "°C";
  } else {
    let finalAnswer2 = parseFloat(toFarhenheit);
    answer.textContent = parseFloat(finalAnswer2) + "°F";
  }
});
clear.addEventListener("click", () => {
  if (tempInput.value === tempInput.value) {
    tempInput.value = "";
  } else {
    tempInput.value = tempInput.value;
  }
  if (answer.textContent === answer.textContent) {
    answer.textContent = "";
  } else {
    answer.textContent = answer.textContent;
  }
});
console.log(answer.innerHTML);
