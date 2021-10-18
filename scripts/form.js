import timer from "./timer.js";


function forms() {
    const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('._req');
    const message = {
        loading: 'Загрузка...',//  <img src="./images/Spinner.gif"> 
        success: 'Спасибо, скоро с Вами свяжемся',
        failure: 'Что-то пошло не так'
    }

    function closeForm(form, overlay) {

        form.style.cssText = `transform: scale(0);
                                    opacity: 0;`;
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 200)

        document.body.style.overflow = '';

    }



    const postData = async (url, data) => {
        let res = await fetch(url, {
            method: "POST",
            body: data
        })
        return await res.text();
    }
    const clearInputs = (items) => {
        items.forEach(item => {
            item.value = '';
        })
    }


    function phoneValidate(input) {
        let value = input.value;
        value = value.replace(/[^0-9]/g, '');
        if (value.length === 11) {
            console.log('!');
            return true;
        }
    }

    function Validate(inputs) { //проверка соответствию
        let err = 0;

        function addErr() {
            err++;
        }
        inputs.forEach(item => {
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status-message');
            item.addEventListener('input', (e) => {
                let sibling = item.nextElementSibling;
                item.classList.remove('_error');
                sibling.style.opacity = 0;
                if (item.name === 'agreement') {
                    let prev = item.previousElementSibling;
                    sibling.style.opacity = 1;
                    prev.style.opacity = 0;
                }
            })

            switch (item.name) {
                case 'телефон':
                    if (!phoneValidate(item)) {
                        let sibling = item.nextElementSibling;
                        addErr();
                        item.classList.add('_error');
                        sibling.style.opacity = 1;
                    }
                    break;
                case 'имя':
                    if (item.value.length === 0) {
                        let sibling = item.nextElementSibling;
                        addErr();
                        item.classList.add('_error');
                        sibling.style.opacity = 1;
                    }
                    break;
                case 'agreement':
                    if (item.checked === false) {
                        let prev = item.previousElementSibling;
                        addErr();
                        item.classList.add('_error');
                        prev.style.opacity = 1;
                    }
                    break;
                case 'почта':
                    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(item.value)) {
                        let sibling = item.nextElementSibling;
                        addErr();
                        item.classList.add('_error');
                        sibling.style.opacity = 1;
                    }
                    break;
                default:
                    break;
            }
        })
        if (err <= 0) {


            return true;

        } else {
            return false;
        }
    }

    form.forEach(item => {

        item.addEventListener('submit', (e) => {
            e.preventDefault();
            let inputsForm = item.querySelectorAll('input');
             if (!Validate(inputsForm)) {
                return;
            }
            //create field time to formData
            if (!localStorage.getItem('day')) {
                let discountTime = 60000; //1min //(3600000 * 24)//24hours//3600000 //hour
                let currentDay = Date.now() + discountTime;
                localStorage.setItem('day', currentDay.toString());

            }

            const locaStorageDay = +localStorage.getItem('day');
            const day = new Date(locaStorageDay);
            let submitDay = day.toString().slice(3, 24);

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status-message');

            let bodyMessage = document.createElement('div');
            bodyMessage.classList.add('afterSubmitMsg');

            item.appendChild(statusMessage);
           
            const formData = new FormData(item);
            if (item.querySelector('._smalHeader')) {
                let tarifName = item.querySelector('._smalHeader');
                let tarif = tarifName.innerHTML;
                let tarifTitle = tarif.slice(22);
                formData.append("Тариф", tarifTitle);

            }

            if (item.querySelector('._discount-price')) {

                let price = item.querySelector('._discount-price').innerHTML;
                let pattern = /\d+/g;
                price = price.match(pattern).join([]);
                formData.append('Цена', `${price}$`.toString());
            }


            formData.delete('agreement');
            if (+localStorage.getItem('day') - Date.now() > 0) {
                formData.append('Время окончания скидки', submitDay);
            } else {
                formData.append('Скидка', 'без скидки');
            }

            statusMessage.textContent = message.loading;
           
            //  !!!==============================
            postData('./telegram.php', formData) // c ./server.php  проверено // //   - проверено   ./sendmail.php
                .then(res => {
                    console.log(res);

                    statusMessage.textContent = message.success;
                    bodyMessage.textContent = message.success;


                })
                .catch((err) => {
                    console.log(err);
                    statusMessage.textContent = message.failure;
                })
                .finally(() => {
                    clearInputs(inputs);

                    if (+localStorage.getItem('day') - Date.now() > 0) {
                        timer();

                    }

                    document.body.append(bodyMessage);
                    setTimeout(() => {
                        statusMessage.remove();
                        bodyMessage.remove();
                    }, 2000);
                    if (!item.classList.contains('feedback-form')) {
                        setTimeout(closeForm(item, item.parentNode), 1000);
                    }



                })
        })
    })
}
export default forms;