import React, { PureComponent, PropTypes } from 'react';

import defaultStyles from 'global.css';
import styles from './SlidingImage.css';

export default class SlidingImage extends PureComponent {

  static propTypes = {
    url: PropTypes.string.isRequired
  };

  render() {
    return (
        <div className={ styles.sliding_image_container} >
          <img
            className={ styles.sliding_image }
            src={ this.props.url }
            alt="Nice image" />
        </div>
    );
  }
}
