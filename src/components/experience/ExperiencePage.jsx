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
          <p>{ 'Here at Wonder Yonder’s world headquarters, research has been proceeding to develop a line of automation products that establishes new standards for quality, technological leadership, and operating excellence. With customer success as our primary focus, work has been proceeding on the crudely conceived idea of an instrument that would not only provide inverse reactive current, for use in unilateral phase detractors, but would also be capable of automatically synchronizing cardinal grammeters. Such an instrument comprised of Dodge gears and bearings, Reliance Electric motors, Allen-Bradley controls, and all monitored by Wonder Yonder is Wonder Yonder’s "Ion Defibulator".' }</p>
        </div>
        <div className={ defaultStyles.imageSegment + (isLocal ? '' : (' ' + defaultStyles.slideOut)) }>
          <SlidingImage url={'http://i.imgur.com/49ucq8O.jpg'}/>
        </div>
      </div>
    );
  }
}
