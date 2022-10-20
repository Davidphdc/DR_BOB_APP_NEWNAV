
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

// Services CODE1
const ssh1 = document.querySelector(".servicelinks__service1");
const checkup = document.getElementById("check-ups");
const start1 = document.querySelector(".servicecontent__start");

ssh1.addEventListener("mouseover", () => {
  checkup.style.display = "flex"; 
  start1.style.display = "none";
 });
 
 ssh1.addEventListener("mouseout", () => {
  start1.style.display = "flex";
  checkup.style.display = "none";
 });
// Services CODE2
 const ssh2 = document.querySelector(".servicelinks__service2");
 const oralhy = document.getElementById("oral-hygiene");
 const start2 = document.querySelector(".servicecontent__start");
 
 ssh2.addEventListener("mouseover", () => {
   oralhy.style.display = "flex";
   start2.style.display = "none";
  });
  
  ssh2.addEventListener("mouseout", () => {
   start2.style.display = "flex";
   oralhy.style.display = "none";
  });
// Services CODE3
 const ssh3 = document.querySelector(".servicelinks__service3");
 const seco = document.getElementById("second-opinions");
 const start3 = document.querySelector(".servicecontent__start");
 
 ssh3.addEventListener("mouseover", () => {
   seco.style.display = "flex";
   start3.style.display = "none";
  });
  
  ssh3.addEventListener("mouseout", () => {
   start3.style.display = "flex";
   seco.style.display = "none";
  });
// Services CODE4
 const ssh4 = document.querySelector(".servicelinks__service4");
 const filling = document.getElementById("fillings");
 const start4 = document.querySelector(".servicecontent__start");
 
 ssh4.addEventListener("mouseover", () => {
   filling.style.display = "flex";
   start4.style.display = "none";
  });
  
  ssh4.addEventListener("mouseout", () => {
   start4.style.display = "flex";
   filling.style.display = "none";
  });
// Services CODE5
 const ssh5 = document.querySelector(".servicelinks__service5");
 const child = document.getElementById("child-dentistry");
 const start5 = document.querySelector(".servicecontent__start");
 
 ssh5.addEventListener("mouseover", () => {
   child.style.display = "flex";
   start5.style.display = "none";
  });
  
  ssh5.addEventListener("mouseout", () => {
   start5.style.display = "flex";
   child.style.display = "none";
  });
// Services CODE6
 const ssh6 = document.querySelector(".servicelinks__service6");
 const jawp = document.getElementById("jaw-pain");
 const start6 = document.querySelector(".servicecontent__start");
 
 ssh6.addEventListener("mouseover", () => {
   jawp.style.display = "flex";
   start6.style.display = "none";
  });
  
  ssh6.addEventListener("mouseout", () => {
   start6.style.display = "flex";
   jawp.style.display = "none";
  });
 
// Services CODE7
 const ssh7 = document.querySelector(".servicelinks1__service7");
 const mg = document.getElementById("mouthguards");
 const start7 = document.querySelector(".servicecontent1__start");
 
 ssh7.addEventListener("mouseover", () => {
   mg.style.display = "flex";
   start7.style.display = "none";
  });
  
  ssh7.addEventListener("mouseout", () => {
   start7.style.display = "flex";
   mg.style.display = "none";
  });
 
// Services CODE8
 const ssh8 = document.querySelector(".servicelinks1__service8");
 const sc = document.getElementById("scale-clean");
 const start8 = document.querySelector(".servicecontent1__start");
 
 ssh8.addEventListener("mouseover", () => {
   sc.style.display = "flex";
   start8.style.display = "none";
  });
  
  ssh8.addEventListener("mouseout", () => {
   start8.style.display = "flex";
   sc.style.display = "none";
  });
// Services CODE9
 const ssh9 = document.querySelector(".servicelinks1__service9");
 const edu = document.getElementById("education");
 const start9 = document.querySelector(".servicecontent1__start");
 
 ssh9.addEventListener("mouseover", () => {
   edu.style.display = "flex";
   start9.style.display = "none";
  });
  
  ssh9.addEventListener("mouseout", () => {
   start9.style.display = "flex";
   edu.style.display = "none";
  });
// Services CODE10
 const ssh10 = document.querySelector(".servicelinks1__service10");
 const coa = document.getElementById("coaching");
 const start10 = document.querySelector(".servicecontent1__start");
 
 ssh10.addEventListener("mouseover", () => {
   coa.style.display = "flex";
   start10.style.display = "none";
  });
  
  ssh10.addEventListener("mouseout", () => {
   start10.style.display = "flex";
   coa.style.display = "none";
  });
// Services CODE11
 const ssh11 = document.querySelector(".servicelinks1__service11");
 const reg = document.getElementById("regular-check-ups");
 const start11 = document.querySelector(".servicecontent1__start");
 
 ssh11.addEventListener("mouseover", () => {
   reg.style.display = "flex";
   start11.style.display = "none";
  });
  
  ssh11.addEventListener("mouseout", () => {
   start11.style.display = "flex";
   reg.style.display = "none";
  });
// Services CODE12
 const ssh12 = document.querySelector(".servicelinks1__service12");
 const perio = document.getElementById("periodontal");
 const start12 = document.querySelector(".servicecontent1__start");
 
 ssh12.addEventListener("mouseover", () => {
   perio.style.display = "flex";
   start12.style.display = "none";
  });
  
  ssh12.addEventListener("mouseout", () => {
   start12.style.display = "flex";
   perio.style.display = "none";
  });
