import React, { useState } from 'react';
import { Button, Input, Link } from 'components/atoms';
import { useDispatch } from 'react-redux';
import { getUserInfo, login } from 'ducks/modules/Auth/authSlice';
import { LoginFormContainer, RegisterText } from './LoginForm.styles';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.currentTarget.value);
  const handlePassowrdChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.currentTarget.value);

  const isButtonAvailable: boolean = Boolean(username.length && password.length);

  const onPress: () => void = async () => {
    await dispatch(login({ username, password }));
    dispatch(getUserInfo());
  };

  return (
    <LoginFormContainer>
      <Input value={username} onChange={handleUsernameChange} label="Login" name="username" required rounded fullwidth />
      <Input value={password} onChange={handlePassowrdChange} label="Hasło" name="password" required rounded fullwidth type="password" />
      <Button onPress={onPress} label="Zaloguj się" disabled={!isButtonAvailable} fullwidth />
      <RegisterText>Nie masz konta? <Link label="Zarejestruj się" to="/register" /></RegisterText>
    </LoginFormContainer>
  );
};
