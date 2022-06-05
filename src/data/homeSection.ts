import portada from '../assets/images/home/bg.jpeg';
import portadaM from '../assets/images/home/bgM.jpeg';
import iconLineal from '../assets/images/home/bottom.png';

const bg = new Image();
bg.src = portada;
const bgM = new Image();
bgM.src = portadaM;

export const homeSection = {
  bg: {
    bg: bg.src,
    bgM: bgM.src,
  },
  icon: iconLineal,
};
