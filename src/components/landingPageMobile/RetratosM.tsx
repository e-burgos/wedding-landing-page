/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useRef, useState, useEffect } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import {
  formatInitialData,
  FormatPost,
  picturesSection,
} from "../../data/picturesSection";
import { useIntersectionObserver } from "../../hooks/IntersectionObserver.hook";
import CarouselComponent from "../common/CarouselComponent";
import { useInstagraApi } from "../../hooks/useInstagramApi";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100vh",
    overflow: "hidden",
  },
  background: {
    margin: "0 auto",
    backgroundImage: `url(${picturesSection.bg.bgM})`,
    backgroundSize: "cover",
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
    zIndex: 0,
    animation:
      "slide-in-right 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
  },
  title: {
    fontFamily: "TitleFont",
    color: "white",
    fontSize: "50pt",
    textAlign: "center",
    lineHeight: "10px",
    marginTop: "10px",
    marginBottom: "10px",
    zIndex: 10,
  },
  text: {
    fontFamily: "HeadingFont",
    color: "#ffffff",
    fontSize: "12pt",
    textAlign: "center",
    padding: "0px 30px",
    zIndex: 10,
  },
  cardsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: "linear-gradient(to bottom right, #BF862D, #ECC878)",
    width: "300px",
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
    width: "280px",
    borderRadius: "12px",
  },
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "10%",
    marginRight: "10%",
    zIndex: 10,
  },
  leftContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  mt10: {
    marginTop: "10px",
  },
  carousel: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const RetratosM = () => {
  const classes = useStyles();
  const refSection = useRef(null);
  const [index, setIndex] = useState<number>(0);
  const [desc, setDesc] = useState<string>("");
  const [data, setData] = useState<FormatPost[]>(formatInitialData);

  const { data: posts, dataSuccess } = useInstagraApi(
    "http://localhost:4000/hashtag_post",
    //"https://instagram47.p.rapidapi.com/hashtag_post?hashtag=ximeytucu",
    false,
    1000 * 60 * 1
  );

  const isSectionVisible = useIntersectionObserver(
    refSection,
    { threshold: 0 },
    true
  );

  const handleDesc = (index: number) => {
    setDesc(
      `${
        data[index].description.length > 90
          ? `${data[index].description.substring(0, 90)}...`
          : data[index].description
      }`
    );
  };

  useEffect(() => {
    handleDesc(index);
    if (dataSuccess) setData(posts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, dataSuccess]);

  console.log(posts);

  return (
    <div className={classes.root} id="page1">
      <Grid className={classes.background}>
        <div className={classes.mainContainer}>
          <div className={classes.leftContainer}>
            <span className={classes.title}>{"#ximeytucu"}</span>
          </div>
          {data.length !== 0 && (
            <CarouselComponent currentIndex={setIndex}>
              {data.map((card) => (
                <div className={classes.cardsContainer} key={card.id}>
                  <div className={classes.card}>
                    <span className={classes.text}>
                      {
                        "Construyamos juntos este momento único, incluí el hashtag en tus posts y compartir con nosotros tus recuerdos"
                      }
                    </span>
                    <img
                      className={`${classes.cardIcon} ${classes.mt10}`}
                      src={card.image}
                      alt={card.id}
                    />

                    <span
                      className={classes.cardText}
                      onTouchStart={() => setDesc(card.description)}
                      onTouchEnd={() => handleDesc(index)}
                    >
                      {desc}
                    </span>
                    <button className={`${classes.cardButton}`}>
                      <a
                        href={card.link}
                        target="_blank"
                        rel="noreferrer"
                        className={`${classes.cardLink}`}
                      >
                        {"Ver en Instagram"}
                      </a>
                    </button>
                    <button className={`${classes.cardButton} ${classes.mt10}`}>
                      <a
                        href={
                          "https://www.instagram.com/explore/tags/ximeytucu/"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={`${classes.cardLink}`}
                      >
                        {"#ximeytucu"}
                      </a>
                    </button>
                  </div>
                </div>
              ))}
            </CarouselComponent>
          )}
        </div>
        <div
          ref={refSection}
          className={`${isSectionVisible ? classes.bgShadow : ""}`}
        />
      </Grid>
    </div>
  );
};

export default RetratosM;
