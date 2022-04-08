import { Component, createRef } from 'react';
import Display from '../Display/Display';
import DrumPad from '../DrumPad/DrumPad';
import { soundBox1, soundBox2 } from '../../assets/data/sounds';
import './DrumMachine.styles.scss';

class DrumMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSoundBox: soundBox1,
      keyEvent: '',
    };
    this.drumMachineRef = createRef();
  }

  componentDidMount() {
    this.drumMachineRef.current.focus();
  }

  render() {
    const { activeSoundBox, keyEvent } = this.state;
    const drumPads = activeSoundBox.map((sound) => (
      <DrumPad
        key={sound.id}
        soundId={sound.id}
        soundSrc={sound.url}
        soundKey={sound.keyTrigger}
        keyTriggered={keyEvent}
      />
    ));

    return (
      <div
        onKeyDown={(e) => this.setState({ keyEvent: e.key.toUpperCase() })}
        ref={this.drumMachineRef}
        id="drum-machine"
        role="button"
        tabIndex={0}
      >
        <div id="drum-pad-container">{drumPads}</div>
        <Display />
      </div>
    );
  }
}

export default DrumMachine;
