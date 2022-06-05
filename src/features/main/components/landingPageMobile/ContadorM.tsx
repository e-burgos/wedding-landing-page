import React, { useRef } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { counterSection } from '../../../../data/counterSection';
import CountdownComponent from '../common/CountdownMobile';
import { useIntersectionObserver } from '../../../../hooks/IntersectionObserver.hook';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'hidden',
  },
  background: {
    margin: '0 auto',
    backgroundImage: `url(${counterSection.bg.bgM})`,
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
    backgroundImage: 'linear-gradient(to bottom right, #BF862D10, #ECC87890)',
    backgroundSize: '100% 100%',
    indexZ: -1,
    animation: 'slide-in-right 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
  },
  container: {
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    marginTop: '20%',
  },
}));

const Home = () => {
  const classes = useStyles();
  const refSection = useRef(null);
  const isSectionVisible = useIntersectionObserver(refSection, { threshold: 0 }, true);

  return (
    <div className={classes.root} id='page1'>
      <Grid className={classes.background}>
        <CountdownComponent />

        <div ref={refSection} className={`${isSectionVisible ? classes.bgShadow : ''}`} />
      </Grid>
    </div>
  );
};

export default Home;
