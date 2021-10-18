function tabs(e,t,c,s){const o=document.querySelector(e),a=document.querySelectorAll(t),n=document.querySelectorAll(c);function l(){n.forEach(e=>{e.style.display="none"}),a.forEach(e=>{e.classList.remove(s)})}function r(e=0){n[e].style.display="block",a[e].classList.add(s)}l(),r(),o.addEventListener("click",e=>{const c=e.target;c&&(c.classList.contains(t.replace(/\./,""))||c.parentNode.classList.contains(t.replace(/\./,"")))&&a.forEach((e,t)=>{c!=e&&c.parentNode!=e||(l(),r(t))})})}export default tabs;


