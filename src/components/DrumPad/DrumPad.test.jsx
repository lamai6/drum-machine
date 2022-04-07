import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import DrumPad from './DrumPad';

describe('DrumPad test suite', () => {
  it('should render within .drum-pad an audio element with src pointing to a clip, a class name of clip and an id corresponding to drum pad key trigger (US #4)', () => {
    const { container } = render(
      <DrumPad
        soundId="Heater-1"
        soundSrc="https://fakesoundurl.com/heater-1"
        keyTrigger="Q"
        key="Heater-1"
      />
    );
    const audio = container.querySelector('audio');

    expect(audio.id).toBe('Q');
    expect(audio.classList[0]).toBe('clip');
    expect(audio.src).toBe('https://fakesoundurl.com/heater-1');
  });
});
