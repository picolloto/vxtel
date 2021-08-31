import React from 'react';
import PropTypes from "prop-types";

import {
  Navbar,
  NavbarBrand,
  Container
} from 'reactstrap';

import "./Header.scss";

const Header = ({ title, subtitle }) => {

  return (
      <Navbar color="light" light expand="md">
        <Container fluid>
            <NavbarBrand href="/">{title}</NavbarBrand>
            <div className="subtitle">{subtitle}</div>
        </Container>  
      </Navbar>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

export default Header;