const refs = {
  btnCreate: document.querySelector("[data-create]"),
  btnDestroy: document.querySelector("[data-destroy]"),
};


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
