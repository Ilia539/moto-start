// ....SCROLL MENU
window.addEventListener("scroll", function () {
    let header = document.querySelector('header');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPosition);
});
// .................
// $(function() {
//     $('.header__toggle').on('click', function() {
//         if ($('.header-nav-list').hasClass('active')) {
//             $('.header-nav-list').removeClass('active');
//         } else {
//             $('.header-nav-list').addClass('active');
//         }

//     })
// });

// nav menu
const navMenu = document.getElementById('nav-menu'),
  toggleMenu = document.getElementById('nav-toggle'),
  closeMenu = document.getElementById('nav-close')

  toggleMenu.addEventListener('click', ()=>{
      navMenu.classList.toggle('show')

  })

  closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')

})

const navLink = document.querySelectorAll('.nav__link')
function linkAction(){
    navLink.forEach(n=> n.classList.remove('active'))
    this.classList.add('active')

    navMenu.classList.remove('show')
}

navLink.forEach(n=> n.addEventListener('click', linkAction));

// .....SLIDER
$(document).ready(function(){
            $('.slider').slick({
                slidesToShow: 1,
                autoplay: true,
                infinite: true,
                speed: 1500,
                autoplaySpeed: 4000,
                fade: true,
                cssEase: 'linear',
                mobileFirst: true,
                arrows: false
            });
            });