/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import { makeStyles, Theme, Grid } from '@material-ui/core';
import { videoSection } from '../../../../data/videoSection';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundImage: `url(${videoSection.bg.bgM})`,
    backgroundSize: '100% 100%',
    backgroundPosition: 'center',
    flexGrow: 1,
    height: '100vh',
    overflow: 'hidden',
    fontFamily: 'HeadingFont',
    background: 'black',
  },

  videoVimeo: {
    borderImage: `url(${videoSection.icons.border}) 30 20 stretch`,
    borderImageSlice: '70',
    borderWidth: '16px',
    borderStyle: 'solid',
    width: '95%',
    height: 'auto',
    marginLeft: '-5px',
  },
  assetContainer: {
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    justifySelf: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
}));

const LandingPageGameViewMobile = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <div className={classes.assetContainer}>
          <Grid container direction='row' alignItems='center' justifyContent='center'>
            {/* <video width='320' height='240' controls className={classes.videoVimeo}>
                <source
                  type='video/mp4'
                  src='https://player.vimeo.com/progressive_redirect/playback/685996692/rendition/1080p?loc=external&signature=e38ba4430f298a0d86fd6e8ab102527d1ba2fc24f5b27c421e630dc8fab1e3cf'
                />
              </video> */}
            <div className={classes.videoVimeo}>
              <iframe
                src={videoSection.video[0].src}
                width='350'
                height='150'
                frameBorder='0'
                allow='autoplay; fullscreen; picture-in-picture'
                allowFullScreen
              />
            </div>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default LandingPageGameViewMobile;
