/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { picturesSection } from "../../data/picturesSection";
import CarouselComponent from "../common/CarouselComponent";

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
    marginBottom: "40px",
    zIndex: 10,
  },
  text: {
    fontFamily: "HeadingFont",
    color: "#ffffff",
    fontSize: "12pt",
    textAlign: "center",
    width: "80%",
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
    width: "90%",
    borderRadius: "15px",
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
    maxWidth: "100%",
    maxHeight: "36vh",
    borderRadius: "12px",
    marginBottom: "20px",
  },
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
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
  const data = picturesSection.photos;

  return (
    <div className={classes.root} id="retratos">
      <Grid className={classes.background}>
        <div className={classes.mainContainer}>
          <div className={classes.leftContainer}>
            <span className={classes.title}>{"#ximeytucu"}</span>
            <span className={classes.text}>
              {
                "Construyamos juntos este momento único, incluí el hashtag en tus posts y compartí con nosotros tus recuerdos"
              }
            </span>
          </div>
          {data.length !== 0 && (
            <CarouselComponent scrollButtons>
              {data.map((photo) => (
                <div key={photo.id} className={classes.cardsContainer}>
                  <div className={classes.card}>
                    <img
                      className={classes.cardIcon}
                      src={photo.img}
                      alt={photo.id}
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
              ))}
            </CarouselComponent>
          )}
        </div>
      </Grid>
    </div>
  );
};

export default RetratosM;
