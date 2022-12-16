import { actionCreator, prepPath, handleNotify, handleInitialRes } from 'helpers';

const apiMiddleware = ({ dispatch }) => next => async action => {
  const isAPIRequest = action?.path || action?.method;

  if (action) {
    if (isAPIRequest) {
      apiRelay({ ...action, dispatch, next });
      return;
    }

    next(action);
  }
};

export const apiRelay = args => {
  const { REACT_APP_API_URL: basePath } = process.env;
  const { dispatch, next, ...action } = args;
  const { type, path, meta, onSuccess, onFail, onComplete, state, ...rest } = action;
  const url = `${basePath}${prepPath(path) || ''}`;
  const options = { ...rest };

  fetch(url, options)
  .then(res => handleInitialRes({ res, onSuccess, onFail, dispatch }))
  .then(data => {
    if (data) {
      const { message, messages, error, errors, ...payload } = data;
      handleNotify(dispatch, data);

      if (payload && (!error || !errors)) {
        dispatch(actionCreator(type, payload, meta));
      }
    }
  })
  .catch(error => {
    console.error(error);
    onFail?.(error);
  })
  .finally(() => {
    onComplete?.();
    next(action);
  });
};

export { apiMiddleware };