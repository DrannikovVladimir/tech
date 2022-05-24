import * as React from 'react';
//styles
import './MainBlockStyle.scss';

const MainBlock = () => {
  return (
    <section className="main">
      <div className="main-container">
        <p className="main-caption">
          <span className="main-bracket__open">{`{ `}</span>
          Software & Blockchain development
          <span className="main-bracket__close">{` }`}</span>
        </p>
        <h1 className="main-title">Switch business to&nbsp;digital</h1>
        <p className="main-subtitle">We create complex products using artificial intelligence, cloud solutions, blockchain and computer vision</p>
        <div className="main-button__wrapper">
          <button className="main-button__talk">let's talk</button>
          <button className="main-button__projects"><span className="main-button__projects-text">explore our projects</span></button>
        </div>
      </div>
    </section>
  );
};

export default MainBlock;