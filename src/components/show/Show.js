import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { fetchShow } from '../../actions/data';
import ShowSummary from './ShowSummary';
import ShowAttributes from './ShowAttributes';
import ShowEpisodes from './ShowEpisodes';
import LoadingCard from './../layout/LoadingCard';
import PropTypes from 'prop-types';

const Show = ({ fetchShow, data: { show }, loading, season }) => {
  useEffect(() => {
    fetchShow('the-powerpuff-girls');
  }, [fetchShow]);

  return loading ? (
    LoadingCard
  ) : (
    <>
      <ShowSummary show={show} />
      <ShowAttributes show={show} />
      <ShowEpisodes show={show} season={season} />
    </>
  );
};

Show.propTypes = {
  setAlert: PropTypes.func.isRequired,
  fetchShow: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  season: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  data: state.data,
  season: state.season,
  loading: state.data.loading,
});

export default connect(mapStateToProps, { setAlert, fetchShow })(Show);
