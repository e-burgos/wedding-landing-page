import React, { useRef, useState } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { tipsSection } from "../../data/tipsSection";
import { useIntersectionObserver } from "../../hooks/IntersectionObserver.hook";
import ReactCardFlip from "react-card-flip";
import CarouselComponent from "../common/CarouselComponent";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100vh",
    overflow: "hidden",
  },
  background: {
    margin: "0 auto",
    backgroundImage: `url(${tipsSection.bg.bgM})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    zIndex: -2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  bgStars: {
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundImage: `url(${tipsSection.img.stars})`,
    backgroundSize: "repeat",
    zIndex: 2,
    animation:
      "scale-in-ver-bottom 3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
  },
  title: {
    fontFamily: "TitleFont",
    color: "white",
    fontSize: "45pt",
    textAlign: "center",
    zIndex: 10,
  },
  text: {
    fontFamily: "HeadingFont",
    color: "#ffffff",
    fontSize: "14pt",
    textAlign: "center",
    width: "90%",
    zIndex: 10,
  },
  cardsContainer: {
    display: "flex",
    flexDirection: "column",
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
    zIndex: 10,
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: "linear-gradient(to bottom right, #BF862D, #ECC878)",
    width: "100%",
    height: "55vh",
    borderRadius: "15px",
    padding: "25px",
    boxSizing: "border-box",
  },
  cardTitle: {
    fontFamily: "TitleFont",
    color: "white",
    fontSize: "6vh",
    textAlign: "center",
  },
  cardText: {
    fontFamily: "HeadingFont",
    color: "white",
    fontSize: "16pt",
    textAlign: "center",
    marginBottom: "20px",
  },
  cardTextLi: {
    fontFamily: "HeadingFont",
    color: "white",
    fontSize: "14pt",
    textAlign: "left",
    marginBottom: "20px",
  },
  cardButton: {
    fontFamily: "HeadingFont",
    borderRadius: "8px",
    border: "1px solid#E0D6B2",
    color: "#BF862D",
    fontSize: "12pt",
    textAlign: "center",
    width: "90%",
    background: "white",
    height: "30px",
    marginTop: "5px",
    padding: "2px",
    "&:hover": {
      fontFamily: "HeadingFontBold",
      fontWeight: 700,
      border: "1px solid#BF862D",
    },
  },
  cardIcon: {
    width: "20vh",
  },
}));

const TipsM = () => {
  const classes = useStyles();
  const refSection = useRef(null);
  const [flip, setFlip] = useState("");
  const isSectionVisible = useIntersectionObserver(
    refSection,
    { threshold: 0 },
    true
  );

  return (
    <div className={classes.root} id="page1">
      <Grid className={classes.background}>
        <span className={classes.title}>{tipsSection.info.title}</span>
        <span className={classes.text}>{tipsSection.info.text}</span>
        <div className={classes.cardsContainer}>
          <CarouselComponent>
            {tipsSection.cards.map((card) => (
              <ReactCardFlip
                key={card.name}
                isFlipped={flip === card.name}
                flipDirection="horizontal"
                flipSpeedBackToFront={1}
                flipSpeedFrontToBack={1}
              >
                <div className={classes.card}>
                  <span className={classes.cardTitle}>{card.name}</span>
                  <img
                    className={classes.cardIcon}
                    src={card.icon}
                    alt="card"
                  />
                  <span className={classes.cardText}>{card.text}</span>
                  <button
                    className={`${classes.cardButton}`}
                    onClick={() => setFlip(card.name)}
                  >
                    {card.textButton}
                  </button>
                </div>
                <div className={classes.card}>
                  {card.name === "Música" && (
                    <>
                      <span className={classes.cardTitle}>{card.name}</span>
                      <span className={classes.cardText}>
                        {card.backInfo.info1}
                      </span>
                      <button
                        className={`${classes.cardButton}`}
                        onClick={() => {
                          setFlip("");
                          window.open(card.backInfo.link, "_blank", "noopener");
                        }}
                      >
                        {card.backInfo.textButton}
                      </button>
                      <button
                        className={`${classes.cardButton}`}
                        onClick={() => {
                          setFlip("");
                        }}
                      >
                        {"Volver"}
                      </button>
                    </>
                  )}
                  {card.name === "Dress Code" && (
                    <>
                      <span className={classes.cardTitle}>{card.name}</span>
                      <span className={classes.cardText}>
                        {card.backInfo.info1}
                      </span>
                      <button
                        className={`${classes.cardButton}`}
                        onClick={() => {
                          setFlip("");
                        }}
                      >
                        {card.backInfo.textButton}
                      </button>
                    </>
                  )}
                  {card.name === "Tips y Notas" && (
                    <>
                      <span className={classes.cardTitle}>{card.name}</span>
                      <ul>
                        <li className={classes.cardTextLi}>
                          {card.backInfo.info1}
                        </li>
                        <li className={classes.cardTextLi}>
                          {card.backInfo.info2}
                        </li>
                      </ul>
                      <button
                        className={`${classes.cardButton}`}
                        onClick={() => {
                          setFlip("");
                          window.open(
                            card.backInfo.linkBus,
                            "_blank",
                            "noopener"
                          );
                        }}
                      >
                        {card.backInfo.textBus}
                      </button>
                      <button
                        className={`${classes.cardButton}`}
                        onClick={() => {
                          setFlip("");
                          window.open(
                            card.backInfo.linkWhatsapp,
                            "_blank",
                            "noopener"
                          );
                        }}
                      >
                        {card.backInfo.textWhatsapp}
                      </button>
                      <button
                        className={`${classes.cardButton}`}
                        onClick={() => {
                          setFlip("");
                        }}
                      >
                        {card.backInfo.textButton}
                      </button>
                    </>
                  )}
                </div>
              </ReactCardFlip>
            ))}
          </CarouselComponent>
        </div>
        <div
          ref={refSection}
          className={`${isSectionVisible ? ` ${classes.bgStars}` : ""}`}
        />
      </Grid>
    </div>
  );
};

export default TipsM;
