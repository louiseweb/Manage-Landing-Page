const openBtn = document.querySelector("#open-btn");
const closeBtn = document.querySelector("#close-btn");
const nav = document.querySelector("#nav");
const menuOverlay = document.querySelector("#menu-overlay");
const body = document.querySelector("#body");

openBtn.addEventListener("click", function () {
 openBtn.classList.toggle("d-none");
 closeBtn.classList.toggle("d-none");
 nav.classList.toggle("d-none");
 menuOverlay.classList.toggle("d-none");
 body.classList.toggle("no-scroll");
});

closeBtn.addEventListener("click", function () {
 closeBtn.classList.toggle("d-none");
 openBtn.classList.toggle("d-none");
 nav.classList.toggle("d-none");
 menuOverlay.classList.toggle("d-none");
 body.classList.toggle("no-scroll");
});

$(document).ready(function () {
 $(".testimonial").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  pauseOnFocus: true,
  pauseOnDotsHover: true,
  centerMode: true,
  centerPadding: "500px",
  slidesToShow: 1,

  responsive: [
   {
    breakpoint: 1024,
    settings: {
     slidesToShow: 3,
     slidesToScroll: 1,
     infinite: true,
     dots: true
    }
   },
   {
    breakpoint: 980,
    settings: {
     slidesToShow: 2,
     slidesToScroll: 1
    }
   },
   {
    breakpoint: 768,
    settings: {
     slidesToShow: 1,
     slidesToScroll: 1
    }
   }
   // You can unslick at a given breakpoint now by adding:
   // settings: "unslick"
   // instead of a settings object
  ]
 });
});
