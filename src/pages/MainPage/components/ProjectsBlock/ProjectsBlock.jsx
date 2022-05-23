import * as React from 'react';
import './ProjectsBlockStyle.scss';
import nftLogo from '../../../../assets/image/projects/nft-logo.png';
import Arrow from './components/Arrow/Arrow';

const ProjectsBlock = () => {
  return (
    <div className="projects">
      <div className="projects-container">
        <h2 className="projects-title">Our Projects</h2>
        <div className="projects-list__wrapper">
          <ul className="projects-list">
            <li className="projects-list__item">
              <div className="nft">
                <img src={nftLogo} alt="NFT logo" className="nft__logo" />
                <h3 className="nft__title">Social network and marketplace for NFT users</h3>
              </div>
            </li>
            <li className="projects-list__item">
              <div className="explore-all">
                <div className="explore-all__link-wrapper">
                  <a href="#" className="explore-all__link">explore all our projects</a>
                  <Arrow />
                </div>
              </div>
            </li>
            <li className="projects-list__item">
              <div className="defi">
                <p className="defi__caption">Confidential</p>
                <h3 className="defi__title">DeFi Multichain App</h3>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectsBlock;