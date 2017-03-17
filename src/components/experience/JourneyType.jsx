import React, { PureComponent, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

import SlidingImage from 'components/common/slidingImage';
import ExperienceNavigation from 'components/experience/ExperienceNavigation'

import defaultStyles from 'global.css';
import styles from './Experience.css';

// This component is exported so that it can be tested with jest/enzyme
export default class TodoPage extends PureComponent {

  render() {

    var isLocal = this.props.location.query.source === "local"
    return (
      <div className={ defaultStyles.pageContent }>
        <header className={ defaultStyles.pageTitle }>{ 'The Experience' }</header>
        <ExperienceNavigation fadeIn={!isLocal}/>
        <div className={defaultStyles.pageSegment }>
          <p>{ 'Bitch better recognize cardinal grammeters. Such an instrument comprised of Dodge gears and bearings, Reliance Electric motors, Allen-Bradley controls, and all monitored by Wonder Yonder is Wonder Yonder’s "Ion Defibulator".' }</p>
        </div>
        <div className={ defaultStyles.imageSegment}>
          <SlidingImage url={'https://i.imgur.com/gmfnSww.jpg'}/>
        </div>
      </div>
    );
  }
}
