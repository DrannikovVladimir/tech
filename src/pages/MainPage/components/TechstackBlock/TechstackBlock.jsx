import * as React from 'react';
import _ from 'lodash'
//components
import ShowAll from './components/ShowAll/ShowAll';
//icons
import Icon1 from '../../../../assets/icons/techstack/icon1.svg';
import JsIcon from '../../../../assets/icons/techstack/js.svg';
import RustIcon from '../../../../assets/icons/techstack/rust.svg';
import Icon4 from '../../../../assets/icons/techstack/icon4.svg';
//styles
import './TechstackBlockStyle.scss';

const techstack = [
  { title: 'Icon1', imageSrc: Icon1 },
  { title: 'Java Script', imageSrc: JsIcon },
  { title: 'Rust', imageSrc: RustIcon },
  { title: 'Icon4', imageSrc: Icon4 },
]

const TechstackBlock = () => {
  return (
    <section className="techstack">
      <div className="techstack-container">
        <h2 className="techkstack-title">Techstack</h2>
        <div className="techstack-wrapper">
          <ul className="techstack-list">
            {techstack.map(({ title, imageSrc }) => (
              <li key={_.uniqueId('techstack_')} className="techstack-list__item">
                <span className="visually-hidden">{title}</span>
                <img src={imageSrc} alt={title} />
              </li>
            ))}
          </ul>
          <div className="techstack-button__wrapper">
            <ShowAll />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechstackBlock;