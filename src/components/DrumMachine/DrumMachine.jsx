import { Component, createRef } from 'react';
import Display from '../Display/Display';
import DrumPad from '../DrumPad/DrumPad';
import Volume from '../Volume/Volume';
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
      volume: 1,
    };
    this.drumMachineRef = createRef();
    this.updateDisplay = this.updateDisplay.bind(this);
    this.updateVolume = this.updateVolume.bind(this);
  }

  componentDidMount() {
    this.drumMachineRef.current.focus();
  }

  updateDisplay(message) {
    const formattedMessage = `${message}_${generateRandomStr()}`;
    this.setState(() => ({ message: formattedMessage, keyEvent: '' }));
  }

  updateVolume(volume) {
    this.setState(() => ({ volume }));
    this.updateDisplay(`Volume: ${Math.round(volume * 100)}`);
  }

  render() {
    const { activeSoundBox, keyEvent, message, volume } = this.state;
    const drumPads = activeSoundBox.map((sound) => (
      <DrumPad
        key={sound.id}
        volume={volume}
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
        <Volume updateVolume={this.updateVolume} volume={volume} />
      </div>
    );
  }
}

export default DrumMachine;
