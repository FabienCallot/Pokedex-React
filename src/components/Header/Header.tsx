import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';

const Header = () => {
  return (
    <div className="header">
      <NavLink
        to="/"
        className={(isActive) =>
          'header-title' + (!isActive ? ' unselected' : '')
        }
      >
        Pokédex
      </NavLink>
      <NavLink
        to="/types"
        className={(isActive) =>
          'header-liste-type' + (!isActive ? ' unselected' : '')
        }
      >
        List types
      </NavLink>
    </div>
  );
};

export default React.memo(Header);
