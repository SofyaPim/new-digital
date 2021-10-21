function showDesk(selectors, contentblock) {
    const items = document.querySelectorAll(selectors);

    function add(a, b, event) {
        a.addEventListener(event, (e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
            b.style.opacity = 1;

        });
    }

    function remove(a, b, event) {
        a.addEventListener(event, (e) => {
            e.currentTarget.style.transform = 'scale(1)';
            b.style.opacity = 0;
        });
    }


    items.forEach(item => {
        let desc = item.querySelector(contentblock);
        desc.style.opacity = 0;

        if (window.innerWidth < 1024) {
            add(item, desc, 'focus');
            remove(item, desc, 'blur');
        } else {

            add(item, desc, 'mouseover');
            remove(item, desc, 'mouseout');
        }
    })
}
export default showDesk;