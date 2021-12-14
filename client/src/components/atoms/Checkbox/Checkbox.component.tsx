import React from 'react';
import { Container, CheckboxContainer, Label } from './Checkbox.styles';
import { CheckboxPropsI } from './Checkbox.types';

export const Checkbox: React.FC<CheckboxPropsI> = ({ checked, onChange, label, disabled = false }) => {
  return (
    <Container>
      {label && <Label>{label}:</Label>}
      <CheckboxContainer disabled={disabled} type="checkbox" checked={checked} onChange={onChange} />
    </Container>
  );
};
