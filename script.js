//la fonction addToCard
function addToCard(montant) {
    //on modifie directement la valeur du panier
    let montantActuel = parseInt(document.getElementById('total').textContent);
    if (montantActuel !=0) {
        console.log('superieur'+montantActuel)
        document.getElementById('total').textContent = montantActuel+montant;
        activerBouton();
    }else{
        console.log('inferieur')
        document.getElementById('total').textContent = montant;
        activerBouton();
  
    }s
}

function activerBouton() {
    //le bouton finaliser
    let finaliserBouton = document.getElementById('finaliser');
    finaliserBouton.classList.add('cta-panier')
    finaliserBouton.classList.remove('cta-panier-inactive')
}

document.getElementById('finaliser').addEventListener('click', function(){
    alert('COMMANDE FINALISEE'); 
    document.getElementById('total').textContent = 0
})
