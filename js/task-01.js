const categoriesEl = document.querySelector("#categories");
// console.log(categoriesEl);

const totalCategoriesItems = categoriesEl.querySelectorAll(".item");
console.log("Number of categories:", totalCategoriesItems.length);

totalCategoriesItems.forEach((item, value) => {
  console.log("Category:", item.firstElementChild.textContent);
  console.log("Elements:", item.lastElementChild.children.length);
});
