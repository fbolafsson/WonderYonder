import React, { PureComponent, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

import SlidingImage from 'components/common/slidingImage';
import BirdlifeNavigation from 'components/island/BirdlifeNavigation';

import defaultStyles from 'global.css';

// This component is exported so that it can be tested with jest/enzyme
export default class Puffin extends PureComponent {

  render() {
    var isLocal = this.props.location.query.source === "local"

    return (
      <div className={ defaultStyles.pageContent }>

        <header className={ defaultStyles.pageTitle }>{ 'The Island' }</header>
        <BirdlifeNavigation fadeIn={!isLocal}/>
        <div className={defaultStyles.pageSegment  + (isLocal ? '' : (' ' + defaultStyles.slideInPage))}>
          <p>{ 'estibulum nisi lectus, dictum et velit vel, maximus posuere turpis. Aliquam erat volutpat. Mauris venenatis nisl at purus finibus, vestibulum iaculis metus rhoncus. Maecenas quis nisi tempor, rhoncus diam vel, laoreet mi. Integer eleifend maximus urna. Praesent aliquet tincidunt odio id ultrices. Integer ipsum sapien, dapibus sit amet orci at, laoreet venenatis dui. Fusce ultricies imperdiet placerat. Pellentesque fringilla aliquam venenatis. Quisque nec leo non urna viverra vehicula.' }</p>
        </div>
        <div className={ defaultStyles.imageSegment + (isLocal ? '' : (' ' + defaultStyles.slideOut)) }>
          <SlidingImage url='http://i.imgur.com/3xoO4Y9.jpg'/>
        </div>
      </div>
    );
  }
}
