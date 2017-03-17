import React, { PureComponent, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

import defaultStyles from 'global.css';

// This component is exported so that it can be tested with jest/enzyme
export default class AboutNavigation extends PureComponent {

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
            <Link to="/about?source=local"
              activeClassName={defaultStyles.active}>{ 'People' }</Link>
          </li>
          <li>
            <Link to="/about/contact?source=local"
              activeClassName={defaultStyles.active}>{ 'Contact us' }</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
