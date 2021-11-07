import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Login from 'screens/Login/Login.component';

const UnauthorizedRoutes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="*" component={Login} />
    </Switch>
  </Router>
);

export default UnauthorizedRoutes;
