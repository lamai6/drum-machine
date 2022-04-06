import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import DrumMachine from './DrumMachine';

describe('DrumMachine test suite', () => {
  it('should render a div with a corresponding id="drum-machine" (US #1)', () => {
    const { container } = render(<DrumMachine />);
    const outerContainer = container.querySelector('div[id=drum-machine]');

    expect(outerContainer).toBeInTheDocument();
  });
});
