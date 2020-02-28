import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchEpisode } from './../../actions/episode';
import EpisodeAttributes from './EpisodeAttributes';
import EpisodeSummary from './EpisodeSummary';
import EpisodeBreadcrumb from './EpisodeBreadcrumb';
import PropTypes from 'prop-types';

const Episode = ({
  season,
  episode,
  loading,
  match: {
    params: { id },
  },
  fetchEpisode,
}) => {
  useEffect(() => {
    fetchEpisode(id, season);
  }, []);
  return (
    loading === false && (
      <>
        <EpisodeBreadcrumb episode={episode} />
        <EpisodeSummary episode={episode} />
        <EpisodeAttributes episode={episode} />
      </>
    )
  );
};

Episode.propTypes = {
  fetchEpisode: PropTypes.func.isRequired,
  episode: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  episode: state.episode,
  season: state.season,
  loading: state.episode.loading,
});

export default connect(mapStateToProps, { fetchEpisode })(Episode);
