import { FETCH_SHOW_SUCCESS, FETCH_SHOW_FAIL } from '../actions/types';

const initialState = {
  show: [],
  loading: true,
  error: {},
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_SHOW_SUCCESS:
      return { ...state, show: payload, loading: false };
    case FETCH_SHOW_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
