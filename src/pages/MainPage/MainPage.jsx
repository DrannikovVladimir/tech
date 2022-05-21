import * as React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import MainBlock from './components/MainBlock/MainBlock';
import HelpBlock from './components/HelpBlock/HelpBlock';
import TechstackBlock from './components/TechstackBlock/TechstackBlock';

const MainPage = () => {
  return (
    <>
      <Header />
      <main>
        <MainBlock />
        <HelpBlock />
        <TechstackBlock />
      </main>
      <Footer />
    </>
  );
};

export default MainPage;
