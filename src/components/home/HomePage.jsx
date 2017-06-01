import React, { PureComponent } from 'react';
var FontAwesome = require('react-fontawesome');

import defaultStyles from 'global.css';

import SlidingImage from 'components/common/SlidingImage';
import VideoModal from 'components/home/VideoModal';

export default class HomePage extends React.Component {

  constructor() {
    super();
    // By default we do not show the modal.
    this.state = { showVideoModal: false };
  }

  toggleVideoModal = () => {
    var oldVal = this.state.showVideoModal;
    this.setState({ showVideoModal: !oldVal });
  }

  modalChangeHandler = (value) => {
    this.setState({showVideoModal: value});
  }

  componentWillMount() {
    var _this = this;
    document.addEventListener("keydown", function(e) {
      // If the escape button is struck
      if (e.keyCode === 27) {
        _this.setState({ showVideoModal: false });
      }
    });
  }

  render() {

    return (
      <div className={ defaultStyles.pageContent }>

        <div className={ defaultStyles.homeContainer }>
          <SlidingImage url={'http://i.imgur.com/YrM9u1D.jpg'} />
        </div>

        <p className={ defaultStyles.playVideoText + " pull-right" }
           onClick={ this.toggleVideoModal }>Play video <FontAwesome className='super-crazy-colors' name='play-circle'/></p>

        {/* Show the modal if the video modal button has been clicked */}
        <VideoModal showModal={ this.state.showVideoModal } onChange={ this.modalChangeHandler }></VideoModal>
      </div>
    );
  }
}
