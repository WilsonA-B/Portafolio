// Btn para volver arriba
const btnVolverArriba = document.getElementById("btnVolverArriba");

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        btnVolverArriba.classList.add('visible');
    } else {
        btnVolverArriba.classList.remove('visible');
    }
});

// Menu hamburguesa para móvil
const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
