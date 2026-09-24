
document.querySelectorAll(".currentYear").forEach(el => el.textContent = new Date().getFullYear());
function toggleMenu(){ document.getElementById("mainNav")?.classList.toggle("open"); }


function sizeNewsPanelToFourItems() {
  const panel = document.querySelector(".news-scroll");
  if (!panel) return;

  const items = [...panel.querySelectorAll(".news-item")];
  if (items.length <= 4) {
    panel.style.height = "auto";
    panel.style.maxHeight = "none";
    return;
  }

  requestAnimationFrame(() => {
    const firstFour = items.slice(0, 4);
    const panelStyles = getComputedStyle(panel);
    const paddingTop = parseFloat(panelStyles.paddingTop) || 0;
    const paddingBottom = parseFloat(panelStyles.paddingBottom) || 0;

    let visibleHeight = paddingTop + paddingBottom;
    firstFour.forEach(item => {
      const rect = item.getBoundingClientRect();
      const styles = getComputedStyle(item);
      const marginTop = parseFloat(styles.marginTop) || 0;
      const marginBottom = parseFloat(styles.marginBottom) || 0;
      visibleHeight += rect.height + marginTop + marginBottom;
    });

    panel.style.height = `${Math.ceil(visibleHeight)}px`;
    panel.style.maxHeight = `${Math.ceil(visibleHeight)}px`;
    panel.style.overflowY = "auto";
  });
}

window.addEventListener("load", sizeNewsPanelToFourItems);
window.addEventListener("resize", sizeNewsPanelToFourItems);



/* Light / dark theme */
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const button = document.getElementById("themeToggle");
  if (button) {
    const dark = theme === "dark";
    button.classList.toggle("is-dark", dark);
    button.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
    button.setAttribute("title", dark ? "Switch to light mode" : "Switch to dark mode");
  }
}

function initThemeControl() {
  const saved = localStorage.getItem("site-theme");
  const systemDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initial = saved === "light" || saved === "dark" ? saved : (systemDark ? "dark" : "light");

  applyTheme(initial);

  const button = document.getElementById("themeToggle");
  if (!button) return;

  button.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") || "light";
    const next = current === "dark" ? "light" : "dark";
    localStorage.setItem("site-theme", next);
    applyTheme(next);
  });
}

document.addEventListener("DOMContentLoaded", initThemeControl);
