    const fbLogo = document.querySelector('.fb__logo');
    const twitterLogo = document.querySelector('.twitter__logo');
    const igLogo = document.querySelector('.ig__logo');
    const container = document.querySelector('.container');
    const titreFb = document.querySelector('.nameFb');
    const titreTwitter = document.querySelector('.nameTwitter');
    const titreIg = document.querySelector('.nameIg');

    function resetCaseEtContainer() {
        const allLogos = document.querySelectorAll('.cases div img');
        allLogos.forEach(logo => logo.classList.remove('clickOn'));
        titreFb.style.zIndex = -1;
        titreTwitter.style.zIndex = -1;
        titreIg.style.zIndex = -1;
        container.style.backgroundColor = '#bdbdbd';
    }

    function controlDuClick(logo, color) {
        if (logo.querySelector('img').classList.contains('clickOn')) {
            resetCaseEtContainer();         
        } else {
            resetCaseEtContainer();         
            logo.querySelector('img').classList.add('clickOn');
            if (logo === fbLogo) {
                titreFb.style.zIndex = 100;
            } else if(logo === twitterLogo) {
                titreTwitter.style.zIndex = 100;
            }else if (logo === igLogo) {
                titreIg.style.zIndex = 100;
            }
            container.style.backgroundColor = color; 
        }
    }

    fbLogo.addEventListener('click', () => controlDuClick(fbLogo, '#6f7ada'));
    twitterLogo.addEventListener('click', () => controlDuClick(twitterLogo, '#03fff7'));
    igLogo.addEventListener('click', () => controlDuClick(igLogo, '#e46d15'));