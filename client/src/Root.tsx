import ProvidersTemplate from 'components/templates/ProvidersTemplate/ProvidersTemplate.component';
import React from 'react';
import Routes from './routes';
import 'react-toastify/dist/ReactToastify.css';

const Root: React.FC = () => {

  return (
    <ProvidersTemplate>
      <Routes />
    </ProvidersTemplate>
  )
};

export default Root;
