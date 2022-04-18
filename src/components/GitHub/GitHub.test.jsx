import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import GitHub from './GitHub';

describe('GitHub Logo test suite', () => {
  it('should render the logo on the page', () => {
    const { getByRole } = render(<GitHub />);
    const logo = getByRole('img', { name: 'GitHub Logo' });

    expect(logo).toBeInTheDocument();
  });

  it('should render the logo with an opacity of 0.4', () => {
    const { container } = render(<GitHub />);
    const logo = container.querySelector('div[id=github-logo-box]');

    expect(logo.style).toHaveProperty('opacity', '0.4');
  });

  it('should set opacity to 1 when hovering the logo', () => {
    const { container } = render(<GitHub />);
    const logo = container.querySelector('div[id=github-logo-box]');

    fireEvent.mouseOver(logo);
    expect(logo.style).toHaveProperty('opacity', '1');
  });

  it('should set opacity back to 0.4 when hovering the logo', () => {
    const { container } = render(<GitHub />);
    const logo = container.querySelector('div[id=github-logo-box]');

    fireEvent.mouseLeave(logo);
    expect(logo.style).toHaveProperty('opacity', '0.4');
  });
});
