import React from 'react';
import { RootState } from 'ducks/modules/rootReducer';
import { useSelector } from 'react-redux';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AuthorizedRoutes from './AuthorizedRoutes';
import UnauthorizedRoutes from './UnauthorizedRoutes';

const Routes = () => {
  const { jwtToken } = useSelector((state: RootState) => state.auth);

  return (
    <Router>
      {jwtToken ? <Route component={AuthorizedRoutes} /> : <Route exact path="/" component={UnauthorizedRoutes} />}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
    </Router>
  );
};

export default Routes;
