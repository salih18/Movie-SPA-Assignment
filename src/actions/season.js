import { SELECT_SEASON } from './types';

export const selectSeason = number => async dispatch => {
  dispatch({
    type: SELECT_SEASON,
    payload: number,
  });
};
