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