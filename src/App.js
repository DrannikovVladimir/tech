import * as React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './routes/routes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes />
      <Footer />
    </Router>
  );
}

export default App;
