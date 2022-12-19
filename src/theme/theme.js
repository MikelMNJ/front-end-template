import { appConstants } from 'modules';
import {
  NunitoExtraLight,
  NunitoLight,
  NunitoRegular,
  NunitoBold,
  NunitoBlack,
  OpenSansLight,
  OpenSansRegular,
  OpenSansBold,
  OpenSansExtraBold,
} from 'static';

const { themes } = appConstants;

const colors = {
  greyWeb: '#7a7d7d',
  lightGrey: '#d0cfcf',
  raisinBlack: '#2a2829',
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
  [themes.light]: {
    primary: colors.white,
    onPrimary: colors.greyWeb,
    secondary: colors.raisinBlack,
    onSecondary: colors.lightGrey,
    accent: colors.pacificBlue,
    onAccent: colors.black,
    accentHover: colors.darkSkyBlue,
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

  [themes.dark]: {
    primary: colors.raisinBlack,
    onPrimary: colors.white,
    secondary: colors.lightGrey,
    onSecondary: colors.greyWeb,
    accent: colors.pacificBlue,
    onAccent: colors.black,
    accentHover: colors.darkSkyBlue,
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
    extraLight: {
      family: 'Nunito-ExtraLight',
      src: NunitoExtraLight.default,
      format: 'truetype',
      weight: 200,
      style: 'normal',
    },
    light: {
      family: 'Nunito-Light',
      src: NunitoLight.default,
      format: 'truetype',
      weight: 300,
      style: 'normal',
    },
    regular: {
      family: 'Nunito-Regular',
      src: NunitoRegular.default,
      format: 'truetype',
      weight: 400,
      style: 'normal',
    },
    bold: {
      family: 'Nunito-Bold',
      src: NunitoBold.default,
      format: 'truetype',
      weight: 700,
      style: 'normal',
    },
    black: {
      family: 'Nunito-Black',
      src: NunitoBlack.default,
      format: 'truetype',
      weight: 900,
      style: 'normal',
    },
  },

  secondary: {
    light: {
      family: 'OpenSans-Light',
      src: OpenSansLight.default,
      format: 'truetype',
      weight: 300,
      style: 'normal',
    },
    regular: {
      family: 'OpenSans-Regular',
      src: OpenSansRegular.default,
      format: 'truetype',
      weight: 400,
      style: 'normal',
    },
    bold: {
      family: 'OpenSans-Bold',
      src: OpenSansBold.default,
      format: 'truetype',
      weight: 700,
      style: 'normal',
    },
    extraBold: {
      family: 'OpenSans-ExtraBold',
      src: OpenSansExtraBold.default,
      format: 'truetype',
      weight: 800,
      style: 'normal',
    },
  },
};

const theme = { colors, modes, fonts };

export { theme };