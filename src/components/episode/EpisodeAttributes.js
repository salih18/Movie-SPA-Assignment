import React from 'react';
import { Header } from 'semantic-ui-react';
import ReactHtmlParser from 'react-html-parser';

const EpisodeAttributes = ({
  episode: {
    episode: { summary },
  },
}) => {
  return (
    <>
      <Header style={{ margin: '1.5em 0' }} as="h3">
        Summary:
      </Header>
      {summary ? ReactHtmlParser(summary) : 'There is no summary for this episode'}
    </>
  );
};

export default EpisodeAttributes;
