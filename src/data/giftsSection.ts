import portada from "../assets/images/gifts/bg.webp";
import portadaM from "../assets/images/gifts/bgM.webp";
import iconLineal from "../assets/images/gifts/img_circuloRegalo.svg";
import weddingGig from "../assets/images/gifts/weddingGig.gif";

const bg = new Image();
bg.src = portada;
const bgM = new Image();
bgM.src = portadaM;
const gif = new Image();
gif.src = weddingGig;

export const giftsSection = {
  bg: {
    bg: bg.src,
    bgM: bgM.src,
  },
  icons: {
    lineal: iconLineal,
    gif: gif.src,
  },
};
