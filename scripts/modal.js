function modal(triggerSelector, modalSelector, closeSelector) {
    const trigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        modalHeader = modal.querySelector('.popup-title'),
        close = document.querySelector(closeSelector),
        modalProto = document.querySelectorAll('[data-modal]'),
        messageItems = document.querySelectorAll('span.message'),
        smallHeader = document.createElement('h4'),
        priceTitle = document.createElement('h5'),
        inputs = document.querySelectorAll('._req'),
        formPopup = document.querySelector('.popup'),
        discountMessage = modal.querySelector('._discount-message');
    smallHeader.classList.add('_smalHeader');
    priceTitle.classList.add('_priceTitle');

    function clearInputs(items) {

        let check = document.querySelectorAll('.check__input');
        check.forEach(box => {
            box.checked = true;
        })
        items.forEach(item => {

            item.value = '';

        })


    }


    function closeForm(message, form, overlay) {

        message.remove();
        form.style.cssText = `transform: scale(0);
                                    opacity: 0;`;

        setTimeout(() => {
            overlay.style.display = 'none';
        }, 200)

        document.body.style.overflow = '';

    }


    trigger.forEach(item => {

        item.addEventListener('click', (e) => {
            if (+localStorage.getItem('day') - Date.now() < 0 && localStorage.getItem('day') !== null) {

                discountMessage.innerHTML = 'Со времени Вашей последней заявки еще не прошел месяц, поэтому скидка на действует'
            } else if (localStorage.getItem('day') === null || +localStorage.getItem('day') - Date.now() > 0) {
                discountMessage.innerHTML = 'Получите скидку 5% при оплате в течении суток после отправления заявки'
            }

            let triggerParent = item.parentElement.parentElement;

            if (e.target.innerHTML.trim() === 'подробнее' || e.target.innerHTML.trim() === 'заказать обратный звонок') {
                modalHeader.innerHTML = `Заказать обратный звонок `;

            }

            if (triggerParent.querySelector('.card-title')) {

                let tarifname = triggerParent.querySelector('.card-title').innerText;
                smallHeader.innerHTML = `Вы выбрали тариф <br> ${tarifname}`;
                modalHeader.innerHTML = `Оформление заказа`;
                modalHeader.after(smallHeader); //добавление названия тарифа

            }






            if (triggerParent.querySelector('.price-title')) {

                let oldPrice = triggerParent.querySelector('.price-title').innerText;
                let pattern = /\d+/g;
                oldPrice = oldPrice.match(pattern).join([]);
                let newPrice = oldPrice - (oldPrice * 5) / 100;
                if (triggerParent.querySelector('.price-title') && +localStorage.getItem('day') - Date.now() < 0 && localStorage.getItem('day') !== null) {
                    priceTitle.innerHTML = ` <p class="_discount-price"> Цена без скидки ${oldPrice}$ </p> `;
                } else if (triggerParent.querySelector('.price-title') && +localStorage.getItem('day') - Date.now() > 0 && localStorage.getItem('day') !== null) {
                    priceTitle.innerHTML = ` <p class="_discount-price"> Цена со скидкой составляет ${newPrice}$ </p> `;

                } else if (triggerParent.querySelector('.price-title') && localStorage.getItem('day') === null) {
                    priceTitle.innerHTML = ` <p class="_price"> Цена без скидки ${oldPrice}$ </p> <p class="_discount-price"> Цена со скидкой составляет ${newPrice}$ </p> `
                }

                smallHeader.after(priceTitle);




            }

            modalProto.forEach(item => {
                item.style.display = 'none';
            })


            modal.style.display = 'block';

            setTimeout(() => {
                formPopup.style.cssText = `transform: scale(1);
                opacity: 1;`;

            }, 0)

            document.body.style.overflow = 'hidden';

        })

    })

    close.addEventListener('click', () => {
        let errorItems = document.querySelectorAll('._error');
        clearInputs(inputs);
        messageItems.forEach(item => {
            item.style.opacity = 0;
        })


        errorItems.forEach(item => {
            item.classList.remove('_error');
        })
        smallHeader.remove();
        priceTitle.remove();

        closeForm(smallHeader, formPopup, modal);


    })




    modal.addEventListener('click', (e) => {
        let errorItems = document.querySelectorAll('._error');

        if (e._clickWithoutModal) {
            return;
        }



        errorItems.forEach(item => {
            item.classList.remove('_error');

        })

        messageItems.forEach(item => {
            item.style.opacity = 0;
        })

        if (e.target === modal) {

            modalProto.forEach(item => {

                clearInputs(inputs);

            })
            closeForm(smallHeader, formPopup, modal);
        }
        smallHeader.remove();
        priceTitle.remove();

    })

    formPopup.addEventListener('click', (e) => {
        e._clickWithoutModal = true;
    })

}

export default modal;