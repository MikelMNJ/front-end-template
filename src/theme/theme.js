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
  raisinBlack: '#2a2829',
  brightNavyBlue: '#0c77d4',
  carolinaBlue: '#479eeb',
  congoPink: '#f1746e',

  white: '#fafafa',
  lightGrey: '#d0cfcf',
  grey: '#868383',
  darkGrey: '#343232',
  black: '#1e1e1e',
  transparent: 'transparent',

  success: '#50b990',
  warning: '#f0b800',
  error: '#c93434',
};

const modes = {
  [themes.light]: {
    primary: colors.white,
    onPrimary: colors.greyWeb,
    secondary: colors.raisinBlack,
    onSecondary: colors.lightGrey,
    accent: colors.brightNavyBlue,
    onAccent: colors.white,
    accentHover: colors.carolinaBlue,
    onAccentHover: colors.white,

    white: colors.white,
    grey: colors.grey,
    lightGrey: colors.lightGrey,
    darkGrey: colors.darkGrey,
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
    secondary: colors.black,
    onSecondary: colors.lightGrey,
    accent: colors.brightNavyBlue,
    onAccent: colors.darkGrey,
    accentHover: colors.carolinaBlue,
    onAccentHover: colors.darkGrey,

    white: colors.white,
    grey: colors.grey,
    lightGrey: colors.lightGrey,
    darkGrey: colors.darkGrey,
    black: colors.black,
    transparent: colors.transparent,

    success: colors.success,
    warning: colors.warning,
    error: colors.congoPink,
    info: colors.info,
  },
};

const fonts = {
  primary: {
    thin: {},
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
    normal: {
      family: 'Nunito-Regular',
      src: NunitoRegular.default,
      format: 'truetype',
      weight: 400,
      style: 'normal',
    },
    medium: {},
    semiBold: {},
    bold: {
      family: 'Nunito-Bold',
      src: NunitoBold.default,
      format: 'truetype',
      weight: 700,
      style: 'normal',
    },
    extraBold: {},
    black: {
      family: 'Nunito-Black',
      src: NunitoBlack.default,
      format: 'truetype',
      weight: 900,
      style: 'normal',
    },
  },

  secondary: {
    thin: {},
    extraLight: {},
    light: {
      family: 'OpenSans-Light',
      src: OpenSansLight.default,
      format: 'truetype',
      weight: 300,
      style: 'normal',
    },
    normal: {
      family: 'OpenSans-Regular',
      src: OpenSansRegular.default,
      format: 'truetype',
      weight: 400,
      style: 'normal',
    },
    medium: {},
    semiBold: {},
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
    black: {},
  },
};

const theme = { colors, modes, fonts };

export { theme };