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

// ingredients.forEach((value) => {
//   const listItem = document.createElement("li");
//   listItem.classList.add("item");
//   listItem.textContent = value;
//   list.append(listItem);
// });

const listItem = ingredients.map((ingredient) => {
  const ingredientItem = document.createElement("li");
  ingredientItem.classList = "item";
  ingredientItem.textContent = ingredient;
  return ingredientItem;
});
list.append(...listItem);
