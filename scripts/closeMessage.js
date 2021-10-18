function closeMsg(selector, btn) {
    const message = document.getElementById(selector),
        closeBtn = document.getElementById(btn);

   closeBtn.addEventListener('click', () => {
    
        message.classList.toggle('collapse');
         if (message.classList.contains('collapse')) {
        closeBtn.innerText = 'развернуть';
       

    } else {
        closeBtn.innerText = 'cвернуть';
    }

    });
   
}
export default closeMsg;