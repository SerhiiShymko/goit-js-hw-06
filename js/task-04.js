const decrementBtn = document.querySelector(`[data-action="decrement"]`);
const incrementBtn = document.querySelector(`[data-action="increment"]`);
const valueEl = document.querySelector("#value");

// console.log(decrementBtn);
// console.log(incrementBtn);
// console.log(valueEl);

const counter = {
  value: 0,

  decrement() {
    console.log("decrement -> this", this);
    this.value -= 1;
  },
  increment() {
    console.log("increment -> this", this);
    this.value += 1;
  },
};

decrementBtn.addEventListener("click", function () {
  counter.decrement;
  console.log(counter);
  valueEl.textContent = counter.value;
});

incrementBtn.addEventListener("click", function () {
  counter.increment;
  console.log(counter);
  valueEl.textContent = counter.value;
});