// Services CODE13
 const ssh13 = document.querySelector(".servicelinks2__service13");
 const bridges = document.getElementById("bridges");
 const start13 = document.querySelector(".servicecontent2__start");
 
 ssh13.addEventListener("mouseover", () => {
   bridges.style.display = "flex";
   start13.style.display = "none";
  });
  
  ssh13.addEventListener("mouseout", () => {
   start13.style.display = "flex";
   bridges.style.display = "none";
  });
// Services CODE14
 const ssh14 = document.querySelector(".servicelinks2__service14");
 const root = document.getElementById("root");
 const start14 = document.querySelector(".servicecontent2__start");
 
 ssh14.addEventListener("mouseover", () => {
   root.style.display = "flex";
   start14.style.display = "none";
  });
  
  ssh14.addEventListener("mouseout", () => {
   start14.style.display = "flex";
   root.style.display = "none";
  });
// Services CODE15
 const ssh15 = document.querySelector(".servicelinks2__service15");
 const fill = document.getElementById("fill");
 const start15 = document.querySelector(".servicecontent2__start");
 
 ssh15.addEventListener("mouseover", () => {
   fill.style.display = "flex";
   start15.style.display = "none";
  });
  
  ssh15.addEventListener("mouseout", () => {
   start15.style.display = "flex";
   fill.style.display = "none";
  });
// Services CODE16
 const ssh16 = document.querySelector(".servicelinks2__service16");
 const implants = document.getElementById("dentures");
 const start16 = document.querySelector(".servicecontent2__start");
 
 ssh16.addEventListener("mouseover", () => {
   implants.style.display = "flex";
   start16.style.display = "none";
  });
  
  ssh16.addEventListener("mouseout", () => {
   start16.style.display = "flex";
   implants.style.display = "none";
  });
// Services CODE17
 const ssh17 = document.querySelector(".servicelinks2__service17");
 const veneers = document.getElementById("implants");
 const start17 = document.querySelector(".servicecontent2__start");
 
 ssh17.addEventListener("mouseover", () => {
   veneers.style.display = "flex";
   start17.style.display = "none";
  });
  
  ssh17.addEventListener("mouseout", () => {
   start17.style.display = "flex";
   veneers.style.display = "none";
  });
// Services CODE18
 const ssh18 = document.querySelector(".servicelinks2__service18");
 const braces = document.getElementById("veneers");
 const start18 = document.querySelector(".servicecontent2__start");
 
 ssh18.addEventListener("mouseover", () => {
   braces.style.display = "flex";
   start18.style.display = "none";
  });
  
  ssh18.addEventListener("mouseout", () => {
   start18.style.display = "flex";
   braces.style.display = "none";
  });
// Services CODE19
 const ssh19 = document.querySelector(".servicelinks3__service19");
 const tw = document.getElementById("teeth-white");
 const start19 = document.querySelector(".servicecontent3__start");
 
 ssh19.addEventListener("mouseover", () => {
   tw.style.display = "flex";
   start19.style.display = "none";
  });
  
  ssh19.addEventListener("mouseout", () => {
   start19.style.display = "flex";
   tw.style.display = "none";
  });
// Services CODE20
 const ssh20 = document.querySelector(".servicelinks3__service20");
 const cp = document.getElementById("comp-bond");
 const start20 = document.querySelector(".servicecontent3__start");
 
 ssh20.addEventListener("mouseover", () => {
   cp.style.display = "flex";
   start20.style.display = "none";
  });
  
  ssh20.addEventListener("mouseout", () => {
   start20.style.display = "flex";
   cp.style.display = "none";
  });
// Services CODE21
 const ssh21 = document.querySelector(".servicelinks3__service21");
 const consult = document.getElementById("consult");
 const start21 = document.querySelector(".servicecontent3__start");
 
 ssh21.addEventListener("mouseover", () => {
   consult.style.display = "flex";
   start21.style.display = "none";
  });
  
  ssh21.addEventListener("mouseout", () => {
   start21.style.display = "flex";
   consult.style.display = "none";
  });
// Services CODE22
 const ssh22 = document.querySelector(".servicelinks3__service22");
 const dentcrown = document.getElementById("dent-crown");
 const start22 = document.querySelector(".servicecontent3__start");
 
 ssh22.addEventListener("mouseover", () => {
   dentcrown.style.display = "flex";
   start22.style.display = "none";
  });
  
  ssh22.addEventListener("mouseout", () => {
   start22.style.display = "flex";
   dentcrown.style.display = "none";
  });
// Services CODE23
 const ssh23 = document.querySelector(".servicelinks3__service23");
 const dentbridge = document.getElementById("dent-bridge");
 const start23 = document.querySelector(".servicecontent3__start");
 
 ssh23.addEventListener("mouseover", () => {
   dentbridge.style.display = "flex";
   start23.style.display = "none";
  });
  
  ssh23.addEventListener("mouseout", () => {
   start23.style.display = "flex";
   dentbridge.style.display = "none";
  });
// Services CODE24
 const ssh24 = document.querySelector(".servicelinks3__service24");
 const dentveneer = document.getElementById("dent-veneer");
 const start24 = document.querySelector(".servicecontent3__start");
 
 ssh24.addEventListener("mouseover", () => {
   dentveneer.style.display = "flex";
   start24.style.display = "none";
  });
  
  ssh24.addEventListener("mouseout", () => {
   start24.style.display = "flex";
   dentveneer.style.display = "none";
  });
 