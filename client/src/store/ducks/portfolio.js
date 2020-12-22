/**
 * Constants Types
 */
const types = {
  GET_PORTFOLIOS: "GET_PORTFOLIOS",
  SET_PORTFOLIOS: "SET_PORTFOLIOS",
  SET_PORTFOLIO_MESSAGE: "SET_PORTFOLIO_MESSAGE",
};

/**
 * Actions creators
 */
const actions = {
  getPortfolios: (data) => ({
    type: types.GET_PORTFOLIOS,
    payload: data,
  }),
  setPortfolios: (data) => ({
    type: types.SET_PORTFOLIOS,
    payload: data,
  }),
  setMessage: (data) => ({
    type: types.SET_PORTFOLIO_MESSAGE,
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
    case types.GET_PORTFOLIOS:
      return { ...state, loading: true };
    case types.SET_PORTFOLIOS:
      return { ...state, loading: false, data: action.payload };
    case types.SET_PORTFOLIO_MESSAGE:
      return { ...state, loading: false, message: action.payload };
    default:
      return state;
  }
};

export { actions, reducer, types };
