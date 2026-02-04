const toggleBtn = document.getElementById("toggleTheme");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  toggleBtn.textContent = body.classList.contains("dark")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
});
