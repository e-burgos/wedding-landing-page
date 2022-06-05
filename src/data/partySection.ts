import portada from "../assets/images/party/bg.jpeg";
import portadaM from "../assets/images/party/bgM.jpeg";
import weddingGif from "../assets/images/party/party2.gif";
import whiteCard from "../assets/images/party/card.png";

const bg = new Image();
bg.src = portada;
const bgM = new Image();
bgM.src = portadaM;
const gif = new Image();
gif.src = weddingGif;
const card = new Image();
card.src = whiteCard;

export const partySection = {
	bg: {
		bg: bg.src,
		bgM: bgM.src,
	},
	icons: {
		gif: gif.src,
		card: card.src,
	},
};
