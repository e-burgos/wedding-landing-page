import { Grid, makeStyles, Theme } from '@material-ui/core';
import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import background from '../../../../assets/images/nfts/bgMobile.webp';
import { sectionNfts } from '../landingPage/Retratos';
import CarouselComponent from '../common/Carousel';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'hidden',
    fontFamily: 'HeadingFont',
    color: '#68030F',
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundSize: '100% 100%',
    height: '100vh',
    zIndex: -2,
  },
  contentContainer: {
    padding: '12vh 10%',
  },
  imageFront: {
    width: '80%',
  },
  imageBack: {
    width: '80%',
  },
  headerImage: {
    width: '90%',
  },
  contentText: {
    fontFamily: 'HeadingFontBold',
    fontWeight: 700,
    textAlign: 'center',
    marginTop: '15px',
    maxWidth: '100%',
    lineHeight: '15pt',
    fontSize: '12pt',
  },
  carousel: {
    maxHeight: '65%',
    marginTop: '-30px',
  },
}));

const RetratosM = () => {
  const classes = useStyles();
  const [flippedIndex, setFlippedIndex] = useState(-1);

  return (
    <>
      <div className={classes.root} id='nfts'>
        <Grid
          container
          direction='column'
          alignItems='center'
          justifyContent='space-between'
          className={`${classes.background} ${classes.contentContainer}`}>
          <Grid container direction='column' alignItems='center' justifyContent='center'>
            <img
              aria-hidden='true'
              src={sectionNfts.pageInfo.titleImg}
              alt='imageheader'
              className={classes.headerImage}
            />
            <p className={classes.contentText}>{sectionNfts.pageInfo.text}</p>
          </Grid>

          <CarouselComponent scrollButtons className={classes.carousel}>
            {sectionNfts.nftsListMobile.map((section, index) => (
              <ReactCardFlip
                key={index}
                isFlipped={index === flippedIndex}
                flipDirection='horizontal'
                flipSpeedBackToFront={1}
                flipSpeedFrontToBack={1}>
                <img
                  aria-hidden='true'
                  src={section.image}
                  alt='imageheader'
                  className={classes.imageFront}
                  onClick={() => setFlippedIndex(index)}
                />
                <img
                  aria-hidden='true'
                  src={section.backImage}
                  alt='imageheader'
                  className={classes.imageBack}
                  onClick={() => setFlippedIndex(-1)}
                />
              </ReactCardFlip>
            ))}
          </CarouselComponent>
        </Grid>
      </div>
    </>
  );
};

export default RetratosM;
