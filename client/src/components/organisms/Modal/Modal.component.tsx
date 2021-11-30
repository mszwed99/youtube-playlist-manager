import React from 'react'
import { ModalOverlay, ModalContainer } from './Modal.styles';
import { ModalPropsI } from './Modal.types';

export const Modal: React.FC<ModalPropsI> = ({ onClose, body }) => {
  return (
    <>
      <ModalOverlay onClick={onClose} />
      <ModalContainer>
        {body}
      </ModalContainer>
    </>
  );
};