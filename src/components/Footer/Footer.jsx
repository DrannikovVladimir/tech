import * as React from 'react';
import _ from 'lodash';
//components
import Logo from '../../assets/icons/logo-footer.svg';
import Linkedin from '../../assets/icons/footer/linkedin.svg';
import Instagram from '../../assets/icons/footer/instagram.svg';
import Telegram from '../../assets/icons/footer/telegram.svg';
//styles
import './FooterStyle.scss';

const socials = [
  { title: 'linkedin', imageSrc: Linkedin },
  { title: 'instagram', imageSrc: Instagram },
  { title: 'telegram', imageSrc: Telegram },
];

const solutions = [
  { title: 'Blockchain Development', link: '#' },
  { title: 'Web&Mobile development', link: '#' },
  { title: 'Blockchain consulting', link: '#' },
];

const projects = [
  { title: 'Blockchain', link: '#' },
  { title: 'Mobile app', link: '#' },
  { title: 'Web app', link: '#' },
];

const company = [
  { title: 'About', link: '#' },
  { title: 'Blog', link: '#' },
  { title: 'Careers', link: '#' },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-main__container">
          <a href="/" className="footer-main__logo">
            <img src={Logo} alt="" className="footer-main__logo-image" />
          </a>
          <div className="footer-main__socials footer-main__box">
            <h3 className="footer-main__title">Keep in Touch</h3>
            <ul className="footer-main__socials-list footer-socials">
              {socials.map(({ title, imageSrc }) => (
                <li key={_.uniqueId('footer-socials_')} className="footer-socials__item">
                  <span className="visually-hidden">{title}</span>
                  <img src={imageSrc} alt={title} className="footer-socials__item-image" />
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-main__solutions footer-main__box">
            <h3 className="footer-main__title">Solutions</h3>
              <ul className="footer-main__list footer-menu-list">
                {solutions.map(({ title, link }) => (
                  <li key={_.uniqueId('footer-solutions_')} className="footer-menu-list__item">
                    <a href={link} className="footer-menu-list__link">{title}</a>
                  </li>
                ))}
              </ul>
          </div>
          <div className="footer-main__projects footer-main__box">
            <h3 className="footer-main__title">Projects</h3>
            <ul className="footer-main__list footer-menu-list">
              {projects.map(({ title, link }) => (
                <li key={_.uniqueId('footer-projects_')} className="footer-menu-list__item">
                  <a href={link} className="footer-menu-list__link">{title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-main__company footer-main__box">
            <h3 className="footer-main__title">Company</h3>
            <ul className="footer-main__list footer-menu-list">
              {company.map(({ title, link }) => (
                <li key={_.uniqueId('footer-company_')} className="footer-menu-list__item">
                  <a href={link} className="footer-menu-list__link">{title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-privacy">
        <div className="footer-privacy__container">
          <p className="footer-privacy__copyright">&copy; 2022 Techculture</p>
          <div className="footer-privacy__link-wrapper">
            <a href="#" className="footer-privacy__terms">Terms & Conditions</a>
            <a href="#" className="footer-privacy__policy">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;