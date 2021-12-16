import { Button } from 'components/atoms';
import React from 'react'
import { FooterContainer } from './ModalFooter.styles';
import { ModalFooterPropsI } from './ModalFooter.types';

export const ModalFooter: React.FC<ModalFooterPropsI> = ({ cta1, cta1Label, cta2, cta2Label, shouldCta1BeDisabled }) => {
  return (
    <FooterContainer>
      <Button label={cta1Label} onPress={cta1} disabled={shouldCta1BeDisabled} />
      <Button label={cta2Label} onPress={cta2} secondary />
    </FooterContainer>
  );
};
