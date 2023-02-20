const categoriesEl = document.querySelector("#categories");
// console.log(categoriesEl);

const totalCategoriesItems = categoriesEl.querySelectorAll(".item");
console.log("Number of categories:", totalCategoriesItems.length);

totalCategoriesItems.forEach((item, value) => {
  console.log("Category:", item.querySelector("h2").textContent);
  console.log("Elements:", item.querySelectorAll("li").length);
});


// const categoryEla = document.querySelector("#categories ul");
// const categoryElam = categoryEla.querySelectorAll("li");
// console.log(categoryElam.length);
