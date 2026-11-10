/* Deal countdown for the announcement bar.
   Reads the deadline from data-deadline on .announce-deal, e.g.
   data-deadline="2026-11-30T23:59:59+08:00" (Singapore time).

   - With JavaScript: the static "Ends 30 Nov" text is swapped for a live
     dd:hh:mm:ss timer, and the bar disappears once the deal is over.
   - Without JavaScript: the static end date stays visible.
   Screen readers keep hearing the static end date (the ticking timer is
   aria-hidden), so they aren't interrupted every second. */
(function () {
  var bar = document.querySelector(".announce-deal[data-deadline]");
  if (!bar) return;

  var deadline = new Date(bar.getAttribute("data-deadline")).getTime();
  if (isNaN(deadline)) return;

  var timer = bar.querySelector(".countdown");
  var staticEnd = bar.querySelector(".announce-ends");
  var parts = {};
  ["d", "h", "m", "s"].forEach(function (k) {
    parts[k] = bar.querySelector('[data-cd="' + k + '"]');
  });

  function pad(n) {
    return n < 10 ? "0" + n : String(n);
  }

  function tick() {
    var left = deadline - Date.now();

    if (left <= 0) {
      // Deal over: remove the bar so nobody tries an expired code
      bar.hidden = true;
      clearInterval(id);
      return;
    }

    var s = Math.floor(left / 1000);
    parts.d.textContent = pad(Math.floor(s / 86400));
    parts.h.textContent = pad(Math.floor((s % 86400) / 3600));
    parts.m.textContent = pad(Math.floor((s % 3600) / 60));
    parts.s.textContent = pad(s % 60);

    // Last 24 hours: switch to the urgent style
    bar.classList.toggle("is-last-day", left < 86400000);
  }

  // Show the live timer; keep the static date for screen readers only
  if (timer && staticEnd) {
    timer.hidden = false;
    staticEnd.classList.add("sr-only");
  }

  var id = setInterval(tick, 1000);
  tick();
})();
