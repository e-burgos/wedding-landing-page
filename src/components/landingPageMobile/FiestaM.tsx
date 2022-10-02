/* eslint-disable react/jsx-no-target-blank */
import React, { useRef, useState } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { partySection } from "../../data/partySection";
import { useIntersectionObserver } from "../../hooks/IntersectionObserver.hook";
import ReactCardFlip from "react-card-flip";
import { social } from "../../data/social";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100vh",
    overflow: "hidden",
  },
  background: {
    margin: "0 auto",
    backgroundImage: `url(${partySection.bg.bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    zIndex: -1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  bgParty: {
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundImage: `url(${partySection.icons.gif})`,
    backgroundSize: "repeat",
    zIndex: 2,
    animation:
      "slide-in-right 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) 1s both",
  },
  bgShadow: {
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundImage: "linear-gradient(to bottom right, #BF862D10, #ECC87890)",
    backgroundSize: "100% 100%",
    zIndex: 1,
    animation:
      "slide-in-right 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
  },
  cardFlip: {
    zIndex: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    animation:
      "scale-in-center 3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "45vh",
    width: "100%",
    position: "relative",
  },
  cardImg: {
    position: "absolute",
    height: "70vh",
    zIndex: 11,
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "45vh",
    zIndex: 12,
  },
  cardTitle: {
    fontFamily: "TitleFont",
    color: "#ca9f42",
    fontSize: "33pt",
    textAlign: "center",
  },
  cardText: {
    fontFamily: "HeadingFont",
    color: "black",
    fontSize: "12pt",
    textAlign: "center",
    marginTop: "5px",
  },
  cardButton: {
    fontFamily: "HeadingFont",
    borderRadius: "12px",
    backgroundImage: "linear-gradient(to bottom right, #BF862D, #ECC878)",
    border: "1px solid #BF862D",
    color: "white",
    fontSize: "12pt",
    textAlign: "center",
    width: "200px",
    marginTop: "10px",
    height: "40px",
    "&:hover": {
      fontFamily: "HeadingFontBold",
      fontWeight: 700,
      border: "1px solid#BF862D",
    },
  },
  cardInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    width: "100%",
    marginBottom: "5px",
    marginTop: "5px",
  },
}));

const FiestaM = () => {
  const classes = useStyles();
  const refSection = useRef(null);
  const isSectionVisible = useIntersectionObserver(
    refSection,
    { threshold: 0 },
    true
  );
  const [flip, setFlip] = useState("");

  return (
    <div className={classes.root} id="page1">
      <Grid className={classes.background}>
        <div
          ref={refSection}
          className={`${isSectionVisible ? ` ${classes.cardFlip}` : ""}`}
        >
          <ReactCardFlip
            isFlipped={flip === "front"}
            flipDirection="horizontal"
            flipSpeedBackToFront={1}
            flipSpeedFrontToBack={1}
          >
            <div className={classes.card}>
              <img
                onClick={() => setFlip("front")}
                aria-hidden="true"
                src={partySection.icons.card}
                alt="imageheader"
                className={classes.cardImg}
              />
              <div className={classes.cardContent}>
                <span className={classes.cardTitle}>{"Xime & Esteban"}</span>
                <div className={classes.cardInfo}>
                  <div>
                    <span className={classes.cardText}>
                      {"Ceremonia y Fiesta"}
                    </span>
                  </div>
                  <div>
                    <span className={classes.cardText}>
                      {"Sábado 19 de Noviembre, 19hs"}
                    </span>
                  </div>
                  <div>
                    <span className={classes.cardText}>
                      {"Estación Fátima Eventos"}
                    </span>
                  </div>
                  <div>
                    <span className={classes.cardText}>
                      {"Isla Jorge 290, Fatima, Pilar"}
                    </span>
                  </div>
                </div>
                <button
                  className={`${classes.cardButton}`}
                  onClick={() => setFlip("front")}
                >
                  {"Confirmar Asistencia"}
                </button>
              </div>
            </div>
            <div aria-hidden="true" className={classes.card}>
              <img
                src={partySection.icons.card}
                alt="card"
                className={classes.cardImg}
              />
              <div className={classes.cardContent}>
                <span className={classes.cardTitle}>{"Xime & Esteban"}</span>
                <div className={classes.cardInfo}>
                  <button
                    className={`${classes.cardButton}`}
                    onClick={() => {
                      setFlip("");
                      window.open(
                        social.links.reservation,
                        "_blank",
                        "noopener"
                      );
                    }}
                  >
                    {"Confirmar Asistencia"}
                  </button>
                  <button
                    className={`${classes.cardButton}`}
                    onClick={() => {
                      setFlip("");
                      window.open(social.links.date, "_blank", "noopener");
                    }}
                  >
                    {"Agendar Fecha"}
                  </button>
                  <button
                    className={`${classes.cardButton}`}
                    onClick={() => {
                      setFlip("");
                      window.open(social.links.location, "_blank", "noopener");
                    }}
                  >
                    {"¿Como llegar?"}
                  </button>
                </div>
              </div>
            </div>
          </ReactCardFlip>
        </div>
        <div
          ref={refSection}
          className={`${isSectionVisible ? `${classes.bgShadow} ` : ""}`}
        />
        <div
          ref={refSection}
          className={`${isSectionVisible ? ` ${classes.bgParty}` : ""}`}
        />
      </Grid>
    </div>
  );
};

export default FiestaM;
