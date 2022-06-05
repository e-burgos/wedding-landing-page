import portada from '../assets/images/counter/bg.jpeg';
import portadaM from '../assets/images/counter/bgM.jpeg';
import iconLineal from '../assets/images/counter/img_linea01.svg';
import weddingGig from '../assets/images/counter/weddingGig.gif';

const bg = new Image();
bg.src = portada;
const bgM = new Image();
bgM.src = portadaM;
const gif = new Image();
gif.src = weddingGig;

export const tipsSection = {
  bg: {
    bg: bg.src,
    bgM: bgM.src,
  },
  icons: {
    lineal: iconLineal,
    gif: gif.src,
  },
};
