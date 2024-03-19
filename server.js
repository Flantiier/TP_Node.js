import http from 'http';
import dotenv from 'dotenv';
import url from 'url';

dotenv.config();

//Affichage des messages
const serveMessage = (response, message) => {
    response.writeHead(200, { 'Content-Type' : 'text/plain' });
    response.end(message);
}

//Créer le serveur
const server = http.createServer((request, response) => {
    //récup url demandé
    const parsedUrl = url.parse(request.url, true);
    const pathName = parsedUrl.pathname;
    //récup paramètre name // ou valeur par défauft
    const name = parsedUrl.query.name || process.env.DEFAULT_NAME || 'world';
    //Gestion de la route principale
    if(pathName === '/' || pathName === '/index'){
        serveMessage(response, 'Bienvenue sur la page principale');
    }

    //Route hello
    else if(pathName === '/hello'){
        //verif si la requete est une requete GET
        if(request.method === 'GET'){
            serveMessage(response, `Hello ${name}`);
        }else{
            response.writeHead(405, { 'Content-Type' : 'text/plain' });
            response.end('Methode non autorisée');
        }
    }
    //Gestion des autres cas
    else {
        response.writeHead(404, { 'Content-Type' : 'text/plain' });
        response.end('Page introuvable.');
    }
});

//Lancemnt sur le port spécifié ou le port par default
const port = process.env.PORT || 3000;
server.listen(port, () => console.log("Le serveur tourne sur le port " + port));