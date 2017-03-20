import React, { PureComponent, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

import SlidingImage from 'components/common/slidingImage';
import ExperienceNavigation from 'components/experience/ExperienceNavigation'

import defaultStyles from 'global.css';
import styles from './Experience.css';

// This component is exported so that it can be tested with jest/enzyme
export default class IslandPage extends PureComponent {

  render() {
    var isLocal = this.props.location.query.source === "local"

    return (
      <div className={ defaultStyles.pageContent }>

        <header className={ defaultStyles.pageTitle }>{ 'The Experience' }</header>
        <ExperienceNavigation fadeIn={!isLocal}/>
        <div className={defaultStyles.pageSegment  + (isLocal ? '' : (' ' + defaultStyles.slideInPage))}>
          <p>{ 'Journey to the centre of the earth, where you resonate with the heartbeat of Mother Earth.  Where you feel as if your daily issues are left out at sea. Climbing the cliffs, step by step into the arms of Mother Nature. Where the home of “millions” of birds await you.' }</p>
          <p>{ 'Whether it be a smaller group or intimate few each journey is tailormade and totally unique. Only a few trips are available each summer.' }</p>
          <p>{ 'For your dream journey please contact us.' }</p>
        </div>
        <div className={ defaultStyles.imageSegment + (isLocal ? '' : (' ' + defaultStyles.slideOut)) }>
          <SlidingImage url={'http://i.imgur.com/49ucq8O.jpg'}/>
        </div>
      </div>
    );
  }
}
