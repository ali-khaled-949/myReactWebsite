import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #333;
  color: #fff;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledNavLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  margin: 0 1rem; /* Provide spacing between menu items */
  padding: 0.5rem;
  &:hover {
    color: #ddd;
    text-decoration: underline;
  }
  &.active {
    border-bottom: 2px solid #fff; /* Highlight the active link */
  }
`;

const BrandName = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
`;

const Menu = styled.div`
  display: flex;
`;

const NavBar = () => {
  return (
    <Nav>
      <BrandName>
        <NavLink to="/" exact>My E-Commerce Site</NavLink>
      </BrandName>
      <Menu>
        <StyledNavLink to="/" exact>Home</StyledNavLink>
        <StyledNavLink to="/about">About Us</StyledNavLink>
        
        <StyledNavLink to="/contact">Contact Us</StyledNavLink>
        <StyledNavLink to="/shop">Shop</StyledNavLink>
        
        {/* Include additional navigation links as needed */}
      </Menu>
    </Nav>
  );
};

export default NavBar;
