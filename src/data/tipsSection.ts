import portada from "../assets/images/tips/bg.webp";
import portadaM from "../assets/images/tips/bgM.webp";
import canciones from "../assets/images/tips/img_circuloCanciones.svg";
import notas from "../assets/images/tips/tips.svg";
import vestuario from "../assets/images/tips/vestuario.svg";
import statsGif from "../assets/images/tips/stars.gif";

const bg = new Image();
bg.src = portada;
const bgM = new Image();
bgM.src = portadaM;
const music = new Image();
music.src = canciones;
const dress = new Image();
dress.src = vestuario;
const tips = new Image();
tips.src = notas;
const stars = new Image();
stars.src = statsGif;

export const tipsSection = {
  bg: {
    bg: bg.src,
    bgM: bgM.src,
  },
  img: {
    stars: stars.src,
  },
  info: {
    title: "Algunos Tips",
    text: "Hagamos juntos una fiesta épica. Algunos detalles a tener en cuenta.",
  },
  cards: [
    {
      name: "Música",
      icon: music.src,
      text: "¿Cuál es la canción que no debe faltar en la fiesta?",
      textButton: "Sugerir canción",
      info: "info de la tarjeta",
      backInfo: {
        info1: "Toca el botón y ayudanos a elegir la mejor música del momento!",
        info2: "",
        info3: "",
        textButton: "Agregar canción",
        link: "https://forms.gle/4MUdJdcSEzkmYJ7fA",
      },
    },
    {
      name: "Dress Code",
      icon: dress.src,
      text: "Una orientación para tu vestuario",
      textButton: "Ver más",
      info: "info de la tarjeta",
      backInfo: {
        info1:
          "Apostamos por un dress code elegante, esperamos verte en tu mejor versión",
        info2: "",
        info3: "",
        textButton: "Volver",
        link: "#",
      },
    },
    {
      name: "Tips y Notas",
      icon: tips.src,
      text: "Información adicional para tener en cuenta",
      textButton: "+ Info",
      info: "info de la tarjeta",
      backInfo: {
        info1: "Confirma con tiempo tu presencia",
        info2: "Si tomas, no manejes",
        info3: "Por cualquier duda que se te presente no dudas de contactárnos",
        textButton: "Volver",
        textBus: "Transporte",
        textWhatsapp: "Whatsapp",
        linkBus: "https://forms.gle/DyS8KyxjUmqsoSiq6",
        linkWhatsapp: "https://api.whatsapp.com/send?phone=5491126790610",
      },
    },
  ],
};
