import { render, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import DrumMachine from './DrumMachine';

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

describe('Product Backlog test suite', () => {
  it('should render a div with a corresponding id="drum-machine" (US #1)', () => {
    const { container } = render(<DrumMachine />);
    const outerContainer = container.querySelector('div[id=drum-machine]');

    expect(outerContainer).toBeInTheDocument();
  });

  it('should render a div with a corresponding id="display" within #drum-machine (US #2)', () => {
    const { container } = render(<DrumMachine />);
    const display = container.querySelector('span[id=display]');

    expect(display).toBeInTheDocument();
  });

  it('should render 9 clickable drum pad elements, each with .drum-pad, a unique id, and an inner text corresponding to his key (US #3)', () => {
    const { container } = render(<DrumMachine />);
    const drumPads = container.querySelectorAll('div[class=drum-pad]');

    const key = Array.from(drumPads[0].childNodes).filter(
      (elem) => elem.tagName === 'SPAN'
    )[0].innerHTML;

    expect(drumPads).toHaveLength(9);
    expect(drumPads[0].id).toBe('Heater-1');
    expect(key).toBe('Q');
  });

  it('should play the audio clip when pressing the trigger key associated to the drum pad (US #6)', async () => {
    const { user } = global.setup(<DrumMachine />);

    expect(global.playMock).not.toHaveBeenCalled();

    await user.keyboard('A');

    expect(global.playMock).toHaveBeenCalled();
  });

  it('should render a #display element with a text describing the audio clip played when .drum-pad is triggered (US #7)', async () => {
    const { user, container } = global.setup(<DrumMachine />);
    let display = container.querySelector('span[id=display]');
    const drumPad = container.querySelector('div[id=Heater-1]');

    expect(display).toBeInTheDocument();
    expect(display).toHaveTextContent('');

    await user.click(drumPad);

    display = container.querySelector('span[id=display]');

    await waitFor(() => {
      expect(display).toHaveTextContent('Heater 1');
    });
  });
});

describe('DrumMachine component test suite', () => {
  it('should remove the text in #display element two seconds later', async () => {
    jest.useFakeTimers();
    const { container } = global.setup(<DrumMachine />);
    let display = container.querySelector('span[id=display]');
    const drumPad = container.querySelector('div[id=Heater-1]');

    expect(display).toHaveTextContent('');

    fireEvent.click(drumPad);

    display = container.querySelector('span[id=display]');

    await waitFor(() => {
      expect(display).toHaveTextContent('Heater 1');
    });

    jest.runOnlyPendingTimers();

    await waitFor(() => {
      expect(display).toHaveTextContent('');
    });

    jest.useRealTimers();
  });

  it('should change the volume of audio clips', async () => {
    const { container } = global.setup(<DrumMachine />);
    const volumeBar = container.querySelector('input[type=range]');
    const audio = container.querySelector('div[id=Heater-1] > audio');

    expect(audio).toHaveProperty('volume', 1);

    fireEvent.change(volumeBar, { target: { value: 0.5 } });

    await waitFor(() => {
      expect(audio).toHaveProperty('volume', 0.5);
    });
  });
});
