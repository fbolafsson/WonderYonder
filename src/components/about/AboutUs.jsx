import React, { PureComponent } from 'react';

import SlidingImage from 'components/common/SlidingImage'
import AboutNavigation from 'components/about/AboutNavigation'

import defaultStyles from 'global.css';

export default class AboutPage extends PureComponent {
  render() {

    var isLocal = this.props.location.query.source === "local"
    return (
      <div className={ defaultStyles.pageContent }>
        <header className={ defaultStyles.pageTitle }>{ 'Contact us' }</header>
        <AboutNavigation fadeIn={!isLocal}/>
        <div className={ defaultStyles.pageSegment }>
          <p>{ "Don't contact us, we'll contact you! We are very proficient in contacting and connecting people. We search high and low for the perfect contact." }</p>
          <br/>
          <p>
            Undisclosed location 67
            <br/>
            North Atlantic Ocean
            <br/>
            Earth
          </p>
          <br/>
          <p>
            Pigeon: Lenny Birdsworth
            <br/>
            E-mail: <a href="mailto:blank@thisshouldnotbereal.mars" target="_blank">{"no@email.here"}</a>
          </p>
        </div>
        <div className={ defaultStyles.imageSegment }>
          <img src="https://i.redd.it/61mg2bkj5wky.jpg" />
        </div>
      </div>
    );
  }
}
