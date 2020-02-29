import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Table, Icon } from 'semantic-ui-react';
import Moment from 'react-moment';
import ShowSeasonList from './ShowSeasonList';

const ShowEpisodeList = ({ show: { episodesBySeason }, season }) => {
  return (
    <div style={{ margin: '2em 0' }}>
      <Header as="h2">
        <Icon name="play circle" />
        Episodes
        <ShowSeasonList episodesBySeason={episodesBySeason} />
      </Header>
      <Table compact celled definition>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell>Episode Title</Table.HeaderCell>
            <Table.HeaderCell>Air Date</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {episodesBySeason[season].map(episode => (
            <ShowEpisodeItem key={episode.id} episode={episode} />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

const ShowEpisodeItem = ({ episode }) => {
  return (
    <Table.Row>
      <Table.Cell>{episode.number}</Table.Cell>
      <Table.Cell>
        <Link to={`/episodes/${episode.id}`}>{episode.name}</Link>
      </Table.Cell>
      <Table.Cell>
        {' '}
        <Moment format="Do MMMM YYYY">{episode.airdate}</Moment>{' '}
      </Table.Cell>
    </Table.Row>
  );
};

export default ShowEpisodeList;
