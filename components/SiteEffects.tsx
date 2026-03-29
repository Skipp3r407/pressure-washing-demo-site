"use client";

import { useEffect } from "react";
import { apexwashGoogle } from "@/lib/reviews-config";
import { matchChatAnswer } from "@/lib/chatbot";

export default function SiteEffects() {
  useEffect(() => {
    const header = document.getElementById("header");
    const nav = document.getElementById("site-nav");
    const navToggle = document.querySelector(".nav-toggle");
    const subToggle = document.querySelector(".site-nav__sub-toggle");
    const subMenu = document.querySelector(".site-nav__sub");
    const slides = document.querySelectorAll(".hero__slide");
    const dotsWrap = document.querySelector(".hero__dots");
    const yearEl = document.getElementById("year");
    const form = document.querySelector(".contact-form");

    if (yearEl) {
      yearEl.textContent = String(new Date().getFullYear());
    }

    (function applyApexwashGoogle() {
      const cfg = apexwashGoogle;
      const listing =
        cfg.listingUrl ||
        "https://www.google.com/maps/search/?api=1&query=ApexWash+Exterior+Services";
      let readUrl = cfg.reviewsUrl || listing;
      if (cfg.placeId) {
        readUrl =
          cfg.reviewsUrl ||
          "https://search.google.com/local/reviews?placeid=" +
            encodeURIComponent(cfg.placeId);
      }
      let writeUrl = listing;
      let writeTitle =
        "Opens your Google Maps listing—tap Write a review. Add your Place ID in reviews-config.js for a direct review link.";
      if (cfg.placeId) {
        writeUrl =
          "https://search.google.com/local/writereview?placeid=" +
          encodeURIComponent(cfg.placeId);
        writeTitle = "";
      }
      document.querySelectorAll('[data-apex-google="read"]').forEach((a) => {
        (a as HTMLAnchorElement).href = readUrl;
      });
      document.querySelectorAll('[data-apex-google="write"]').forEach((a) => {
        const el = a as HTMLAnchorElement;
        el.href = writeUrl;
        if (writeTitle) {
          el.setAttribute("title", writeTitle);
        } else {
          el.removeAttribute("title");
        }
      });
      const mapIframe = document.querySelector(
        ".reviews-embed__iframe",
      ) as HTMLIFrameElement | null;
      if (mapIframe && cfg.mapsEmbedSrc) {
        mapIframe.src = cfg.mapsEmbedSrc;
      }
    })();

    const splash = document.getElementById("page-splash");
    const splashFill = document.querySelector(".page-splash__bar-fill");
    const splashProgress = document.getElementById("splash-progress");

    if (splash) {
      if (sessionStorage.getItem("apexwash_splash_done")) {
        (splash as HTMLElement).style.display = "none";
        splash.setAttribute("aria-busy", "false");
      } else {
        document.body.classList.add("splash-active");
        const splashMs = Math.round(3000 + Math.random() * 2000);
        if (splashFill) {
          (splashFill as HTMLElement).style.animationDuration = splashMs + "ms";
        }
        const t0 = Date.now();
        function tickSplashProgress() {
          if (!splashProgress) return;
          const p = Math.min(100, Math.round(((Date.now() - t0) / splashMs) * 100));
          splashProgress.setAttribute("aria-valuenow", String(p));
          if (p < 100) {
            requestAnimationFrame(tickSplashProgress);
          }
        }
        requestAnimationFrame(tickSplashProgress);
        setTimeout(() => {
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
      const nt = navToggle as HTMLButtonElement;
      const n = nav;
      nt.addEventListener("click", () => {
        const open = n.classList.toggle("is-open");
        nt.setAttribute("aria-expanded", open ? "true" : "false");
        nt.setAttribute("aria-label", open ? "Close menu" : "Open menu");
        document.body.classList.toggle("nav-open", open);
      });

      n.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          if (window.matchMedia("(max-width: 768px)").matches) {
            n.classList.remove("is-open");
            nt.setAttribute("aria-expanded", "false");
            nt.setAttribute("aria-label", "Open menu");
            document.body.classList.remove("nav-open");
          }
        });
      });
    }

    if (subToggle && subMenu) {
      const st = subToggle as HTMLButtonElement;
      const sm = subMenu as HTMLElement;
      const subParent = st.closest(".has-sub");

      st.addEventListener("click", (e) => {
        if (window.matchMedia("(max-width: 768px)").matches) {
          e.preventDefault();
          const open = sm.classList.toggle("is-open");
          st.setAttribute("aria-expanded", open ? "true" : "false");
        }
      });

      if (subParent) {
        subParent.addEventListener("mouseenter", () => {
          if (window.matchMedia("(min-width: 769px)").matches) {
            sm.classList.add("is-open");
            st.setAttribute("aria-expanded", "true");
          }
        });
        subParent.addEventListener("mouseleave", () => {
          if (window.matchMedia("(min-width: 769px)").matches) {
            sm.classList.remove("is-open");
            st.setAttribute("aria-expanded", "false");
          }
        });
      }
    }

    let index = 0;
    let timer: ReturnType<typeof setInterval>;

    function showSlide(i: number) {
      index = (i + slides.length) % slides.length;
      slides.forEach((s, j) => {
        s.classList.toggle("is-active", j === index);
      });
      if (dotsWrap) {
        const dots = dotsWrap.querySelectorAll(".hero__dot");
        dots.forEach((d, j) => {
          d.classList.toggle("is-active", j === index);
        });
      }
    }

    function nextSlide() {
      showSlide(index + 1);
    }

    if (slides.length && dotsWrap) {
      slides.forEach((_, i) => {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "hero__dot" + (i === 0 ? " is-active" : "");
        b.setAttribute("aria-label", "Show slide " + (i + 1));
        b.addEventListener("click", () => {
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

    let onVis: (() => void) | undefined = undefined;
    if (slides.length > 1) {
      showSlide(0);
      resetTimer();
      onVis = () => {
        if (document.hidden) {
          clearInterval(timer);
        } else {
          resetTimer();
        }
      };
      document.addEventListener("visibilitychange", onVis);
    }

    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("This is a template — connect the form to your email or CRM.");
      });
    }

    function initBASlider(root: HTMLElement | null) {
      if (!root) return;
      const clip = root.querySelector("[data-ba-clip]");
      const handle = root.querySelector("[data-ba-handle]");
      const vp = root.querySelector(".ba-slider__viewport");
      if (!clip || !handle || !vp) return;

      const clipEl = clip as HTMLElement;
      const handleEl = handle as HTMLElement;
      const vpEl = vp as HTMLElement;

      function setPct(pct: number) {
        pct = Math.max(2, Math.min(98, pct));
        clipEl.style.width = pct + "%";
        handleEl.style.left = pct + "%";
      }

      function clientToPct(clientX: number) {
        const r = vpEl.getBoundingClientRect();
        return ((clientX - r.left) / r.width) * 100;
      }

      let dragging = false;

      function onMove(clientX: number) {
        if (!dragging) return;
        setPct(clientToPct(clientX));
      }

      handleEl.addEventListener("pointerdown", (e) => {
        dragging = true;
        handleEl.setPointerCapture(e.pointerId);
        e.preventDefault();
      });
      handleEl.addEventListener("pointerup", () => {
        dragging = false;
      });
      handleEl.addEventListener("pointercancel", () => {
        dragging = false;
      });
      handleEl.addEventListener("pointermove", (e) => {
        onMove(e.clientX);
      });

      vpEl.addEventListener("pointerdown", (e) => {
        if (e.target === handleEl || handleEl.contains(e.target as Node)) return;
        setPct(clientToPct(e.clientX));
      });
    }

    initBASlider(document.getElementById("ba-slider"));

    const reviewsRoot = document.querySelector("[data-reviews-carousel]");
    if (reviewsRoot) {
      const track = reviewsRoot.querySelector("[data-reviews-track]");
      const prevBtn = reviewsRoot.querySelector("[data-reviews-prev]");
      const nextBtn = reviewsRoot.querySelector("[data-reviews-next]");

      function scrollReviews(dir: number) {
        if (!track) return;
        const card = track.querySelector(".review-card");
        const gap = 16;
        const step = card ? (card as HTMLElement).offsetWidth + gap : 296;
        track.scrollBy({ left: dir * step, behavior: "smooth" });
      }

      if (prevBtn)
        prevBtn.addEventListener("click", () => {
          scrollReviews(-1);
        });
      if (nextBtn)
        nextBtn.addEventListener("click", () => {
          scrollReviews(1);
        });
    }

    const quoteModal = document.getElementById("quote-modal");
    const quoteForm = document.getElementById("quote-form") as HTMLFormElement | null;
    const quoteResult = document.getElementById("quote-result");
    const quoteRange = document.getElementById("quote-range");

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

    document.querySelectorAll("[data-open-quote]").forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        openQuoteModal();
      });
    });

    const openNavQuote = document.getElementById("open-quote-nav");
    if (openNavQuote) {
      openNavQuote.addEventListener("click", (e) => {
        e.preventDefault();
        openQuoteModal();
      });
    }

    document.querySelectorAll("[data-close-quote]").forEach((el) => {
      el.addEventListener("click", () => {
        closeQuoteModal();
      });
    });

    if (quoteForm && quoteRange && quoteResult) {
      quoteForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const fd = new FormData(quoteForm);
        const service = fd.get("service") as string;
        const sqftTier = fd.get("sqft") as string;
        const stories = (fd.get("stories") as string) || "1";
        const soil = (fd.get("soil") as string) || "2";

        const bases: Record<string, number> = {
          house: 289,
          driveway: 179,
          deck: 159,
          roof: 409,
          commercial: 479,
          bundle: 399,
        };
        const sqftM: Record<string, number> = { "1": 1, "2": 1.12, "3": 1.32, "4": 1.58, "5": 1.92 };
        const storiesM: Record<string, number> = { "1": 1, "2": 1.2, "3": 1.38 };
        const soilM: Record<string, number> = { "1": 0.9, "2": 1, "3": 1.16 };

        if (!service || !sqftTier) return;

        let mid = bases[service] * (sqftM[sqftTier] || 1);
        if (service === "house" || service === "bundle") {
          mid *= storiesM[stories] || 1;
        }
        mid *= soilM[soil] || 1;

        const low = Math.round(mid * 0.84);
        const high = Math.round(mid * 1.15);
        quoteRange.textContent = "$" + low.toLocaleString() + " – $" + high.toLocaleString();
        quoteForm.hidden = true;
        quoteResult.hidden = false;
      });
    }

    const chatLauncher = document.getElementById("chat-launcher");
    const chatPanel = document.getElementById("chat-panel");
    const chatClose = document.getElementById("chat-close");
    const chatMessages = document.getElementById("chat-messages");
    const chatForm = document.getElementById("chat-form");
    const chatInput = document.getElementById("chat-input") as HTMLInputElement | null;

    function appendChatBubble(text: string, who: string) {
      if (!chatMessages) return;
      const div = document.createElement("div");
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
          "bot",
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
      chatLauncher.addEventListener("click", () => {
        if (chatPanel?.hidden) openChat();
        else closeChat();
      });
    }
    if (chatClose) chatClose.addEventListener("click", closeChat);

    document.querySelectorAll("[data-chat-suggest]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const q = btn.getAttribute("data-chat-suggest") || "";
        if (chatInput) chatInput.value = q;
        if (chatForm) chatForm.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }));
      });
    });

    if (chatForm) {
      chatForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if (!chatInput) return;
        const q = chatInput.value.trim();
        if (!q) return;
        appendChatBubble(q, "user");
        chatInput.value = "";
        setTimeout(() => {
          appendChatBubble(matchChatAnswer(q), "bot");
        }, 280);
      });
    }

    function onKeydown(e: KeyboardEvent) {
      if (e.key !== "Escape") return;
      closeQuoteModal();
      closeChat();
    }
    document.addEventListener("keydown", onKeydown);

    let revealObs: IntersectionObserver | null = null;
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const revealEls = document.querySelectorAll("[data-reveal]");
      if (revealEls.length) {
        document.documentElement.classList.add("js-reveal-ready");
        const revealGroupSel =
          ".hero__content, .card-row, .mini-grid, .blog-row, .cta-band, .split, .reviews-layout, .reviews-google-actions, .gallery-tease, .contact-grid, .footer-grid";
        revealObs = new IntersectionObserver(
          (entries) => {
            entries.forEach((en) => {
              if (!en.isIntersecting) return;
              const el = en.target as HTMLElement;
              revealObs!.unobserve(el);
              const group = el.closest(revealGroupSel);
              const peers = group
                ? Array.prototype.slice.call(group.querySelectorAll("[data-reveal]"))
                : [el];
              const idx = peers.indexOf(el);
              let i = idx < 0 ? 0 : idx;
              const delay = Math.min(i, 15) * 70;
              setTimeout(() => {
                el.classList.add("is-revealed");
              }, delay);
            });
          },
          { rootMargin: "0px 0px -7% 0px", threshold: 0.06 },
        );
        revealEls.forEach((el) => {
          revealObs!.observe(el);
        });
      }
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("keydown", onKeydown);
      if (onVis) document.removeEventListener("visibilitychange", onVis);
      clearInterval(timer);
      if (revealObs) revealObs.disconnect();
    };
  }, []);

  return null;
}
