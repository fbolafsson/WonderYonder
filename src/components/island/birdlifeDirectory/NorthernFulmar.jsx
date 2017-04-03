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
          <h4>Northern Fulmar (<em>Fulmarus glacialis</em>)</h4>
          <p>{ "A gull-like relative of albatrosses and shearwaters, the Northern Fulmar is a bird of the northern oceans. It breeds in few dozen scattered locations off Alaska and Canada,  but is more abundant and widespread elsewhere in the northern hemisphere, especially in the northeast Atlantic." }</p>
        </div>
        <div className={ defaultStyles.imageSegment }>
          <img src="http://i.imgur.com/3AtM0Oy.jpg" />
        </div>
      </div>
    );
  }
}
