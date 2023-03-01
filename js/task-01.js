const itemList = document.querySelectorAll(".item");

console.log(`Number of categories: ${itemList.length}`);

itemList.forEach(item => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`)
});