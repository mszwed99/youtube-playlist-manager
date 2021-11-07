import React from 'react';
import loginImage from 'assets/loginImage.png'
import { LoginForm } from 'components/organisms';
import { Container, LoginImage, ContentContainer } from './Login.styles';

const Login: React.FC = () => {

  return (
    <Container>
      <LoginImage src={loginImage} alt="Login image" />
      <ContentContainer>
        <LoginForm />
      </ContentContainer>
    </Container>
  );
};

export default Login;
