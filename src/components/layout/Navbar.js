import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Container, Icon } from 'semantic-ui-react';
import CartIcon from '/home/yes/Documents/rtl_assessment/client/src/img/television.png';

const Navbar = () => {
  return (
    <Menu fluid stackable id="menu" inverted color={'violet'}>
      <Container text>
        <Link to="/">
          <Menu.Item header>
            <Icon name="film" size="large" />
            Movie App
          </Menu.Item>
        </Link>
        <Link to="/search">
          <Menu.Item header>
            <Icon name="cart" size="large" />
            Search
          </Menu.Item>
        </Link>
        <Link to="/peakyblinders">
          <Menu.Item header>
            <Icon name="cart" size="large" />
            Peaky Blinders
          </Menu.Item>
        </Link>
      </Container>
    </Menu>
  );
};

export default Navbar;
