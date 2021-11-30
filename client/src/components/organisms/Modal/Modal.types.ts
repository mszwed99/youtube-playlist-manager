import React from 'react';

export interface ModalPropsI {
  onClose: () => void;
  body: React.ReactNode;
}