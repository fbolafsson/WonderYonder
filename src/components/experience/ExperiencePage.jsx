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

        <header className={ defaultStyles.pageTitle }>{ 'The Journey' }</header>
        <ExperienceNavigation fadeIn={!isLocal}/>
        <div className={defaultStyles.pageSegment }>
          <p>{ 'Your journey starts in Westman Islands where you sail off to Elliðaey. That is where we greet you and assist you in climbing the cliffs, step by step into the arms of Mother Nature, where the home of thousands of birds await you. At the hunting lodge a chef prepares a lunch with ingredients foraged from around Elliðaey. With the whole day ahead you start your journey exploring the island. Each journey is totally unique and tailored to the specific needs of small groups, families or couples, which have exclusive use of the hunting lodge. Only a few trips are available each summer.' }</p>
        </div>
        <div className={ defaultStyles.imageSegment }>
          <img src="http://i.imgur.com/REFbQ67.jpg" />
        </div>
      </div>
    );
  }
}
