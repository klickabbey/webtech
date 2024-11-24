const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  effect: "fade",
  loop: true,
  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let menu = document.querySelector(".menu");
let nums = document.querySelectorAll(".num");
let start = false;

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("sticky", window.scrollY > 0);

  if (window.scrollY >= menu.offsetTop) {
    if (!start) {
      nums.forEach((num) => {
        startCount(num);
      });
    }
    start = true;
  }
});

const startCount = (el) => {
  let max = parseInt(el.dataset.val, 10); // Ensure max is an integer
  let count = 0; // Initialize count
  let increment = Math.ceil(max / 200); // Calculate increment based on duration

  let interval = setInterval(() => {
    count += increment; // Increment count
    if (count >= max) {
      count = max; // Ensure count does not exceed max
      clearInterval(interval);
    }
    el.textContent = count; // Update the text content
  }, 10); // Update every 10 milliseconds
};