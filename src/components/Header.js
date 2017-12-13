import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Boilder Plate Header</h1>
    <NavLink to="/" exact={true}>Home </NavLink>
    <NavLink to="/help"> Help</NavLink>
  </header>
);

export default Header;
