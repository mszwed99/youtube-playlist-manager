export interface ModalFooterPropsI {
  cta1Label: string;
  cta1: () => void;
  cta2Label: string;
  cta2: () => void;
  shouldCta1BeDisabled?: boolean;
}