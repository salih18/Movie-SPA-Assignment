import { FETCH_SHOW_SUCCESS } from '../actions/types';

const initialState = {
  show: [],
  loading: true,
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_SHOW_SUCCESS:
      return { ...state, show: payload, loading: false };
    default:
      return state;
  }
}
