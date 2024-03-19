import readline from "./readline.js";

const getNewItem = () => {
    //Ask name
    const name = readline.consoleReadine("Entrez le libelle du produit : ");
    //Ask price
    const price = readline.consoleReadine("Entrez son prix (€): ");
    //Ask initial amount
    const amount = readline.consoleReadine("Entrez sa quantite initiale : ");
    return {
        name: name,
        price: price,
        amount: amount,
    }
}

export default {getNewItem}