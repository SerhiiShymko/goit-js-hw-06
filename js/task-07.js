// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const textInput = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

// textInput.addEventListener("input", (event) => {
//   span.style.fontSize = event.currentTarget.value + "px";
// });
span.style.fontSize = `${textInput.value}px`;
const handleInput = () => {
  span.style.fontSize = `${textInput.value}px`;
};

textInput.addEventListener("input", handleInput);
