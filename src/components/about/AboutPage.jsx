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
        <div className={ defaultStyles.compositeContainer }>
          <div className={ defaultStyles.compositeSegment }>
            <div className={ defaultStyles.compositePageSegment }>
              <h4>Sigurður</h4>
              <p>{ "Sigurður, a fund manager, was born and raised in the Westman Islands and has been visiting Elliðaey since he was six years old. To his mind, Elliðaey is as close to heaven as you can get on earth and many of his fondest memories are from the island. Having received guests, clients, company excecutives, diplomats, ministers, friends and family throughout the years he is excited to share his love for the place and its unique wildlife with other visitors." }</p>
            </div>
            <div className={ defaultStyles.compositeImageSegment }>
                <img src={"http://i.imgur.com/X6DBna0.png"}></img>
            </div>
          </div>
          <div className={ defaultStyles.compositeSegment }>
            <div className={ defaultStyles.compositePageSegment }>
              <h4>Sara</h4>
              <p>{ "Sara, an actress, grew up in the country side and first visited Elliðaey with Sigurður around seven years ago and was instantly spellbound. She is always grateful for the opportunity that the island affords to step outside the demands of daily life. Sara has welcomed guests with Sigurður on the Island for some time now and as soon as she leaps from the boat onto the rocks of the island she feels calmer and closer to nature. She is looking forward to allowing other visitors to experience the same thing." }</p>
            </div>
            <div className={ defaultStyles.compositeImageSegment }>
                <img src={"http://i.imgur.com/aOA9pU8.png"}></img>
            </div>
          </div>
          <div className={ defaultStyles.compositeSegment }>
            <div className={ defaultStyles.compositePageSegment }>
              <h4>Sigurjón</h4>
              <p>{ "Sigurjón was raised in the Westman islands. He has dedicated himself to showing visitors the greatest attractions and the unique nature of his home. He is very knowledgeable about the history of the islands. Sigurjón is a highly motivated and dedicated certified special tour operator with seven years of experience in the tourism industry. He has a passionate approach to customer satisfaction, the desire to work with pride and enthusiasm that has resulted in delivering exceptionally high service standards." }</p>
            </div>
            <div className={ defaultStyles.compositeImageSegment }>
                {/*<img src={""} alt="Image missing"></img>*/}
            </div>
          </div>
        </div>

      </div>
    );
  }
}
