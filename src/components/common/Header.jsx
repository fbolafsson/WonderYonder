import React, { PureComponent, PropTypes  } from 'react';
import { Link, IndexLink } from 'react-router';

import styles from 'global.css';
import headerStyles from './Header.css';

export default class Header extends PureComponent {



  render() {

    function redirect(url){
      location.href = url;
    }

    return (
        <nav className={ styles.pageHeader }>
          <IndexLink to="/" className={ styles.logo } activeClassName="active" >{ 'Elliðaey' }</IndexLink>

          <div className={ styles.headerLinks }>

            <div className={headerStyles.dropdown}>
              <button onClick={() => redirect('/island')} className={headerStyles.dropbtn}>The Island</button>
              <div className={headerStyles.dropdownContent}>
                <IndexLink to="/island" activeClassName="active" >{ 'The Island' }</IndexLink>
                <Link to="/island/wildlife" activeClassName="active" >{ 'Wildlife' }</Link>
                <Link to="/island/birdlife" activeClassName="active" >{ 'Birds' }</Link>
              </div>
            </div>
            { " | " }
            <div className={headerStyles.dropdown}>
              <button onClick={() => redirect('/experience')} className={headerStyles.dropbtn}>The Experience</button>
              <div className={headerStyles.dropdownContent}>
                <Link to="/experience" activeClassName="active" >{ 'The Journey' }</Link>
                <Link to="/experience/huntinglodge" activeClassName="active" >{ 'Hunting Lodge' }</Link>
              </div>
            </div>

            { " | " }
            <div className={headerStyles.dropdown}>
              <button onClick={() => redirect('/about')} className={headerStyles.dropbtn}>About</button>
              <div className={headerStyles.dropdownContent}>
                <Link to="/about" activeClassName="active" >{ 'People' }</Link>
                <Link to="/about/contact" activeClassName="active" >{ 'Contact Us' }</Link>
              </div>
            </div>

          </div>
        </nav>
    );
  }
}
