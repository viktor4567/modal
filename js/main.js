
  const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  loop: true,
  speed: 400,
  spaceBetween: 70,
  centeredSlides: true,
  slideToClickedSlide: true,
  toggle: true,
  /*breakpoints: {
    320: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 3
    },
    1440: {
      slidesPerView: 4
    }
  }*/
});

  const windowModal = document.querySelector('.modal');
const body = document.querySelector('body');
const buttonModal = document.querySelector('.main-display__button');

buttonModal.addEventListener('click', () => {
    windowModal.classList.add('active');
    body.classList.add('lock');
});

windowModal.addEventListener('click', (e) => {
    const isModal = e.target.closest('.modal__inner');
    if (!isModal) {
        windowModal.classList.remove('active');   
        body.classList.remove('lock');   
    }
});