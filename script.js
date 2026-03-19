async function loadTheme() {
  const res = await fetch("./theme.css");
  const text = await res.text();
  document.getElementById("theme-output").textContent = text;

  document.getElementById("copy-theme").addEventListener("click", async () => {
    await navigator.clipboard.writeText(text);
    document.getElementById("copy-theme").textContent = "Copied";
    setTimeout(() => {
      document.getElementById("copy-theme").textContent = "Copy theme.css";
    }, 1200);
  });
}

document.getElementById("toggle-mode").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

loadTheme();
