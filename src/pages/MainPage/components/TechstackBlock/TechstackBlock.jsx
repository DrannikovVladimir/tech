import * as React from 'react'
import ShowAll from './components/ShowAll/ShowAll';
import './TechstackBlockStyle.scss';
import Icon1 from '../../../../assets/icons/techstack/icon1.svg';
import JsIcon from '../../../../assets/icons/techstack/js.svg';
import RustIcon from '../../../../assets/icons/techstack/rust.svg';
import Icon4 from '../../../../assets/icons/techstack/icon4.svg';

const TechstackBlock = () => {
  return (
    <div className="techstack">
      <div className="techstack-container">
        <h2 className="techkstack-title">Techstack</h2>
        <div className="techstack-wrapper">
          <ul className="techstack-list">
            <li className="techstack-list__item">
              <img src={Icon1} alt="" />
            </li>
            <li className="techstack-list__item">
              <img src={JsIcon} alt="" />
            </li>
            <li className="techstack-list__item">
              <img src={RustIcon} alt="" />
            </li>
            <li className="techstack-list__item">
              <img src={Icon4} alt="" />
            </li>
          </ul>
          <div className="techstack-button__wrapper">
            <ShowAll />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechstackBlock;