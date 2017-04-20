import React, { PureComponent } from 'react';

import SlidingImage from 'components/common/SlidingImage'
import AboutNavigation from 'components/about/AboutNavigation'

import defaultStyles from 'global.css';

export default class AboutPage extends PureComponent {
  render() {

    var isLocal = this.props.location.query.source === "local"
    return (
      <div className={ defaultStyles.pageContent }>
        <header className={ defaultStyles.pageTitle }>{ 'About / Contact us' }</header>
        <AboutNavigation fadeIn={!isLocal}/>
        <div className={ defaultStyles.pageSegment }>
          <p>
            For more information, please contact us: <a href="mailto:ellidaey@ellidaey.is" target="_blank">{"ellidaey@ellidaey.is"}</a>
          </p>
        </div>
        <div className={ defaultStyles.imageSegment }>
          <img src="http://i.imgur.com/XNTDHjX.jpg" />
        </div>
      </div>
    );
  }
}
