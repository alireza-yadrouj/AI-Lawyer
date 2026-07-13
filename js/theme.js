const toggleBtn = document.getElementById("theme-toggle");

function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);

    if (theme === "dark") {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
}

// بارگذاری تم ذخیره‌شده
const savedTheme = localStorage.getItem("theme") || "light";
setTheme(savedTheme);

// تغییر تم با کلیک
toggleBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const nextTheme = document.documentElement.classList.contains("dark")
        ? "light"
        : "dark";

    setTheme(nextTheme);
});