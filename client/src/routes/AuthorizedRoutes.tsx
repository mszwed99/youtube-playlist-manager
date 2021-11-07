import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from 'screens/Home/Home';


const AuthorizedRoutes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="*" component={Home} />
    </Switch>
  </Router>
);

export default AuthorizedRoutes;
