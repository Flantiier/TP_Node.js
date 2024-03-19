import newItem from "./src/newItem.js";
import removeITem from "./src/removeItem.js";

let itemList = [];

itemList.push(newItem.getNewItem());
itemList.push(newItem.getNewItem());
for (let i = 0; i < itemList.length; i++) {
    console.log(itemList[i].name);
}

itemList = removeITem.removeItem(itemList);
for (let i = 0; i < itemList.length; i++) {
    console.log(itemList[i]);
}