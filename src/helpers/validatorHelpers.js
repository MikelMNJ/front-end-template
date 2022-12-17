import PackageJSON from '../../package.json';
import jwt_decode from 'jwt-decode';
import moment from 'moment';
import _ from 'lodash';

export const tokenValid = token => {
  let expired = true;

  try {
    const expires = moment(jwt_decode(token).exp * 1000);
    expired = moment() > expires;
  } catch (error) {
    console.error(error.message);
  } finally {
    const isValid = !expired;
    return isValid;
  }
};

export const hexValid = val => {
  const isValid = val?.startsWith?.('#') && (
    val?.length === 4
    || val?.length === 7
    || val?.length === 9
  );

  if (isValid) return val;
};

export const iconValid = val => {
  const { dependencies } = PackageJSON;
  const free = '@fortawesome/fontawesome-free';
  const pro = '@fortawesome/fontawesome-pro';
  const freeVersion = dependencies[free]?.replace('^', '');
  const proVersion = dependencies[pro]?.replace('^', '');
  const version = +(freeVersion || proVersion).charAt(0);

  if (version) {
    const legacy = version < 6;
    const legacyTypes = [ 'fas', 'far', 'fal', 'fad', 'fab' ];
    const types = [ 'solid', 'regular', 'light', 'thin', 'duotone', 'sharp', 'brands' ];
    const isValid =  (legacy ? legacyTypes : types).find(type => (
      val?.startsWith?.(legacy ? `${type} fa-` : `fa-${type} fa-`)
    ));

    if (isValid) return val;
  }
};

export const urlValid = val => {
  const regex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/g;
  const hasProtocol = val?.includes?.('https://');
  const isValid = regex.test(val);

  if (isValid) {
    return hasProtocol ? val : `https://${val}`;
  };

  return val?.includes?.('localhost') ? val : '';
};