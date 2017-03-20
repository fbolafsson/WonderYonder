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
          <p>{ 'The nature in all it´s essence is on the Island and around it. The sea brings us such beautiful gifts as the whales, killer whales, blue whales and seals.  Sometimes they grant us the pleasure of appearing.  What is on the Island is more tangible but at the same it is sacred and untouchable.  The sheep stay on the island for the summer.  The birds start arriving as soon as February and some stay even until december.  Then the winter stillness takes over and the only thing moving is the wind.' }</p>
        </div>
        <div className={ defaultStyles.imageSegment + (isLocal ? '' : (' ' + defaultStyles.slideOut)) }>
          <SlidingImage url={'https://i.redd.it/xri20yvotbiy.jpg'}/>
        </div>
      </div>
    );
  }
}
