import * as React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import MainBlock from './components/MainBlock/MainBlock';

const MainPage = () => {
  return (
    <>
      <Header />
      <main>
        <MainBlock />
      </main>
      <Footer />
    </>
  );
};

export default MainPage;
