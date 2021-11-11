import React from 'react';
import loginImage from 'assets/loginImage.png'
import { RegisterForm } from 'components/organisms';
import { Container, LoginImage, ContentContainer } from 'screens/Login/Login.styles';
import { useSelector } from 'react-redux';
import { RootState } from 'ducks/modules/rootReducer';
import { useHistory } from 'react-router-dom';

const Register: React.FC = () => {
  const history = useHistory();
  const { wasAccountCreated } = useSelector((state: RootState) => state.auth);

  if (wasAccountCreated) {
    history.push('/success');
  }

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
