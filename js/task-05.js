// Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія input), підставляє його поточне значення в span#name - output.Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

// textInput.addEventListener("input", onInputText);

// function onInputText(event) {
//   output.textContent = event.currentTarget.value.trim();
// }
// ////////////////////////////
// textInput.addEventListener("input", (event) => {
//   if (event.currentTarget.value.trim() === "") {
//     textOutput.textContent = "Anonymous";
//     return;
//   } else {
//     textOutput.textContent = event.currentTarget.value.trim();
//   }
// });
// ////////////////////////////
textInput.addEventListener("input", (event) => {
  textOutput.textContent =
    event.currentTarget.value.trim() === ""
      ? "Anonimous"
      : event.currentTarget.value.trim();
});
