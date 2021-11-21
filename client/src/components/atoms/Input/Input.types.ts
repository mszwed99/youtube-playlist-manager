import React from 'react';

export interface InputPropsI {
  value: string;
  type?: 'password';
  label?: string;
  placeholder?: string;
  name: string;
  required?: boolean;
  rounded?: boolean;
  fullwidth?: boolean;
  transparent?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}