import { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import './DrumPad.styles.scss';

class DrumPad extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.audioRef = createRef();
    this.playSound = this.playSound.bind(this);
    this.handleKeyPressed = this.handleKeyPressed.bind(this);
  }

  componentDidUpdate() {
    const { keyTriggered, volume } = this.props;
    const { current: audio } = this.audioRef;

    if (keyTriggered !== '') this.handleKeyPressed(keyTriggered);
    audio.volume = volume;
  }

  handleKeyPressed(key) {
    const { soundKey } = this.props;
    if (soundKey === key) {
      this.playSound();
    }
  }

  async playSound() {
    const { current: audio } = this.audioRef;
    const { updateDisplay, soundId } = this.props;

    updateDisplay(soundId.replace(/-/g, ' '));

    try {
      await audio.play();
      audio.currentTime = 0;
    } catch (err) {
      // fixes `play() request was interrupted by a call to pause()` (https://goo.gl/LdLk22)
    }
  }

  render() {
    const { soundId, soundSrc, soundKey } = this.props;
    return (
      <div
        onClick={this.playSound}
        onKeyDown={this.handleKeyPressed}
        className="drum-pad"
        id={soundId}
        role="button"
        tabIndex={0}
      >
        <audio
          ref={this.audioRef}
          className="clip"
          id={soundKey}
          src={soundSrc}
        >
          <track kind="captions" label={soundId} />
        </audio>
        <span>{soundKey}</span>
      </div>
    );
  }
}

DrumPad.propTypes = {
  soundId: PropTypes.string.isRequired,
  soundSrc: PropTypes.string.isRequired,
  soundKey: PropTypes.string.isRequired,
  keyTriggered: PropTypes.string.isRequired,
  volume: PropTypes.number.isRequired,
  updateDisplay: PropTypes.func.isRequired,
};

export default DrumPad;
