document.addEventListener("DOMContentLoaded", async () => {
  const includeElements = document.querySelectorAll("[data-include]");

  for (const el of includeElements) {
    const file = el.getAttribute("data-include");
    try {
      const res = await fetch(file);
      if (!res.ok) throw new Error(`Fehler beim Laden von ${file}`);
      el.innerHTML = await res.text();
    } catch (e) {
      el.innerHTML = `<div style="color:red;">Include fehlgeschlagen: ${file}</div>`;
    }
  }
});
