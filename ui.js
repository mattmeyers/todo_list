import Item from "./item.js";
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

export default UI;
