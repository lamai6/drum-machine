import { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './Display.styles.scss';

function Display(props) {
  const [timeoutId, setTimeoutId] = useState('');
  const displayRef = useRef(null);
  const { message } = props;
  const [text, key] = message.split('_');

  useEffect(() => {
    clearTimeout(timeoutId);

    const newTimeoutId = setTimeout(() => {
      const { current: display } = displayRef;
      display.innerHTML = '';
    }, 2000);

    setTimeoutId(newTimeoutId);
  }, [message]);

  return (
    <div id="display-container">
      <div>
        <span ref={displayRef} key={key} id="display">
          {text}
        </span>
      </div>
    </div>
  );
}

Display.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Display;
