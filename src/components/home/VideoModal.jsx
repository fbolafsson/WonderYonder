import React, { PureComponent, PropTypes } from 'react';

import defaultStyles from 'global.css';

export default class VideoModal extends PureComponent {

  static propTypes = {
    showModal: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
  };

  closeVideoModal = () => {
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(false);
    }
  }
  
  render() {
    if (this.props.showModal) {
      return (
          <div className={ defaultStyles.videoContainer }>
            <div>
              <span className={ defaultStyles.closeVideoModalButton } onClick={ this.closeVideoModal }>[ close ]</span>
              <iframe className={ defaultStyles.vimeoVideo } src="https://player.vimeo.com/video/219104754?autoplay=0" frameBorder="0" allowFullScreen></iframe>
            </div>
          </div>
      );
    } else {
      return null;
    }
  }
}
