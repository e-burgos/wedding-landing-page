/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useRef } from "react";
import { makeStyles, Theme, Grid } from "@material-ui/core";
import { videoSection } from "../../data/videoSection";
import { useIntersectionObserver } from "../../hooks/IntersectionObserver.hook";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundImage: `url(${videoSection.bg.bgM})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    flexGrow: 1,
    height: "100vh",
    overflow: "hidden",
    fontFamily: "HeadingFont",
    background: "black",
    zIndex: -1,
  },

  videoVimeo: {
    borderImage: `url(${videoSection.icons.border}) 30 20 stretch`,
    borderImageSlice: "70",
    borderWidth: "16px",
    borderStyle: "solid",
    width: "95%",
    height: "auto",
    marginLeft: "-5px",
    zIndex: 10,
  },
  container: {
    position: "relative",
    overflow: "hidden",
    width: "100%",
    height: "100%",
    justifySelf: "center",
    alignSelf: "center",
    justifyContent: "center",
    display: "flex",
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
}));

const LandingPageGameViewMobile = () => {
  const classes = useStyles();
  const refSection = useRef(null);
  const isSectionVisible = useIntersectionObserver(
    refSection,
    { threshold: 0 },
    true
  );
  return (
    <>
      <div className={classes.root}>
        <div className={classes.container}>
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            {/* <video width='320' height='240' controls className={classes.videoVimeo}>
                <source
                  type='video/mp4'
                  src='https://player.vimeo.com/progressive_redirect/playback/685996692/rendition/1080p?loc=external&signature=e38ba4430f298a0d86fd6e8ab102527d1ba2fc24f5b27c421e630dc8fab1e3cf'
                />
              </video> */}
            <div className={classes.videoVimeo}>
              <iframe
                src={videoSection.video[0].src}
                width="350"
                height="150"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div
              ref={refSection}
              className={`${isSectionVisible ? classes.bgShadow : ""}`}
            />
          </Grid>
        </div>
      </div>
    </>
  );
};

export default LandingPageGameViewMobile;
