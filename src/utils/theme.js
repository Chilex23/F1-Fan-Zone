// On page load or when changing themes, best to add inline in `head` to avoid FOUC
const html = document.querySelector('html');

export const setTheme = () => {
    if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
    html.classList.add("dark");
    } else {
    html.classList.remove("dark");
    }
}

// Whenever the user explicitly chooses light mode
localStorage.theme = "light";

// Whenever the user explicitly chooses dark mode
localStorage.theme = "dark";

// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem("theme");

export const toggleTheme = () => {
    if (html.classList.contains("dark")) {
        html.classList.remove("dark");
        localStorage.theme = "light";
    } else {
        html.classList.add("dark");
        localStorage.theme = "dark";
    }
}
