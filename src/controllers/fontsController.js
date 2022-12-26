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

export { fonts };