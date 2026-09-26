const menuToggle=document.getElementById("menuToggle");
const navMenu=document.getElementById("navMenu");

menuToggle.addEventListener("click",()=>{
  navMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-label",navMenu.classList.contains("open")?"Cerrar menú":"Abrir menú");
});

document.querySelectorAll("#navMenu a").forEach(link=>{
  link.addEventListener("click",()=>navMenu.classList.remove("open"));
});

document.querySelectorAll(".text-link").forEach(link=>{
  link.addEventListener("click",()=>console.log("Abriendo repositorio:",link.href));
});
