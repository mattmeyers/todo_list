import Item from "./item.js";
export { LocalStore as default };

class LocalStore {
  static getItems() {
    let items;
    if (localStorage.getItem("items") === null) {
      items = [];
    } else {
      items = JSON.parse(localStorage.getItem("items"));
    }

    return items;
  }

  static setItem(item) {
    const items = LocalStore.getItems();
    items.push(item);
    localStorage.setItem("items", JSON.stringify(items));
  }
}
