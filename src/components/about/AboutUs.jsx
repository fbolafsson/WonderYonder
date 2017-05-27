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
          <p>If you are interested in a tailor-made and exclusive adventure in Elliðaey, please do not hesitate to contact us at <a href="mailto:ellidaey@ellidaey.is" target="_blank">{"ellidaey@ellidaey.is"}</a>.</p>
          <p>We will happily help you experience all the best things that this special little place has to offer, sparing no expense. Please send us an email with your inquiry and we will get back to you with any additional information you might need.</p>
        </div>
        <div className={ defaultStyles.imageSegment }>
          <img src="http://i.imgur.com/hOsJlMg.jpg" />
        </div>
      </div>
    );
  }
}
