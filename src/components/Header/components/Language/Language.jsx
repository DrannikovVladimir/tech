import * as React from 'react';
import cn from 'classnames';
//styles
import './LanguageStyle.scss';

const Language = () => {
  const [currentLanguage, setCurrentLanguage] = React.useState('Eng');
  const [isOpen, setIsOpen] = React.useState(false);

  const handleItemClick = ({ target }) => {
    setCurrentLanguage(target.getAttribute('data-language'));
    setIsOpen(false);
  }

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  }

  const classList = cn('language-list', {
    'language-list--open': isOpen,
  });

  const classItemRus = cn('language-list__item', {
    'language-list__item--current': currentLanguage === 'Rus',
  });

  const classItemEng = cn('language-list__item', {
    'language-list__item--current': currentLanguage === 'Eng',
  });

  return (
    <div className="language">
      <button className="language-button" onClick={handleButtonClick}>
        <span className="language-button__text">{currentLanguage}</span>
      </button>
      <ul className={classList}>
        <li className={classItemEng} onClick={handleItemClick} data-language="Eng">English</li>
        <li className={classItemRus} onClick={handleItemClick} data-language="Rus">Русский</li>
      </ul>
    </div>
  );
};

export default Language;