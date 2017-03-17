import React, { PureComponent, PropTypes  } from 'react';
import { Link, IndexLink } from 'react-router';

import styles from 'global.css';

export default class Header extends PureComponent {
  render() {
    return (
        <nav className={ styles.pageHeader }>
          <IndexLink to="/" activeClassName="active" ><img className={ styles.logo } src={require('./Logo.png')} ></img></IndexLink>
          <IndexLink to="/" activeClassName="active" >{ 'The Island' }</IndexLink>
          { " | " }
          <Link to="/experience" activeClassName="active" >{ 'The Experience' }</Link>
          { " | " }
          <Link to="/about" activeClassName="active" >{ 'About Us' }</Link>
        </nav>
    );
  }
}
