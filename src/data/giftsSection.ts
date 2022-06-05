import portada from '../assets/images/gifts/bg.jpeg';
import portadaM from '../assets/images/gifts/bgM.jpeg';
import iconLineal from '../assets/images/gifts/img_linea01.svg';
import weddingGig from '../assets/images/gifts/weddingGig.gif';

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
