import { Component } from 'react';
import PropTypes from 'prop-types';
import './DrumPad.styles.scss';

class DrumPad extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { soundId, keyTrigger } = this.props;
    return (
      <div className="drum-pad" id={soundId}>
        <span>{keyTrigger}</span>
      </div>
    );
  }
}

DrumPad.propTypes = {
  soundId: PropTypes.string.isRequired,
  keyTrigger: PropTypes.string.isRequired,
};

export default DrumPad;
