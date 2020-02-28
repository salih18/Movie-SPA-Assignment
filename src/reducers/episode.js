import { FETCH_EPISODE_SUCCESS, FETCH_EPISODE_FAIL } from '../actions/types';

const initialState = {
  episode: {},
  loading: true,
  error: {},
};
export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_EPISODE_SUCCESS:
      return { ...state, episode: payload, loading: false };
    case FETCH_EPISODE_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
