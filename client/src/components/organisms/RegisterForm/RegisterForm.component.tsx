import React, { useState } from 'react';
import { Button, Input, Link } from 'components/atoms';
import { useDispatch } from 'react-redux';
import { register } from 'ducks/modules/Auth/authSlice';
import { RegisterFormContainer, RegisterText, FieldCheck, Spacer } from './RegisterForm.styles';
import { RegisterCondition } from './RegisterForm.types';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.currentTarget.value);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.currentTarget.value);
  const handleRepeatedPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setRepeatedPassword(e.currentTarget.value);

  const onPress = () => dispatch(register({ username, password }));

  const registerConditions: RegisterCondition[] = [
    { condition: 'Hasło musi mieć conajmniej 8 znaków', conditionPasssed: password.length === 8 },
    { condition: 'Hasło musi posiadać conajmniej jedną wielką literę [A-Z]', conditionPasssed: /[A-Z]/.test(password) },
    { condition: 'Hasło musi zawierać coanjmniej jedną liczbę [0-9]', conditionPasssed: /\d/.test(password) },
    { condition: 'Hasła muszą się zgadzać', conditionPasssed: password === repeatedPassword && Boolean(password.length) }
  ];

  const isButtonAvailable: boolean = registerConditions.every((condition: RegisterCondition) => condition.conditionPasssed);

  const shouldRenderRegisterConditions: boolean = Boolean(password.length && repeatedPassword.length);

  return (
    <RegisterFormContainer>
      <Input value={username} onChange={handleUsernameChange} label="Login" name="username" required rounded fullwidth />
      <Input value={password} onChange={handlePasswordChange} label="Hasło" name="password" required rounded fullwidth type="password" />
      <Input value={repeatedPassword} onChange={handleRepeatedPasswordChange} label="Powtórz hasło" name="repatedPassword" required rounded fullwidth type="password" />
      {shouldRenderRegisterConditions && registerConditions.map((registerCondition: RegisterCondition, i: number) =>
        <FieldCheck key={i} passed={registerCondition.conditionPasssed}>{registerCondition.condition}</FieldCheck>)
      }
      <Spacer />
      <Button onPress={onPress} label="Zarejestruj się" disabled={!isButtonAvailable} fullwidth />
      <RegisterText>Posiadasz konto? <Link label="Zaloguj się" to="/" /></RegisterText>
    </RegisterFormContainer>

  );
};
