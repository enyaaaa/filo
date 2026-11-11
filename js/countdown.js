/* Deal countdown for the announcement bar.
   Reads the deadline from data-deadline on .announce-deal, e.g.
   data-deadline="2026-11-30T23:59:59+08:00" (Singapore time).

   - With JavaScript: the static "Ends 30 Nov" text is swapped for a live
     dd:hh:mm:ss timer. Once the deal is over the bar switches to the
     always-on Filo Club offer (see evergreen() below).
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

  function evergreen() {
    bar.classList.remove("is-last-day");
    bar.classList.add("is-evergreen");
    bar.innerHTML =
      '<span class="announce-text"><strong>Join Filo Club:</strong> ' +
      "free $3 Shopee voucher and a new project every week</span>" +
      '<a class="announce-btn" href="join.html">Join free ' +
      '<span aria-hidden="true">&rarr;</span></a>';
  }

  function tick() {
    var left = deadline - Date.now();

    if (left <= 0) {
      // Deal over: swap to the always-on Filo Club offer, so the bar never
      // shows an expired code and never disappears between deals
      clearInterval(id);
      evergreen();
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
