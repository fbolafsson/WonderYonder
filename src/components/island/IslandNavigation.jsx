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
            <Link to="/island?source=local" activeClassName={defaultStyles.active}>{ 'The Island' }
            </Link>
          </li>
          <li>
            <Link to="/island/wildlife?source=local" activeClassName={defaultStyles.active}>{ 'Wildlife' }</Link>
          </li>
          <li>
            <Link to="/island/birdlife?source=local" activeClassName={defaultStyles.active}>{ 'Birds' }</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
