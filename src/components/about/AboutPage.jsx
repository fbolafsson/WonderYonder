import React, { PureComponent } from 'react';

import SlidingImage from 'components/common/SlidingImage'

import defaultStyles from 'global.css';

export default class AboutPage extends PureComponent {
  render() {
    return (
      <div className={ defaultStyles.pageContent }>
        <header className={ defaultStyles.pageTitle }>{ 'What is Wonder Yonder?' }</header>
        <div className={defaultStyles.pageSegment}>
          <p>{ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at consectetur neque. Morbi facilisis, leo nec gravida porta, mi diam pretium est, id tristique purus dui sit amet magna. Quisque quis purus lacus. Aenean eu felis at orci dapibus accumsan. Sed mattis pellentesque venenatis. Phasellus interdum augue sit amet magna ultrices vulputate. Fusce malesuada massa ligula, et commodo dui ornare non. Praesent quis varius ipsum. Nulla ut urna iaculis, tincidunt nisi ut, feugiat lacus. Pellentesque porttitor nisl ultricies nibh imperdiet, at pulvinar eros condimentum.' }</p>
        </div>
        <div className={defaultStyles.imageSegment}>
          <SlidingImage url={'https://i.imgur.com/gmfnSww.jpg'}/>
        </div>
      </div>
    );
  }
}
