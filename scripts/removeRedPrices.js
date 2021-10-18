function removeRedPrices() {

    const priceTitle = document.querySelectorAll('.price-title');

  //  console.log('remove redPrice');

    priceTitle.forEach(card => {
        card.classList.remove('lineTrough');
        card.style.opacity = 1;
        try {
            card.previousElementSibling.remove();
          //  console.log(card.previousElementSibling);
        } catch (error) {
            //  console.log('discountPrice is gone')
        }

    })

}
export default removeRedPrices;