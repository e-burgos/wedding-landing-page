import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { makeStyles, Theme, Grid } from "@material-ui/core";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    height: "100vh",
    overflow: "hidden",
    fontFamily: "HeadingFont",
    color: "white",
  },
  paginatorContainer: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    bottom: "40px",
    zIndex: 9,
    width: "90%",
  },
  controlLeft: {
    float: "right",
    height: "54px",
    width: "54px",
    cursor: "pointer",
    [theme.breakpoints.up("xl")]: {
      height: "60px",
      width: "60px",
    },
  },
  controlRight: {
    float: "left",
    height: "54px",
    width: "54px",
    cursor: "pointer",
    [theme.breakpoints.up("xl")]: {
      height: "60px",
      width: "60px",
    },
  },
  indexSelector: {
    margin: "0 5px",
    width: "30%",
    maxWidth: "223px",
    height: "9px",
    borderRadius: "9px",
  },
  indexContainer: {
    display: "flex",
    justifyContent: "center",
    cursor: "pointer",
  },
  indexDisabled: {
    backgroundColor: "white",
  },
  indexEnabled: {
    backgroundImage: "linear-gradient(to bottom right, #BF862D, #ECC878)",
  },
  iconContainer: {
    backgroundImage: "linear-gradient(to bottom right, #BF862D, #ECC878)",
    width: "54px",
    height: "54px",
    display: "none",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
    "&:hover": {
      backgroundImage: "linear-gradient(to bottom right, #ECC878, #BF862D)",
    },
  },
  icon: {
    width: "30px",
    height: "30px",
    color: "white",
    "&:hover": {
      width: "35px",
      height: "35px",
    },
  },
}));

interface Props {
  data: any[];
  activeIndex: number;
  updateIndex: (index: number) => void;
}

const CarouselDesktopNavigator = ({
  data,
  activeIndex,
  updateIndex,
}: Props) => {
  const classes = useStyles();

  return (
    <Grid className={classes.paginatorContainer}>
      <Grid item className={classes.iconContainer}>
        <FontAwesomeIcon
          className={classes.icon}
          icon={faArrowLeft}
          onClick={() =>
            updateIndex(activeIndex === 0 ? data.length - 1 : activeIndex - 1)
          }
        />
      </Grid>

      <Grid item xs={6} sm={10}>
        <div className={classes.indexContainer}>
          {data.map((section, i) => (
            <div
              key={`goalKey${i}`}
              className={`${classes.indexSelector} ${
                i === activeIndex ? classes.indexEnabled : classes.indexDisabled
              }`}
              onClick={() => updateIndex(i)}
              aria-hidden="true"
            ></div>
          ))}
        </div>
      </Grid>

      <Grid item className={classes.iconContainer}>
        <FontAwesomeIcon
          className={classes.icon}
          icon={faArrowRight}
          onClick={() =>
            updateIndex(activeIndex === data.length - 1 ? 0 : activeIndex + 1)
          }
        />
      </Grid>
    </Grid>
  );
};

export default CarouselDesktopNavigator;
