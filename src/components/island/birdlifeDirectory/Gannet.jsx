import React, { PureComponent, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

import SlidingImage from 'components/common/slidingImage';
import IslandNavigation from 'components/island/BirdlifeNavigation'

import defaultStyles from 'global.css';

// This component is exported so that it can be tested with jest/enzyme
export default class Gannet extends PureComponent {

  render() {
    var isLocal = this.props.location.query.source === "local"

    return (
      <div className={ defaultStyles.pageContent }>

        <header className={ defaultStyles.pageTitle }>{ 'The Island' }</header>
        <IslandNavigation fadeIn={!isLocal}/>
        <div className={defaultStyles.pageSegment  + (isLocal ? '' : (' ' + defaultStyles.slideInPage))}>
          <p>{ 'The flutter of wings, singing and calling make the sound world in Elliðaey which is a nature conservation island because of it´s rich birdlife.  It is the main nesting area for leach’s petrels and storm petrels in Iceland, which breed there in the thousands along with other bird species.' }</p>
        </div>
        <div className={ defaultStyles.imageSegment + (isLocal ? '' : (' ' + defaultStyles.slideOut)) }>
          <SlidingImage url={'https://i.redd.it/xri20yvotbiy.jpg'}/>
        </div>
      </div>
    );
  }
}
