import React, { PureComponent } from 'react';

import defaultStyles from 'global.css';
import styles from './HomePage.css';

import SlidingImage from 'components/common/SlidingImage';

export default class HomePage extends PureComponent {
  render() {
    return (
      <div className={ defaultStyles.pageContent }>
        <header className={ defaultStyles.pageTitle }></header>
        <SlidingImage url={'https://i.redd.it/xri20yvotbiy.jpg'} />
      </div>
    );
  }
}
