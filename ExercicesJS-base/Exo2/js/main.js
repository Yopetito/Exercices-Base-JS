
const carre1 = document.querySelector('.carre1');
const carre2 = document.querySelector('.carre2');
const carre3 = document.querySelector('.carre3');
const carre4 = document.querySelector('.carre4');
const showColor = document.querySelector('.show__color');
//const parent = document.querySelector('.carre__enligne');


carre1.addEventListener('click', function() {
    transferColor.bind(this)(showColor);
});
carre2.addEventListener('click', function() {
    transferColor.bind(this)(showColor);
});
carre3.addEventListener('click', function() {
    transferColor.bind(this)(showColor);
});
carre4.addEventListener('click', function() {
    transferColor.bind(this)(showColor);
});

function transferColor(destination) {
    const colorStock = getComputedStyle(this).backgroundColor;
    destination.style.backgroundColor = colorStock;
    destination.textContent = `${colorStock}`;
}

//=========================click dans le parent=======================
//si dans le nom de la class du target (carre carreX) ya carre, alors transfercolor

// parent.addEventListener('click', (event) => {
//     if (event.target.classList.contains('carre')) {
//         transferColor(event.target, showColor);
//     }
// });


//=========================================A testé===================
//const monElement = document.getElementById("toto");
// for (let i = 0; i < monElement.children.length; i++) {
//     console.log(monElement.children[i].tagName);
//   }
// 