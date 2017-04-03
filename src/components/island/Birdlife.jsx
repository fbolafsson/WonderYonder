import React, { PureComponent, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

import SlidingImage from 'components/common/slidingImage';
import BirdlifeNavigation from 'components/island/BirdlifeNavigation'

import defaultStyles from 'global.css';

// This component is exported so that it can be tested with jest/enzyme
export default class IslandPage extends PureComponent {

  render() {
    var isLocal = this.props.location.query.source === "local"

    return (
      <div className={ defaultStyles.pageContent }>

        <header className={ defaultStyles.pageTitle }>{ 'Birds' }</header>
        <BirdlifeNavigation fadeIn={!isLocal}/>
        <div className={defaultStyles.pageSegment }>
          <p>{ "The flutter of wings, chirping, warbling and trilling make the auditory experience of Ellliðaey a unique one. In fact, the island's bird population is so rich, varied and distinctive that it has been declared a conservation area. There are over thirty kinds of birds on Elliðaey and it is a primary nesting area for Leach's storm petrels and storm petrels. The vast majority of birds are migratory, leaving the island in winter and returning in the spring to nest. Most species make their nests in the crevices in rocks and cliffs or make burrows in the soil. Observant locals insist that puffin couples return to the same nesting hole year after year, marking their return with a thorough spring cleaning." }</p>
        </div>
        <div className={ defaultStyles.imageSegment }>
          <img src="http://i.imgur.com/hdO3MHz.png" />
        </div>
      </div>
    );
  }
}
