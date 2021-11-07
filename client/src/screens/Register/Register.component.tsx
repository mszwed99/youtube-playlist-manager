import React from 'react';
import loginImage from 'assets/loginImage.png'
import { RegisterForm } from 'components/organisms';
import { Container, LoginImage, ContentContainer } from 'screens/Login/Login.styles';

const Register: React.FC = () => {

  return (
    <Container>
      <ContentContainer>
        <RegisterForm />
      </ContentContainer>
      <LoginImage src={loginImage} alt="Login image" />
    </Container>
  );
};

export default Register;
