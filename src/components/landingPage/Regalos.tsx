import React, { useEffect, useRef, useState } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { giftsSection } from "../../data/giftsSection";
import { useIntersectionObserver } from "../../hooks/IntersectionObserver.hook";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100vh",
    overflow: "hidden",
  },
  background: {
    margin: "0 auto",
    backgroundImage: `url(${giftsSection.bg.bg})`,
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
    width: "400px",
    borderRadius: "15px",
    margin: "20px",
    padding: "25px",
    boxSizing: "border-box",
  },
  cardText: {
    fontFamily: "HeadingFont",
    color: "white",
    fontSize: "12pt",
    textAlign: "center",
    marginTop: "5px",
  },
  cardButton: {
    fontFamily: "HeadingFont",
    borderRadius: "12px",
    border: "1px solid#E0D6B2",
    color: "#BF862D",
    fontSize: "12pt",
    textAlign: "center",
    background: "white",
    width: "90%",
    marginTop: "10px",
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
    maxHeight: "150px",
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
  mb: {
    marginBottom: "20px",
  },
}));

const Regalos = () => {
  const classes = useStyles();
  const refSection = useRef(null);
  const isSectionVisible = useIntersectionObserver(
    refSection,
    { threshold: 0 },
    true
  );
  const [copyCBU, setCopyCBU] = useState<string>("0000053600000003089699");
  const [copyAlias, setCopyAlias] = useState<string>("20314875029.LEMON");

  useEffect(() => {
    if (!copyCBU) {
      setTimeout(() => {
        setCopyCBU("0000053600000003089699");
      }, 3000);
    }
    if (!copyAlias) {
      setTimeout(() => {
        setCopyAlias("20314875029.LEMON");
      }, 3000);
    }
  }, [copyCBU, copyAlias]);

  function copyToClipboard(id_elemento: string) {
    const aux = document.createElement("input");
    //@ts-ignore
    aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
    if (id_elemento === "alias") setCopyAlias("");
    if (id_elemento === "CBU") setCopyCBU("");
  }

  return (
    <div className={classes.root} id="regalos">
      <Grid className={classes.background}>
        <div className={classes.mainContainer}>
          <div className={classes.topContainer}>
            <span className={classes.title}>{"Regalos"}</span>
            <span className={classes.text}>
              {"Si querés regalarnos algo más que tu presencia..."}
            </span>
          </div>

          <div className={classes.cardsContainer}>
            <div className={classes.card}>
              <img
                className={classes.cardIcon}
                src={giftsSection.icons.lineal}
                alt="cuenta"
              />
              <span className={classes.cardText}>{"BANCO: AGILPAGOS"}</span>
              <span id="alias" className={classes.cardText}>
                {"CBU: 0000053600000003089699"}
              </span>
              <span id="CBU" className={classes.cardText}>
                {"ALIAS: 20314875029.LEMON"}
              </span>
              <span className={`${classes.cardText} ${classes.mb}`}>
                {"TITULAR: ESTEBAN BURGOS"}
              </span>
              <button
                className={`${classes.cardButton}`}
                onClick={() => copyToClipboard("CBU")}
              >
                {copyCBU ? "Copiar Cuenta" : "Copiado"}
              </button>
              <button
                className={`${classes.cardButton}`}
                onClick={() => copyToClipboard("alias")}
              >
                {copyAlias ? "Copiar Alias" : "Copiado"}
              </button>
            </div>
          </div>
        </div>
        <div
          ref={refSection}
          className={`${isSectionVisible ? classes.bgShadow : ""}`}
        />
      </Grid>
    </div>
  );
};

export default Regalos;
