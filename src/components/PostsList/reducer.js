export const LOADING_START = 'LOADING_START';
export const LOADING_DONE = 'LOADING_DONE';
export const LOADING_FAIL = 'LOADING_FAIL';

export const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOADING_START:
      return { ...state, loading: true };

    case LOADING_DONE:
      return { ...payload, loading: false };

    case LOADING_FAIL:
      return { ...state, loading: false };

    default:
      return state;
  }
};
