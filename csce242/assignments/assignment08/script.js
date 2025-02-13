
////toggle menu
document.getElementById("toggle-nav").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
    document.getElementById("triangle-up").classList.toggle("hidden");
    document.getElementById("triangle-down").classList.toggle("hidden");
};