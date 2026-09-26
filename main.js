// Menu para dispositivos moviles

const menuToggle = document.getElementById("menuToggle");

const navMenu = document.getElementById("navMenu");


menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("open");

});


// Cerrar menú al seleccionar una opción

const links = document.querySelectorAll("#navMenu a");


links.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

    });

});


// Mensaje al abrir un repositorio

const projectLinks = document.querySelectorAll(".text-link");


projectLinks.forEach(link => {

    link.addEventListener("click", () => {

        console.log(
            "Abriendo repositorio:",
            link.href
        );

    });

});