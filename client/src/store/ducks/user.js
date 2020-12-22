/**
 * Constants Types
 */
const types = {
  REQUEST_LOGIN: "REQUEST_LOGIN",
  RESPONSE_LOGIN: "RESPONSE_LOGIN",
  REQUEST_REGISTER: "REQUEST_REGISTER",
  AUTH_SET_MESSAGE: "AUTH_SET_MESSAGE",
};

/**
 * Actions creators
 */
const actions = {
  requestLogin: (data) => ({
    type: types.REQUEST_LOGIN,
    payload: data,
  }),
  responseLogin: (data) => ({
    type: types.RESPONSE_LOGIN,
    payload: data,
  }),
  requestRegister: (data) => ({
    type: types.REQUEST_REGISTER,
    payload: data,
  }),
  setMessage: (data) => ({
    type: types.AUTH_SET_MESSAGE,
    payload: data,
  }),
};

const INITIAL_STATE = {
  data: null,
  loading: false,
  message: null,
};

/**
 * Reducers
 */
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.REQUEST_REGISTER:
      return { ...state, loading: true };
    case types.REQUEST_LOGIN:
      return { ...state, loading: true };
    case types.RESPONSE_LOGIN:
      return { ...state, loading: false, data: action.payload };
    case types.AUTH_SET_MESSAGE:
      return { ...state, loading: false, message: action.payload };
    default:
      return state;
  }
};

export { actions, reducer, types };
