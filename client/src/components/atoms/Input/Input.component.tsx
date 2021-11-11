import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { StyledInput, StyledInputContainer, Label, Required, EyeIconContainer } from './Input.styles';
import { InputPropsI } from './Input.types';

export const Input: React.FC<InputPropsI> = ({ value, onChange, label, name, required = false, rounded = false, fullwidth = false, type = 'text' }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility: () => void = () => setIsPasswordVisible(!isPasswordVisible);

  const passwordInputTypeBasedOnState: string = isPasswordVisible ? 'text' : 'password';

  const inputType: string = type === 'password' ? passwordInputTypeBasedOnState : type;

  return (
    <StyledInputContainer fullwidth={fullwidth}>
      <Label htmlFor={name}><Required>{required && '* '}</Required>{label}</Label>
      <StyledInput value={value} onChange={onChange} type={inputType} id={name} rounded={rounded} fullwidth={fullwidth}></StyledInput>
      {type === 'password' && <EyeIconContainer onClick={togglePasswordVisibility}>{isPasswordVisible ? <FiEyeOff /> : <FiEye />}</EyeIconContainer>}
    </StyledInputContainer>
  );
};