import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'themes/GlobalStyle';
import { theme } from 'themes';
import { Provider } from 'react-redux';
import store from 'ducks/store';
import { ProvidersTemplateI } from './ProvidersTemplate.types';

const ProvidersTemplate: React.FC<ProvidersTemplateI> = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        {children}
      </Provider>
    </ThemeProvider>
  </>
);

export default ProvidersTemplate;