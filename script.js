/* ---------------------------------------------
   AUTO-TYPE EFFECT
--------------------------------------------- */
(function () {
  const phrases = [
    "Full Stack Development",
    "Data Science",
    "MERN Stack"
  ];

  const typingSpeed = 80;
  const deletingSpeed = 40;
  const pauseAfterTyping = 1400;
  const pauseAfterDeleting = 300;

  const el = document.querySelector(".auto-type");
  if (!el) return;

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function tick() {
    const current = phrases[phraseIndex];

    if (!isDeleting) {
      charIndex++;
      el.textContent = current.slice(0, charIndex);

      if (charIndex === current.length) {
        isDeleting = true;
        setTimeout(tick, pauseAfterTyping);
      } else {
        setTimeout(tick, typingSpeed);
      }
    } else {
      charIndex--;
      el.textContent = current.slice(0, charIndex);

      if (charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(tick, pauseAfterDeleting);
      } else {
        setTimeout(tick, deletingSpeed);
      }
    }
  }

  setTimeout(tick, 500);
})();


/* ---------------------------------------------
   MOBILE MENU TOGGLE
--------------------------------------------- */
const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});


/* ---------------------------------------------
   NAVBAR SCROLL EFFECT
--------------------------------------------- */
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("header-scrolled");
  } else {
    header.classList.remove("header-scrolled");
  }
});


/* ---------------------------------------------------------
   PROJECT SECTION DRAG SCROLL
--------------------------------------------------------- */
const pWindow = document.getElementById("pWindow");

let isDown = false;
let startX, scrollLeft;

pWindow.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX;
    scrollLeft = pWindow.scrollLeft;
});

pWindow.addEventListener("mouseup", () => isDown = false);
pWindow.addEventListener("mouseleave", () => isDown = false);

pWindow.addEventListener("mousemove", (e) => {
    if (!isDown) return;

    e.preventDefault();
    const walk = (e.pageX - startX) * 2;  // drag speed
    pWindow.scrollLeft = scrollLeft - walk;
});


  //  PROJECT ARROW BUTTONS


const pLeft = document.getElementById("pLeft");
const pRight = document.getElementById("pRight");
const windowP = document.getElementById("pWindow");

// Scroll amount = approx 1 project-card width
const scrollAmount = 500;

pLeft.addEventListener("click", () => {
    windowP.scrollLeft -= scrollAmount;
});

pRight.addEventListener("click", () => {
    windowP.scrollLeft += scrollAmount;
});



/* ---------------------------------------------
   PERFECT LEFT + RIGHT INFINITE SKILLS LOOP
--------------------------------------------- */

const track = document.getElementById("track");
const loop = document.getElementById("loop");

if (track && loop) {

    // Duplicate 3 times to make infinite loop
    const original = track.innerHTML;
    track.innerHTML = original + original + original;

    const third = track.scrollWidth / 3;
    loop.scrollLeft = third;

    // Drag system
    let isDrag = false;
    let startX, startScroll;

    loop.addEventListener("mousedown", (e) => {
        isDrag = true;
        startX = e.pageX;
        startScroll = loop.scrollLeft;
    });

    loop.addEventListener("mouseup", () => isDrag = false);
    loop.addEventListener("mouseleave", () => isDrag = false);

    loop.addEventListener("mousemove", (e) => {
        if (!isDrag) return;
        const walk = (e.pageX - startX) * 2;
        loop.scrollLeft = startScroll - walk;
    });

    // Infinite reset logic (for both sides)
    loop.addEventListener("scroll", () => {
        const total = track.scrollWidth;
        const one3 = total / 3;
        const two3 = one3 * 2;

        // RIGHT END RESET
        if (loop.scrollLeft >= two3) {
            loop.scrollLeft = loop.scrollLeft - one3;
        }

        // LEFT END RESET
        if (loop.scrollLeft <= 0) {
            loop.scrollLeft = loop.scrollLeft + one3;
        }
    });
}
