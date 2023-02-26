const bodyColor = document.querySelector("body");
const btnColor = document.querySelector(".change-color");
const changedColors = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnColor.addEventListener("click", () => {
  changedColors.textContent = getRandomHexColor();
  bodyColor.style.backgroundColor = changedColors.textContent;

  console.log(bodyColor.style.backgroundColor);
});
