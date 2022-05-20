import * as React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import MainBlock from './components/MainBlock/MainBlock';
import HelpBlock from './components/HelpBlock/HelpBlock';

const MainPage = () => {
  return (
    <>
      <Header />
      <main>
        <MainBlock />
        <HelpBlock />
      </main>
      <Footer />
    </>
  );
};

export default MainPage;
