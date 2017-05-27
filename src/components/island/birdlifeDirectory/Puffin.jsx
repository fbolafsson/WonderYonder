import React, { PureComponent, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

import SlidingImage from 'components/common/slidingImage';
import BirdlifeNavigation from 'components/island/BirdlifeNavigation';

import defaultStyles from 'global.css';

// This component is exported so that it can be tested with jest/enzyme
export default class Puffin extends PureComponent {

  render() {
    var isLocal = this.props.location.query.source === "local";
    return (
      <div className={ defaultStyles.pageContent }>

        <header className={ defaultStyles.pageTitle }>{ 'Birds / Puffin' }</header>
        <BirdlifeNavigation fadeIn={!isLocal}/>
        <div className={ defaultStyles.pageSegment }>
          <p> { 'Puffins are the most common birds on Elliðaey. They breed in crevices among rocks or in burrows in the soil. They feed by diving in the sea and catching fish. After the female lays a single egg, both parents take turns incubating the egg for about 40 days. Puffins spend the autumn and winter out at sea and return to land to breed in late spring. They usually mate for life and return to the same burrow year after year, marking their return with a thorough spring cleaning. Puffins are known to have reached over 30 years of age.' } </p>
        </div>
        <div className={ defaultStyles.imageSegment }>
          <img src="http://i.imgur.com/3xoO4Y9.jpg" />
        </div>
      </div>
    );
  }
}
