import React, { PureComponent, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

import SlidingImage from 'components/common/slidingImage';
import BirdlifeNavigation from 'components/island/BirdlifeNavigation'

import defaultStyles from 'global.css';

// This component is exported so that it can be tested with jest/enzyme
export default class Guillemot extends PureComponent {

  render() {
    var isLocal = this.props.location.query.source === "local";
    return (
      <div className={ defaultStyles.pageContent }>

        <header className={ defaultStyles.pageTitle }>{ 'Birds / Guillemot' }</header>
        <BirdlifeNavigation fadeIn={!isLocal}/>
        <div className={ defaultStyles.pageSegment }>
          <p>Guillemots (<em>Uria aalge</em>) are seabirds, and they tend to congregate on the ledges of cliffs overlooking the ocean. The view is spectacular, but it's a pretty precarious place for a newly laid clutch of baby birds. Guillemots don't even build nests, and their breeding colonies are notoriously crowded.</p>
          <p>{ "They're shaped in such a way that when they roll, they do so not in a long, wide arc but a tight, uniform circle." }</p>
        </div>
        <div className={ defaultStyles.imageSegment }>
          <img src="http://i.imgur.com/8nXbUC5.png" />
        </div>
      </div>
    );
  }
}
