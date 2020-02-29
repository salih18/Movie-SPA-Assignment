import axios from 'axios';
import { setAlert } from './alert';
import { FETCH_EPISODE_SUCCESS } from './types';
import { selectSeason } from './season';

/**
 *
 * @param {String} id Episode's id
 *
 */
export const fetchEpisode = id => async dispatch => {
  try {
    const res = await axios.get(`http://api.tvmaze.com/episodes/${id}?embed=show`);
    dispatch({
      type: FETCH_EPISODE_SUCCESS,
      payload: res.data,
    });
    dispatch(selectSeason(res.data.season));
  } catch (err) {
    dispatch(setAlert(err.message, 'brown'));
  }
};
