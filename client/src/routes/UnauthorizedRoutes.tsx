import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Login from 'screens/Login/Login.component';
import Register from 'screens/Register/Register.component';

const UnauthorizedRoutes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route path="*" component={Login} />
    </Switch>
  </Router>
);

export default UnauthorizedRoutes;
