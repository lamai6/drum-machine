import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import DrumMachine from './DrumMachine';

describe('DrumMachine test suite', () => {
  it('should render a div with a corresponding id="drum-machine" (US #1)', () => {
    const { container } = render(<DrumMachine />);
    const outerContainer = container.querySelector('div[id=drum-machine]');

    expect(outerContainer).toBeInTheDocument();
  });

  it('should render a div with a corresponding id="display" within #drum-machine (US #2)', () => {
    const { container } = render(<DrumMachine />);
    const outerContainer = container.querySelector('div[id=drum-machine]');
    const display = Array.from(outerContainer.childNodes).filter(
      (elem) => elem.id === 'display'
    )[0];

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
});
