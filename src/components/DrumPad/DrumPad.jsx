import { Component } from 'react';
import PropTypes from 'prop-types';
import './DrumPad.styles.scss';

class DrumPad extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { soundId, soundSrc, keyTrigger } = this.props;
    return (
      <div className="drum-pad" id={soundId}>
        <audio className="clip" id={keyTrigger} src={soundSrc}>
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
