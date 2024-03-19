// import math from "./src/math.js";

// math.add(0, 1);
// math.add(0, -5);

//##############################################

import express from 'express';

const app = express();
const port = 8080;
app.listen(port, () => {
    console.log(`Le serveur est actif sur le port + ${port}`);
});

app.get('/', (req, res) => res.send("Bonjour tout le monde"));