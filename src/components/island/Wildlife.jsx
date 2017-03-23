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
        <div className={ defaultStyles.pageSegment }>
          <p>{ 'Valuable information about the island.' }</p>
        </div>
        <div className={ defaultStyles.imageSegment }>
          <img src="https://i.redd.it/xri20yvotbiy.jpg" />
        </div>
      </div>
    );
  }
}
