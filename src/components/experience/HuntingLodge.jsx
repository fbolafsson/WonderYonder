import React, { PureComponent, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

import SlidingImage from 'components/common/slidingImage';
import ExperienceNavigation from 'components/experience/ExperienceNavigation'

import defaultStyles from 'global.css';
import styles from './Experience.css';

// This component is exported so that it can be tested with jest/enzyme
export default class HuntingLodgePage extends PureComponent {

  render() {
    var isLocal = this.props.location.query.source === "local"

    return (
      <div className={ defaultStyles.pageContent }>

        <header className={ defaultStyles.pageTitle }>{ 'Hunting lodge' }</header>
        <ExperienceNavigation fadeIn={!isLocal}/>
        <div className={defaultStyles.pageSegment }>
          <p>{ 'The Elliðaey hunting lodge was built in the late 1980s. Its predecessor, no longer in use but still standing, was constructed in 1883, making it one of the oldest buildings in all the Westman Islands. All construction materials had to be hauled up steep cliff faces and carried overland, making the construction of the 200 sq.m. lodge quite an undertaking. The lodge is owned by its 35 members.' }</p>
          <p>{ 'The spacious living area of the lodge sports a settee which was previously used in the Icelandic Parliament. This historical piece of furniture is beautiful, albeit quite worn out from enduring lengthy legal and political debates. The living room also contains a large dining table and chairs, as well as a fireplace, which is used for heating. Upstairs from the living area there are bedrooms. The living room also leads directly to an outside deck.' }</p>
          <p>{ "The lodge's kitchen is furnished with a refrigerator and gas stove and all standard utensils. It is decorated with photos and paintings of hunting. The water used in the lodge is rainwater, which is collected in the spring." }</p>
        </div>
        <div className={ defaultStyles.imageSegment }>
          <img src="http://i.imgur.com/uH6K08R.png" />
        </div>
      </div>
    );
  }
}
