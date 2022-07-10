import React, { useRef } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { counterSection } from "../../data/counterSection";
import CountdownComponent from "../common/CountdownMobile";
import { useIntersectionObserver } from "../../hooks/IntersectionObserver.hook";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100vh",
    overflow: "hidden",
  },
  background: {
    margin: "0 auto",
    backgroundImage: `url(${counterSection.bg.bgM})`,
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
    zIndex: 1,
    animation:
      "slide-in-right 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
  },
  title: {
    fontFamily: "TitleFont",
    color: "#ffffff",
    fontSize: "30pt",
    textAlign: "center",
    lineHeight: "30px",
    marginTop: "-50px",
    zIndex: 10,
  },
}));

const Home = () => {
  const classes = useStyles();
  const refSection = useRef(null);
  const isSectionVisible = useIntersectionObserver(
    refSection,
    { threshold: 0 },
    true
  );

  return (
    <div className={classes.root} id="page1">
      <Grid className={classes.background}>
        <h1 className={classes.title}>Estamos contando los segundos...</h1>
        <CountdownComponent />
        <div
          ref={refSection}
          className={`${isSectionVisible ? classes.bgShadow : ""}`}
        />
      </Grid>
    </div>
  );
};

export default Home;
