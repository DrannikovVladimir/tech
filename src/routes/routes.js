import * as React from 'react';
import {
  Routes as Switch,
  Route,
} from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import ProjectsPage from '../pages/ProjectsPage/ProjectsPage';
import Page404 from '../pages/404Page/404Page';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<MainPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="*" element={<Page404 />}/>
    </Switch>
  );
};

export default Routes;