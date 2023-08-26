/*============  Start Typing Animation ================ */
let typed = new Typed(".typing", {
  strings: [
    "web Developer",
    "Back End Developer",
    "Laravel Devloper",
    "Make High Performance WebSite",
    "Creative",
    "Jovial",
  ],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});
/*============  End Typing Animation ================ */

// Overlay On First Open Website
TweenMax.to(".first", 1.6, {
  delay: 1,
  left: "-100%",
  ease: Expo.easeInOut,
});

TweenMax.to(".second", 1.6, {
  delay: 1.5,
  left: "100%",
  ease: Expo.easeInOut,
});

TweenMax.to(".third", 1.6, {
  delay: 2,
  left: "-100%",
  ease: Expo.easeInOut,
});
TweenMax.from(".content", 1.5, {
  opacity: 0,
  delay: 3.4,
  x: 100,
  y: 100,
  ease: Power4.easeIn,
});

TweenMax.from(".side", 1.5, {
  opacity: 0,
  delay: 3.4,
  x: -100,
  y: -100,
  ease: Power4.easeIn,
});

window.addEventListener("load", function () {
  AOS.init({
    once: true,
  });
});

// /*============   Aside ================ */
let navToggleBtn = document.querySelector(".nav-toggler");
let aside = document.querySelector(".side");

navToggleBtn.addEventListener("click", () => {
  aside.classList.toggle("open");
  navToggleBtn.classList.toggle("open");
});

// ###### Nav-link's to active as you scroll ######
const sections = document.querySelectorAll(".section");
const navA = document.querySelectorAll(".side .nav li a");
var current = "";
// ######  Animate Width On Scrolling ######
let skills = document.querySelectorAll(".progress-in");
let skillsSection = document.querySelector(".skills");
let started = false; // Function Started ? No
window.onscroll = () => {
  current = "";

  sections.forEach((section) => {
    if (scrollY >= section.offsetTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navA.forEach((a) => {
    a.classList.remove("active");
    //### First way to check ###
    // if (a.classList.contains("link-" + current)) {
    //   a.classList.add("active");
    // }
    //### Second way to check ###
    if (a.href.includes(current)) {
      a.classList.add('active');
    }
  });
  // Skills Animate Width
  if (window.scrollY >= skillsSection.offsetTop + 700) {
    skills.forEach((skill) => {
      skill.style.width = skill.dataset.width;
    });
  }
};

// ######  Calculate Age from Birthdate ######
const birthdate = new Date(2001, 10, 24);
document.getElementById("myage").innerText = age(birthdate);

function age(birthdate) {
  const today = new Date();
  const age =
    today.getFullYear() - birthdate.getFullYear() - (today.getMonth() < birthdate.getMonth() ||
      (today.getMonth() === birthdate.getMonth() && today.getDate() < birthdate.getDate()));
  return age;
}
