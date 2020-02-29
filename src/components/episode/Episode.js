import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchEpisode } from './../../actions/episode';
import EpisodeAttributes from './EpisodeAttributes';
import EpisodeSummary from './EpisodeSummary';
import EpisodeBreadcrumb from './EpisodeBreadcrumb';
import LoadingCard from './../layout/LoadingCard';
import PropTypes from 'prop-types';

const Episode = ({
  episode,
  match: {
    params: { id },
  },
  fetchEpisode,
}) => {
  useEffect(() => {
    fetchEpisode(id);
  }, [fetchEpisode, id]);
  return episode.loading ? (
    LoadingCard
  ) : (
    <>
      <EpisodeBreadcrumb episode={episode} />
      <EpisodeSummary episode={episode} />
      <EpisodeAttributes episode={episode} />
    </>
  );
};

Episode.propTypes = {
  fetchEpisode: PropTypes.func.isRequired,
  episode: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  episode: state.episode,
});

export default connect(mapStateToProps, { fetchEpisode })(Episode);
