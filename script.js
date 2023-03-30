document.addEventListener("DOMContentLoaded", function(){
  let nav = document.getElementById("navbar");
  window.addEventListener('scroll', function() {
    if(window.scrollY != 0 && nav.style.backgroundColor != "white" && window.screen.width > 845){
      nav.style.backgroundColor = "white";
    }else if(window.scrollY == 0 ) {
      nav.style.backgroundColor = ""
    };
  });
  let navBtn = document.querySelector('.nav-btn');
  let navMenu = document.querySelector('#navbar');
  navBtn.addEventListener('click', function(){
    console.log("yes")
    navBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
  $('.slider-for').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    asNavFor: '.slider-nav',
    fade: true,
  });
  $('.slider-nav').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    dots:true,
    asNavFor: '.slider-for',
    fade: true,
  });
  $('.single-item').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    fade: true,
    dots:true,
  });
});


