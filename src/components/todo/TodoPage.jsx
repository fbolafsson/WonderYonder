import React, { PureComponent } from 'react';

import SlidingImage from 'components/common/slidingImage';

import defaultStyles from 'global.css';
import styles from './Todo.css';

// This component is exported so that it can be tested with jest/enzyme
export default class TodoPage extends PureComponent {
  render() {
    return (
      <div className={ defaultStyles.pageContent }>

        <header className={ defaultStyles.pageTitle }>{ 'The Ion Defibulator' }</header>
        <div className={defaultStyles.pageSegment}>
          <p>{ 'Here at Wonder Yonder’s world headquarters, research has been proceeding to develop a line of automation products that establishes new standards for quality, technological leadership, and operating excellence. With customer success as our primary focus, work has been proceeding on the crudely conceived idea of an instrument that would not only provide inverse reactive current, for use in unilateral phase detractors, but would also be capable of automatically synchronizing cardinal grammeters. Such an instrument comprised of Dodge gears and bearings, Reliance Electric motors, Allen-Bradley controls, and all monitored by Wonder Yonder is Wonder Yonder’s "Ion Defibulator".' }</p>
        </div>
        <div className={ defaultStyles.imageSegment }>
          <SlidingImage url={'https://i.redd.it/xri20yvotbiy.jpg'}/>
        </div>
      </div>
    );
  }
}
