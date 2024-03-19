import readline from "./readline.js";

const removeItem = (itemList) => {
    const itemName = readline.consoleReadine("Entrez le nom du produit a supprimer : ");
    const id = itemList.indexOf(i => i.name == itemName);
    for (let i = 0; i < itemList.length; i++) {
        const element = itemList[i].name;
        console.log(element == "mm");
    }
    console.log(id);
    if(id > -1){
        return itemList.slice(id, 1);
    }else{
        console.log("Aucun article n'a ete trouve.");
        return itemList;
    }
}

export default {removeItem}