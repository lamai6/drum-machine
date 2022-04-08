import { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import './DrumPad.styles.scss';

class DrumPad extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.audioRef = createRef();
    this.playSound = this.playSound.bind(this);
  }

  playSound() {
    const { current: audio } = this.audioRef;
    audio.pause();
    audio.currentTime = 0;
    audio.play();
  }

  render() {
    const { soundId, soundSrc, keyTrigger } = this.props;
    return (
      <div
        onClick={this.playSound}
        className="drum-pad"
        id={soundId}
        role="button"
        tabIndex={0}
      >
        <audio
          ref={this.audioRef}
          className="clip"
          id={keyTrigger}
          src={soundSrc}
        >
          <track kind="captions" label={soundId} />
        </audio>
        <span>{keyTrigger}</span>
      </div>
    );
  }
}

DrumPad.propTypes = {
  soundId: PropTypes.string.isRequired,
  soundSrc: PropTypes.string.isRequired,
  keyTrigger: PropTypes.string.isRequired,
};

export default DrumPad;
