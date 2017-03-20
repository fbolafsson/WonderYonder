import React, { PureComponent, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

import SlidingImage from 'components/common/slidingImage';
import IslandNavigation from 'components/island/IslandNavigation'

import defaultStyles from 'global.css';

// This component is exported so that it can be tested with jest/enzyme
export default class IslandPage extends PureComponent {

  render() {
    var isLocal = this.props.location.query.source === "local"

    return (
      <div className={ defaultStyles.pageContent }>

        <header className={ defaultStyles.pageTitle }>{ 'The Island' }</header>
        <IslandNavigation fadeIn={!isLocal}/>
        <div className={defaultStyles.pageSegment  + (isLocal ? '' : (' ' + defaultStyles.slideInPage))}>
          <p>{ 'Valuable information about the island.' }</p>
        </div>
        <div className={ defaultStyles.imageSegment + (isLocal ? '' : (' ' + defaultStyles.slideOut)) }>
          <SlidingImage url={'http://i.imgur.com/49ucq8O.jpg'}/>
        </div>
      </div>
    );
  }
}
