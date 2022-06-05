import React, { useRef } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { partySection } from '../../../../data/partySection';
import { useIntersectionObserver } from '../../../../hooks/IntersectionObserver.hook';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'hidden',
  },
  background: {
    margin: '0 auto',
    backgroundImage: `url(${partySection.bg.bg})`,
    backgroundSize: 'cover',
    height: '100vh',
    zIndex: -2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgShadow: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundImage: `url(${partySection.icons.gif})`,
    backgroundSize: 'repeat',
    indexZ: -1,
    animation: 'slide-in-right 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
  },
}));

const FiestaM = () => {
  const classes = useStyles();
  const refSection = useRef(null);
  const isSectionVisible = useIntersectionObserver(refSection, { threshold: 0 }, true);

  return (
    <div className={classes.root} id='page1'>
      <Grid className={classes.background}>
        <div ref={refSection} className={`${isSectionVisible ? classes.bgShadow : ''}`} />
      </Grid>
    </div>
  );
};

export default FiestaM;