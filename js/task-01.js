const categoriesEl = document.querySelector("#categories");
// console.log(categoriesEl);

const totalCategoryItems = categoriesEl.querySelectorAll(".item");
console.log("Number of categories:", totalCategoryItems.length);

totalCategoryItems.forEach((item, value) => {
  console.log("Category:", item.querySelector("h2").textContent);
  console.log("Elements:", item.querySelectorAll("li").length);
});
// for (const item of totalH) {
//   console.log(item);
// }

// const categoryEla = document.querySelector("#categories ul");
// const categoryElam = categoryEla.querySelectorAll("li");
// console.log(categoryElam.length);



