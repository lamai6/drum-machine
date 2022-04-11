import { Component, createRef } from 'react';
import Display from '../Display/Display';
import DrumPad from '../DrumPad/DrumPad';
import Volume from '../Volume/Volume';
import SoundBox from '../SoundBox/SoundBox';
import generateRandomStr from '../../utils/generateRandomStr';
import { SOUND_BOX_1, SOUND_BOX_2 } from '../../utils/constants';
import './DrumMachine.styles.scss';

class DrumMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSoundBox: SOUND_BOX_1,
      keyEvent: '',
      message: '',
      volume: 1,
    };
    this.drumMachineRef = createRef();
    this.updateDisplay = this.updateDisplay.bind(this);
    this.updateVolume = this.updateVolume.bind(this);
    this.toggleSoundBox = this.toggleSoundBox.bind(this);
  }

  componentDidMount() {
    this.drumMachineRef.current.focus();
  }

  updateDisplay(message) {
    const formattedMessage = `${message}_${generateRandomStr()}`.toUpperCase();
    this.setState(() => ({ message: formattedMessage, keyEvent: '' }));
  }

  updateVolume(volume) {
    this.setState(() => ({ volume }));
    this.updateDisplay(`Volume: ${Math.round(volume * 100)}`);
  }

  toggleSoundBox() {
    this.setState(
      ({ activeSoundBox }) =>
        activeSoundBox === SOUND_BOX_1
          ? { activeSoundBox: SOUND_BOX_2 }
          : { activeSoundBox: SOUND_BOX_1 },
      () => {
        const { activeSoundBox } = this.state;
        this.updateDisplay(activeSoundBox.name);
      }
    );
  }

  render() {
    const { activeSoundBox, keyEvent, message, volume } = this.state;
    const drumPads = activeSoundBox.sounds.map((sound) => (
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
        <SoundBox toggleSoundBox={this.toggleSoundBox} />
      </div>
    );
  }
}

export default DrumMachine;
