class Inventory {
  constructor({ item_name, item_price, item_qty, item_desc }) {
    this.item_name = item_name;
    this.item_price = item_price;
    this.item_qty = item_qty;
    this.item_desc = item_desc;
  }
  printItem() {
    const name = document.createElement("h3");
    const price = document.createElement("h5");
    const qty = document.createElement("p");
    const desc = document.createElement("p");
    const mainDiv = document.createElement("div");
    mainDiv.setAttribute("id", "mainDiv");
    const items = [name, price, qty, desc];
    name.innerHTML = `Item Name: ${this.item_name}`;
    price.innerHTML = `Item Price: ${this.item_price}`;
    qty.innerHTML = `Item Qty: ${this.item_qty}`;
    desc.innerHTML = `Item Desc: ${this.item_desc}`;

    console.log(items);
    for (let i = 0; i < items.length; i++) {
      mainDiv.append(items[i].innerHTML);
    }
    document.body.appendChild(mainDiv);
  }
}
