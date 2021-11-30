export interface ButtonPropsI {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  fullwidth?: boolean;
  error?: boolean;
  secondary?: boolean;
}