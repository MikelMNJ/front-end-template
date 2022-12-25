
export const started = '_REQUEST_START';
export const ended = '_REQUEST_END';

export const actionCreator = (type, payload, meta) => {
  const action = { type, payload };
  if (meta) { action.meta = meta };
  return action;
};

export const makeInitialState = reducers => (
  Object.keys(reducers).reduce((prevState, key) => {
    const reducer = reducers[key];
    const reducerState = reducer();
    const combinedState = { ...prevState, [key]: reducerState };
    return combinedState;
  }, {})
);

export const request = type => {
  return {
    start: `${type}${started}`,
    end: `${type}${ended}`,
  }
};