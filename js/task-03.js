// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

//     Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
//     Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.
const list = document.querySelector(".gallery");
console.log(list);

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const elemets = images.map((image) => {
  const itemsEl = document.createElement("li");
  itemsEl.classList.add("item");
  const imgsEl = document.createElement("img");
  // imgsEl.src = image.url;
  // imgsEl.alt = image.alt;
  list.insertAdjacentHTML("afterend", "img");
  imgsEl.width = 320;
  // list.append(itemsEl);
  itemsEl.append(imgsEl);

  return itemsEl;
});
console.log(elemets);

list.append(...elemets);
// itemsEl.append(...imgsEl);
