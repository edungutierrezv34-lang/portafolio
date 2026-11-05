import "@fontsource/im-fell-english/latin-400.css";
import "@fontsource/cormorant-garamond/latin-400.css";
import "@fontsource/cormorant-garamond/latin-400-italic.css";
import "@fontsource/cormorant-garamond/latin-600.css";
import "@fontsource/special-elite/latin-400.css";
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
  { threshold: 0.15 }
);
document.querySelectorAll(".seccion, .obra, .ficha, .linea li").forEach((el) => {
  el.classList.add("aparece");
  observador.observe(el);
});
