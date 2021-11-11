import React, { useEffect } from 'react';
import welcomeImage from 'assets/welcomeImage.png'
import { Container, WelcomeImage, WelcomeHeader, ButtonContainer } from 'screens/RegisterSuccessed/RegisterSuccessed.styles';
import { useDispatch } from 'react-redux';
import { enterAccountCreatedScreen } from 'ducks/modules/Auth/authSlice';
import { Button } from 'components/atoms';
import { useHistory } from 'react-router';

const Register: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(enterAccountCreatedScreen());
  }, [dispatch]);

  const onPress: () => void = () => history.push('/');

  return (
    <Container>
      <WelcomeHeader>Konto zostało pomyślnie utworzone.</WelcomeHeader>
      <WelcomeImage src={welcomeImage} alt="Login image" />
      <ButtonContainer>
        <Button onPress={onPress} label="Przejdź do logowania" />
      </ButtonContainer>
    </Container>
  );
};

export default Register;
