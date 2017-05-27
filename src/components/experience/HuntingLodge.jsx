import React, { PureComponent, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

import SlidingImage from 'components/common/slidingImage';
import ExperienceNavigation from 'components/experience/ExperienceNavigation'

import defaultStyles from 'global.css';
import styles from './Experience.css';

// This component is exported so that it can be tested with jest/enzyme
export default class HuntingLodgePage extends PureComponent {

  render() {
    var isLocal = this.props.location.query.source === "local"

    return (
      <div className={ defaultStyles.pageContent }>

        <header className={ defaultStyles.pageTitle }>{ 'Hunting lodge' }</header>
        <ExperienceNavigation fadeIn={!isLocal}/>
        <div className={defaultStyles.pageSegment }>
          <p>{ 'The Elliðaey hunting lodge was built in the late 1980s. Its predecessor, no longer in use but still standing, was constructed in 1883, making it one of the oldest buildings in all the Westman Islands. All construction materials had to be hauled up steep cliff faces and carried overland, making the construction of the 200 sq.m. lodge quite an undertaking. The lodge is owned by its 35 members.' }</p>
        </div>
        <div className={ defaultStyles.imageSegment }>
          <img src="http://i.imgur.com/uH6K08R.png" />
        </div>
      </div>
    );
  }
}
