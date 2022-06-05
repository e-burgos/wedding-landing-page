import portada from "../assets/images/tips/bg.jpeg";
import portadaM from "../assets/images/tips/bgM.jpeg";
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
		text: "Hagamos juntos una fiesta épica. Aquí algunos detalles a tener en cuenta.",
	},
	cards: [
		{
			name: "Música",
			icon: music.src,
			text: "Cual es la canción que no debe faltar en la fiesta?",
			textButton: "sugerir canción",
			info: "info de la tarjeta",
		},
		{
			name: "Dress Code",
			icon: dress.src,
			text: "Una orientación para tu vestuario",
			textButton: "Ver más",
			info: "info de la tarjeta",
		},
		{
			name: "Tips y Notas",
			icon: tips.src,
			text: "Información adicional para tener en cuenta",
			textButton: "+ Info",
			info: "info de la tarjeta",
		},
	],
};
