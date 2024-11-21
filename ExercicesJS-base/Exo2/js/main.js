const carres = document.querySelectorAll(".carre"); 
const showColor = document.querySelector('.show__color');

carres.forEach(function (carre) { //parcours les div
    carre.addEventListener('click', function () { // si un click dans chaque div parcouru
    transferColor(carre, showColor);
    });
});

function transferColor(source, destination) {
    const colorStock = getComputedStyle(source).backgroundColor;
    destination.style.backgroundColor = colorStock;
    destination.textContent = `${colorStock}`;
}
