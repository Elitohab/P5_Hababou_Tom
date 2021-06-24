const UrlApi = "http://localhost:3000/api/teddies";
let param = (new URL(document.location)).searchParams;
let id = param.get('id')

console.log(id)

async function getProduct(id) {
    let response = await fetch(`${UrlApi}/${id}`)
    let data = await response.json()
   console.log(data)   
    return data 
  
}

getProduct(id)

//Récupération des données dans l'API
/* async function recupereDonneesApi () {
    await fetch(UrlApi)
    .then((response) =>
        response.json()
    .then(data => 
        afficherArticles(data))
    ).catch(err => console.log('Erreur : ' + err));
}*/