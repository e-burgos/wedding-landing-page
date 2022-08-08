import portada from "../assets/images/home/bg.webp";
import portadaM from "../assets/images/home/bgM.webp";
import iconLineal from "../assets/images/home/bottom.png";

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
