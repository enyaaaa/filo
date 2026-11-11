/* Homepage reel strip: play every reel while the strip is on screen,
   pause them when it scrolls away (saves battery and data).
   People who prefer reduced motion see the still poster frames instead. */
(function () {
  var strip = document.querySelector(".reel-strip");
  if (!strip) return;

  var videos = Array.prototype.slice.call(strip.querySelectorAll("video"));
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  function isShown(v) {
    // duplicate panels are hidden on phones; don't download or play them
    return v.offsetParent !== null;
  }

  function playAll() {
    videos.forEach(function (v) {
      if (!isShown(v)) return;
      if (v.preload === "none") v.preload = "auto";
      var p = v.play();
      if (p && p.catch) p.catch(function () {}); // missing file or autoplay blocked
    });
  }

  function pauseAll() {
    videos.forEach(function (v) {
      v.pause();
    });
  }

  if (!("IntersectionObserver" in window)) {
    playAll();
    return;
  }

  new IntersectionObserver(
    function (entries) {
      entries[0].isIntersecting ? playAll() : pauseAll();
    },
    { threshold: 0.15 },
  ).observe(strip);
})();
