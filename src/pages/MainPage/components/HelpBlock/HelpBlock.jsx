import * as React from 'react';
import LeanMore from './components/LearnMore/LearnMore';
import './HelpBlockStyle.scss';
import BlockchainDevelopment from '../../../../assets/icons/help/blockchain-development.svg';
import BlockchainConsulting from '../../../../assets/icons/help/blockchain-consalting.svg';
import WebmobileDevelopment from '../../../../assets/icons/help/web-mobile-development.svg';

const HelpBlock = () => {
  return (
    <div className="help">
      <div className="help-wrapper">
        <div className="help-container">
          <h2 className="help-title">What We Can Help You With</h2>
          <ul className="help-list">
            <li className="help-list__item">
              <div className="help-list__image-wrapper">
                <img src={BlockchainDevelopment} alt="Blockchain Development" className="help-list__image" />
              </div>
              <h3 className="help-list__title">Blockchain Development</h3>
              <p className="help-list__text">We create complex products using artificial intelligence, cloud solutions, blockchain and computer vision</p>
              <LeanMore />
            </li>
            <li className="help-list__item">
              <div className="help-list__image-wrapper">
                <img src={BlockchainConsulting} alt="Blockchain Consulting" className="help-list__image" />
              </div>
              <h3 className="help-list__title">Blockchain Consulting</h3>
              <p className="help-list__text">We create complex products using artificial intelligence, cloud solutions, blockchain and computer vision</p>
              <LeanMore />
            </li>
            <li className="help-list__item">
              <div className="help-list__image-wrapper">
                <img src={WebmobileDevelopment} alt="Web&mobile development" className="help-list__image" />
              </div>
              <h3 className="help-list__title">Web&mobile development</h3>
              <p className="help-list__text">We create complex products using artificial intelligence, cloud solutions, blockchain and computer vision</p>
              <LeanMore />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HelpBlock;