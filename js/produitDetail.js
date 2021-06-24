async function test() {
    let produits = await getProduct()
    afficheProduits(produits)
}
async function getProduct() {
    let response = await fetch("http://localhost:3000/api/teddies")
    let data = await response.json()
    return data 
}
function afficheProduits(produits) {
   let divProduits = document.getElementById("test")
   produits.forEach((produit) => {
       let vignette = produit.name
       divProduits.innerHTML += vignette
   })

}
test()