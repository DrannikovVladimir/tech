import * as React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import ArrowDown from '../icons/ArrowDown';
//components
import logo from '../../assets/icons/logo.svg';
import BlockchainMenu from './components/BlockchainMenu/BlockchainMenu';
import CompanyMenu from './components/CompanyMenu/CompanyMenu';
import Language from './components/Language/Language';
//styles
import './HeaderStyle.scss';

const Header = () => {
  const [language, setLanguage] = React.useState('eng');
  const [isClose, setIsClose] = React.useState(true);
  const [isIconBurger, setIsIconBurger] = React.useState({ burger: true, close: false });
  const [isSolutionsOpen, setIsSolutionsOpen] = React.useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = React.useState(false);

  const handleChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleBurgerClick = () => {
    setIsClose(!isClose);
    setIsIconBurger({ burger: !isIconBurger.burger, close: !isIconBurger.close });
  }

  const handleSolutionsClick = () => {
    setIsSolutionsOpen(!isSolutionsOpen);
    if (isCompanyOpen) {
      setIsCompanyOpen(false);
    }
  }

  const handleCompanyOpen = () => {
    setIsCompanyOpen(!isCompanyOpen);
    if (isSolutionsOpen) {
      setIsSolutionsOpen(false);
    }
  }

  const classMenu = cn('header-menu', {
    'header-menu--close': isClose,
  });

  const buttonMenu = cn('button-burger', {
    'button-burger--close': isIconBurger.burger,
    'button-burger--open': isIconBurger.close,
  });

  const classInnerList = cn('menu-list__item menu-list__item-inner', {
    'menu-list__item-inner--no-arrow': isSolutionsOpen,
  });

  const classHeader = cn('header-container', {
    'header-container--fullscreen': !isClose,
  })

  return (
    <header className="header">
      <div className={classHeader}>
        <div className="header-wrapper">
          <div className="header-logo__wrapper">
            <Link to="/" className="header-logo">
              <img className="header-logo__image" src={logo} alt="logo" />
            </Link>
            <button type="button" className={buttonMenu} onClick={handleBurgerClick}>
              <span className="visually-hidden">????????</span>
            </button>
          </div>
          <nav className={classMenu}>
            <ul className="menu-list">
              <li className={classInnerList} onClick={handleSolutionsClick}>
                <span>Solutions</span>
                <BlockchainMenu isOpen={isSolutionsOpen} />
              </li>
              <li className="menu-list__item">Projects</li>
              <li className={classInnerList} onClick={handleCompanyOpen}>
                <span>Company</span>
                <CompanyMenu isOpen={isCompanyOpen} />
              </li>
            </ul>
            <div className="button-hireus-wrapper">
              <button className="button-hireus" type="button">Hire us</button>
            </div>
            <div className="language-wrapper">
              <Language />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;