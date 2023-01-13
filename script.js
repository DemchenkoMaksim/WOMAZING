document.addEventListener("DOMContentLoaded", function(){
  let nav = document.getElementById("nav");
  window.addEventListener('scroll', function() {
    console.log(window.scrollY)
    if(window.scrollY != 0 && nav.style.backgroundColor != "white"){
      nav.style.backgroundColor = "white";
    }else if(window.scrollY == 0 ) {
      nav.style.backgroundColor = ""
    };
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


