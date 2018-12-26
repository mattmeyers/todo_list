import Item from "./item.js";
export { UI as default };

class UI {
  static displayItems() {
    const items = [new Item("Item 1", true), new Item("Item 2", false)];

    items.forEach(item => UI.addItemToList(item));
  }

  static addItemToList(item) {
    let list;
    if (item.checked) {
      list = document.querySelector("#c-items-list");
    } else {
      list = document.querySelector("#items-list");
    }
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

  static handleClick(el) {
    console.log(el.attributes.type.value);
    if (el.classList.contains("delete")) {
      el.parentElement.parentElement.remove();
    } else if (el.attributes.type.value === "checkbox") {
      UI.displayItems();
    }
  }

  static clearInputs() {
    document.querySelector("#text").value = "";
  }
}
