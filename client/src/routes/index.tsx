import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from 'screens/Home/Home';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Router>
);

export default Routes;
