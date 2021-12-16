export interface CheckboxPropsI {
  checked: boolean;
  onChange: () => void;
  label?: string;
  id: string;
  name: string;
  disabled?: boolean;
}