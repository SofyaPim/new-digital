function throwItems(section) {

    const yard = document.getElementById(section),
        manager = document.getElementById('manager-card'),
        account = document.getElementById('account-card'),
        report = document.getElementById('report-card'),
        learn = document.getElementById('learn-card'),
        costs = document.getElementById('costs-card');

    function showItems(item, time) {
        setTimeout(() => {
            item.style.transform = 'translate(0%, 0%)';

        }, time);
    }


    yard.style.minHeight = '600px';

    window.addEventListener('scroll', () => {

        if (yard.getBoundingClientRect().top < 300) {
            showItems(manager, 0);
            showItems(account, 200);
            showItems(report, 400);
            showItems(learn, 600);;
            showItems(costs, 800);


        }


    })



}
export default throwItems;