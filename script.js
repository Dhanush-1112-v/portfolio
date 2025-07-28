const buttons = document.querySelectorAll(".top-nav button");
const tabs = document.querySelectorAll(".tab-content");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-tab");

    // Remove active from all
    buttons.forEach(b => b.classList.remove("active"));
    tabs.forEach(t => t.classList.remove("active"));

    // Add active to current
    btn.classList.add("active");
    document.getElementById(target).classList.add("active");
  });
});

// Dark mode toggle
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
