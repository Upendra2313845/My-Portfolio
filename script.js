
/* Auto-type word-by-word (letter by letter) effect
   Customize 'phrases' array as you like.
*/
(function() {
  const phrases = [
    "Full Stack Development",
    "Machine Learning",
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

