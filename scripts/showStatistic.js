function showStatistic() {

    let time = 1500;

    function runNum(num, elem, speed) {
        let l = document.querySelector(elem);
        let n = 0;
        let step = num / (time / speed);
        let interval = setInterval(() => {
            n = n + step;
            if (n >= num) {
                l.innerHTML = num;
                clearInterval(interval);
                return;
            }
            l.innerHTML = Math.floor(n);
        }, speed)
    }

    function lessNum(num, elem, speed) {
        let l = document.querySelector(elem);
        let n = 99;
        let step = num / (time / speed);
        let interval = setInterval(() => {
            n = n - step;
            if (n <= num) {
                l.innerHTML = num;
                clearInterval(interval);
                return;
            }
            l.innerHTML = Math.floor(n);
        }, speed)
    }




    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
               
                if (entry.target.querySelector('[data-static]')) {
 lessNum(42, '#minPrice', 11);
                    lessNum = function () {}
                    runNum(276, '#clients', 70);
                    runNum(68, '#traffic', 17);
                    runNum(20, '#conversion', 5);
                    runNum = function () {}
                   

                }
            }
        })








    }, {
        threshold: .3
    })


    document.querySelectorAll('section').forEach(item => {
        observer.observe(item);
    })




    // document.addEventListener('scroll', () => {
    //     let pageItem = document.querySelector(section);
    //     let pageItemTop = pageItem.getBoundingClientRect().top;
    //     if (pageItemTop > 50 && pageItemTop < 160) {
    //         runNum(1000, '#clients', 70);
    //         runNum(80, '#traffic', 12);
    //         runNum(2, '#conversion', 20);
    //         runNum = function () {}
    //         lessNum(500, '#minPrice', 45);
    //         lessNum = function () {}

    //     }

    // })




}
export default showStatistic;

//hints-numbers - 1param