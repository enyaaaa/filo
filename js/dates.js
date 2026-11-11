/* Keeps dated labels current without editing the HTML each week.

   data-week="0"  -> "This week · 9–15 Nov" (Monday to Sunday, Singapore time)
   data-week="N"  -> "From Mon 16 Nov" (the Monday N weeks from now)
   data-updated   -> "Updated Nov 2026" from the page's last-modified date

   Each element keeps its typed-in text as a fallback when JavaScript is off. */
(function () {
  var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  // "Today" in Singapore (UTC+8), as a plain date at midnight UTC
  var now = new Date(Date.now() + 8 * 3600 * 1000);
  var today = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
  var day = (new Date(today).getUTCDay() + 6) % 7; // Monday = 0
  var monday = today - day * 86400000;

  function fmt(t) {
    var d = new Date(t);
    return d.getUTCDate() + " " + MONTHS[d.getUTCMonth()];
  }

  document.querySelectorAll("[data-week]").forEach(function (el) {
    var n = parseInt(el.getAttribute("data-week"), 10) || 0;
    var start = monday + n * 7 * 86400000;
    if (n === 0) {
      var end = start + 6 * 86400000;
      var a = new Date(start), b = new Date(end);
      var range = a.getUTCMonth() === b.getUTCMonth()
        ? a.getUTCDate() + "–" + fmt(end)
        : fmt(start) + " – " + fmt(end);
      el.textContent = "This week · " + range;
    } else {
      el.textContent = "From Mon " + fmt(start);
    }
  });

  var mod = new Date(document.lastModified);
  if (!isNaN(mod)) {
    document.querySelectorAll("[data-updated]").forEach(function (el) {
      el.textContent = "Tested by the Filo team · Updated " +
        MONTHS[mod.getMonth()] + " " + mod.getFullYear();
    });
  }
})();
