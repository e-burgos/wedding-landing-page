import { Grid, makeStyles, Theme } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import nextDisabled from '../../../../assets/images/carousel/right.webp';
import nextEnabled from '../../../../assets/images/carousel/rightHover.webp';
import prevDisabled from '../../../../assets/images/carousel/left.webp';
import prevEnabled from '../../../../assets/images//carousel/leftHover.webp';
import background from '../../../../assets/images/nfts/bg.webp';
import header from '../../../../assets/images/nfts/header.webp';
import nfts1 from '../../../../assets/images/nfts/goldenNfts.webp';
import nfts1Back from '../../../../assets/images/nfts/goldenBackNfts.webp';
import nfts2 from '../../../../assets/images/nfts/scottishNfts.webp';
import nfts2Back from '../../../../assets/images/nfts/scottishBackNfts.webp';
import { useIntersectionObserver } from '../../../../hooks/IntersectionObserver.hook';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'hidden',
    fontFamily: 'HeadingFont',
    color: '#68030F',
  },
  background: {
    margin: '0 auto',
    backgroundImage: `url(${background})`,
    backgroundSize: '100% 100%',
    height: '100vh',
    zIndex: -2,
  },
  controlLeft: {
    float: 'right',
    height: '54px',
    width: '54px',
    cursor: 'pointer',
    [theme.breakpoints.up('xl')]: {
      height: '60px',
      width: '60px',
    },
  },
  controlRight: {
    float: 'left',
    height: '54px',
    width: '54px',
    cursor: 'pointer',
    [theme.breakpoints.up('xl')]: {
      height: '60px',
      width: '60px',
    },
  },
  indexSelector: {
    margin: '0 12px',
    width: '30%',
    maxWidth: '8vh',
    height: '9px',
    borderRadius: '9px',
    [theme.breakpoints.down('md')]: {
      margin: '0 7px',
      maxWidth: '6vh',
      height: '5px',
    },
  },
  indexContainer: {
    display: 'flex',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  indexDisabled: {
    backgroundColor: 'white',
  },
  indexEnabled: {
    backgroundColor: '#68030F',
  },
  contentText: {
    fontFamily: 'HeadingFontBold',
    fontWeight: 700,
    textAlign: 'center',
    marginTop: '15px',
    maxWidth: '70%',
    [theme.breakpoints.down('md')]: {
      lineHeight: '22px',
      fontSize: '18px',
    },
    [theme.breakpoints.up('md')]: {
      lineHeight: '24px',
      fontSize: '20px',
    },
    [theme.breakpoints.up('lg')]: {
      lineHeight: '28px',
      fontSize: '24px',
    },
  },
  paginatorContainer: {
    position: 'absolute',
    bottom: '40px',
    zIndex: 9,
    width: '90%',
    maxWidth: '1440px',
  },
  bodyContainer: {
    maxWidth: '1440px',
    marginBottom: 'auto',
    marginTop: 'auto',
    padding: 0,
  },
  cardContainer: {
    justifyContent: 'center',
  },
  imageNfts: {
    padding: '0px',
    [theme.breakpoints.only('sm')]: {
      maxHeight: '35vh',
    },
    [theme.breakpoints.only('md')]: {
      maxHeight: '40vh',
    },
    [theme.breakpoints.only('lg')]: {
      maxHeight: '45vh',
    },
    [theme.breakpoints.only('xl')]: {
      maxHeight: '50vh',
    },
  },
  animationContainer: {
    animation: 'fadeIn 2s ease-in-out',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: '120px',
    [theme.breakpoints.only('sm')]: {
      width: '350px',
      bottom: '150px',
    },
    [theme.breakpoints.only('md')]: {
      width: '500px',
      bottom: '150px',
    },
    [theme.breakpoints.only('lg')]: {
      width: '700px',
    },
    [theme.breakpoints.only('xl')]: {
      width: '800px',
      bottom: '150px',
    },
  },
  textAnimation: {
    opacity: 0,
    animation: 'fadeIn 2s both 1',
    position: 'absolute',
    top: '90px',
    [theme.breakpoints.only('lg')]: {
      top: '80px',
    },
    [theme.breakpoints.only('xl')]: {
      top: '100px',
    },
  },
  headerImage: {
    width: '300px',
    [theme.breakpoints.down('md')]: {
      width: '300px',
    },
    [theme.breakpoints.up('xl')]: {
      width: '400px',
    },
  },
}));

const headerImg = new Image();
headerImg.src = header;

const image1Nft = new Image();
const image1NftBack = new Image();
image1Nft.src = nfts1;
image1NftBack.src = nfts1Back;

