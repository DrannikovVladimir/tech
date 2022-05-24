import * as React from 'react';
import _ from 'lodash';
//components
import LeanMore from './components/LearnMore/LearnMore';
//icons
import BlockchainDevelopment from '../../../../assets/icons/help/blockchain-development.svg';
import BlockchainConsulting from '../../../../assets/icons/help/blockchain-consalting.svg';
import WebmobileDevelopment from '../../../../assets/icons/help/web-mobile-development.svg';
//styles
import './HelpBlockStyle.scss';

const helps = [
  { title: 'Blockchain Development', imageSrc: BlockchainDevelopment, text: 'We create complex products using artificial intelligence, cloud solutions, blockchain and computer vision' },
  { title: 'Blockchain Consulting', imageSrc: BlockchainConsulting, text: 'We create complex products using artificial intelligence, cloud solutions, blockchain and computer vision' },
  { title: 'Web&Mobile Development', imageSrc: WebmobileDevelopment, text: 'We create complex products using artificial intelligence, cloud solutions, blockchain and computer vision' },
];

const HelpBlock = () => {
  return (
    <section className="help">
      <div className="help-wrapper">
        <div className="help-container">
          <h2 className="help-title">What We Can Help You With</h2>
          <ul className="help-list">
            {helps.map(({ title, imageSrc, text }) => (
              <li key={_.uniqueId('help_')} className="help-list__item">
                <div className="help-list__image-wrapper">
                  <img src={imageSrc} alt="Blockchain Development" className="help-list__image" />
                </div>
                <h3 className="help-list__title">{title}</h3>
                <p className="help-list__text">{text}</p>
                <LeanMore />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HelpBlock;