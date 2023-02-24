const textInput = document.querySelector("#validation-input");


textInput.addEventListener("focus", onInputFocus);
textInput.addEventListener("blur", onInputBlur);

function onInputFocus() {
  console.log("получил фокус");
}

function onInputBlur() {
  console.log("потерял фокус");
}
