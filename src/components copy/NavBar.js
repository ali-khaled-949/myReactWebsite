// src/components/NavBar.js

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #333;
  color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  &:hover {
    color: #ddd;
  }
`;

const NavBar = () => {
  return (
    <Nav>
      <div>
        <NavLink to="/">My E-Commerce Site</NavLink>
      </div>
      <div>
      </div>
    </Nav>
  );
};

export default NavBar;
