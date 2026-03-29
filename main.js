(function () {
  "use strict";

  var header = document.getElementById("header");
  var nav = document.getElementById("site-nav");
  var navToggle = document.querySelector(".nav-toggle");
  var subToggle = document.querySelector(".site-nav__sub-toggle");
  var subMenu = document.querySelector(".site-nav__sub");
  var slides = document.querySelectorAll(".hero__slide");
  var dotsWrap = document.querySelector(".hero__dots");
  var yearEl = document.getElementById("year");
  var form = document.querySelector(".contact-form");

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  /* ----- Google Business: map embed + review links from reviews-config.js ----- */
  (function applyApexwashGoogle() {
    var cfg = window.APEXWASH_GOOGLE;
    if (!cfg) return;
    var listing =
      cfg.listingUrl ||
      "https://www.google.com/maps/search/?api=1&query=ApexWash+Exterior+Services";
    var readUrl = cfg.reviewsUrl || listing;
    if (cfg.placeId) {
      readUrl =
        cfg.reviewsUrl ||
        "https://search.google.com/local/reviews?placeid=" + encodeURIComponent(cfg.placeId);
    }
    var writeUrl = listing;
    var writeTitle =
      "Opens your Google Maps listing—tap Write a review. Add your Place ID in reviews-config.js for a direct review link.";
    if (cfg.placeId) {
      writeUrl =
        "https://search.google.com/local/writereview?placeid=" +
        encodeURIComponent(cfg.placeId);
      writeTitle = "";
    }
    document.querySelectorAll('[data-apex-google="read"]').forEach(function (a) {
      a.href = readUrl;
    });
    document.querySelectorAll('[data-apex-google="write"]').forEach(function (a) {
      a.href = writeUrl;
      if (writeTitle) {
        a.setAttribute("title", writeTitle);
      } else {
        a.removeAttribute("title");
      }
    });
    var mapIframe = document.querySelector(".reviews-embed__iframe");
    if (mapIframe && cfg.mapsEmbedSrc) {
      mapIframe.src = cfg.mapsEmbedSrc;
    }
  })();

  /* ----- Loading splash 3–5s ----- */
  var splash = document.getElementById("page-splash");
  var splashFill = document.querySelector(".page-splash__bar-fill");
  var splashProgress = document.getElementById("splash-progress");

  if (splash) {
    if (sessionStorage.getItem("apexwash_splash_done")) {
      splash.style.display = "none";
      splash.setAttribute("aria-busy", "false");
    } else {
      document.body.classList.add("splash-active");
      var splashMs = Math.round(3000 + Math.random() * 2000);
      if (splashFill) {
        splashFill.style.animationDuration = splashMs + "ms";
      }
      var t0 = Date.now();
      function tickSplashProgress() {
        if (!splashProgress) return;
        var p = Math.min(100, Math.round(((Date.now() - t0) / splashMs) * 100));
        splashProgress.setAttribute("aria-valuenow", String(p));
        if (p < 100) {
          requestAnimationFrame(tickSplashProgress);
        }
      }
      requestAnimationFrame(tickSplashProgress);
      setTimeout(function () {
        splash.classList.add("is-done");
        document.body.classList.remove("splash-active");
        sessionStorage.setItem("apexwash_splash_done", "1");
        splash.setAttribute("aria-busy", "false");
        if (splashProgress) splashProgress.setAttribute("aria-valuenow", "100");
      }, splashMs + 520);
    }
  }

  function onScroll() {
    if (!header) return;
    if (window.scrollY > 24) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
      navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      document.body.classList.toggle("nav-open", open);
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        if (window.matchMedia("(max-width: 768px)").matches) {
          nav.classList.remove("is-open");
          navToggle.setAttribute("aria-expanded", "false");
          navToggle.setAttribute("aria-label", "Open menu");
          document.body.classList.remove("nav-open");
        }
      });
    });
  }

  if (subToggle && subMenu) {
    var subParent = subToggle.closest(".has-sub");

    subToggle.addEventListener("click", function (e) {
      if (window.matchMedia("(max-width: 768px)").matches) {
        e.preventDefault();
        var open = subMenu.classList.toggle("is-open");
        subToggle.setAttribute("aria-expanded", open ? "true" : "false");
      }
    });

    if (subParent) {
      subParent.addEventListener("mouseenter", function () {
        if (window.matchMedia("(min-width: 769px)").matches) {
          subMenu.classList.add("is-open");
          subToggle.setAttribute("aria-expanded", "true");
        }
      });
      subParent.addEventListener("mouseleave", function () {
        if (window.matchMedia("(min-width: 769px)").matches) {
          subMenu.classList.remove("is-open");
          subToggle.setAttribute("aria-expanded", "false");
        }
      });
    }
  }

  var index = 0;
  var timer;

  function showSlide(i) {
    index = (i + slides.length) % slides.length;
    slides.forEach(function (s, j) {
      s.classList.toggle("is-active", j === index);
    });
    if (dotsWrap) {
      var dots = dotsWrap.querySelectorAll(".hero__dot");
      dots.forEach(function (d, j) {
        d.classList.toggle("is-active", j === index);
      });
    }
  }

  function nextSlide() {
    showSlide(index + 1);
  }

  if (slides.length && dotsWrap) {
    slides.forEach(function (_, i) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "hero__dot" + (i === 0 ? " is-active" : "");
      b.setAttribute("aria-label", "Show slide " + (i + 1));
      b.addEventListener("click", function () {
        showSlide(i);
        resetTimer();
      });
      dotsWrap.appendChild(b);
    });
  }

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(nextSlide, 5500);
  }

  if (slides.length > 1) {
    showSlide(0);
    resetTimer();
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) {
        clearInterval(timer);
      } else {
        resetTimer();
      }
    });
  }

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("This is a template — connect the form to your email or CRM.");
    });
  }

  /* ----- Before / after slider ----- */
  function initBASlider(root) {
    if (!root) return;
    var clip = root.querySelector("[data-ba-clip]");
    var handle = root.querySelector("[data-ba-handle]");
    var vp = root.querySelector(".ba-slider__viewport");
    if (!clip || !handle || !vp) return;

    function setPct(pct) {
      pct = Math.max(2, Math.min(98, pct));
      clip.style.width = pct + "%";
      handle.style.left = pct + "%";
    }

    function clientToPct(clientX) {
      var r = vp.getBoundingClientRect();
      return ((clientX - r.left) / r.width) * 100;
    }

    var dragging = false;

    function onMove(clientX) {
      if (!dragging) return;
      setPct(clientToPct(clientX));
    }

    handle.addEventListener("pointerdown", function (e) {
      dragging = true;
      handle.setPointerCapture(e.pointerId);
      e.preventDefault();
    });
    handle.addEventListener("pointerup", function () {
      dragging = false;
    });
    handle.addEventListener("pointercancel", function () {
      dragging = false;
    });
    handle.addEventListener("pointermove", function (e) {
      onMove(e.clientX);
    });

    vp.addEventListener("pointerdown", function (e) {
      if (e.target === handle || handle.contains(e.target)) return;
      setPct(clientToPct(e.clientX));
    });
  }

  initBASlider(document.getElementById("ba-slider"));

  /* ----- Reviews carousel ----- */
  var reviewsRoot = document.querySelector("[data-reviews-carousel]");
  if (reviewsRoot) {
    var track = reviewsRoot.querySelector("[data-reviews-track]");
    var prevBtn = reviewsRoot.querySelector("[data-reviews-prev]");
    var nextBtn = reviewsRoot.querySelector("[data-reviews-next]");

    function scrollReviews(dir) {
      if (!track) return;
      var card = track.querySelector(".review-card");
      var gap = 16;
      var step = card ? card.offsetWidth + gap : 296;
      track.scrollBy({ left: dir * step, behavior: "smooth" });
    }

    if (prevBtn) prevBtn.addEventListener("click", function () { scrollReviews(-1); });
    if (nextBtn) nextBtn.addEventListener("click", function () { scrollReviews(1); });
  }

  /* ----- Instant quote modal ----- */
  var quoteModal = document.getElementById("quote-modal");
  var quoteForm = document.getElementById("quote-form");
  var quoteResult = document.getElementById("quote-result");
  var quoteRange = document.getElementById("quote-range");

  function openQuoteModal() {
    if (!quoteModal) return;
    quoteModal.hidden = false;
    document.body.classList.add("modal-open");
    if (nav && nav.classList.contains("is-open")) {
      nav.classList.remove("is-open");
      if (navToggle) {
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Open menu");
      }
      document.body.classList.remove("nav-open");
    }
    if (quoteForm) {
      quoteForm.hidden = false;
      quoteForm.reset();
    }
    if (quoteResult) quoteResult.hidden = true;
  }

  function closeQuoteModal() {
    if (!quoteModal) return;
    quoteModal.hidden = true;
    document.body.classList.remove("modal-open");
  }

  document.querySelectorAll("[data-open-quote]").forEach(function (el) {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      openQuoteModal();
    });
  });

  var openNavQuote = document.getElementById("open-quote-nav");
  if (openNavQuote) {
    openNavQuote.addEventListener("click", function (e) {
      e.preventDefault();
      openQuoteModal();
    });
  }

  document.querySelectorAll("[data-close-quote]").forEach(function (el) {
    el.addEventListener("click", function () {
      closeQuoteModal();
    });
  });

  if (quoteForm && quoteRange && quoteResult) {
    quoteForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var fd = new FormData(quoteForm);
      var service = fd.get("service");
      var sqftTier = fd.get("sqft");
      var stories = fd.get("stories") || "1";
      var soil = fd.get("soil") || "2";

      var bases = {
        house: 289,
        driveway: 179,
        deck: 159,
        roof: 409,
        commercial: 479,
        bundle: 399,
      };
      var sqftM = { "1": 1, "2": 1.12, "3": 1.32, "4": 1.58, "5": 1.92 };
      var storiesM = { "1": 1, "2": 1.2, "3": 1.38 };
      var soilM = { "1": 0.9, "2": 1, "3": 1.16 };

      if (!service || !sqftTier) return;

      var mid = bases[service] * (sqftM[sqftTier] || 1);
      if (service === "house" || service === "bundle") {
        mid *= storiesM[stories] || 1;
      }
      mid *= soilM[soil] || 1;

      var low = Math.round(mid * 0.84);
      var high = Math.round(mid * 1.15);
      quoteRange.textContent =
        "$" + low.toLocaleString() + " – $" + high.toLocaleString();
      quoteForm.hidden = true;
      quoteResult.hidden = false;
    });
  }

  /* ----- Chatbot ----- */
  function matchChatAnswer(msg) {
    var m = msg.toLowerCase().replace(/[^a-z0-9\s]/g, " ");
    var best = null;
    var bestScore = 0;
    var kb = window.APEXWASH_CHATBOT_QA || [];
    kb.forEach(function (entry) {
      entry.t.forEach(function (t) {
        if (!t) return;
        if (m.indexOf(t) !== -1 && t.length > bestScore) {
          bestScore = t.length;
          best = entry.a;
        }
      });
    });
    return (
      best ||
      "I am not sure—try words like pricing, soft wash, driveway, roof, insurance, or call (555) 555-1234 to speak with our team."
    );
  }

  var chatLauncher = document.getElementById("chat-launcher");
  var chatPanel = document.getElementById("chat-panel");
  var chatClose = document.getElementById("chat-close");
  var chatMessages = document.getElementById("chat-messages");
  var chatForm = document.getElementById("chat-form");
  var chatInput = document.getElementById("chat-input");

  function appendChatBubble(text, who) {
    if (!chatMessages) return;
    var div = document.createElement("div");
    div.className = "chat-bubble chat-bubble--" + who;
    div.textContent = text;
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function openChat() {
    if (!chatPanel || !chatLauncher) return;
    chatPanel.hidden = false;
    chatLauncher.setAttribute("aria-expanded", "true");
    if (chatMessages && !chatMessages.dataset.seeded) {
      appendChatBubble(
        "Hi! I am the ApexWash assistant. Ask about services, soft wash, pricing, or scheduling. Office hours: Mon–Fri 7–6, Sat 8–4 (Sun closed)—or use the chips below.",
        "bot"
      );
      chatMessages.dataset.seeded = "1";
    }
    if (chatInput) chatInput.focus();
  }

  function closeChat() {
    if (!chatPanel || !chatLauncher) return;
    chatPanel.hidden = true;
    chatLauncher.setAttribute("aria-expanded", "false");
  }

  if (chatLauncher) {
    chatLauncher.addEventListener("click", function () {
      if (chatPanel.hidden) openChat();
      else closeChat();
    });
  }
  if (chatClose) chatClose.addEventListener("click", closeChat);

  document.querySelectorAll("[data-chat-suggest]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var q = btn.getAttribute("data-chat-suggest") || "";
      if (chatInput) chatInput.value = q;
      if (chatForm) chatForm.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }));
    });
  });

  if (chatForm) {
    chatForm.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!chatInput) return;
      var q = chatInput.value.trim();
      if (!q) return;
      appendChatBubble(q, "user");
      chatInput.value = "";
      setTimeout(function () {
        appendChatBubble(matchChatAnswer(q), "bot");
      }, 280);
    });
  }

  /* ----- Global ESC ----- */
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    closeQuoteModal();
    closeChat();
  });

  /* ----- Scroll: fade / slide-in (respects reduced motion) ----- */
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var revealEls = document.querySelectorAll("[data-reveal]");
    if (revealEls.length) {
      document.documentElement.classList.add("js-reveal-ready");
      var revealGroupSel =
        ".hero__content, .card-row, .mini-grid, .blog-row, .cta-band, .split, .reviews-layout, .reviews-google-actions, .gallery-tease, .contact-grid, .footer-grid";
      var revealObs = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (en) {
            if (!en.isIntersecting) return;
            var el = en.target;
            revealObs.unobserve(el);
            var group = el.closest(revealGroupSel);
            var peers = group
              ? Array.prototype.slice.call(group.querySelectorAll("[data-reveal]"))
              : [el];
            var idx = peers.indexOf(el);
            if (idx < 0) idx = 0;
            var delay = Math.min(idx, 15) * 70;
            setTimeout(function () {
              el.classList.add("is-revealed");
            }, delay);
          });
        },
        { rootMargin: "0px 0px -7% 0px", threshold: 0.06 }
      );
      revealEls.forEach(function (el) {
        revealObs.observe(el);
      });
    }
  }
})();
