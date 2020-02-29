import { FETCH_EPISODE_SUCCESS } from '../actions/types';

const initialState = {
  episode: {},
  loading: true,
};
export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_EPISODE_SUCCESS:
      return { ...state, episode: payload, loading: false };
    default:
      return state;
  }
}
