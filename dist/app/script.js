
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

