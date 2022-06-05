import indexDisabled from "../assets/images/carousel/indexDisabled.webp";
import indexE from "../assets/images/carousel/indexEnabled.webp";
import leftButton from "../assets/images/carousel/left.webp";
import leftButtonH from "../assets/images/carousel/leftHover.webp";
import rightButton from "../assets/images/carousel/right.webp";
import rightButtonH from "../assets/images/carousel/rightHover.webp";

const index = new Image();
index.src = indexE;
const indexD = new Image();
indexD.src = indexDisabled;
const left = new Image();
left.src = leftButton;
const leftH = new Image();
leftH.src = leftButtonH;
const right = new Image();
right.src = rightButton;
const rightH = new Image();
rightH.src = rightButtonH;

export const carousel = {
	img: {
		left: left.src,
		right: right.src,
		leftH: leftH.src,
		rightH: rightH.src,
		index: index.src,
		indexD: indexD.src,
	},
};
