const toggleSwitch = document.querySelector('input[type="checkbox"');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const img1 = document.getElementById("image1");
const img2 = document.getElementById("image2");
const img3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

function toggleImageTheme(theme) {
  img1.src = `/img/undraw_proud_coder_${theme}.svg`;
  img2.src = `/img/undraw_feeling_proud_${theme}.svg`;
  img3.src = `/img/undraw_conceptual_idea_${theme}.svg`;
}

function enableDarkMode() {
  toggleSwitch.checked = true;
  localStorage.setItem("theme", "dark");
  document.documentElement.setAttribute("data-theme", "dark");
  nav.style.backgroundColor = "rgb(0 0 0 / 50%)";
  textBox.style.backgroundColor = "rgb(255 255 255 / 50%)";
  const [text, icon] = toggleIcon.children;
  text.textContent = "Dark Mode";
  icon.classList.replace("fa-sun", "fa-moon");
  toggleImageTheme("dark");
}

function enableLightMode() {
  toggleSwitch.checked = false;
  localStorage.setItem("theme", "light");
  document.documentElement.setAttribute("data-theme", "light");
  nav.style.backgroundColor = "rgb(255 255 255 / 50%)";
  textBox.style.backgroundColor = "rgb(0 0 0 / 50%)";
  const [text, icon] = toggleIcon.children;
  text.textContent = "Light Mode";
  icon.classList.replace("fa-moon", "fa-sun");
  toggleImageTheme("light");
}

toggleSwitch.addEventListener("change", function (e) {
  const darkMode = e.target.checked;
  darkMode ? enableDarkMode() : enableLightMode();
});

window.onload = function () {
  const currentTheme = localStorage.getItem("theme") || "light"; // default to light
  currentTheme === "light" ? enableLightMode() : enableDarkMode();
};
