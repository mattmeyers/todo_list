class Item {
  constructor(text) {
    this.text = text;
  }
}

class UI {
  static displayItems() {
    const items = [new Item("Item 1"), new Item("Item 2")];

    items.forEach(item => UI.addItemToList(item));
  }

  static addItemToList(item) {
    const list = document.querySelector("#items-list");
    const row = document.createElement("tr");
    row.innerHTML = `<td>${item.text}</td>`;
    list.appendChild(row);
  }
}

document.addEventListener("DOMContentLoaded", UI.displayItems);
