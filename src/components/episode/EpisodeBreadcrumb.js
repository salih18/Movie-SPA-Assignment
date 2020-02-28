import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'semantic-ui-react';

const EpisodeBreadcrump = ({
  episode: {
    episode: {
      id,
      name,
      season,
      airdate,

      _embedded,
    },
  },
}) => (
  <Breadcrumb>
    <Breadcrumb.Section link>Home</Breadcrumb.Section>
    <Breadcrumb.Divider icon="right chevron" />

    <Breadcrumb.Section as={Link} to="/">
      {_embedded.show.name}
    </Breadcrumb.Section>

    <Breadcrumb.Divider icon="right chevron" />
    <Breadcrumb.Section as={Link} to={`/`}>
      Season {season}
    </Breadcrumb.Section>
    <Breadcrumb.Divider icon="right arrow" />
    <Breadcrumb.Section active>{name}</Breadcrumb.Section>
  </Breadcrumb>
);

export default EpisodeBreadcrump;
