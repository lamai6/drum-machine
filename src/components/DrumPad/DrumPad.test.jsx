import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import DrumPad from './DrumPad';

beforeAll(() => {
  global.setup = (component) => ({
    user: userEvent.setup(),
    ...render(component),
  });
});

beforeEach(() => {
  global.playMock = jest
    .spyOn(window.HTMLMediaElement.prototype, 'play')
    .mockImplementation(() => {});
  global.pauseMock = jest
    .spyOn(window.HTMLMediaElement.prototype, 'pause')
    .mockImplementation(() => {});
});

afterEach(() => {
  global.playMock.mockRestore();
  global.pauseMock.mockRestore();
});

afterAll(() => {
  global.setup = undefined;
});

describe('DrumPad test suite', () => {
  it('should render within .drum-pad an audio element with src pointing to a clip, a class name of clip and an id corresponding to drum pad key trigger (US #4)', () => {
    const { container } = render(
      <DrumPad
        key="Heater-1"
        soundId="Heater-1"
        soundSrc="https://fakesoundurl.com/heater-1"
        soundKey="Q"
        keyTriggered=""
      />
    );
    const audio = container.querySelector('audio');

    expect(audio.id).toBe('Q');
    expect(audio.classList[0]).toBe('clip');
    expect(audio.src).toBe('https://fakesoundurl.com/heater-1');
  });

  it('should play the audio clip when clicking on a .drum-pad element (US #5)', async () => {
    const { user, container } = global.setup(
      <DrumPad
        key="Heater-1"
        soundId="Heater-1"
        soundSrc="https://fakesoundurl.com/heater-1"
        soundKey="Q"
        keyTriggered=""
      />
    );
    const drumPad = container.querySelector('div[id=Heater-1]');

    expect(global.playMock).not.toHaveBeenCalled();

    await user.click(drumPad);

    expect(global.playMock).toHaveBeenCalled();
  });
});
