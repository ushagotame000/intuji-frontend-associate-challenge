function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  document.getElementById("main").classList.toggle("open");
  sidebar.classList.toggle("open");
}
function handleResize() {
  if (window.innerWidth > 768) {
    document.getElementById("sidebar").classList.add("open");
    document.getElementById("main").classList.add("open");
  } else if (window.innerWidth < 600) {
    document.getElementById("sidebar").classList.remove("open");
    document.getElementById("main").classList.remove("open");
  }
}
window.addEventListener("resize", handleResize);
document.getElementById("toggle-btn").addEventListener("click", toggleSidebar);
document
  .getElementById("toggle-btn-close")
  .addEventListener("click", toggleSidebar);

document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth >= 768) {
    toggleSidebar();
  }
});
