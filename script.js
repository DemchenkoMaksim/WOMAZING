document.addEventListener("DOMContentLoaded", function(){
  let nav = document.getElementById("navbar");
  window.addEventListener('scroll', function() {
    
    if(window.scrollY != 0 && nav.style.backgroundColor != "white"){
      nav.style.backgroundColor = "white";
      console.log("yes");
    }else if(window.scrollY == 0 ) {
      nav.style.backgroundColor = ""
    };
  });
  let navBtn = document.querySelector('.nav-btn');
  navBtn.addEventListener('click', function(){
    navBtn.classList.toggle('active');
    nav.classList.toggle('active');

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


