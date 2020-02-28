import axios from 'axios';
import { setAlert } from './alert';
import { FETCH_SHOW_SUCCESS, FETCH_SHOW_FAIL } from './types';

export const fetchShow = () => async dispatch => {
  try {
    // Use session storage to make the app more performant
    const cachedHits = sessionStorage.getItem('showData');
    if (cachedHits) {
      return dispatch({
        type: FETCH_SHOW_SUCCESS,
        payload: JSON.parse(cachedHits),
      });
    }
    const res = await axios.get(
      'http://api.tvmaze.com/singlesearch/shows?q=the-powerpuff-girls&embed[]=episodes&embed[]=cast&embed[]=seasons',
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
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};
