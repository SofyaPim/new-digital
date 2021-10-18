import  "./swiper-bundle.min.js";

function mySwiper() {
    const swiper = new Swiper(".pricesSwiper", {
        slidesPerView: 1.3,
        spaceBetween: 30,
        breakpoints: {
    
    
          640: {
            slidesPerView: 2.1,
            spaceBetween: 40
          },
          480: {
            slidesPerView: 1.7,
            spaceBetween: 40
          }
        },
    
        initialSlide: 2,
        centeredSlides: true,
    
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        }
      })
    
}
export default mySwiper;