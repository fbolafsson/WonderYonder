import React, { PureComponent, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

import defaultStyles from 'global.css';
import styles from './Experience.css';

// This component is exported so that it can be tested with jest/enzyme
export default class ExperienceNavigation extends PureComponent {

  static propTypes = {
    fadeIn: PropTypes.bool.isRequired
  };

  render() {
    var className = '';
    if(this.props.fadeIn == true){
      className = defaultStyles.navigationSegment + ' ' + defaultStyles.fadeInNavigation;
    } else {
      className = defaultStyles.navigationSegment;
    }
    return (
      <nav className={className}>
        <ul>
          <li>
            <Link to="/experience?source=local" activeClassName={defaultStyles.active}>{ 'The Journey' }</Link>
          </li>
          <li>
            <Link to="/experience/huntinglodge?source=local" activeClassName={defaultStyles.active}>{ 'Hunting Lodge' }</Link>
          </li>

        </ul>
      </nav>
    );
  }
}
