import portada from '../assets/images/video/bg.jpeg';
import portadaM from '../assets/images/video/bgM.jpeg';
import iconLineal from '../assets/images/video/img_linea01.svg';
import videoBorder from '../assets/images/video/border.webp';

const bg = new Image();
bg.src = portada;
const bgM = new Image();
bgM.src = portadaM;
const border = new Image();
border.src = videoBorder;

export const videoSection = {
  bg: {
    bg: bg.src,
    bgM: bgM.src,
  },
  icons: {
    lineal: iconLineal,
    border: border.src,
  },
  video: [
    {
      name: 'video1',
      src: 'https://player.vimeo.com/video/716984830?h=d00bf9bd00&color=fea8a6&title=0&byline=0',
    },
    {
      name: 'GameView3',
      src: 'https://player.vimeo.com/progressive_redirect/playback/685996692/rendition/1080p?loc=external&signature=e38ba4430f298a0d86fd6e8ab102527d1ba2fc24f5b27c421e630dc8fab1e3cf',
    },
  ],
};
