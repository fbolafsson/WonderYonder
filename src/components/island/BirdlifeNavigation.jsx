import React, { PureComponent, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

import defaultStyles from 'global.css';

// This component is exported so that it can be tested with jest/enzyme
export default class IslandNavigation extends PureComponent {

  static propTypes = {
    fadeIn: PropTypes.bool.isRequired
  };

  render() {
    var className = '';
    if(this.props.fadeIn == true){
      className = defaultStyles.navigationSegment + ' ' + defaultStyles.slideInNavigation + ' ' + defaultStyles.fadeInNavigation;
    } else {
      className = defaultStyles.navigationSegment;
    }
    return (
      <nav className={className}>
        <ul>
          <li>
            <Link to="/island?source=local" activeClassName={defaultStyles.active}>{ 'The Island' }</Link>
          </li>
          <li>
            <Link to="/island/wildlife?source=local" activeClassName={defaultStyles.active}>{ 'Wildlife' }</Link>
          </li>
          <li>
            <Link to="/island/birdlife?source=local" activeClassName={defaultStyles.active}>{ 'Birdlife' }</Link>
          </li>
          <span className={defaultStyles.birdlifeNavigationItems}>
            <li>
              <Link to="/island/birdlife/blackguillemot?source=local" activeClassName={defaultStyles.active}>{ 'Black Guillemot' }</Link>
            </li>
            <li>
              <Link to="/island/birdlife/gannet?source=local" activeClassName={defaultStyles.active}>{ 'Gannet' }</Link>
            </li>
            <li>
              <Link to="/island/birdlife/greatskua?source=local" activeClassName={defaultStyles.active}>{ 'Great Skua' }</Link>
            </li>
            <li>
              <Link to="/island/birdlife/guillemot?source=local" activeClassName={defaultStyles.active}>{ 'Guillemot' }</Link>
            </li>
            <li>
              <Link to="/island/birdlife/northernfulmar?source=local" activeClassName={defaultStyles.active}>{ 'Northern Fulmar' }</Link>
            </li>
            <li>
              <Link to="/island/birdlife/razorbill?source=local" activeClassName={defaultStyles.active}>{ 'Razorbill' }</Link>
            </li>
            <li>
              <Link to="/island/birdlife/rissa?source=local" activeClassName={defaultStyles.active}>{ 'Rissa' }</Link>
            </li>
            <li>
              <Link to="/island/birdlife/puffin?source=local" activeClassName={defaultStyles.active}>{ 'Puffin' }</Link>
            </li>
          </span>
        </ul>
      </nav>
    );
  }
}
