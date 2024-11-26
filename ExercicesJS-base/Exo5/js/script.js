const citations = document.getElementById('citations');
stock = localStorage;

quotes.forEach((quote) => {
    const citationContainer = document.createElement('div') //Premiere Div PAR quote.
        
    citationContainer.className = 'citationContainer'; // Class = "citationContainer"
    //=======interieur de la Div=========
    citationContainer.innerHTML =                       
    `<p class="content">"${quote.content}"</p>
    <p class="auteur">-${quote.author}</p>`;
    
    //========creation de la 2eme Div coeur==========
    const heart = document.createElement('div');
    heart.className = 'coeur';
    
    //===========creation de l'icone===================
    const imgFav = document.createElement('i');
    imgFav.setAttribute('citation-id', quote.id); //attribution de l'attribut Id pour recuperer plus tard.
    imgFav.className='fa-solid fa-heart'; //icone
    
    
    //===========Check SI icone marqué, le mettre en rouge(favoris)===========
    const isFav = stock.getItem(quote.id);
    if(isFav === 'true') {
        imgFav.style.color = 'red';
    }
    
    //============ordres des div==============
    citations.appendChild(citationContainer);
    citationContainer.appendChild(heart);
    heart.appendChild(imgFav);
});

//==========boucle forEach > clicks + enregistrement -fav/pas fav-==========
const hearts = document.querySelectorAll(".coeur i");
hearts.forEach((heart) => {
    heart.addEventListener("click", function() {
        const quoteId = this.getAttribute('citation-id'); //recuperation d'Id enregitrer a la ligne 19
        this.classList.toggle("transformed");
        //=====Si dans le localstorage dans l'id donné, est true = rouge, false = black
        if(this.classList.contains("transformed")) {
            stock.setItem(quoteId, 'true')
            this.style.color = "red"
        } else {
            stock.setItem(quoteId, 'false')
            this.style.color = "black"
        } 
    });
});

