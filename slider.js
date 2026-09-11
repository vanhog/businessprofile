(function () {
  "use strict";

  var AUTO_ADVANCE_MS = 15000;

  function escapeHtml(str) {
    var div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function initSlider(root) {
    var slides = window.BEISPIEL_SLIDES || [];
    var track = root.querySelector("[data-slider-track]");
    var dotsWrap = root.querySelector("[data-slider-dots]");
    var prevBtn = root.querySelector("[data-slider-prev]");
    var nextBtn = root.querySelector("[data-slider-next]");

    if (!track || !slides.length) return;

    var index = 0;
    var timer = null;
    var reduceMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Slides aus den Daten aufbauen
    slides.forEach(function (slide, i) {
      var el = document.createElement("article");
      el.className = "slide";
      el.setAttribute("aria-hidden", i === 0 ? "false" : "true");
      el.innerHTML =
        "<h2>" +
        escapeHtml(slide.title) +
        "</h2><p>" +
        escapeHtml(slide.text) +
        "</p>";
      track.appendChild(el);
    });

    var slideEls = Array.prototype.slice.call(track.children);

    // Dots aufbauen
    var dots = slides.map(function (_, i) {
      var dot = document.createElement("button");
      dot.type = "button";
      dot.className = "slider-dot";
      dot.setAttribute(
        "aria-label",
        "Beispiel " + (i + 1) + " von " + slides.length
      );
      dot.setAttribute("aria-current", i === 0 ? "true" : "false");
      dot.addEventListener("click", function () {
        goTo(i, true);
      });
      dotsWrap.appendChild(dot);
      return dot;
    });

    function render() {
      track.style.transform = "translateX(-" + index * 100 + "%)";
      slideEls.forEach(function (el, i) {
        el.setAttribute("aria-hidden", i === index ? "false" : "true");
      });
      dots.forEach(function (dot, i) {
        dot.setAttribute("aria-current", i === index ? "true" : "false");
      });
    }

    function goTo(newIndex, isManual) {
      index = (newIndex + slides.length) % slides.length;
      render();
      if (isManual) restartTimer();
    }

    function next(isManual) {
      goTo(index + 1, isManual);
    }

    function prev(isManual) {
      goTo(index - 1, isManual);
    }

    function startTimer() {
      if (reduceMotion || slides.length < 2) return;
      timer = window.setInterval(function () {
        next(false);
      }, AUTO_ADVANCE_MS);
    }

    function stopTimer() {
      if (timer) {
        window.clearInterval(timer);
        timer = null;
      }
    }

    function restartTimer() {
      stopTimer();
      startTimer();
    }

    prevBtn.addEventListener("click", function () {
      prev(true);
    });
    nextBtn.addEventListener("click", function () {
      next(true);
    });

    // Pfeiltasten, wenn der Fokus im Slider liegt
    root.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") prev(true);
      if (e.key === "ArrowRight") next(true);
    });

    // Auto-Rotation pausieren, solange die Maus/der Fokus im Slider ist
    root.addEventListener("pointerenter", stopTimer);
    root.addEventListener("pointerleave", startTimer);
    root.addEventListener("focusin", stopTimer);
    root.addEventListener("focusout", startTimer);

    render();
    startTimer();
  }

  document.addEventListener("DOMContentLoaded", function () {
    var roots = document.querySelectorAll("[data-slider]");
    for (var i = 0; i < roots.length; i++) {
      initSlider(roots[i]);
    }
  });
})();
