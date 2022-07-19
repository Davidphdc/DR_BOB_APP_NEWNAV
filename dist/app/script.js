let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("bannerSlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


// NAV ON SCROLL
window.addEventListener("scroll", function(){

  const header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// SIDE MENU NAV TOGGLE
$(document).ready(function(){

  $(".sub-btn").click(function(){
    $(this).next(".sub-menu").slideToggle('100ms');
  });
  $(".more-btn").click(function(){
    $(this).next(".more-menu").slideToggle('2s');
  });
});


// RESPONSIVE NAV

const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");


menuBtn.addEventListener("click", () => {
  menu.classList.add("active");
  menuBtn.classList.add("displaynone");
});
closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
  menuBtn.classList.remove("displaynone");
});


// Keep hover on menu

