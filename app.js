//importation du module express.js
import express from 'express';
import fs from "fs";

//création d'une constante app qui va contenir l'application express.js
const app = express();
//la variable port est utilisée pour définir le port sur lequel le serveur va écouter les requêtes le choix du port est arbitraire.
const port = 3000;
//Mise en place d'un console log pour indiquer que le serveur est en écoute sur le port que nous avons défini.
app.listen(port, () => console.log(`En écoute sur le port ${port}!`));

//création de l'application express.js
app.use(express.json());

const loadJSON = (path) => JSON.parse(fs.readFileSync(new URL(path, import.meta.url)));
const data = loadJSON('./data.json');

for (let i = 0; i < data.superHeros.length; i++) {
    const element = data.superHeros[i];
    console.log(element)
};

//get super heroes
app.get('/superHeroes', (req, res) => {
    res.send(data);
});

const getHeroById = (id) => {
    return data.superHeros.find(e => e.id == id);
}

//get hero at id 1
app.get('/superHeroes/1', (req, res) => {
    res.send(getHeroById(1));
});

//add new hero
app.post('/superHeroes', (req, res) => {

});

//update hero by id
app.put('/superHeroes/1', (req, res) => {

});

//delete hero by id
app.delete('/superHeroes/1', (req, res) => {

});