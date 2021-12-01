import React from 'react'
import { ModalOverlay, ModalContainer, ModalTitle, Spacer } from './Modal.styles';
import { ModalPropsI } from './Modal.types';

export const Modal: React.FC<ModalPropsI> = ({ onClose, title, body }) => {
  return (
    <>
      <ModalOverlay onClick={onClose} />
      <ModalContainer>
        <ModalTitle>{title}</ModalTitle>
        <Spacer />
        {body}
      </ModalContainer>
    </>
  );
};