function removeRedPrices() {

  const priceTitle = document.querySelectorAll('.price-title');

  priceTitle.forEach(card => {
    card.classList.remove('lineTrough');
    card.style.opacity = 1;
    try {
      card.previousElementSibling.remove();
    
    } catch (error) {
     
    }

  })

}
export default removeRedPrices;