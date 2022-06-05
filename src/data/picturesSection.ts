import portada from "../assets/images/pictures/bg.jpeg";
import portadaM from "../assets/images/pictures/bgM.jpeg";
import iconLineal from "../assets/images/pictures/img_linea01.svg";
import weddingGig from "../assets/images/pictures/weddingGig.gif";

const bg = new Image();
bg.src = portada;
const bgM = new Image();
bgM.src = portadaM;
const gif = new Image();
gif.src = weddingGig;

export const picturesSection = {
	bg: {
		bg: bg.src,
		bgM: bgM.src,
	},
	img: {
		lineal: iconLineal,
		gif: gif.src,
	},
	photos: [
		{
			id: 1,
			img: bg.src,
		},
		{
			id: 2,
			img: bg.src,
		},
	],
};
