/* Printer carousel on the homepage (Filo One, Filo Mini, Filo Pro).
   The slides already swipe without JavaScript (CSS scroll-snap).
   This adds: arrow buttons, name tabs that slide instead of jumping,
   left/right arrow keys, and highlights the tab for the visible slide. */
(function () {
  var carousel = document.querySelector(".printer-carousel");
  if (!carousel) return;

  var track = carousel.querySelector(".pc-track");
  var slides = Array.prototype.slice.call(
    carousel.querySelectorAll(".pc-slide"),
  );
  var tabs = Array.prototype.slice.call(carousel.querySelectorAll(".pc-tab"));
  var arrows = carousel.querySelector(".pc-arrows");
  var prev = carousel.querySelector('.pc-arrow[data-dir="-1"]');
  var next = carousel.querySelector('.pc-arrow[data-dir="1"]');
  var current = 0;

  var reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  function goTo(i) {
    i = Math.max(0, Math.min(slides.length - 1, i));
    track.scrollTo({
      left: slides[i].offsetLeft - track.offsetLeft,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }

  function update(i) {
    current = i;
    tabs.forEach(function (tab, t) {
      if (t === i) tab.setAttribute("aria-current", "true");
      else tab.removeAttribute("aria-current");
    });
    // Hide off-screen slides from screen readers and the Tab key
    slides.forEach(function (slide, s) {
      slide.inert = s !== i;
    });
    prev.disabled = i === 0;
    next.disabled = i === slides.length - 1;
  }

  // Work out which slide is showing whenever the track scrolls
  var ticking = false;
  track.addEventListener("scroll", function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      var i = Math.round(track.scrollLeft / track.clientWidth);
      if (i !== current) update(i);
      ticking = false;
    });
  });

  // Tabs slide the track instead of jumping the whole page
  tabs.forEach(function (tab, t) {
    tab.addEventListener("click", function (e) {
      e.preventDefault();
      goTo(t);
    });
  });

  prev.addEventListener("click", function () {
    goTo(current - 1);
  });
  next.addEventListener("click", function () {
    goTo(current + 1);
  });

  carousel.addEventListener("keydown", function (e) {
    if (e.target.closest("input, textarea")) return;
    if (e.key === "ArrowLeft") goTo(current - 1);
    if (e.key === "ArrowRight") goTo(current + 1);
  });

  arrows.hidden = false;
  update(0);
})();
