// Напиши скрипт, який для кожного елемента масиву ingredients:
//
//    Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
//    Додасть назву інгредієнта як його текстовий вміст.
//    Додасть елементу клас item.
//    Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");

const itemFirst = document.createElement("li");
itemFirst.classList.add("item");
itemFirst.textContent = "Potatoes";

const itemSecond = document.createElement("li");
itemSecond.classList.add("item");
itemSecond.textContent = "Mushrooms";

const itemThird = document.createElement("li");
itemThird.classList.add("item");
itemThird.textContent = "Garlic";

const itemFourth = document.createElement("li");
itemFourth.classList.add("item");
itemFourth.textContent = "Tomatos";

const itemFifth = document.createElement("li");
itemFifth.classList.add("item");
itemFifth.textContent = "Herbs";

const itemSixth = document.createElement("li");
itemSixth.classList.add("item");
itemSixth.textContent = "Condiments";

list.append(itemFirst, itemSecond, itemThird, itemFourth, itemFifth, itemSixth);
console.log(list);
