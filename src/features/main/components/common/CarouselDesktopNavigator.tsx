import { makeStyles, Theme, Grid } from '@material-ui/core';
import React, { useState } from 'react';
import nextDisabled from '../../../../assets/images/carousel/right.webp';
import nextEnabled from '../../../../assets/images/carousel/rightHover.webp';
import prevDisabled from '../../../../assets/images/carousel/left.webp';
import prevEnabled from '../../../../assets/images/carousel/leftHover.webp';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'hidden',
    fontFamily: 'HeadingFont',
    color: 'white',
  },
  paginatorContainer: {
    position: 'absolute',
    bottom: '40px',
    zIndex: 9,
    width: '90%',
    maxWidth: '1440px',
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
    maxWidth: '223px',
    height: '9px',
    borderRadius: '9px',
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
    backgroundColor: 'linear-gradient(to bottom right, #BF862D, #ECC878)',
  },
}));

interface Props {
  data: any[];
  activeIndex: number;
  updateIndex: (index: number) => void;
}

const CarouselDesktopNavigator = ({ data, activeIndex, updateIndex }: Props) => {
  const classes = useStyles();
  const [hoverOn, setHoverOn] = useState('');

  return (
    <Grid direction='row' container alignItems='center' justifyContent='center' className={classes.paginatorContainer}>
      <Grid item xs={3} sm={1}>
        <img
          src={hoverOn === 'left' ? prevEnabled : prevDisabled}
          alt='prev'
          className={classes.controlLeft}
          onClick={() => updateIndex(activeIndex - 1)}
          aria-hidden='true'
          onMouseEnter={() => setHoverOn('left')}
          onMouseLeave={() => setHoverOn('')}
        />
      </Grid>
      <Grid item xs={6} sm={10}>
        <div className={classes.indexContainer}>
          {data.map((section, i) => (
            <div
              key={`goalKey${i}`}
              className={`${classes.indexSelector} ${i === activeIndex ? classes.indexEnabled : classes.indexDisabled}`}
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
  );
};

export default CarouselDesktopNavigator;
