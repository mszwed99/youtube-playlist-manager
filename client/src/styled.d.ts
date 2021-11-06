import 'styled-components';

export interface ThemeColors {
  primary: string;
  secondary: string;
  tertiary: string;
  error: string;
  warning: string;
  white: string;
  black: string;
  grey:string;
}

export interface ThemeFonts {
  fontSize: {
    xSmall: string;
    small: string;
    medium: string;
    large: string;
    xLarge: string;
    xxLarge: string;
  },
  fontWeight: {
    bold: number,
    medium: number,
    light: number,
  }
}

export interface ThemeSpacing {
  xxSmall: number;
  xSmall: number;
  small: number;
  medium: number;
  large: number;
  xLarge: number;
  xxLarge: number;
  xxxLarge: number;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    spacing: ThemeSpacing,
    font: ThemeFonts,
    colors: ThemeColors,    
  }
}
