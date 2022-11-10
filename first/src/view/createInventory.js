init.View.createInventory = {
  setupUI: function () {
    const form = document.getElementById("form");
    form.addEventListener("submit", init.View.createInventory.handleSubmit);
  },
  handleSubmit: function (e) {
    e.preventDefault();
    // console.log(e.target[0].value);
    let obj = {};
    obj.item_name = e.target[0].value;
    obj.item_price = e.target[1].value;
    obj.item_qty = e.target[2].value;
    obj.item_desc = e.target[3].value;
    console.log(obj);
    let newObj = new Inventory(obj);
    newObj.printItem();
  },
};
