const categoryEl = document.querySelector("#categories");
console.log(categoryEl);

const totalCategory = categoryEl.querySelectorAll(".item");
console.log("Number of categories:", totalCategory.length);

const totalH = document.querySelectorAll("h2");
console.log(totalH);

const categoryEla = document.querySelector("#categories ul");
const categoryElam = categoryEla.querySelectorAll("li");
console.log(categoryElam.length);

// for (const item of totalH) {
//   console.log(item);
// }

totalH.forEach((item, value) => {
  console.log("Category:", item.textContent);
  console.log("Elements:", value);
});
