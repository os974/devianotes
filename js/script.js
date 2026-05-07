(function () {
    "use strict";

    // ---------- Theme toggle ----------
    const root = document.documentElement;

    function getStoredTheme() {
        try {
            return localStorage.getItem("theme");
        } catch (e) {
            return null;
        }
    }

    function setStoredTheme(theme) {
        try {
            localStorage.setItem("theme", theme);
        } catch (e) {
            /* ignore quota / disabled storage */
        }
    }

    function applyTheme(theme) {
        root.setAttribute("data-theme", theme);
    }

    function toggleTheme() {
        const current = root.getAttribute("data-theme") === "light" ? "light" : "dark";
        const next = current === "light" ? "dark" : "light";
        applyTheme(next);
        setStoredTheme(next);
    }

    // Sync with system changes ONLY if the user hasn't picked one explicitly
    if (window.matchMedia) {
        const mq = window.matchMedia("(prefers-color-scheme: dark)");
        mq.addEventListener("change", (e) => {
            if (!getStoredTheme()) {
                applyTheme(e.matches ? "dark" : "light");
            }
        });
    }

    document.addEventListener("DOMContentLoaded", () => {
        // ---------- Theme button ----------
        const themeBtn = document.querySelector(".theme-toggle");
        if (themeBtn) {
            themeBtn.addEventListener("click", toggleTheme);
        }

        // ---------- Mobile burger ----------
        const navToggle = document.querySelector(".nav-toggle");
        const navLinks = document.querySelector(".nav-links");

        if (navToggle && navLinks) {
            navToggle.addEventListener("click", () => {
                const isOpen = navLinks.classList.toggle("open");
                navToggle.setAttribute("aria-expanded", String(isOpen));
            });
        }

        // ---------- Desktop dropdown ("Sujets") ----------
        const dropdowns = document.querySelectorAll(".has-dropdown");

        dropdowns.forEach((dd) => {
            const trigger = dd.querySelector(".nav-dropdown-trigger");
            if (!trigger) return;

            trigger.addEventListener("click", (e) => {
                e.stopPropagation();
                // Only toggle as a dropdown on wider screens. On mobile,
                // the panel is always shown inside the burger menu.
                if (window.innerWidth > 1024) {
                    const open = dd.classList.toggle("open");
                    trigger.setAttribute("aria-expanded", String(open));
                }
            });
        });

        // Close any open dropdown when clicking outside or pressing Escape
        document.addEventListener("click", (e) => {
            dropdowns.forEach((dd) => {
                if (!dd.contains(e.target) && dd.classList.contains("open")) {
                    dd.classList.remove("open");
                    const trigger = dd.querySelector(".nav-dropdown-trigger");
                    if (trigger) trigger.setAttribute("aria-expanded", "false");
                }
            });
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                dropdowns.forEach((dd) => {
                    dd.classList.remove("open");
                    const trigger = dd.querySelector(".nav-dropdown-trigger");
                    if (trigger) trigger.setAttribute("aria-expanded", "false");
                });
                if (navLinks && navLinks.classList.contains("open")) {
                    navLinks.classList.remove("open");
                    if (navToggle) navToggle.setAttribute("aria-expanded", "false");
                }
            }
        });

        // ---------- Copy-to-clipboard ----------
        document.querySelectorAll(".copy-btn").forEach((btn) => {
            btn.addEventListener("click", async () => {
                const block = btn.closest(".code-block");
                if (!block) return;
                const code = block.querySelector("code");
                if (!code) return;

                const text = code.innerText;

                const showCopied = () => {
                    const original = btn.textContent;
                    btn.textContent = "Copié !";
                    btn.classList.add("copied");
                    setTimeout(() => {
                        btn.textContent = original;
                        btn.classList.remove("copied");
                    }, 1800);
                };

                try {
                    if (navigator.clipboard && navigator.clipboard.writeText) {
                        await navigator.clipboard.writeText(text);
                        showCopied();
                        return;
                    }
                    // Fallback for non-HTTPS or older browsers
                    const ta = document.createElement("textarea");
                    ta.value = text;
                    ta.setAttribute("readonly", "");
                    ta.style.position = "fixed";
                    ta.style.opacity = "0";
                    document.body.appendChild(ta);
                    ta.select();
                    document.execCommand("copy");
                    document.body.removeChild(ta);
                    showCopied();
                } catch (err) {
                    btn.textContent = "Erreur";
                    setTimeout(() => (btn.textContent = "Copier"), 1500);
                }
            });
        });

        // ---------- Active link highlighting ----------
        const path = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
        document.querySelectorAll(".nav-links a, .dropdown-section a").forEach((a) => {
            const href = (a.getAttribute("href") || "").toLowerCase();
            if (href === path) {
                a.classList.add("active");
            }
        });
    });
})();
