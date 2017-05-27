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
          <p>{ 'Beautiful Elliðaey is home to flora and fauna that are as unique as the island itself. The ocean around the island is populated by killer whales, blue whales seals and more, all of which can be spotted from the island. In the spring, sheep are shipped to Elliðaey from Westman Islands. The flock spends the summer freely roaming the island. As early as February a host of migratory bird species touch down to nest and rear their young for the summer, before heading south again when it gets colder. Then the winter stillness takes over and the only thing that moves is the wind.' }</p>
        </div>
        <div className={ defaultStyles.imageSegment }>
          <img src="http://i.imgur.com/TYm2Vj9.jpg" />
        </div>
      </div>
    );
  }
}
