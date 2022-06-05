import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';

const MainRouting = () => {
  return (
    <Switch>
      <Route exact path='/' component={LandingPage} />
    </Switch>
  );
};

export default MainRouting;
