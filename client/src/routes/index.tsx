import React from 'react';
import { RootState } from 'ducks/modules/rootReducer';
import { useSelector } from 'react-redux';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import AuthorizedRoutes from './AuthorizedRoutes';
import UnauthorizedRoutes from './UnauthorizedRoutes';

const Routes = () => {
  const { jwtToken } = useSelector((state: RootState) => state.auth);

  return (
    <Router>
      {jwtToken ? <Route exact path="/" component={AuthorizedRoutes} /> : <Route exact path="/" component={UnauthorizedRoutes} />}
    </Router>
  );
};

export default Routes;
