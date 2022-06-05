import socialC from '../assets/images/social/socialContainer.webp';
import socialCM from '../assets/images/social/socialContainerMobile.webp';

const socialContainer = new Image();
socialContainer.src = socialC;
const socialContainerM = new Image();
socialContainerM.src = socialCM;

export const social = {
  container: {
    socialContainer: socialContainer.src,
    socialContainerM: socialContainerM.src,
  },
};
