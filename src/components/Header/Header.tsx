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
              to="/type"
              className={(isActive) => 
                'header-liste-type' + (!isActive ? ' unselected' : '')
              }
            >
              Liste types
            </NavLink>
        </div>
    );
};

export default React.memo(Header);
