import React, { PureComponent } from 'react';

import SlidingImage from 'components/common/SlidingImage'
import AboutNavigation from 'components/about/AboutNavigation'

import defaultStyles from 'global.css';
import styles from 'components/about/about.css';

export default class AboutPage extends PureComponent {
  render() {

    var isLocal = this.props.location.query.source === "local"
    return (
      <div className={ defaultStyles.pageContent }>
        <header className={ defaultStyles.pageTitle }>{ 'About / People' }</header>
        <AboutNavigation fadeIn={!isLocal}/>
        <div className={ defaultStyles.pageSegment }>
          <h4>Sigurður Kr.</h4>
          <p>{ "Sigurður, a fund manager, was born in the Westman Islands and has been visiting Elliðaey since he was six years old. To his mind, Elliðaey is as close to heaven as you can get on earth and many of his fondest memories are from the island. He is excited to share his love for the place and its unique wildlife with visitors." }</p>
          <h4>Sara</h4>
          <p>{ "Sara, an actress, first visited Elliðaey with Sigurður around ten years ago and was instantly spellbound. She is always grateful for the opportunity that the island affords to step outside demands of daily life. As soon as she leaps from the boat onto the rocks of the island she feels calmer and closer to nature. She is looking forward to allowing other visitors to experience the same thing." }</p>
        </div>
        <div className={ defaultStyles.imageSegment }>
          <div className={styles.altenateimagecontainer}>
            <img className={styles.top} src={"http://i.imgur.com/aOA9pU8.png"}></img>
            <img className={styles.bottom} src={"http://i.imgur.com/X6DBna0.png"}></img>
          </div>
        </div>
      </div>
    );
  }
}
