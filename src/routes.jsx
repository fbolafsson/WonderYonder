import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'components/App';
import HomePage from 'components/home/HomePage';
import ExperiencePage from 'components/experience/ExperiencePage';
import JourneyType from 'components/experience/JourneyType';
import CarPage from 'components/car/CarPage';
import AboutPage from 'components/about/AboutPage';
import AboutUs from 'components/about/AboutUs';

export default (
  <Route path="/" component={ App }>
    <IndexRoute component={ HomePage } />
    <Route path="experience" component={ ExperiencePage } />
    <Route path="experience/journey-type" component={ JourneyType } />
    <Route path="car" component={ CarPage } />
    <Route path="about" component={ AboutPage } />
    <Route path="about/contact" component={ AboutUs } />
  </Route>
);
