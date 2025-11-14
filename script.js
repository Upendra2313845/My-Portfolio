
/* Auto-type word-by-word (letter by letter) effect
   Customize 'phrases' array as you like.
*/
(function() {
  const phrases = [
    "Full Stack Development",
    // "Machine Learning",
    "Data Science",
    "MERN Stack"
  ];

  const typingSpeed = 80;      // ms per character when typing
  const deletingSpeed = 40;    // ms per character when deleting
  const pauseAfterTyping = 1400; // ms pause after a phrase typed
  const pauseAfterDeleting = 300; // ms pause before typing next

  const el = document.querySelector('.auto-type');
  if (!el) return;

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function tick() {
    const current = phrases[phraseIndex];
    if (!isDeleting) {
      // typing
      charIndex++;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        // finished typing
        isDeleting = true;
        setTimeout(tick, pauseAfterTyping);
      } else {
        setTimeout(tick, typingSpeed);
      }
    } else {
      // deleting
      charIndex--;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        // finished deleting
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(tick, pauseAfterDeleting);
      } else {
        setTimeout(tick, deletingSpeed);
      }
    }
  }

  // small delay before starting for nicer effect
  setTimeout(tick, 500);
})();



// MOBILE MENU TOGGLE
const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// NAVBAR SCROLL EFFECT
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});





// skills window 

const track = document.getElementById("track");
const loop = document.getElementById("loop");

// 1) Duplicate skills for infinite loop
track.innerHTML += track.innerHTML;

// DRAG SCROLL
let isDown = false;
let startX;
let scrollLeft;

loop.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX;
    scrollLeft = loop.scrollLeft;
});
loop.addEventListener('mouseup', () => isDown = false);
loop.addEventListener('mouseleave', () => isDown = false);

loop.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const walk = (e.pageX - startX) * 2;
    loop.scrollLeft = scrollLeft - walk;
});

// 3) Infinite Loop Reset (magic)
loop.addEventListener('scroll', () => {
    let maxScroll = track.scrollWidth / 2;

    if (loop.scrollLeft >= maxScroll) {
        loop.scrollLeft = 1;
    } 
    else if (loop.scrollLeft <= 0) {
        loop.scrollLeft = maxScroll - 1;
    }
});

