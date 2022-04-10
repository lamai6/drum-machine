import PropTypes from 'prop-types';
import './Volume.styles.scss';

function Volume({ updateVolume, volume }) {
  const handleChange = (e) => {
    const volumeValue = e.target.value;
    updateVolume(Number(volumeValue));
  };

  return (
    <div id="volume-container">
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
