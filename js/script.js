(function () {
  "use strict";

  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  const navLinks = document.querySelectorAll(".nav__link");
  const progressBar = document.getElementById("progresso-leitura");
  const backToTop = document.getElementById("voltar-topo");
  const revealElements = document.querySelectorAll(".reveal");
  const tabButtons = document.querySelectorAll(".tabs__btn");
  const tabPanels = document.querySelectorAll(".tabs__panel");
  const checklistItems = document.querySelectorAll("#checklist-items input[type='checkbox']");
  const checklistBar = document.getElementById("checklist-bar");
  const checklistStatus = document.getElementById("checklist-status");
  const resetChecklistBtn = document.getElementById("reset-checklist");

  const CHECKLIST_KEY = "guia-primeiro-emprego-checklist";

  function toggleMenu(forceClose) {
    const isOpen = forceClose ? false : !nav.classList.contains("is-open");
    nav.classList.toggle("is-open", isOpen);
    menuToggle.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  }

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", function () {
      toggleMenu();
    });

    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        toggleMenu(true);
      });
    });
  }

  function updateReadingProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    if (progressBar) {
      progressBar.style.width = progress + "%";
    }

    if (backToTop) {
      backToTop.classList.toggle("is-visible", scrollTop > 400);
    }
  }

  function updateActiveNav() {
    const sections = document.querySelectorAll("main section[id]");
    let currentId = "";

    sections.forEach(function (section) {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) {
        currentId = section.id;
      }
    });

    navLinks.forEach(function (link) {
      const href = link.getAttribute("href");
      link.classList.toggle("is-active", href === "#" + currentId);
    });
  }

  window.addEventListener("scroll", function () {
    updateReadingProgress();
    updateActiveNav();
  });

  if (backToTop) {
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealElements.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  tabButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const target = button.getAttribute("data-tab");

      tabButtons.forEach(function (btn) {
        const isActive = btn === button;
        btn.classList.toggle("is-active", isActive);
        btn.setAttribute("aria-selected", String(isActive));
      });

      tabPanels.forEach(function (panel) {
        const isMatch = panel.getAttribute("data-panel") === target;
        panel.classList.toggle("is-active", isMatch);
        panel.hidden = !isMatch;
      });
    });
  });

  function loadChecklistState() {
    try {
      return JSON.parse(localStorage.getItem(CHECKLIST_KEY)) || {};
    } catch (error) {
      return {};
    }
  }

  function saveChecklistState(state) {
    localStorage.setItem(CHECKLIST_KEY, JSON.stringify(state));
  }

  function updateChecklistUI() {
    const total = checklistItems.length;
    let done = 0;

    checklistItems.forEach(function (item) {
      const label = item.closest("label");
      if (item.checked) {
        done += 1;
        label.classList.add("is-done");
      } else {
        label.classList.remove("is-done");
      }
    });

    const percent = total > 0 ? (done / total) * 100 : 0;

    if (checklistBar) {
      checklistBar.style.width = percent + "%";
    }

    if (checklistStatus) {
      checklistStatus.textContent = done + " de " + total + " concluídos";
    }
  }

  if (checklistItems.length) {
    const savedState = loadChecklistState();

    checklistItems.forEach(function (item) {
      const id = item.getAttribute("data-check");
      item.checked = Boolean(savedState[id]);

      item.addEventListener("change", function () {
        const state = loadChecklistState();
        state[id] = item.checked;
        saveChecklistState(state);
        updateChecklistUI();
      });
    });

    updateChecklistUI();
  }

  if (resetChecklistBtn) {
    resetChecklistBtn.addEventListener("click", function () {
      localStorage.removeItem(CHECKLIST_KEY);
      checklistItems.forEach(function (item) {
        item.checked = false;
      });
      updateChecklistUI();
    });
  }

  updateReadingProgress();
  updateActiveNav();
})();
