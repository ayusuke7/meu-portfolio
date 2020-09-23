/**
 * Constants Types
 */
const types = {
  SET_LIST_PORTFOLIOS: "SET_LIST_PORTFOLIOS",
};

/**
 * Actions creators
 */
const actions = {
  setList: (data) => ({
    type: types.SET_LIST,
    payload: data,
  }),
};

const INITIAL_STATE = {
  data: [],
  loading: false,
  message: null,
};

/**
 * Reducers
 */
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_LIST:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export { actions, reducer, types };
