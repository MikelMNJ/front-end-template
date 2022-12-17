
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