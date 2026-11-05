import "@fontsource/italiana/latin-400.css";
import "@fontsource/cormorant-garamond/latin-400-italic.css";
import "@fontsource/jost/latin-300.css";
import "@fontsource/jost/latin-400.css";
import "@fontsource/jost/latin-500.css";
import "./styles/main.less";

const cabecera = document.querySelector(".cabecera");
const alDesplazar = () =>
  cabecera.classList.toggle("cabecera--fija", window.scrollY > 40);
window.addEventListener("scroll", alDesplazar, { passive: true });
alDesplazar();

const observador = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observador.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 }
);
document
  .querySelectorAll(".seccion > *, .cifra, .proyecto, .tarjeta, .pasos li")
  .forEach((el) => {
    el.classList.add("aparece");
    observador.observe(el);
  });

const escena = document.querySelector(".escena");
const retrato = document.querySelector(".escena__retrato");
if (escena && retrato && window.matchMedia("(pointer: fine)").matches) {
  escena.addEventListener("pointermove", (e) => {
    const r = escena.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    retrato.style.transform = `translate(${x * 14}px, ${y * 8}px)`;
  });
  escena.addEventListener("pointerleave", () => {
    retrato.style.transform = "";
  });
}
