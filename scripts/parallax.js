function moveItemUp() {
  
    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
 
  


            if (entry.isIntersecting) {
                if (entry.target.querySelectorAll('.moveUp')) {
 let moveItems = entry.target.querySelectorAll('.moveUp');
                    moveItems.forEach(el => {
                        setTimeout(() => {
                            el.classList.remove('paddingTop');
                        }, 500)


                    })
                }
            }
        })

    }, {
        threshold: .3
    })
    document.querySelectorAll('section').forEach(item => {
        observer.observe(item)
    })

}
export default moveItemUp;