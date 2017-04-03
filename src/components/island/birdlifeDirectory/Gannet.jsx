import React, { PureComponent, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

import SlidingImage from 'components/common/slidingImage';
import BirdlifeNavigation from 'components/island/BirdlifeNavigation'

import defaultStyles from 'global.css';

// This component is exported so that it can be tested with jest/enzyme
export default class Gannet extends PureComponent {

  render() {
    var isLocal = this.props.location.query.source === "local";
    return (
      <div className={ defaultStyles.pageContent }>

        <header className={ defaultStyles.pageTitle }>{ 'Birds / Gannet' }</header>
        <BirdlifeNavigation fadeIn={!isLocal}/>
        <div className={ defaultStyles.pageSegment }>

          <h4>Gannet (<em>Morus bassanus</em>)</h4>
          <p>{ 'The Northern Gannet is the largest seabird in the North Atlantic. The Gannet hunts fish by diving from the height into the sea and pursuing their prey underwater. They feed by flying high and circling before plunging into the sea often travelling in small groups.They can dive from 30meters (98ft), achieving speed up to 100 kilometers pr hour (62 mph) as they strike the water, enabling them to catch fish much deeper than most birds. ' }</p>
          <p>{ 'The Gannet breeds on islands in Canada, Greenland, Iceland and northeastern Europe, wintering to the Gulf of Mexico, Morocco, and the Mediterranean. Gannets are colonial breeders on islands and coasts, normally laying one egg which they use their webbed feet to warm. They have a maximum lifespan of 35 years.' }</p>
        </div>
        <div className={ defaultStyles.imageSegment }>
          <img src="http://i.imgur.com/JxajOpk.jpg" />
        </div>
      </div>
    );
  }
}
