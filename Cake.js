// Grab the elemrnts we need

const root = document.documentElement;
const toggleBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

// The function that does the heavy lifting

function setTheme(theme) {
  if (theme === "light") {
    root.style.setProperty("--bg-color", "#ECF2FF");
    root.style.setProperty("--text-color", "#2B283A");
    root.style.setProperty("--title-color", "#4A4E74");
    themeIcon.textContent = "🌙"; // Show moon when in light mode (to switch to dark)
  } else if (theme === "dark") {
    root.style.setProperty("--bg-color", "#2B283A");
    root.style.setProperty("--text-color", "#ECF2FF");
    root.style.setProperty("--title-color", "#D5D4D8");
    themeIcon.textContent = "☀️"; // Show sun when in dark mode (to switch to light)
  }
}

// Initial load: Check if the user has a saved prefence
// If nothing is saved default to 'light'

let currentTheme = localStorage.getItem("user-theme") || "light";

// Apply the theme immediately on page load

setTheme(currentTheme);

// The interaction: Toggle theme when button is clicked

toggleBtn.addEventListener("click", () => {
  // Switch the value
  currentTheme = currentTheme === "light" ? "dark" : "light";

  // Update the UI

  setTheme(currentTheme);

  // Save it to the "browser's notepad"

  localStorage.setItem("user-theme", currentTheme);
});
