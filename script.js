const { animate, inView, scroll, stagger } = window.Motion;

const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('nav-scrolled');
  } else {
    navbar.classList.remove('nav-scrolled');
  }
});

const menuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const mobileLinks = document.querySelectorAll('.mobile-link');
let isMenuOpen = false;

menuBtn.addEventListener('click', () => {
  isMenuOpen = !isMenuOpen;
  if (isMenuOpen) {
    mobileMenu.classList.remove('-translate-y-full', 'opacity-0', 'pointer-events-none');
    menuIcon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
  } else {
    mobileMenu.classList.add('-translate-y-full', 'opacity-0', 'pointer-events-none');
    menuIcon.setAttribute('d', 'M4 6h16M4 12h16m-7 6h7');
  }
});

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    isMenuOpen = false;
    mobileMenu.classList.add('-translate-y-full', 'opacity-0', 'pointer-events-none');
    menuIcon.setAttribute('d', 'M4 6h16M4 12h16m-7 6h7');
  });
});

animate(
  "#hero-text h1",
  { opacity: [0, 1], x: [-50, 0] },
  { duration: 0.8, easing: "ease-out" }
);
animate(
  "#hero-text p",
  { opacity: [0, 1], x: [-50, 0] },
  { duration: 0.8, delay: 0.2, easing: "ease-out" }
);
animate(
  "#hero-image img",
  { opacity: [0, 1], y: [50, 0] },
  { duration: 1, delay: 0.4, easing: "ease-out" }
);
animate(
  "#hero-image img",
  { y: [0, -15, 0] },
  { duration: 4, repeat: Infinity, easing: "ease-in-out", delay: 1.4 }
);

inView("#events", () => {
  animate(
    "#competitions-title",
    { opacity: [0, 1], y: [30, 0] },
    { duration: 0.6, easing: "ease-out" }
  );
  animate(
    ".competition-card",
    { opacity: [0, 1], y: [50, 0] },
    { duration: 0.6, delay: stagger(0.2), easing: "ease-out" }
  );
});

inView("#about", () => {
  animate(
    "#about-title",
    { opacity: [0, 1], y: [30, 0] },
    { duration: 0.6, easing: "ease-out" }
  );
  animate(
    "#about-content",
    { opacity: [0, 1], y: [30, 0] },
    { duration: 0.6, delay: 0.2, easing: "ease-out" }
  );
});

inView("#contact", () => {
  animate(
    "#contact-title",
    { opacity: [0, 1], y: [30, 0] },
    { duration: 0.6, easing: "ease-out" }
  );
  animate(
    "#contact-desc",
    { opacity: [0, 1], y: [30, 0] },
    { duration: 0.6, delay: 0.1, easing: "ease-out" }
  );
  animate(
    "#contact-form",
    { opacity: [0, 1], y: [30, 0] },
    { duration: 0.6, delay: 0.2, easing: "ease-out" }
  );
});

const buttons = document.querySelectorAll('.btn-animate');
buttons.forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    animate(btn, { scale: 1.05 }, { duration: 0.2 });
  });
  btn.addEventListener('mouseleave', () => {
    animate(btn, { scale: 1 }, { duration: 0.2 });
  });
});

const cards = document.querySelectorAll('.competition-card');
cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    animate(card, { y: -10 }, { duration: 0.3 });
  });
  card.addEventListener('mouseleave', () => {
    animate(card, { y: 0 }, { duration: 0.3 });
  });
});
