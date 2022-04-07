import { Component } from 'react';
import Display from '../Display/Display';
import DrumPad from '../DrumPad/DrumPad';
import { soundBox1, soundBox2 } from '../../assets/data/sounds';
import './DrumMachine.styles.scss';

class DrumMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSoundBox: soundBox1,
    };
  }

  render() {
    const { activeSoundBox } = this.state;
    const drumPads = activeSoundBox.map((sound) => (
      <DrumPad
        soundId={sound.id}
        soundSrc={sound.url}
        keyTrigger={sound.keyTrigger}
        key={sound.id}
      />
    ));

    return (
      <div id="drum-machine">
        <div id="drum-pad-container">{drumPads}</div>
        <Display />
      </div>
    );
  }
}

export default DrumMachine;
