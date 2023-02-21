// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const decrementBtn = document.querySelector(`[data-action="decrement"]`);
const incrementBtn = document.querySelector(`[data-action="increment"]`);
const valueEl = document.querySelector("#value");

// console.log(decrementBtn);
// console.log(incrementBtn);
// console.log(valueEl);

decrementBtn.addEventListener("click", () => {
  counter.decrement;
  // console.log(counter);
  valueEl.textContent = counter.value;
  console.log(counterValue);
});

incrementBtn.addEventListener("click", function () {
  counter.increment;
  // console.log(counter);
  valueEl.textContent = counter.value;
  console.log(counterValue);
});

// counterValue.prototype.decrement = function () {
//   this.value -= this.step;
// };
// counterValue.prototype.increment = function () {
//   this.value += this.step;
// };