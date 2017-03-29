import React, { PureComponent } from 'react';

import defaultStyles from 'global.css';

import SlidingImage from 'components/common/SlidingImage';

export default class HomePage extends PureComponent {
  render() {
    return (
      <div className={ defaultStyles.pageContent }>

        <div className={ defaultStyles.homeContainer }>
          <SlidingImage url={'http://i.imgur.com/49ucq8O.jpg'} />
        </div>
      </div>
    );
  }
}
