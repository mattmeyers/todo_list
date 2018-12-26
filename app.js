class Item {
  constructor(text, checked) {
    this.text = text;
    this.checked = checked;
  }
}

class UI {
  static displayItems() {
    const items = [new Item("Item 1", true), new Item("Item 2", false)];

    items.forEach(item => UI.addItemToList(item));
  }

  static addItemToList(item) {
    const list = document.querySelector("#items-list");
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>
        <input type="checkbox" ${item.checked ? "checked" : ""}></input>
      </td>
      <td>${item.text}</td>
      <td>
        <span class="delete">X</span>
      </td>
    `;
    list.appendChild(row);
  }

  static deleteItem(el) {
    if (el.classList.contains("delete")) {
      el.parentElement.parentElement.remove();
    }
  }

  static clearInputs() {
    document.querySelector("#text").value = "";
  }
}

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
