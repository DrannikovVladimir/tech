import * as React from 'react';
import _ from 'lodash';
//icons
import bgItem from '../../../../assets/icons/news/bg-item.svg';
//styles
import './NewsBlockStyle.scss';

const news = [
  { 
    imageSrc: bgItem,
    caption: 'Education',
    title: 'What is the DeFi?',
    text: 'We create complex products using artificial intelligence, cloud solutions, blockchain and computer vision',
    date: 'March 20, 2022',
  },
  { 
    imageSrc: bgItem,
    caption: 'Education',
    title: 'What is the DeFi?',
    text: 'We create complex products using artificial intelligence, cloud solutions, blockchain and computer vision',
    date: 'March 20, 2022',
  },
  { 
    imageSrc: bgItem,
    caption: 'Education',
    title: 'What is the DeFi?',
    text: 'We create complex products using artificial intelligence, cloud solutions, blockchain and computer vision',
    date: 'March 20, 2022',
  },
];

const NewsBlock = () => {
  return (
    <section className="news">
      <div className="news-container">
        <h2 className="news-title">Latest News</h2>
        <ul className="news-list">
          {news.map(({ imageSrc, caption, title, text, date }) => (
            <li key={_.uniqueId('news_')} className="news-list__item">
              <div className="news-list__item-image__wrapper">
                <img src={imageSrc} alt={title} className="news-list__item-image" />
              </div>
              <p className="news-list__item-caption">{caption}</p>
              <h3 className="news-list__item-title">{title}</h3>
              <p className="news-list__item-text">{text}</p>
              <time className="news-list__item-date">{date}</time>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default NewsBlock;