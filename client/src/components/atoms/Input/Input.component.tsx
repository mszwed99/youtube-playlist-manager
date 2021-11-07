import React from 'react';
import { StyledInput, StyledInputContainer, Label, Required } from './Input.styles';
import { InputPropsI } from './Input.types';

export const Input: React.FC<InputPropsI> = ({ value, onChange, label, name, required = false, rounded = false, fullwidth = false, type = 'text' }) => {
  return (
    <StyledInputContainer fullwidth={fullwidth}>
      <Label htmlFor={name}><Required>{required && '* '}</Required>{label}</Label>
      <StyledInput value={value} onChange={onChange} type={type} id={name} rounded={rounded} fullwidth={fullwidth} />
    </StyledInputContainer>
  );
};