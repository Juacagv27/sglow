(function () {
  const slides = Array.from(document.querySelectorAll(".sg-slide"));
  const dots   = Array.from(document.querySelectorAll(".sg-dot"));
  let current  = 0;
  let timer    = null;
 
  function goTo(n) {
    // Quitar activo del slide y dot actuales
    slides[current].classList.remove("active");
    dots[current].classList.remove("active");
 
    // Nuevo índice con wrap-around
    current = (n + slides.length) % slides.length;
 
    // Activar nuevo slide y dot
    slides[current].classList.add("active");
    dots[current].classList.add("active");
  }
 
  // Dots
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      resetTimer();
      goTo(i);
    });
  });
 
  // Auto-play
  function startTimer() {
    timer = setInterval(() => goTo(current + 1), 4000);
  }
 
  function resetTimer() {
    clearInterval(timer);
    startTimer();
  }
 
  // Swipe táctil — funciona en cualquier modo
  let touchStartX = 0;
  let touchStartY = 0;
 
  const wrap = document.querySelector(".sg-track-wrap");
 
  wrap.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });
 
  wrap.addEventListener("touchend", (e) => {
    const dx = touchStartX - e.changedTouches[0].clientX;
    const dy = Math.abs(touchStartY - e.changedTouches[0].clientY);
 
    // Solo swipe horizontal (ignora scroll vertical)
    if (Math.abs(dx) > 45 && Math.abs(dx) > dy) {
      resetTimer();
      goTo(dx > 0 ? current + 1 : current - 1);
    }
  }, { passive: true });
 
  // Arrancar
  startTimer();
 
})();
