function setRedPrices() {
    const priceTitle = document.querySelectorAll('.price-title');

    priceTitle.forEach(card => {
        let price = card.innerHTML;
        let pattern = /\d+/g;
        price = price.match(pattern).join([]);
        let discountPrice = price - (price * 5) / 100;
        let lowPrice = document.createElement('h2');

        lowPrice.innerHTML = `${discountPrice}$`;
        if (!card.previousElementSibling) {
            card.insertAdjacentHTML('beforebegin', `<h2 class="lowPrice"> ${discountPrice}$</h2>`);
        }
     
        card.style.opacity = .4;
        card.classList.add('lineTrough');

    })



}
export default setRedPrices;