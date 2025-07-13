document.addEventListener("DOMContentLoaded", () => {
  console.log("Theme im localStorage:", localStorage.getItem("theme"));
  console.log(
    "data-bs-theme aktuell:",
    document.documentElement.getAttribute("data-bs-theme")
  );

  const toggleButton = document.getElementById("themeToggle");
  const html = document.documentElement;

  const updateButtonText = (theme) => {
    toggleButton.textContent =
      theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
  };
  // Initial set
  const currentTheme = localStorage.getItem("theme") || "light";
  html.setAttribute("data-bs-theme", currentTheme);

  updateButtonText(currentTheme);

  toggleButton.addEventListener("click", () => {
    const newTheme =
      html.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";
    html.setAttribute("data-bs-theme", newTheme);

    localStorage.setItem("theme", newTheme);
    updateButtonText(newTheme);
  });
});
