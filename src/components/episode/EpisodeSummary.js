import React from 'react';
import { Item, Label, Header, Divider, Placeholder, Card } from 'semantic-ui-react';

const EpisodeSummary = ({
  episode: {
    episode: { id, name, season, airdate, image },
  },
}) => {
  return (
    <Item.Group>
      <Header as="h2">{name}</Header>
      <Item>
        {image ? (
          <Item.Image size="medium" src={image.original} alt={name + ' image'} />
        ) : (
          <Card style={{ margin: '2em' }}>
            <Card.Content>
              <Placeholder>
                <Placeholder.Image rectangular />
              </Placeholder>
            </Card.Content>
          </Card>
        )}
        <Item.Content>
          <Item.Header> Season {season} </Item.Header>
          <Divider />

          <Item.Header>
            Airdate: <Label color="orange">{airdate}</Label>
          </Item.Header>
        </Item.Content>
      </Item>
    </Item.Group>
  );
};

export default EpisodeSummary;
