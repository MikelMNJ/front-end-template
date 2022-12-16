
export const actionCreator = (type, payload, meta) => {
  const action = { type, payload };
  if (meta) { action.meta = meta };
  return action;
};