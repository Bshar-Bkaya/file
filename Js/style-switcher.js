/*============= toggle Style switcher ============ */
const styleswitcherToggle = document.querySelector(".style-switcher-toggler");
const styleswitcher = document.querySelector(".style-switcher");
styleswitcherToggle.addEventListener("click", () => {
  styleswitcher.classList.toggle("open");
});
// hide  style switcher  on scroll
window.addEventListener("scroll", () => {
  if (styleswitcher.classList.contains("open")) {
    styleswitcher.classList.remove("open");
  }
});
/*================= theme colors ================= */
// const alternatestyle = document.querySelectorAll(".alternate-style");
// function setActivestyle(color) {
//   alternatestyle.forEach((style) => {
//     if (color === style.getAttribute("title")) {
//       style.removeAttribute("disabled");
//     } else {
//       style.setAttribute("disabled", "true");
//     }
//   });
// }

let root = document.querySelector(':root');
const colors = document.querySelectorAll(".color-cycle");
colors.forEach((color) => {
  color.addEventListener("click", () => {
    root.style.setProperty('--skin-color', color.dataset.color);
  })
});

/*====================== theme light and dark maode =================== */
const dayNight = document.querySelector(".day-night");
const darkButtonIcon = dayNight.querySelector("i");
dayNight.addEventListener("click", () => {
  darkButtonIcon.classList.toggle("fa-moon");
  darkButtonIcon.classList.toggle("fa-sun");
  document.body.classList.toggle("dark");
});

// change the moon when hover on theem btn
// replace class icon-trash to icon-trash (to change icon)
darkButtonIcon.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("fa-moon")) {
    e.target.classList.replace("fa-moon", "fa-sun");
  } else if (e.target.classList.contains("fa-sun")) {
    e.target.classList.replace("fa-sun", "fa-moon");
  }
});

// replace class icon-trash to icon-trash (to change icon)
darkButtonIcon.addEventListener("mouseout", (e) => {
  if (e.target.classList.contains("fa-moon")) {
    e.target.classList.replace("fa-moon", "fa-sun");
  } else if (e.target.classList.contains("fa-sun")) {
    e.target.classList.replace("fa-sun", "fa-moon");
  }
});