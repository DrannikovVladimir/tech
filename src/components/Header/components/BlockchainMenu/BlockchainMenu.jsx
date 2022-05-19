import * as React from 'react';
import cn from 'classnames';
import './BlockchainMenuStyle.scss';

const BlockchainMenu = ({ isOpen }) => {
  const classContainer = cn('blockchain-container', {
    'blockchain-container--open': isOpen,
  });

  return (
    <div className={classContainer}>
      <ul className="blockchain-list">
        <li className="blockchain-list__item blockchain-item__development">Blockchain development</li>
        <li className="blockchain-list__item blockchain-item__consulting">Blockchain consulting</li>
        <li className="blockchain-list__item blockchain-item__web-mobile">Web&Mobile Development</li>
      </ul>
    </div>
  );
};

export default BlockchainMenu;