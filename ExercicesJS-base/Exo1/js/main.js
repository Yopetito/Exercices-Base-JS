const information = document.querySelector('.carre');
information.addEventListener('click', function() {
    alert(
        `Class: carre
-Background-color: ${getComputedStyle(information).backgroundColor}
-Color: ${getComputedStyle(information).color}
-Height: ${getComputedStyle(information).height}
-Width: ${getComputedStyle(information).width}
-Display: ${getComputedStyle(information).display}
-Display: ${getComputedStyle(information).fontFamily} (${getComputedStyle(information).fontSize})`)
});
