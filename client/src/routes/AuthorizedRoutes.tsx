import React from 'react';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate.component';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from 'screens/Home/Home';
import SearchVideoScreen from 'screens/SearchVideoScreen/SearchVideoScreen.component';


const AuthorizedRoutes = () => (
  <Router>
    <Switch>
      <MainTemplate>
        <Route exact path="/" component={Home} />
        <Route exact path="/search/:phrase" component={SearchVideoScreen} />
        {/* <Route path="*" component={Home} /> */}
      </MainTemplate>
    </Switch>
  </Router>
);

export default AuthorizedRoutes;
