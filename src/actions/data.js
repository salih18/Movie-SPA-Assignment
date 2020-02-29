import axios from 'axios';
import { setAlert } from './alert';
import { FETCH_SHOW_SUCCESS } from './types';

export const fetchShow = showName => async dispatch => {
  try {
    //Use session storage to make the app more performant
    const parseShow = JSON.parse(sessionStorage.getItem('showData'));
    if (parseShow) {
      return dispatch({
        type: FETCH_SHOW_SUCCESS,
        payload: parseShow,
      });
    }

    const res = await axios.get(
      `http://api.tvmaze.com/singlesearch/shows?q=${showName}&embed[]=episodes&embed[]=cast&embed[]=seasons`,
    );
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
    sessionStorage.setItem('showData', JSON.stringify({ ...res.data, episodesBySeason }));
  } catch (err) {
    dispatch(setAlert(err.message, 'brown'));
  }
};
