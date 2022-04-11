import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import './SoundBox.styles.scss';

function SoundBox({ toggleSoundBox }) {
  const handleChange = () => {
    toggleSoundBox();
  };

  return (
    <div id="soundbox-container">
      <div>
        <FontAwesomeIcon icon={faMusic} size="lg" />
      </div>
      <label htmlFor="soundbox-choice">
        <input onChange={handleChange} type="checkbox" id="soundbox-choice" />
        <span id="slider" />
      </label>
    </div>
  );
}

SoundBox.propTypes = {
  toggleSoundBox: PropTypes.func.isRequired,
};

export default SoundBox;
