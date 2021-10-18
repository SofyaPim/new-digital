function showSectionName() {


  let headerTitle = document.querySelector('.nav-title'),
    navBar = document.querySelector('.nav-bar'),
    l1 = document.querySelector('.line1'),
    l2 = document.querySelector('.line2'),
    l3 = document.querySelector('.line3');
  if (!navBar.classList.contains('transformTransX')) {
    document.body.style.overflow = '';
    l2.classList.remove('displayNone');
    l1.classList.remove('transform45deg');
    l3.classList.remove('transformMin45deg');
  }


  let observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        let targetTitle = entry.target.closest('[data-section]');
        let title = targetTitle.dataset.section;
        headerTitle.textContent = title;
      }

    })

  }, {
    threshold: .3
  })
  document.querySelectorAll('[data-section]').forEach(item => {
    observer.observe(item)
  })

}

export default showSectionName;