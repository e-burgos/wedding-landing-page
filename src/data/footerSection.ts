import portada from "../assets/images/footer/bg.png";
import portadaM from "../assets/images/footer/bg.png";
import weddingGif from "../assets/images/footer/weddingGig.gif";

const bg = new Image();
bg.src = portada;
const bgM = new Image();
bgM.src = portadaM;
const gif = new Image();
gif.src = weddingGif;

export const footerSection = {
  bg: {
    bg: bg.src,
    bgM: bgM.src,
  },
  icons: {
    gif: gif.src,
  },
  pages: [
    { key: "home", value: "Nos Casamos!", page: 0 },
    { key: "page1", value: "Cuanto Falta", page: 1 },
    //{ key: 'page2', value: 'Video', page: 2 },
    { key: "page2", value: "Fiesta", page: 2 },
    { key: "page3", value: "Retratos", page: 3 },
    { key: "page4", value: "Tips", page: 4 },
    { key: "page5", value: "Regalos", page: 5 },
  ],
};
