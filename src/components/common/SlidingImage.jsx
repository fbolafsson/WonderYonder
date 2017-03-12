import React, { PureComponent } from 'react';

import defaultStyles from 'global.css';
import styles from './SlidingImage.css';

export default class SlidingImage extends PureComponent {
/*
  static propTypes = {
    url: string
  };
*/
  render() {
    return (
      <div>
        <br />
        <div className={ styles.sliding_image_container} >
          <img
            className={ styles.sliding_image }
            src={ 'https://i.redd.it/xri20yvotbiy.jpg' }
            alt="Nice image" />
        </div>
      </div>
    );
  }
}
