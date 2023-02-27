function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputText = document.querySelector("#controls input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

let amount = 0;
// let arrayNumber = [];
let firstSize = 30;
inputText.value = "";

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);

inputText.addEventListener("input", (event) => {
  amount = event.target.value;
});

function createBoxes() {
  let arrayNumber = [];
  if (amount > 0) {
    for (let i = 1; i <= amount; i += 1) {
      firstSize += 10 * i;
      const div = `<div class="item" style="display: block; margin-right: 10px; margin-bottom: 10px; background-color: ${getRandomHexColor()}; width: ${firstSize}px; height: ${firstSize}px;"></div>`;
      arrayNumber.push(div);
    }
  } else {
    return alert("Пусте значення");
  }
  boxes.insertAdjacentHTML("beforeend", arrayNumber.join(""));
  amount = 0;
  arrayNumber = [];
  inputText.value = "";
}

function destroyBoxes(params) {
  // boxes.remove();
  amount = 0;
  firstSize = 30;
  inputText.value = "";
  boxes.innerHTML = "";
}
