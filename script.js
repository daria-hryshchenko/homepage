// function qs(selector, all = false) {
//     return all ? document.querySelectorAll(selector) : document.querySelector(selector)
// }

// const sections = qs('.section', true);
// const timeline = qs('.experiences__timeline');
// const line = qs('.experiences__line');
// line.style.bottom = `calc(100% - 20px)`;
// let prevScrollY = window.scrollY;
// let up, down;
// let full = false;
// let set = 0;
// const targetY = window.innerHeight * 0.8;

// function scrollHandler(e){
//     const{
//         scrollY
//     } = window;
//     up = scrollY < prevScrollY;
//     down = !up;
//     const timelineRect = timeline.getBoundingClientRect();
//     const lineRect = line.getBoundingClientRect();

//     const dist = targetY - timelineRect.top
//     console.log(dist);

//     if (down && !full){
//         set = Math.max(set, dist);
//             line.style.bottom = `calc(100% - ${set}px)`
//     }

//     if (dist > timeline.offsetHeight + 50 && !full){
//         full = true;
//         line.style.bottom = `-50px`
//     }

//     sections.forEach(item => {
//         const rect = item.getBoundingClientRect();

//         if(rect.top + item.offsetHeight / 5 < targetY) {
//             item.classList.add('show-me')
//         }
//     });

//     prevScrollY = window.scrollY;
// }

// scrollHandler();
// line.style.display = 'block';
// window.addEventListener('scroll', scrollHandler)

// Active mobile menu

// const mobileMenu = document.querySelector('#mobile__menu');
// const menuLinks = document.querySelector('.navbar__menu');

// mobileMenu.addEventListener("click", function () {
//   mobileMenu.classList.toggle('is-active');
//   menuLinks.classList.toggle('active');
// })

// Change navbar color after scrolling

// window.onscroll = () => {
//   if (window.scrollY > 300) {
//     $('.navbar').classList.add('.scrolled');
//   } else {
//     $('.navbar').classList.remove('.scrolled');
//   }
// };

/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}

navLink.forEach((item) => item.addEventListener("click", linkAction));

/*==================== ACCORDION SKILLS ====================*/

const skillsContent = document.getElementsByClassName("skills__content"),
  skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }
  if (itemClass == "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open ";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });
    target.classList.add("qualification__active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  });
});

/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*==================== TESTIMONIAL ====================*/

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

/*==================== CHANGE BACKGROUND HEADER ====================*/

/*==================== SHOW SCROLL UP ====================*/

/*==================== DARK LIGHT THEME ====================*/
