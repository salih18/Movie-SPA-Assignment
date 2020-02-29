import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Container, Icon } from 'semantic-ui-react';

const Navbar = () => {
  return (
    <Menu fluid stackable id="menu" inverted color={'violet'}>
      <Link to="/">
        <Menu.Item header>
          <Icon name="film" size="large" />
          Movie App
        </Menu.Item>
      </Link>
    </Menu>
  );
};

export default Navbar;
