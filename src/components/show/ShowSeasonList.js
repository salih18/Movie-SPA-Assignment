import React from 'react';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';
import { selectSeason } from './../../actions/season';

import PropTypes from 'prop-types';

const ShowSeasonList = ({ episodesBySeason, selectSeason, seasonNumber }) => {
  return (
    <div>
      <Menu attached="top" tabular style={{ margin: '2em 0' }}>
        {Object.keys(episodesBySeason).map((season, index) => {
          return (
            <Menu.Item
              key={index}
              name={'Season ' + season}
              value={season}
              active={seasonNumber === Number(season)}
              onClick={(e, { value }) => selectSeason(Number(value))}
            />
          );
        })}
      </Menu>
    </div>
  );
};

ShowSeasonList.propTypes = {
  selectSeason: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  seasonNumber: state.season,
});
export default connect(mapStateToProps, { selectSeason })(ShowSeasonList);
