import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'components/App';
import HomePage from 'components/home/HomePage';
import ExperiencePage from 'components/experience/ExperiencePage';
import JourneyType from 'components/experience/JourneyType';
import IslandPage from 'components/island/IslandPage';
import Wildlife from 'components/island/Wildlife';
import Birdlife from 'components/island/Birdlife';
import BlackGuillemot from 'components/island/birdlifeDirectory/BlackGuillemot';
import Gannet from 'components/island/birdlifeDirectory/Gannet';
import GreatSkua from 'components/island/birdlifeDirectory/GreatSkua';
import Guillemot from 'components/island/birdlifeDirectory/Guillemot';
import NorthernFulmar from 'components/island/birdlifeDirectory/NorthernFulmar';
import Puffin from 'components/island/birdlifeDirectory/Puffin';
import Razorbill from 'components/island/birdlifeDirectory/Razorbill';
import AboutPage from 'components/about/AboutPage';
import AboutUs from 'components/about/AboutUs';

export default (
  <Route path="/" component={ App }>
    <IndexRoute component={ HomePage } />
    <Route path="experience" component={ ExperiencePage } />
    <Route path="experience/journey-type" component={ JourneyType } />
    <Route path="island" component={ IslandPage } />
    <Route path="island/wildlife" component={ Wildlife } />
    <Route path="island/birdlife" component={ Birdlife } />
    <Route path="island/birdlife/blackguillemot" component={ BlackGuillemot } />
    <Route path="island/birdlife/gannet" component={ Gannet } />
    <Route path="island/birdlife/greatskua" component={ GreatSkua } />
    <Route path="island/birdlife/guillemot" component={ Guillemot } />
    <Route path="island/birdlife/northernfulmar" component={ NorthernFulmar } />
    <Route path="island/birdlife/puffin" component={ Puffin } />
    <Route path="island/birdlife/razorbill" component={ Razorbill } />
    <Route path="about" component={ AboutPage } />
    <Route path="about/contact" component={ AboutUs } />
  </Route>
);
