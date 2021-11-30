import React from "react";
import { StyledButton } from "./Button.styles";
import { ButtonPropsI } from "./Button.types";

export const Button: React.FC<ButtonPropsI> = ({ label, onPress, disabled, fullwidth = false, error = false }) => {
  return (<StyledButton onClick={onPress} disabled={disabled} error={error} fullwidth={fullwidth}>{label}</StyledButton>);
}