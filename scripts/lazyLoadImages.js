function lazyLoadImages(root) {
    document.querySelector(root);
    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.querySelectorAll('[data-img]')) {
                    let dataItems = entry.target.querySelectorAll('[data-img]');
                    dataItems.forEach(el => {
                        const src = el.dataset.img;
                        // console.log(src);
                        if (!el.hasAttribute("src")) {
                            el.setAttribute("src", src);
                            el.removeAttribute("data-img");
                        }
                    })
                    // console.log(dataItems);
                }
            }
        })

    }, {
        threshold: .001
    })
    document.querySelectorAll('section').forEach(item => {
        observer.observe(item)
    })


};
export default lazyLoadImages;