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
          <p>{ "Guillemots are seabirds, and they tend to congregate on the ledges of cliffs overlooking the ocean. Their breeding colonies are notoriously crowded. The view is spectacular, but it's a pretty precarious place for a newly laid clutch of baby birds. Guillemots lay only one egg and don’t even build nests. The chicks are capable of diving as soon as they hit the water about 20 days after hatching." }</p>
        </div>
        <div className={ defaultStyles.imageSegment }>
          <img src="http://i.imgur.com/8nXbUC5.png" />
        </div>
      </div>
    );
  }
}
