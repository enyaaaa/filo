/* Remembers the light/dark choice across pages and refreshes.

   The header toggle (#theme-toggle) is a CSS-only checkbox: when it is
   checked, the site switches to the opposite of the device setting.
   This script saves the theme the visitor actually sees ("light" or
   "dark") and restores it on every page.

   - Loaded in <head> (not deferred), so the saved theme is applied
     before the page paints and there is no flash of the wrong theme.
   - Without JavaScript, or if storage is blocked, the toggle still
     works on each page and the site follows the device setting. */
(function () {
  var KEY = "filo-theme";
  var root = document.documentElement;
  var media = window.matchMedia
    ? window.matchMedia("(prefers-color-scheme: dark)")
    : null;

  function systemTheme() {
    return media && media.matches ? "dark" : "light";
  }

  function saved() {
    try {
      var v = localStorage.getItem(KEY);
      return v === "light" || v === "dark" ? v : null;
    } catch (e) {
      return null;
    }
  }

  function save(theme) {
    try {
      localStorage.setItem(KEY, theme);
    } catch (e) {}
  }

  // True when the saved theme differs from the device setting.
  function shouldFlip() {
    var t = saved();
    return t !== null && t !== systemTheme();
  }

  // 1. Before paint: flip with a class until the toggle exists.
  root.classList.toggle("theme-flip", shouldFlip());

  // 2. Once the header exists: move the state onto the real toggle.
  function sync() {
    var toggle = document.getElementById("theme-toggle");
    if (!toggle) return;
    toggle.checked = shouldFlip();
    root.classList.remove("theme-flip");
  }

  document.addEventListener("DOMContentLoaded", function () {
    sync();
    var toggle = document.getElementById("theme-toggle");
    if (!toggle) return;
    toggle.addEventListener("change", function () {
      var dark = systemTheme() === "dark";
      save(toggle.checked !== dark ? "dark" : "light");
    });
  });

  // Back/forward cache restores old checkbox states, so re-sync.
  window.addEventListener("pageshow", sync);

  // If the device switches theme, keep showing the saved one.
  if (media && media.addEventListener) {
    media.addEventListener("change", sync);
  }
})();
