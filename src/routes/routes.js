import * as React from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import Page404 from '../pages/404Page/404Page';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<Page404 />}/>
      </Switch>
    </Router>
  );
};

export default Routes;