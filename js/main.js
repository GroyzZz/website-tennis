const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
const body = document.querySelector('body');

btn.addEventListener('click', () => {
    nav.classList.toggle('menu-open');
    const bodyOverflowY = body.style.overflowY;
    body.style.overflowY = bodyOverflowY === 'hidden' ? 'auto' : 'hidden';
});

const breakpoint = window.matchMedia( '(min-width:1250px)' );
let mySwiper;
const breakpointChecker = function() {
   if ( breakpoint.matches === true ) {
      if ( mySwiper !== undefined ) mySwiper.destroy( true, true );
      return;
   } else if ( breakpoint.matches === false ) {
      return enableSwiper();
   }
};
const enableSwiper = function() {
   mySwiper = new Swiper ('.swiper', {
      loop: true,
      slidesPerView: 'auto',
      centeredSlides: true,
      a11y: true,
      keyboardControl: true,
      grabCursor: true,
      navigation: {
                nextEl: ".right",
                prevEl: ".left",
            }
   });
};
breakpoint.addListener(breakpointChecker);
breakpointChecker();