const image2Nft = new Image();
const image2NftBack = new Image();
image2Nft.src = nfts2;
image2NftBack.src = nfts2Back;

export const sectionNfts = {
  pageInfo: {
    title: 'The Best Pets!',
    text: 'Adopt a Pet and start playing! Take care of them, gain Daily Income, engage in profitable mini-games and more!',
    titleImg: headerImg.src,
  },
  nftsList: [
    {
      cards: [
        {
          name: 'nfts1',
          title: 'NFTS 1',
          text: `Lorem ipsum dolor sit amet`,
          image: image1Nft.src,
          backImage: image1NftBack.src,
        },
        {
          name: 'nfts2',
          title: 'NFTS 2',
          text: `Lorem ipsum dolor sit amet`,
          image: image2Nft.src,
          backImage: image2NftBack.src,
        },
      ],
      name: 'Group1',
    },
    {
      cards: [
        {
          name: 'nfts3',
          title: 'NFTS 3',
          text: `Lorem ipsum dolor sit amet`,
          image: image1Nft.src,
          backImage: image1NftBack.src,
        },
        {
          name: 'nfts4',
          title: 'NFTS 4',
          text: `Lorem ipsum dolor sit amet`,
          image: image2Nft.src,
          backImage: image2NftBack.src,
        },
      ],
      name: 'Group3',
    },
    {
      cards: [
        {
          name: 'nfts5',
          title: 'NFTS 5',
          text: `Lorem ipsum dolor sit amet`,
          image: image1Nft.src,
          backImage: image1NftBack.src,
        },
        {
          name: 'nfts6',
          title: 'NFTS 6',
          text: `Lorem ipsum dolor sit amet`,
          image: image2Nft.src,
          backImage: image2NftBack.src,
        },
      ],
      name: 'Group3',
    },
    {
      cards: [
        {
          name: 'nfts7',
          title: 'NFTS 7',
          text: `Lorem ipsum dolor sit amet`,
          image: image1Nft.src,
          backImage: image1NftBack.src,
        },
        {
          name: 'nfts8',
          title: 'NFTS 8',
          text: `Lorem ipsum dolor sit amet`,
          image: image2Nft.src,
          backImage: image2NftBack.src,
        },
      ],
      name: 'Group4',
    },
    {
      cards: [
        {
          name: 'nfts9',
          title: 'NFTS 9',
          text: `Lorem ipsum dolor sit amet`,
          image: image1Nft.src,
          backImage: image1NftBack.src,
        },
        {
          name: 'nfts 10',
          title: 'NFTS 10',
          text: `Lorem ipsum dolor sit amet`,
          image: image2Nft.src,
          backImage: image2NftBack.src,
        },
      ],
      name: 'Group5',
    },
  ],
  nftsListMobile: [
    {
      name: 'nfts1',
      title: 'NFTS 1',
      text: `Lorem ipsum dolor sit amet`,
      image: image1Nft.src,
      backImage: image1NftBack.src,
    },
    {
      name: 'nfts2',
      title: 'NFTS 2',
      text: `Lorem ipsum dolor sit amet`,
      image: image2Nft.src,
      backImage: image2NftBack.src,
    },
    {
      name: 'nfts3',
      title: 'NFTS 3',
      text: `Lorem ipsum dolor sit amet`,
      image: image1Nft.src,
      backImage: image1NftBack.src,
    },
    {
      name: 'nfts4',
      title: 'NFTS 4',
      text: `Lorem ipsum dolor sit amet`,
      image: image2Nft.src,
      backImage: image2NftBack.src,
    },
    {
      name: 'nfts5',
      title: 'NFTS 5',
      text: `Lorem ipsum dolor sit amet`,
      image: image1Nft.src,
      backImage: image1NftBack.src,
    },
    {
      name: 'nfts6',
      title: 'NFTS 6',
      text: `Lorem ipsum dolor sit amet`,
      image: image2Nft.src,
      backImage: image2NftBack.src,
    },
    {
      name: 'nfts7',
      title: 'NFTS 7',
      text: `Lorem ipsum dolor sit amet`,
      image: image1Nft.src,
      backImage: image1NftBack.src,
    },
    {
      name: 'nfts8',
      title: 'NFTS 8',
      text: `Lorem ipsum dolor sit amet`,
      image: image2Nft.src,
      backImage: image2NftBack.src,
    },
    {
      name: 'nfts9',
      title: 'NFTS 9',
      text: `Lorem ipsum dolor sit amet`,
      image: image1Nft.src,
      backImage: image1NftBack.src,
    },
    {
      name: 'nfts 10',
      title: 'NFTS 10',
      text: `Lorem ipsum dolor sit amet`,
      image: image2Nft.src,
      backImage: image2NftBack.src,
    },
  ],
};

