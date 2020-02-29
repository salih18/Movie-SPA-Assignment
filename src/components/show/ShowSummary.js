import React from 'react';
import { Item, Label, Header, Divider } from 'semantic-ui-react';

const ShowSummary = ({
  show: {
    name,
    rating,
    genres,
    image: { original },
  },
}) => {
  return (
    <Item.Group>
      <Header as="h2">{name}</Header>
      <Item>
        <Item.Image size="medium" src={original} alt={name + ' image'} />
        <Item.Content>
          <Item.Header>
            Genre:{' '}
            {genres.map((g, i) => (
              <Label key={i}> {g}</Label>
            ))}
          </Item.Header>
          <Divider />
          <Item.Header>
            Rating: <Label>{rating.average}</Label>
          </Item.Header>
        </Item.Content>
      </Item>
    </Item.Group>
  );
};

export default ShowSummary;
