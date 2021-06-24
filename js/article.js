const UrlApi = "http://localhost:3000/api/teddies";
//Récupération des données dans l'API
async function recupereDonneesApi () {
    await fetch(UrlApi)
    .then((response) =>
        response.json()
    .then(data => 
        afficherArticles(data))
    ).catch(err => console.log('Erreur : ' + err));
}