import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'components/App';
import AboutPage from 'components/about/AboutPage';
import HomePage from 'components/home/HomePage';
import ExperiencePage from 'components/experience/ExperiencePage';
import CarPage from 'components/car/CarPage';

export default (
  <Route path="/" component={ App }>
    <IndexRoute component={ HomePage } />
    <Route path="experience" component={ ExperiencePage } />
    <Route path="car" component={ CarPage } />
    <Route path="about" component={ AboutPage } />
  </Route>
);
