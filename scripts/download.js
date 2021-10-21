function download() {
    let btn = document.getElementById('download-btn');
    let path = "./images/presentation.pdf";

    function getItem() {
        const link = document.createElement('a');
        link.setAttribute('href', path);
        link.setAttribute('download', 'presentation');
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

    }


    btn.addEventListener('click', () => {
        getItem();
    })
}
export default download;