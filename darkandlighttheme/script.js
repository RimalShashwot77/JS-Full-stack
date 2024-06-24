<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", () => {
    const themeToggleButton = document.querySelector(".theme-toggle");
    const body = document.body;

    // Check for saved user preference, if any, on load of the website
    const savedTheme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    body.setAttribute("data-theme", savedTheme);

    // Update the button text based on the current theme
    updateToggleButton(savedTheme);

    // Theme toggle button event listener
    themeToggleButton.addEventListener("click", () => {
        let currentTheme = body.getAttribute("data-theme");
        let newTheme = currentTheme === "light" ? "dark" : "light";
        body.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        updateToggleButton(newTheme);
    });

    function updateToggleButton(theme) {
        themeToggleButton.textContent = theme === "light" ? "🌙" : "☀️";
    }
=======
document.addEventListener("DOMContentLoaded", () => {
    const themeToggleButton = document.querySelector(".theme-toggle");
    const body = document.body;

    // Check for saved user preference, if any, on load of the website
    const savedTheme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    body.setAttribute("data-theme", savedTheme);

    // Update the button text based on the current theme
    updateToggleButton(savedTheme);

    // Theme toggle button event listener
    themeToggleButton.addEventListener("click", () => {
        let currentTheme = body.getAttribute("data-theme");
        let newTheme = currentTheme === "light" ? "dark" : "light";
        body.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        updateToggleButton(newTheme);
    });

    function updateToggleButton(theme) {
        themeToggleButton.textContent = theme === "light" ? "🌙" : "☀️";
    }
>>>>>>> 1e8c9a737fe1c3e13c78351b186e357290bbb0cc
});