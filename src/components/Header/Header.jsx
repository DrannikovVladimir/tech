import * as React from 'react';
import { Link } from 'react-router-dom'
import './HeaderStyle.scss';
import logo from '../../assets/icons/logo.svg';
import arrowRight from '../../assets/icons/arrow-right.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <ul className="header-list">
          <li className="header-list__logo">
            <Link to="/" className="header-logo">
              <img className="header-logo__image" src={logo} alt="logo" />
            </Link>
          </li>
          <li className="header-list__menu">
            <ul className="menu-list">
              <li className="menu-list__item">Solutions</li>
              <li className="menu-list__item">Projects</li>
              <li className="menu-list__item">Company</li>
            </ul>
          </li>
          <li className="header-list__hireus">
            <button className="button-hireus" type="button">Hire us</button>
          </li>
          <li className="header-list__language">
            <button type="button">Eng</button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;