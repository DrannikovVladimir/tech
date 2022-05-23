import * as React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import MainBlock from './components/MainBlock/MainBlock';
import HelpBlock from './components/HelpBlock/HelpBlock';
import TechstackBlock from './components/TechstackBlock/TechstackBlock';
import ProjectsBlock from './components/ProjectsBlock/ProjectsBlock';
import NewsBlock from './components/NewsBlock/NewsBlock';
import ContactsBlock from './components/ContactsBlock/ContactsBlock';

const MainPage = () => {
  return (
    <>
      <Header />
      <main>
        <MainBlock />
        <HelpBlock />
        <TechstackBlock />
        <ProjectsBlock />
        <NewsBlock />
        <ContactsBlock />
      </main>
      <Footer />
    </>
  );
};

export default MainPage;
