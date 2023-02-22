// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.
let counterValue = 0;
const decrementBtn = document.querySelector(`[data-action="decrement"]`);
const incrementBtn = document.querySelector(`[data-action="increment"]`);
const valueUI = document.querySelector("#value");

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  valueUI.textContent = counterValue;
});

incrementBtn.addEventListener("click", function () {
  counterValue += 1;
  valueUI.textContent = counterValue;
});
// ////////////////////////////////////////////////////////////////////////////////////////
// const counterValue = function ({
//   rootSelector,
//   initialValue = 0,
//   step = 1,
// } = {}) {
//   this._value = initialValue;
//   this._step = step;

//   this._refs = this._getRefs(rootSelector);

//   this._bindEvents();
//   this.updateValueUI();
// };

// counterValue.prototype._getRefs = function (rootSelector) {
//   const refs = {};
//   refs.container = document.querySelector(rootSelector);
//   refs.decrementBtn = refs.container.querySelector(`[data-action="decrement"]`);
//   refs.incrementBtn = refs.container.querySelector(`[data-action="increment"]`);
//   refs.value = refs.container.querySelector("#value");

//   return refs;
// };

// counterValue.prototype._bindEvents = function () {
//   this._refs.incrementBtn.addEventListener("click", () => {
//     console.log(this);

//     this.increment();
//     this.updateValueUI();
//   });
//   this._refs.decrementBtn.addEventListener("click", () => {
//     console.log(this);

//     this.decrement();
//     this.updateValueUI();
//   });
// };

// counterValue.prototype.updateValueUI = function () {
//   this._refs.value.textContent = this._value;
// };

// counterValue.prototype.decrement = function () {
//   this._value -= this._step;
// };
// counterValue.prototype.increment = function () {
//   this._value += this._step;
// };

// new counterValue({ rootSelector: "#counter", step: 1 });
