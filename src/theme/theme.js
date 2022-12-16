import { appConstants } from 'modules';

const { theme: themeConstants } = appConstants;

const colors = {
  greyWeb: '#7a7d7d',
  lightGrey: '#d0cfcf',
  davysGrey: '#565254',
  bittersweet: '#f96c62',
  congoPink: '#fb9089',
  pacificBlue: '#45a7ba',
  darkSkyBlue: '#8bbbc5',

  white: '#fafafa',
  grey: '#757575',
  black: '#1d1d1d',
  transparent: 'transparent',

  success: '#50b990',
  warning: '#f0b800',
  error: '#c93434',
};

const modes = {
  [themeConstants.light]: {
    primary: colors.white,
    onPrimary: colors.greyWeb,
    secondary: colors.davysGrey,
    onSecondary: colors.lightGrey,
    accent: colors.bittersweet,
    onAccent: colors.black,
    accentHover: colors.congoPink,
    onAccentHover: colors.black,

    white: colors.white,
    grey: colors.grey,
    black: colors.black,
    transparent: colors.transparent,

    success: colors.success,
    warning: colors.warning,
    error: colors.error,
  },

  [themeConstants.dark]: {
    primary: colors.davysGrey,
    onPrimary: colors.white,
    secondary: colors.lightGrey,
    onSecondary: colors.greyWeb,
    accent: colors.bittersweet,
    onAccent: colors.black,
    accentHover: colors.congoPink,
    onAccentHover: colors.black,

    white: colors.white,
    grey: colors.grey,
    black: colors.black,
    transparent: colors.transparent,

    success: colors.success,
    warning: colors.warning,
    error: colors.error,
  },
};

const fonts = {
  regular: 'Roboto, sans-serif',
  bold: 'Roboto, sans-serif',
  light: 'Roboto, sans-serif',
  thin: 'Roboto, sans-serif',
}

const theme = { colors, modes, fonts };

export { theme };