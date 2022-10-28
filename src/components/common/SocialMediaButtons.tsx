/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import { social } from "../../data/social";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faLocationCrosshairs,
  faGift,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "70px",
    height: "250px",
    position: "fixed",
    float: "right",
    right: "0px",
    top: "33vh",
    backgroundImage: `url(${social.container.socialContainer})`,
    zIndex: 99999,
    backgroundSize: "cover",
  },
  container: {
    width: "59px",
    float: "right",
    height: "100%",
  },
  iconContainer: {
    backgroundImage: "linear-gradient(to bottom right, #BF862D, #ECC878)",
    width: "54px",
    height: "54px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
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
  gridContainer: {
    height: "100%",
    padding: "20px 0px 20px 0px",
  },
}));

const SocialMediaButtons = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <div className={classes.container}>
          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="space-around"
            className={classes.gridContainer}
          >
            <Grid item className={classes.iconContainer}>
              <a href={social.links.instagram} target="_blank" rel="noreferrer">
                <FontAwesomeIcon className={classes.icon} icon={faCamera} />
              </a>
            </Grid>

            <Grid item className={classes.iconContainer}>
              <a href={social.links.location} target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  className={classes.icon}
                  icon={faLocationCrosshairs}
                />
              </a>
            </Grid>

            <Link
              activeClass="active"
              to="page5"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onFocus={() => void 0}
              aria-hidden="true"
            >
              <Grid item className={classes.iconContainer}>
                <FontAwesomeIcon className={classes.icon} icon={faGift} />
              </Grid>
            </Link>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default SocialMediaButtons;