const Retratos = () => {
  const classes = useStyles();
  const [activeIndex, setActiveIndex] = useState(0);
  const [flip, setFlip] = useState('');
  const [classNameSet, setClassName] = useState('');
  const [hoverOn, setHoverOn] = useState('');
  const refSection = useRef(null);
  const isSectionVisible = useIntersectionObserver(refSection, { threshold: 0 }, true);

  useEffect(() => {
    setClassName(classes.animationContainer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  const updateIndex = (newIndex: number) => {
    setClassName('');
    if (newIndex >= 0 && newIndex < sectionNfts.nftsList.length) {
      setFlip('');
      setActiveIndex(newIndex);
      setTimeout(() => {
        setClassName(classes.animationContainer);
      }, 500);
    } else if (newIndex >= sectionNfts.nftsList.length) {
      setFlip('');
      setActiveIndex(0);
    }
  };

  return (
    <>
      <div className={classes.root} id='nfts' onPointerEnter={(e) => setFlip('')}>
        <Grid
          container
          direction='column'
          alignItems='center'
          justifyContent='space-between'
          className={classes.background}
          onPointerEnter={(e) => setFlip('')}>
          <Grid
            container
            direction='row'
            alignItems='center'
            justifyContent='center'
            ref={refSection}
            onPointerEnter={(e) => setFlip('')}
            className={`${classes.bodyContainer} ${isSectionVisible ? classes.textAnimation : ''}`}>
            {isSectionVisible && (
              <Grid container direction='column' alignItems='center' justifyContent='center'>
                <img src={header} alt='imageheader' className={classes.headerImage} />
                <p className={classes.contentText}>{sectionNfts.pageInfo.text}</p>
              </Grid>
            )}
          </Grid>

          <Grid
            container
            direction='row'
            alignItems='center'
            justifyContent='center'
            className={classNameSet}
            onPointerEnter={(e) => setFlip('')}>
            {sectionNfts.nftsList[activeIndex].cards.map((card, i) => (
              <Grid item sm={3} container key={`${card.name} cardNfts`} className={classes.cardContainer}>
                <ReactCardFlip
                  isFlipped={flip === card.name}
                  flipDirection='horizontal'
                  flipSpeedBackToFront={1}
                  flipSpeedFrontToBack={1}>
                  <div>
                    <img
                      onPointerEnter={(e) => setFlip(card.name)}
                      onFocus={() => void 0}
                      aria-hidden='true'
                      src={card.image}
                      alt='imageheader'
                      className={classes.imageNfts}
                    />
                  </div>
                  <div onPointerOut={(e) => setFlip('')} onFocus={() => void 0} aria-hidden='true'>
                    <img src={card.backImage} alt='imageheader' className={classes.imageNfts} />
                  </div>
                </ReactCardFlip>
              </Grid>
            ))}
          </Grid>

          <Grid
            direction='row'
            container
            alignItems='center'
            justifyContent='center'
            className={classes.paginatorContainer}
            onPointerEnter={(e) => setFlip('')}>
            <Grid item xs={3} sm={1}>
              <img
                src={hoverOn === 'left' ? prevEnabled : prevDisabled}
                alt='prev'
                className={classes.controlLeft}
                onClick={() => (activeIndex === 0 ? null : updateIndex(activeIndex - 1))}
                aria-hidden='true'
                onMouseEnter={() => setHoverOn('left')}
                onMouseLeave={() => setHoverOn('')}
              />
            </Grid>
            <Grid item xs={6} sm={10}>
              <div className={classes.indexContainer}>
                {sectionNfts.nftsList.map((section, i) => (
                  <div
                    key={`goalKey${i}`}
                    className={`${classes.indexSelector} ${
                      i === activeIndex ? classes.indexEnabled : classes.indexDisabled
                    }`}
                    onClick={() => updateIndex(i)}
                    aria-hidden='true'></div>
                ))}
              </div>
            </Grid>
            <Grid item xs={3} sm={1}>
              <img
                src={hoverOn === 'right' ? nextEnabled : nextDisabled}
                alt='next'
                className={classes.controlRight}
                onClick={() => updateIndex(activeIndex + 1)}
                aria-hidden='true'
                onMouseEnter={() => setHoverOn('right')}
                onMouseLeave={() => setHoverOn('')}
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Retratos;
