var type = new Typed(".text", {
  strings: ["Computer Science Student", "Video Editor", "Sketch Artist"],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 100,
  loop: true
});

document.addEventListener('DOMContentLoaded', () => {
  const homeContent = document.querySelector('.home-content');
  const aboutImg = document.querySelector('.about-img');
  const aboutTxt = document.querySelector('.about-txt');
  const skillBoxes = Array.from(document.querySelectorAll('.skill-box'));
  const contactInfo = document.querySelector('.contact-info');
  const contactForm = document.querySelector('.contact-form');

  const animatedElements = [
    homeContent,
    aboutImg,
    aboutTxt,
    ...skillBoxes,
    contactInfo,
    contactForm
  ].filter(el => el !== null);

  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85
        && rect.bottom >= 0; // Also ensure some part is visible from top
  }

  function animateOnScroll() {
    animatedElements.forEach(el => {
      if (isInViewport(el)) {
        el.classList.add('active');
      } else {
        el.classList.remove('active'); // Remove class when out of view
      }
    });
  }

  animateOnScroll();
  window.addEventListener('scroll', animateOnScroll);
});

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navbar = document.getElementById("navbar");

  menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });

  // Optional: close menu when clicking a link
  document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
      navbar.classList.remove("active");
    });
  });
});