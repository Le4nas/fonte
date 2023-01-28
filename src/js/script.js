const hamburger = document.querySelector('.menu__burger'),
      link = document.querySelector('.menu__list li'),
      menu = document.querySelector('.menu__body');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
});
link.addEventListener('click', () => {
  menu.classList.remove('active');
  hamburger.classList.remove('active');
});
// hamburger.addEventListener('click', () => {
//     menu.toggle.remove('active');
//     hamburger.toggle.remove('active');
// });




// const counters = document.querySelectorAll('.skills__ratings-counter'),
//       lines = document.querySelectorAll('.skills__ratings-line span');

// counters.forEach( (item, i) => {
//     lines[i].style.width = item.innerHTML;
// });

const swiper = new Swiper('.promo-slider', {
    // Optional parameters
  
    // If we need pagination
    pagination: {
      el: '.promo-slider__pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.promo-slider__next',
      prevEl: '.promo-slider__prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });

