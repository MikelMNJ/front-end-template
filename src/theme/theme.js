import { appConstants } from 'modules';

const { theme: themeConstants } = appConstants;

const colors = {
  greyWeb: '#7a7d7d',
  lightGrey: '#d0cfcf',
  eerieBlack: '#1f1e1f',
  bittersweet: '#f96c62',
  congoPink: '#fb9089',
  pacificBlue: '#45a7ba',
  darkSkyBlue: '#8bbbc5',

  white: '#fafafa',
  grey: '#757575',
  lightGrey: '#c5c5c5',
  black: '#1d1d1d',
  transparent: 'transparent',

  success: '#50b990',
  warning: '#f0b800',
  error: '#c93434',
  info: '#0d97ff',
};

const modes = {
  [themeConstants.light]: {
    primary: colors.white,
    onPrimary: colors.greyWeb,
    secondary: colors.eerieBlack,
    onSecondary: colors.lightGrey,
    accent: colors.bittersweet,
    onAccent: colors.black,
    accentHover: colors.congoPink,
    onAccentHover: colors.black,

    white: colors.white,
    grey: colors.grey,
    lightGrey: colors.lightGrey,
    black: colors.black,
    transparent: colors.transparent,

    success: colors.success,
    warning: colors.warning,
    error: colors.error,
    info: colors.info,
  },

  [themeConstants.dark]: {
    primary: colors.eerieBlack,
    onPrimary: colors.white,
    secondary: colors.lightGrey,
    onSecondary: colors.greyWeb,
    accent: colors.bittersweet,
    onAccent: colors.black,
    accentHover: colors.congoPink,
    onAccentHover: colors.black,

    white: colors.white,
    grey: colors.grey,
    lightGrey: colors.lightGrey,
    black: colors.black,
    transparent: colors.transparent,

    success: colors.success,
    warning: colors.warning,
    error: colors.error,
    info: colors.info,
  },
};

const fonts = {
  primary: {
    thin: 'Nunito-ExtraLight, sans-serif',
    light: 'Nunito-Light, sans-serif',
    regular: 'Nunito-Regular, sans-serif',
    bold: 'Nunito-Bold, sans-serif',
    black: 'Nunito-Black, sans-serif',
  },
  secondary: {
    thin: 'OpenSans-Light, sans-serif',
    light: 'OpenSans-Light, sans-serif',
    regular: 'OpenSans-Regular, sans-serif',
    bold: 'OpenSans-Bold, sans-serif',
    black: 'OpenSans-ExtraBold, sans-serif',
  },
};

const theme = { colors, modes, fonts };

export { theme };