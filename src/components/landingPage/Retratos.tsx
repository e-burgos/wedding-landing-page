/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { picturesSection } from "../../data/picturesSection";
import CarouselDesktopNavigator from "../common/CarouselDesktopNavigator";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100vh",
    overflow: "hidden",
  },
  background: {
    margin: "0 auto",
    backgroundImage: `url(${picturesSection.bg.bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    zIndex: -2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  bgShadow: {
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundImage: "linear-gradient(to bottom right, #BF862D10, #ECC87890)",
    backgroundSize: "100% 100%",
    indexZ: -1,
    animation:
      "slide-in-right 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
  },
  title: {
    fontFamily: "TitleFont",
    color: "white",
    fontSize: "50pt",
    textAlign: "center",
    zIndex: 50,
  },
  text: {
    fontFamily: "HeadingFont",
    color: "#dbdbdb",
    fontSize: "18pt",
    textAlign: "right",
    width: "100%",
    marginLeft: "20px",
    zIndex: 50,
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      marginLeft: "0px",
    },
  },
  cardsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    zIndex: 50,
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: "linear-gradient(to bottom right, #BF862D, #ECC878)",
    width: "100%",
    borderRadius: "15px",
    margin: "20px",
    padding: "25px",
    boxSizing: "border-box",
  },
  cardTitle: {
    fontFamily: "TitleFont",
    color: "white",
    fontSize: "30pt",
    textAlign: "center",
    marginBottom: "10px",
  },
  cardText: {
    fontFamily: "HeadingFont",
    color: "white",
    fontSize: "12pt",
    textAlign: "center",
    marginBottom: "20px",
    marginTop: "20px",
  },
  cardButton: {
    fontFamily: "HeadingFont",
    borderRadius: "12px",
    border: "1px solid#E0D6B2",
    color: "#BF862D",
    background: "white",
    fontSize: "12pt",
    textAlign: "center",
    width: "90%",
    height: "40px",
    "&:hover": {
      fontFamily: "HeadingFontBold",
      fontWeight: 700,
      border: "1px solid#BF862D",
    },
  },
  cardLink: {
    fontFamily: "HeadingFont",
    color: "#BF862D",
    fontSize: "12pt",
    textAlign: "center",
    width: "90%",
    height: "40px",
    "&:hover": {
      fontFamily: "HeadingFontBold",
      fontWeight: 700,
    },
  },
  cardIcon: {
    maxHeight: "40vh",
    borderRadius: "12px",
    marginBottom: "20px",
  },
  mainContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    margin: "10%",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  topContainer: {
    width: "30%",
    display: "flex",
    marginRight: "20px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    [theme.breakpoints.down("md")]: {
      marginRight: "0px",
      width: "80%",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  w50: {
    width: "50%",
    marginTop: "20px",
    zIndex: 50,
  },
}));

const Retratos = () => {
  const classes = useStyles();
  const [index, setIndex] = useState<number>(0);
  const data = picturesSection.photos;

  //const refSection = useRef(null);
  // const isSectionVisible = useIntersectionObserver(
  //   refSection,
  //   { threshold: 0 },
  //   true
  // );
  // const [desc, setDesc] = useState<string>("");
  // const [data, setData] = useState<FormatPost[]>(formatInitialData);
  // const { data: posts, dataSuccess } = useInstagraApi(
  //   //"http://localhost:4000/hashtag_post",
  //   "https://instagram47.p.rapidapi.com/hashtag_post?hashtag=ximeytucu",
  //   true,
  //   1000 * 60 * 30
  // );
  // useEffect(() => {
  //   handleDesc(index);
  //   if (dataSuccess) setData(posts);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [index, dataSuccess]);
  // const handleDesc = (index: number) => {
  //   setDesc(
  //     `${
  //       data[index].description.length > 90
  //         ? `${data[index].description.substring(0, 90)}...`
  //         : data[index].description
  //     }`
  //   );
  // };

  return (
    <div className={classes.root} id="retatos">
      <Grid className={classes.background}>
        <div className={classes.mainContainer}>
          <div className={classes.topContainer}>
            <span className={classes.title}>{"#ximeytucu"}</span>
            <span className={classes.text}>
              {
                "Construyamos juntos este momento único, incluí el hashtag en tus posts y compartí con nosotros tus recuerdos"
              }
            </span>
          </div>
          {data.length !== 0 && (
            <div className={classes.cardsContainer}>
              <div className={classes.card}>
                <img
                  className={classes.cardIcon}
                  src={data[index].img}
                  alt={data[index].id}
                />
                <button className={`${classes.cardButton}`}>
                  <a
                    href={picturesSection.linkHashtags}
                    target="_blank"
                    rel="noreferrer"
                    className={`${classes.cardLink}`}
                  >
                    {"Ver en Instagram"}
                  </a>
                </button>
              </div>
            </div>
          )}
        </div>
        {data.length !== 0 && (
          <CarouselDesktopNavigator
            data={data}
            activeIndex={index}
            updateIndex={setIndex}
          />
        )}
        {/* <div
          ref={refSection}
          className={`${isSectionVisible ? classes.bgShadow : ""}`}
        /> */}
      </Grid>
    </div>
  );
};

export default Retratos;
