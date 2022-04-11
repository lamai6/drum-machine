import { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import {
  DEFAULT_PAD_STYLE,
  TRIGGERED_PAD_STYLE,
} from '../../assets/data/constants';
import './DrumPad.styles.scss';

class DrumPad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      padStyle: DEFAULT_PAD_STYLE,
    };
    this.audioRef = createRef();
    this.stylePad = this.stylePad.bind(this);
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

  stylePad() {
    this.setState(() => ({ padStyle: TRIGGERED_PAD_STYLE }));
    setTimeout(() => {
      this.setState(() => ({ padStyle: DEFAULT_PAD_STYLE }));
    }, 200);
  }

  async playSound() {
    const { current: audio } = this.audioRef;
    const { updateDisplay, soundId } = this.props;

    this.stylePad();
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
    const { padStyle } = this.state;
    return (
      <div
        onClick={this.playSound}
        onKeyDown={this.handleKeyPressed}
        style={padStyle}
        className="drum-pad"
        id={soundId}
        role="button"
        tabIndex={-1}
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
