import { SELECT_SEASON } from '../actions/types';

const initialState = 1;

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SELECT_SEASON:
      return payload;
    default:
      return state;
  }
}
