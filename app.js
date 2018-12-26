import UI from "./ui.js";
import Item from "./item.js";

document.addEventListener("DOMContentLoaded", UI.displayItems);

document.querySelector("#input-form").addEventListener("submit", e => {
  e.preventDefault();

  const text = document.querySelector("#text").value;

  if (text === "") {
    alert("Text cannot be blank");
  } else {
    const item = new Item(text, false);
    UI.addItemToList(item);
    UI.clearInputs();
  }
});

document
  .querySelector("#items-list")
  .addEventListener("click", e => UI.deleteItem(e.target));
