const STYLE_ID = "substack-notes-hider-style";

function injectStyle() {
  if (document.getElementById(STYLE_ID)) return;
  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = `
    [aria-label="Notes feed"] { display: none !important; }
    [aria-label="Activity"] { display: none !important; }
    [class*="inlineComposer"] { display: none !important; }
    button[aria-label="New post"] { display: none !important; }
  `;
  document.head.appendChild(style);
}

injectStyle();

const observer = new MutationObserver(injectStyle);
observer.observe(document.documentElement, { childList: true, subtree: true });
