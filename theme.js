const toggleButton = document.getElementById("theme-toggle");

if (toggleButton) {
  const toggleIcon = toggleButton.querySelector("i");
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    toggleIcon.classList.remove("fa-moon");
    toggleIcon.classList.add("fa-sun");
  }

  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");

    if (isDark) {
      localStorage.setItem("theme", "dark");
      toggleIcon.classList.remove("fa-moon");
      toggleIcon.classList.add("fa-sun");
    } else {
      localStorage.setItem("theme", "light");
      toggleIcon.classList.remove("fa-sun");
      toggleIcon.classList.add("fa-moon");
    }
  });
}