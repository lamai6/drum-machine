import { Component, createRef } from 'react';
import Display from '../Display/Display';
import DrumPad from '../DrumPad/DrumPad';
import { soundBox1, soundBox2 } from '../../assets/data/sounds';
import generateRandomStr from '../../utils/generateRandomStr';
import './DrumMachine.styles.scss';

class DrumMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSoundBox: soundBox1,
      keyEvent: '',
      message: '',
    };
    this.drumMachineRef = createRef();
    this.updateDisplay = this.updateDisplay.bind(this);
  }

  componentDidMount() {
    this.drumMachineRef.current.focus();
  }

  updateDisplay(message) {
    const formattedMessage = `${message}_${generateRandomStr()}`;
    this.setState(() => ({ message: formattedMessage, keyEvent: '' }));
  }

  render() {
    const { activeSoundBox, keyEvent, message } = this.state;
    const drumPads = activeSoundBox.map((sound) => (
      <DrumPad
        key={sound.id}
        soundId={sound.id}
        soundSrc={sound.url}
        soundKey={sound.keyTrigger}
        keyTriggered={keyEvent}
        updateDisplay={this.updateDisplay}
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
        <Display message={message} />
      </div>
    );
  }
}

export default DrumMachine;
