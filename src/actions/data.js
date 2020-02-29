import axios from 'axios';
import { setAlert } from './alert';
import { FETCH_SHOW_SUCCESS } from './types';

export const fetchShow = showName => async dispatch => {
  try {
    //Check session storage 'showData' key. If there is send it as a payload to reducer
    const parseShow = JSON.parse(sessionStorage.getItem('showData'));
    if (parseShow) {
      return dispatch({
        type: FETCH_SHOW_SUCCESS,
        payload: parseShow,
      });
    }
    // If there is not cached data make request
    const res = await axios.get(
      `http://api.tvmaze.com/singlesearch/shows?q=${showName}&embed[]=episodes&embed[]=cast&embed[]=seasons`,
    );
    // Group episodes by season and attached it
    const episodesBySeason = res.data._embedded.episodes.reduce((list, episode) => {
      const { id, url, name, season, number, airdate, image, summary } = episode;

      list[season] = [
        ...(list[season] || []),
        {
          season,
          id,
          url,
          name,
          number,
          airdate,
          image,
          summary,
        },
      ];

      return list;
    }, {});

    dispatch({
      type: FETCH_SHOW_SUCCESS,
      payload: { ...res.data, episodesBySeason },
    });
    // store response to session storage with showData key
    sessionStorage.setItem('showData', JSON.stringify({ ...res.data, episodesBySeason }));
  } catch (err) {
    dispatch(setAlert(err.message, 'brown'));
  }
};
