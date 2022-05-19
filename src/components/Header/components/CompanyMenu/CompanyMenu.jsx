import * as React from 'react';
import cn from 'classnames';
import './CompanyMenuStyle.scss';

const Company = ({ isOpen }) => {
  const classContainer = cn('company-container', {
    'company-container--open': isOpen,
  });

  return (
    <div className={classContainer}>
      <ul className="company-list">
        <li className="company-list__item">About us</li>
        <li className="company-list__item">Blog</li>
      </ul>
    </div>
  );
};

export default Company;