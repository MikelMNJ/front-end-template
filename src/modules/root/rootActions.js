import { actionCreator } from 'helpers';
import { rootConstants } from 'modules';

const rootActions = {
  logout: payload => {
    console.log('From root actions.');
    return actionCreator(rootConstants.actions.LOG_OUT, payload)
  },
};

export { rootActions };