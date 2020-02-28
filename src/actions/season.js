import { SELECT_SEASON } from './types';

export const selectSeason = name => async dispatch => {
  dispatch({
    type: SELECT_SEASON,
    payload: name,
  });
};
