import React from 'react';

export interface ModalPropsI {
  onClose: () => void;
  title: string;
  body: React.ReactNode;
}