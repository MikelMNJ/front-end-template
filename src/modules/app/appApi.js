
export const sampleAPICall = args => {
  const { type, payload, callbacks } = args;

  return {
    type,
    path: '/sample',
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
    },
    onSuccess: res => callbacks?.onSuccess(res),
    onFail: res => callbacks?.onFail?.(res),
    onComplete: res => callbacks?.onComplete?.(res),
  };
};