import { Component } from 'react';
import Display from '../Display/Display';

class DrumMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="drum-machine">
        <Display />
      </div>
    );
  }
}

export default DrumMachine;
