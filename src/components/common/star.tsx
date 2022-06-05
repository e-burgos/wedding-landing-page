import { makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import orange from '../../../assets/images/icons/estrella-naranja.png';
import red from '../../../assets/images/icons/estrella-roja.png';
import rose from '../../../assets/images/icons/estrella-rosa.png';
import green from '../../../assets/images/icons/estrella-verde.png';
import violet from '../../../assets/images/icons/estrella-violeta.png';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    '&.start': {
      transform: 'rotate(-27deg)',
    },
    '&.end': {
      transform: 'rotate(27deg)',
    },
    [theme.breakpoints.down('md')]: {
      width: '6vh',
    },
    [theme.breakpoints.up('md')]: {
      width: 30,
    },
    [theme.breakpoints.up('lg')]: {
      width: 50,
    },
  },
}));

const imagesMap = {
  orange: orange,
  red: red,
  rose: rose,
  green: green,
  violet: violet,
};

interface StarProps {
  color: 'orange' | 'red' | 'rose' | 'green' | 'violet';
  position: 'start' | 'end';
}

const Star = ({ color, position }: StarProps) => {
  const classes = useStyles();
  return <img src={imagesMap[color]} alt='star' className={`${classes.root} ${position}`} />;
};

export default Star;
