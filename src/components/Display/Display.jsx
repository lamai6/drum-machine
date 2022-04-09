import PropTypes from 'prop-types';
import './Display.styles.scss';

function Display(props) {
  const { message } = props;
  return (
    <div id="display-container">
      <div>
        <span id="display">{message}</span>
      </div>
    </div>
  );
}

Display.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Display;
