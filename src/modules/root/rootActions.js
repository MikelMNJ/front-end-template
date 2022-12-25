import { actionCreator } from 'helpers';
import { rootConstants } from 'modules';

const rootActions = {
  logout: payload => {
    return actionCreator(rootConstants.actions.LOG_OUT, payload);
  },
};

export { rootActions };