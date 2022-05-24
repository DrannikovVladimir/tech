import * as React from 'react';
import _ from 'lodash';
//components
import Form from './components/Form/Form';
//icons
import Linkedin from '../../../../assets/icons/contacts/linkedin.svg';
import Instagram from '../../../../assets/icons/contacts/instagram.svg';
import Telegram from '../../../../assets/icons/contacts/telegram.svg';
//styles
import './ContactsBlockStyle.scss';

const social = [
  { title: 'linkedin', imageSrc: Linkedin },
  { title: 'instagram', imageSrc: Instagram },
  { title: 'telegram', imageSrc: Telegram },
];

const contacts = [
  { title: '', text: '' },
  { title: '', text: '' },
  { title: '', text: '' },
  { title: '', text: '' },
]

const ContactsBlock = () => {
  return (
    <section className="contacts">
      <div className="contacts-left">        
        <div className="contacts-left__container">
          <h2 className="contacts-title">Contact Us</h2>
          <p className="contacts-subtitle">and unleash your idea</p>
          <address className="contacts-item">
            <span className="contacts-item__title">Address</span>
            <a href="#" className="contacts-item__link">Kazakhstan, Almaty, Medeyski district, Bekhozhin street 15A</a>
          </address>
          <p className="contacts-item">
            <span className="contacts-item__title">HR department</span>
            <a href="mailto:hr@techculture.tech" className="contacts-item__link">hr@techculture.tech</a>
          </p>
          <p className="contacts-item">
            <span className="contacts-item__title">Sales department</span>
            <a href="mailto:aa@techculture.tech" className="contacts-item__link">aa@techculture.tech</a>
          </p>
          <p className="contacts-item">
            <span className="contacts-item__title">Any inquiries</span>
            <a href="mailto:techculturellp@gmail.com" className="contacts-item__link">techculturellp@gmail.com</a>
          </p>
          <ul className="contacts-list social-list">
            {social.map(({ title, imageSrc }) => (
              <li key={_.uniqueId('social_')} className="social-list__item">
                <span className="visually-hidden">{title}</span>
                <img className="social-list__item-image" src={imageSrc} alt={title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="contacts-right">        
        <div className="contacts-right__container">
          <div className="contacts-form">
            <p className="contacts-form__title">Leave us a message</p>
            <Form />
            <button className="contacts-button__telegram" type="button">
              <span className="contacts-button__telegram-text">Let's chat in telegram</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsBlock;