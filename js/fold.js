/* Folded sections (printer.html, bundles.html, product.html): (<details class="fold">).
   If a link or the address bar points at a folded section, or at something
   inside one (e.g. printer.html#specs), open it before scrolling there. */
(function () {
  function openFor(hash) {
    if (!hash || hash.length < 2) return;
    var target = document.getElementById(decodeURIComponent(hash.slice(1)));
    if (!target) return;
    var fold = target.closest("details.fold");
    if (fold && !fold.open) {
      fold.open = true;
      target.scrollIntoView();
    }
  }

  // Page opened with a hash, e.g. from another page's "Compare full specs"
  openFor(location.hash);

  // Clicking an in-page link like href="#specs"
  window.addEventListener("hashchange", function () {
    openFor(location.hash);
  });
  document.addEventListener("click", function (e) {
    var link = e.target.closest('a[href^="#"]');
    if (link) openFor(link.getAttribute("href"));
  });
})();
