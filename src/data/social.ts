import socialC from "../assets/images/social/socialContainer.webp";
import socialCM from "../assets/images/social/socialContainerMobile.webp";

const socialContainer = new Image();
socialContainer.src = socialC;
const socialContainerM = new Image();
socialContainerM.src = socialCM;

export const social = {
  container: {
    socialContainer: socialContainer.src,
    socialContainerM: socialContainerM.src,
  },
  links: {
    instagram: "https://www.instagram.com/explore/tags/ximeytucu/",
    bus: "https://forms.gle/DyS8KyxjUmqsoSiq6",
    location: "https://goo.gl/maps/PpSPpfYuK78U4A8N9",
    date: "https://calendar.google.com/event?action=TEMPLATE&tmeid=NTUwZ2JoMHZsbmMwc3NwdnAwOGtsZXQ2OWkgZXN0ZWJhbmJ1cmdvczg1QG0&tmsrc=estebanburgos85%40gmail.com",
    reservation: "https://forms.gle/in3nA2mEgzyuCSFPA",
  },
};
