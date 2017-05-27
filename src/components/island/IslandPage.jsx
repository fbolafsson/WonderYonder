import React, { PureComponent, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

import SlidingImage from 'components/common/slidingImage';
import IslandNavigation from 'components/island/IslandNavigation'

import defaultStyles from 'global.css';

// This component is exported so that it can be tested with jest/enzyme
export default class IslandPage extends PureComponent {

  render() {
    var isLocal = this.props.location.query.source === "local";
    return (
      <div className={ defaultStyles.pageContent }>

        <header className={ defaultStyles.pageTitle }>{ 'The Island' }</header>
        <IslandNavigation fadeIn={!isLocal}/>
        <div className={defaultStyles.pageSegment }>
          <p>{ 'Elliðaey rises steeply from the Atlantic Ocean, with vertical cliffs giving way to lush hills further inland. The island is a nature conservation area, situated south of the Icelandic mainland. It forms part of an archipelago called Westman Islands. Elliðaey is believed to have formed in a volcanic eruption about 5-6000 years ago. The volcano that formed it is now extinct, and the island sits tranquil in the middle of the ocean, albeit face-to- face with active volcano Eyjafjallajökull, on Iceland’s southern shore. We cordially invite you to experience the unique tranquility of Elliðaey.' }</p>
        </div>
        <div className={ defaultStyles.imageSegment }>
          <img src="http://i.imgur.com/49ucq8O.jpg" />
        </div>
      </div>
    );
  }
}
