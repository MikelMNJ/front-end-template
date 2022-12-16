import { actionCreator, prepPath, handleNotify, handleInitialRes } from 'helpers';

const apiMiddleware = state => next => action => {
  const { dispatch } = state;
  console.log('Executing apiMiddleware...', { state, dispatch, next, action });

  if (action) {
    const isAPIRequest = action.path || action.method;

    if (isAPIRequest) {
      apiRelay({ ...action, dispatch, next });
      return;
    }

    dispatch(action);
  }

  next();
};

export const apiRelay = args => {
  const { REACT_APP_API_URL: basePath } = process.env;
  const { type, path, meta, onSuccess, onFail, onComplete, dispatch, state, next, ...rest } = args;
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
    })
    .finally(() => {
      onComplete?.();
      next();
    });
};

export { apiMiddleware };