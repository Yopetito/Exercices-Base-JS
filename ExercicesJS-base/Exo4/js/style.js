    const fbLogo = document.querySelector('.fb__logo');
    const twitterLogo = document.querySelector('.twitter__logo');
    const igLogo = document.querySelector('.ig__logo');
    const container = document.querySelector('.container');
    
    function resetCaseEtContainer() {
        const allLogos = document.querySelectorAll('.cases div img');
        allLogos.forEach(logo => logo.classList.remove('clickOn'));
        container.style.backgroundColor = '#bdbdbd';
    }

    function controlDuClick(logo, color) {
        if (logo.querySelector('img').classList.contains('clickOn')) {
            resetCaseEtContainer();         
        } else {
            resetCaseEtContainer();         
            logo.querySelector('img').classList.add('clickOn');
            container.style.backgroundColor = color; 
        }
    }


    fbLogo.addEventListener('click', () => controlDuClick(fbLogo, '#6f7ada'));
    twitterLogo.addEventListener('click', () => controlDuClick(twitterLogo, '#03fff7'));
    igLogo.addEventListener('click', () => controlDuClick(igLogo, '#e46d15'));