function showAnswers(){let e=document.querySelector(".accordion"),t=e.querySelectorAll(".accordion__item");function c(){let e=this.parentNode;t.forEach(t=>{e!=t?t.classList.remove("active"):e.classList.toggle("active")})}e.querySelectorAll(".faq-item").forEach(e=>e.addEventListener("click",c))}export default showAnswers;

