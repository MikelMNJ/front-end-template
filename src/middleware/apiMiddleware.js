import {
  actionCreator,
  prepPath,
  handleNotify,
  handleInitialRes,
  started,
  ended,
} from 'helpers';

const apiMiddleware = ({ dispatch }) => next => async action => {
  const isAPIRequest = action?.path || action?.method;

  if (action.type) {
    if (isAPIRequest) {
      apiRelay({ ...action, dispatch, next });
      return;
    }

    next(action);
  }
};

const updateResourceLoadingState = args => {
  const { dispatch, type, isLoading } = args;
  const suffix = isLoading ? started : ended;
  const requestType = `${type}${suffix}`;
  const payload = isLoading;

  dispatch(actionCreator(requestType, payload));
};

export const apiRelay = args => {
  const { REACT_APP_API_URL: basePath } = process.env;
  const { dispatch, next, ...action } = args;
  const { type, path, meta, onSuccess, onFail, onComplete, state, ...rest } = action;
  const url = `${basePath}${prepPath(path) || ''}`;
  const options = { ...rest };

  updateResourceLoadingState({ dispatch, type, isLoading: true });

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
      updateResourceLoadingState({ dispatch, type, isLoading: false });
      next(action);
    });
};

export { apiMiddleware };