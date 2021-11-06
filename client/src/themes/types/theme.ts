import { ThemeSpacing } from './spacings';
import { ThemeFonts } from './fonts';
import { ThemeColors } from './colors';

export interface ThemeInterface {
  spacing: ThemeSpacing,
  font: ThemeFonts,
  colors: ThemeColors,
}