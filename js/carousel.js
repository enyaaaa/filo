/* Printer carousel on the homepage (Filo One, Filo Mini, Filo Pro).
   The slides already swipe without JavaScript (CSS scroll-snap).
   This adds: arrow buttons, name tabs, left/right arrow keys, and an
   auto-slide that always moves to the right in an endless loop.

   How the loop works: a copy of the first slide is added after the last
   one. Going "next" from the last printer slides onto that copy, then the
   track silently jumps back to the real first slide, so it never rewinds. */
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
  var count = slides.length;
  var current = 0;

  var reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  // Copy of the first slide at the end (hidden from screen readers and Tab)
  var clone = slides[0].cloneNode(true);
  clone.removeAttribute("id");
  clone.setAttribute("aria-hidden", "true");
  clone.inert = true;
  clone.querySelectorAll("[id]").forEach(function (el) {
    el.removeAttribute("id");
  });
  track.appendChild(clone);

  function width() {
    return track.clientWidth;
  }

  // Move the track without animation (used for the silent loop jump)
  function jump(index) {
    var old = track.style.scrollBehavior;
    track.style.scrollBehavior = "auto";
    track.scrollLeft = index * width();
    track.style.scrollBehavior = old;
  }

  function slideTo(index) {
    track.scrollTo({
      left: index * width(),
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }

  function goNext() {
    // from the last printer, slide onto the copy of the first (still moving right)
    slideTo(current + 1);
  }

  function goPrev() {
    if (current === 0) {
      // jump to the copy (looks identical to slide 1), then slide left to the last
      jump(count);
      slideTo(count - 1);
    } else {
      slideTo(current - 1);
    }
  }

  function update(i) {
    current = i;
    tabs.forEach(function (tab, t) {
      if (t === i) tab.setAttribute("aria-current", "true");
      else tab.removeAttribute("aria-current");
    });
    slides.forEach(function (slide, s) {
      slide.inert = s !== i;
    });
  }

  // Work out which slide is showing; when we land on the copy, jump home
  var settle;
  track.addEventListener("scroll", function () {
    var raw = Math.round(track.scrollLeft / width());
    var i = raw % count;
    if (i !== current) update(i);
    clearTimeout(settle);
    settle = setTimeout(function () {
      if (Math.round(track.scrollLeft / width()) >= count) jump(0);
    }, 120);
  });

  tabs.forEach(function (tab, t) {
    tab.addEventListener("click", function (e) {
      e.preventDefault();
      slideTo(t);
    });
  });

  prev.addEventListener("click", goPrev);
  next.addEventListener("click", goNext);

  carousel.addEventListener("keydown", function (e) {
    if (e.target.closest("input, textarea")) return;
    if (e.key === "ArrowLeft") goPrev();
    if (e.key === "ArrowRight") goNext();
  });

  arrows.hidden = false;
  update(0);

  /* Auto-slide every 5 seconds, always to the right.
     Pauses while the cursor is over the carousel or something in it has
     keyboard focus, after a swipe, while it is off screen, and for
     reduced-motion users. */
  if (reduceMotion) return;
  var DELAY = 3000;
  var held = false;
  var visible = true;

  setInterval(function () {
    if (held || !visible || document.hidden) return;
    goNext();
  }, DELAY);

  carousel.addEventListener("mouseenter", function () {
    held = true;
  });
  carousel.addEventListener("mouseleave", function () {
    held = false;
  });
  carousel.addEventListener("focusin", function () {
    held = true;
  });
  carousel.addEventListener("focusout", function () {
    held = false;
  });
  track.addEventListener(
    "touchstart",
    function () {
      held = true;
    },
    { passive: true },
  );

  if ("IntersectionObserver" in window) {
    new IntersectionObserver(
      function (entries) {
        visible = entries[0].isIntersecting;
      },
      { threshold: 0.4 },
    ).observe(carousel);
  }
})();
