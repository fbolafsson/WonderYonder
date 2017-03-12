import React, { PureComponent } from 'react';

import defaultStyles from 'global.css';
import styles from './HomePage.css';

export default class HomePage extends PureComponent {
  render() {
    return (
      <div className={ defaultStyles.pageContent }>
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
