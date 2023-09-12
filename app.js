function searchProduct() {
   const input = document.getElementById('filter').value.toUpperCase();

   const cardContainer = document.getElementById('card-lists');

   console.log(cardContainer);

   const cards = cardContainer.getElementsByClassName('grid');
   console.log(cards);

   for(let i = 0; i < cards.length; i++) {
    let title = cards[i].querySelector(".grid__body h1.grid__title");

    console.log(title);

    if(title.innerText.toUpperCase().indexOf(input) > -1) {
        cards[i].style.display = "";
    } else {
        cards[i].style.display = "none";
    }
   }
}
