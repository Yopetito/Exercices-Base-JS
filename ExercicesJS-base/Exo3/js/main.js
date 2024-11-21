const carres = document.querySelectorAll(".carrees .carre"); 

carres.forEach(function (carre) { //parcours les div
    carre.addEventListener('click', function () { // si un click dans chaque div parcouru
        this.classList.toggle('transforme'); //cette class change entre (css).carre et (css).trans
    });
});