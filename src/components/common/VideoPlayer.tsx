import { Box, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import videoBorder from '../../../assets/images/common/border.webp';

const SHOW_VIDEO = true;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflowX: 'hidden',
    overflowY: 'hidden',
  },
  formNotification: {
    position: 'fixed',
    bottom: '50px',
    left: '10px',
    width: 'max-content',
    padding: '5px 20px',
    fontFamily: 'Gainsborough',
    letterSpacing: '2.5px',
    fontWeight: 'bold',
    borderRadius: '20px',
    textTransform: 'uppercase',
    background: '#68030F',
    border: '2px solid gold',
    boxShadow: '1px 1px 20px 5px black',
    zIndex: 1500,
    animation: '$shake 2s infinite',
    [theme.breakpoints.up(960)]: {
      display: 'none',
    },
  },
  modal: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    display: 'block',
    overflowY: 'auto',
    transform: 'translate(-50%,-50%)',
    zIndex: 2000,
    width: '80%',
    background: '#68030F',
    borderRadius: '20px',
    boxShadow: '1px 1px 20px 5px black',
    padding: '10px',
    animation: '$fluent 300ms linear',
    '&:focus': {
      outline: 'none',
    },
    [`${theme.breakpoints.down(960)} and (orientation: landscape)`]: {
      top: '58%',
      height: '61%',
    },
  },
  videoBackdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    zIndex: 2000,
  },
  videoBorderContainer: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    animation: '$fluent 500ms linear',
    width: 'fit-content',
    height: 'fit-content',
    maxWidth: '80%',
    maxHeight: '90%',
    zIndex: 5000,
    '&>img': {
      width: '100%',
      height: '100%',
      position: 'absolute',
    },
  },
  videoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#68030F',
    boxShadow: '1px 1px 20px 5px black',
    padding: '0px',
    margin: '5px',
    borderRadius: '10px 0 10px 10px',
    '&:focus': {
      outline: 'none',
    },
    [theme.breakpoints.up(850)]: {
      margin: '15px',
    },
    [theme.breakpoints.up(1200)]: {
      margin: '20px',
    },
    [theme.breakpoints.up(1600)]: {
      margin: '27px',
    },
  },
  videoPlayer: {
    display: 'flex',
    justifyContent: 'center',
    '&>iframe': {
      zIndex: 100,
      borderRadius: '10px 0 10px 10px',
      [theme.breakpoints.up(350)]: {
        width: '300px',
        height: '179px',
      },
      [theme.breakpoints.up(560)]: {
        width: '450px',
        height: '250px',
      },
      [theme.breakpoints.up(850)]: {
        width: '650px',
        height: '370px',
      },
      [theme.breakpoints.up(1200)]: {
        width: '940px',
        height: '525px',
      },
      [theme.breakpoints.up(1600)]: {
        width: '1180px',
        height: '670px',
        borderRadius: '14px 0 14px 14px',
      },
      '&:focus-visible': {
        outline: 'none',
      },
    },
    '&>img': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      width: '30%',
      opacity: '.9',
    },
  },
  closeButton: {
    zIndex: 150,
    width: '3vw',
    height: '3vw',
    background:
      'linear-gradient(0deg, rgba(255,198,0,1) 0%, rgba(233,170,0,1) 40%, rgba(255,236,120,1) 59%, rgba(255,236,120,1) 100%)',
    color: 'red',
    position: 'absolute',
    right: '-1vw',
    top: '-1vw',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down(960)]: {
      width: '4vw',
      height: '4vw',
      right: '-1vw',
      top: '-1vw',
    },
    [theme.breakpoints.down(640)]: {
      width: '6vw',
      height: '6vw',
      right: '-2vw',
      top: '-2vw',
    },
    [theme.breakpoints.down(480)]: {
      width: '8vw',
      height: '8vw',
      right: '-4vw',
      top: '-4vw',
    },
  },
  closeSectionOne: {
    width: '5px',
    height: '2vw',
    background: 'red',
    borderRadius: '10px',
    transform: 'rotate(45deg)',
    position: 'absolute',
    [theme.breakpoints.down(960)]: {
      height: '2.5vw',
    },
    [theme.breakpoints.down(640)]: {
      height: '4.5vw',
    },
    [theme.breakpoints.down(480)]: {
      height: '6.5vw',
    },
  },
  closeSectionTwo: {
    width: '5px',
    height: '2vw',
    background: 'red',
    borderRadius: '10px',
    transform: 'rotate(135deg)',
    position: 'absolute',
    [theme.breakpoints.down(960)]: {
      height: '2.5vw',
    },
    [theme.breakpoints.down(640)]: {
      height: '4.5vw',
    },
    [theme.breakpoints.down(480)]: {
      height: '6.5vw',
    },
  },
  '@keyframes shake': {
    '0%': {
      transform: 'rotate(1deg)',
    },

    '50%': {
      transform: 'rotate(-1deg)',
    },

    '100%': {
      transform: 'rotate(1deg)',
    },
  },
  '@keyframes fluent': {
    '0%': {
      opacity: '0',
      transform: 'translate(-50%,-70%)',
    },
    '100%': {
      opacity: '1',
      transform: 'translate(-50%,-50%)',
    },
  },
}));

const VideoPlayer = () => {
  const [showVideo, setShowVideo] = useState(SHOW_VIDEO);

  const classes = useStyles();

  if (!showVideo) {
    return null;
  }
  return (
    <>
      <Box className={classes.videoBackdrop} onClick={() => setShowVideo(false)} />
      <Box className={classes.videoBorderContainer}>
        <img src={videoBorder} alt='' />
        <Box className={classes.videoContainer}>
          <Box className={classes.closeButton} onClick={() => setShowVideo(false)}>
            <span className={classes.closeSectionOne} />
            <span className={classes.closeSectionTwo} />
          </Box>
          <Box className={classes.videoPlayer}>
            <iframe
              src='https://www.youtube.com/embed/5cluiWCGafw?&autoplay=1'
              frameBorder='0'
              allow='fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              title='video'
            ></iframe>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default VideoPlayer;
