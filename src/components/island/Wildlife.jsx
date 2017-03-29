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

        <header className={ defaultStyles.pageTitle }>{ 'Wildlife' }</header>
        <IslandNavigation fadeIn={!isLocal}/>
        <div className={ defaultStyles.pageSegment }>
          <p>{ 'There are over 30 kinds of bird to be seen on the island and in the neighbournhood.  Most of them return in spring, as the breeding season start.  Thouse who nest use crevices among rocks or in burrows in the soil.  When they come after the winter they start getting things tidy in their home.  its said that puffins goes directly to the same hole year after year.' }</p>
          <p>{ 'Sheeps are also on the island and are essential for the island, they eat plants that are not so welcome in the island.  Also they make roads, for us.' }</p>
        </div>
        <div className={ defaultStyles.imageSegment }>
          <img src="http://i.imgur.com/zIlQuqF.jpg" />
        </div>
      </div>
    );
  }
}
