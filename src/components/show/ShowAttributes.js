import React, { useState } from 'react';
import { Header } from 'semantic-ui-react';
import ReactHtmlParser from 'react-html-parser';
const ShowAttributes = ({ show: { summary } }) => {
  return (
    <>
      <Header as="h3">Summary:</Header>
      {ReactHtmlParser(summary)}
    </>
  );
};

export default ShowAttributes;
