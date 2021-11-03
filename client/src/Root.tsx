import React from 'react';
import { Provider } from 'react-redux';
import store from './ducks/store';
import Routes from './routes';
import GlobalStyle from './themes/GlobalStyle';

const Root: React.FC = () => {

  return (
    <Provider store={store}>
      <GlobalStyle />
      <Routes />
    </Provider>
  )
};

export default Root;
