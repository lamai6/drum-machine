import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faVolumeHigh,
  faVolumeLow,
  faVolumeOff,
  faVolumeXmark,
} from '@fortawesome/free-solid-svg-icons';
import './Volume.styles.scss';

function Volume({ updateVolume, volume }) {
  const handleChange = (e) => {
    const volumeValue = e.target.value;
    updateVolume(Number(volumeValue));
  };

  const getIcon = () => {
    if (volume > 0.66) return faVolumeHigh;
    if (volume > 0.2) return faVolumeLow;
    if (volume > 0) return faVolumeOff;
    return faVolumeXmark;
  };

  return (
    <div id="volume-container">
      <div>
        <FontAwesomeIcon icon={getIcon()} size="lg" />
      </div>
      <input
        onChange={handleChange}
        type="range"
        min={0}
        max={1}
        step={0.01}
        id="volume"
        name="volume"
        value={volume}
      />
    </div>
  );
}

Volume.propTypes = {
  updateVolume: PropTypes.func.isRequired,
  volume: PropTypes.number.isRequired,
};

export default Volume;
