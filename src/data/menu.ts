import backButton from "../assets/images/menu/backButton.webp";
import backButtonA from "../assets/images/menu/backButtonActive.webp";
import backButtonH from "../assets/images/menu/backButtonHover.webp";
import logoMain from "../assets/images/menu/logo.png";
import logoB from "../assets/images/menu/logoBar.png";
import logoBGif from "../assets/images/menu/logoBar.gif";
import menuB from "../assets/images/menu/menuButton.webp";
import menuBA from "../assets/images/menu/menuButtonActive.webp";
import menuBH from "../assets/images/menu/menuButtonHover.webp";
import MenuGif from "../assets/images/menu/weddingGig.gif";

const back = new Image();
back.src = backButton;
const backA = new Image();
backA.src = backButtonA;
const backH = new Image();
backH.src = backButtonH;

const logo = new Image();
logo.src = logoMain;
const logoBar = new Image();
logoBar.src = logoB;
const logoGif = new Image();
logoGif.src = logoBGif;
const menuGif = new Image();
menuGif.src = MenuGif;

const menuButton = new Image();
menuButton.src = menuB;
const menuButtonA = new Image();
menuButtonA.src = menuBA;
const menuButtonH = new Image();
menuButtonH.src = menuBH;

export const menuAssets = {
	logo: {
		logo: logo.src,
		logoBar: logoBar.src,
		logoGif: logoGif.src,
		menuGif: menuGif.src,
	},
	backButton: {
		back: back.src,
		backA: backA.src,
		backH: backH.src,
	},
	menuButton: {
		menuButton: menuButton.src,
		menuButtonA: menuButtonA.src,
		menuButtonH: menuButtonH.src,
	},
};
