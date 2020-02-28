import axios from 'axios';
import { FETCH_EPISODE_SUCCESS, FETCH_EPISODE_FAIL } from './types';
import { selectSeason } from './season';

export const fetchEpisode = id => async dispatch => {
  try {
    const res = await axios.get(`http://api.tvmaze.com/episodes/${id}?embed=show`);
    dispatch({
      type: FETCH_EPISODE_SUCCESS,
      payload: res.data,
    });
    console.log(res.data.season);
    dispatch(selectSeason(res.data.season));
  } catch (error) {
    dispatch({
      type: FETCH_EPISODE_FAIL,
      payload: { msg: error.response },
    });
  }
};
