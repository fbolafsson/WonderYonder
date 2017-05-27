import React, { PureComponent, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

import SlidingImage from 'components/common/slidingImage';
import BirdlifeNavigation from 'components/island/BirdlifeNavigation'

import defaultStyles from 'global.css';

// This component is exported so that it can be tested with jest/enzyme
export default class NorthernFulmar extends PureComponent {

  render() {
    var isLocal = this.props.location.query.source === "local";
    return (
      <div className={ defaultStyles.pageContent }>

        <header className={ defaultStyles.pageTitle }>{ 'Birds / Northern Fulmar' }</header>
        <BirdlifeNavigation fadeIn={!isLocal}/>
        <div className={ defaultStyles.pageSegment }>
          <p>{ 'The northern fulmar, a gull-like relative of albatrosses and shearwaters, is a bird of the northern oceans, especially the northeast Atlantic. Both adult and young can defend against intruders by spitting foul-smelling oil. It forages by seizing items at or just below surface of water while swimming. It also plunges into water to catch fish. The northern fulmar breeds in colonies. Unlike many related birds, fulmars are active around nesting colonies in daylight.' }</p>
        </div>
        <div className={ defaultStyles.imageSegment }>
          <img src="http://i.imgur.com/3AtM0Oy.jpg" />
        </div>
      </div>
    );
  }
}
