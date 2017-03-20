import React, { PureComponent, PropTypes  } from 'react';
import { Link, IndexLink } from 'react-router';

import styles from 'global.css';
import headerStyles from './Header.css';

export default class Header extends PureComponent {
  render() {
    return (
        <nav className={ styles.pageHeader }>
          <IndexLink to="/" activeClassName="active" ><img className={ styles.logo } src={require('./Logo.png')} ></img></IndexLink>

          <div className={headerStyles.dropdown}>
            <button className={headerStyles.dropbtn}>The Island</button>
            <div className={headerStyles.dropdownContent}>
              <IndexLink to="/island" activeClassName="active" >{ 'The Island' }</IndexLink>
              <Link to="/island/wildlife" activeClassName="active" >{ 'The Wildlife' }</Link>
              <Link to="/island/birdlife" activeClassName="active" >{ 'The Birdlife' }</Link>
            </div>
          </div>
          { " | " }
          <div className={headerStyles.dropdown}>
            <button className={headerStyles.dropbtn}>The Experience</button>
            <div className={headerStyles.dropdownContent}>
              <Link to="/experience" activeClassName="active" >{ 'The Journey' }</Link>
              <Link to="/experience/journey-type" activeClassName="active" >{ 'Journey type' }</Link>
            </div>
          </div>
          { " | " }
          <div className={headerStyles.dropdown}>
            <button className={headerStyles.dropbtn}>About</button>
            <div className={headerStyles.dropdownContent}>
              <Link to="/about" activeClassName="active" >{ 'About Us' }</Link>
              <Link to="/about/contact" activeClassName="active" >{ 'Contact Ss' }</Link>
            </div>
          </div>
        </nav>
    );
  }
}
